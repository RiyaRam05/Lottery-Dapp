import React, { useEffect, useState } from "react";
import "./Players.css";

const Players = ({ state, address }) => {
  const [account, setAccount] = useState("Not connected");
  const [registeredPlayers, setRegisteredPlayers] = useState([]);

  useEffect(() => {
    const loadAccount = async () => {
      const { web3 } = state;
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      web3.givenProvider.on("accountsChanged", (accounts) => {
        setAccount(accounts[0]);
      });
    };

    state.web3 && loadAccount();
  }, [state]);

  useEffect(() => {
    const loadPlayers = async () => {
      const { contract } = state;
      const players = await contract.methods.allPlayers().call();
      setRegisteredPlayers(players);
    };

    state.contract && loadPlayers();
  }, [state]);

  return (
    <div className="players-wrapper">
      <div className="players-card">
        <h2 className="players-title">Player Dashboard</h2>

        <div className="players-box">
          <div className="players-label">Connected Account</div>
          <div className="players-value">{account}</div>
        </div>

        <div className="players-box">
          <div className="players-label">Lottery Contract Address</div>
          <div className="players-value">{address}</div>
        </div>

        <div className="players-box">
          <div className="players-label">Registered Players</div>

          <div className="players-list">
            {registeredPlayers.length > 0 ? (
              registeredPlayers.map((player) => (
                <p key={player}>{player}</p>
              ))
            ) : (
              <p>No players registered yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
