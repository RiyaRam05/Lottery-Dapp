import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro-wrapper">
      <div className="intro-card fade-in">

        {/* Ludo Dice Icon */}
        <div className="web3-icon">🎲</div>

        {/* Title */}
        <h1 className="intro-title">Welcome to Lottery DApp</h1>

        {/* Subtitle */}
        <p className="intro-subtitle">
          A decentralized, trustless Ethereum lottery system
        </p>

        {/* Buttons */}
        <div className="btn-group">
          <Link to="/manager">
            <button className="btn-primary role-btn">
              🧑‍💼 Manager
            </button>
          </Link>

          <Link to="/players">
            <button className="btn-danger role-btn">
              🎮 Player
            </button>
          </Link>
        </div>

        {/* Wallet note */}
        <p className="wallet-note">
          🔐 Connect MetaMask to continue
        </p>

      </div>
    </div>
  );
};

export default Intro;
