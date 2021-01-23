import React from "react";
import Modal from "react-bootstrap/Modal";
import { gifArrA } from "../../utils/utils";
import applause from "../../assets/sound/applause.mp3";
import cheer from "../../assets/sound/cheer.mp3";
import boo from "../../assets/sound/boo.mp3";
import "./modal.scss";

const StatusModal = ({ showModal, handleClose, status, isMute }) => {
  let srcImg = "";
  let title = "";
  let audio = "";
  let num = Math.floor(Math.random() * 10);
  if (status === "win") {
    if (!isMute) {
      audio = new Audio(cheer);
      audio.play();
    }
    title = "Yayayaya. Keep Going";
    // srcImg = gifArrW[num];
  } else if (status === "lose") {
    if (!isMute) {
      audio = new Audio(boo);
      audio.play();
    }
    title = "Uh Oh. Don't Give Up";
    // srcImg = gifArrL[num];
  } else if (status === "applause") {
    if (!isMute) {
      audio = new Audio(applause);
      audio.play();
    }
    title = "Let's party. BINGOOO. YOU WON!!!";
    srcImg = gifArrA[num];
  }

  return (
    <Modal centered show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-gif-img">
          <img src={srcImg} alt="win gif" width="200" height="200" />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default StatusModal;
