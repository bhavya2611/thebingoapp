import React from "react";
import "./footer.scss";
import {
  ArrowRepeat,
  VolumeMuteFill,
  VolumeUpFill,
  InfoSquare,
} from "react-bootstrap-icons";

const Footer = ({ isMute, refresh, setVol }) => {
  return (
    <footer className="game-footer">
      <div className="footer-div">
        <div>
          <button onClick={refresh} className="footer-btn">
            <ArrowRepeat size={20} />
          </button>
          <button onClick={setVol} className="footer-btn">
            {!isMute ? (
              <VolumeUpFill size={20} />
            ) : (
              <VolumeMuteFill size={20} />
            )}
          </button>
          <button
            onClick={() => {
              window.open(
                "https://docs.google.com/document/d/10SjAIcvEMAmzSwdm21bDZTlu3rapXYgZ84zX_RAp6Gk/edit?usp=sharing",
                "_blank"
              );
            }}
            className="footer-btn"
          >
            <InfoSquare size={20} />
          </button>
        </div>
        <label className="footer-label">BINGO - By Bhavya Mehta</label>
      </div>
    </footer>
  );
};

export default Footer;
