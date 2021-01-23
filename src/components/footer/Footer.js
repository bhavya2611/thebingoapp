import React, { useState } from "react";
import {
  ArrowRepeat,
  VolumeMuteFill,
  VolumeUpFill,
  InfoSquare,
} from "react-bootstrap-icons";
import RulesModal from "../rulesModal/RulesModal";
import "./footer.scss";

const Footer = ({ isMute, refresh, setVol }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
              setShowModal(true);
            }}
            className="footer-btn"
          >
            <InfoSquare size={20} />
          </button>
        </div>
        <label className="footer-label">THE ICEBREAKER BINGO</label>
      </div>
      <RulesModal handleClose={handleCloseModal} showModal={showModal} />
    </footer>
  );
};

export default Footer;
