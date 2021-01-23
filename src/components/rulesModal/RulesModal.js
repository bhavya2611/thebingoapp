import React from "react";
import Modal from "react-bootstrap/Modal";
import "./rulesModal.scss";

const RulesModal = ({ showModal, handleClose }) => {
  return (
    <Modal centered show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>RULES</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <ul className="rules-ul">
            <li>
              The player will try to find a person around them for each of the
              labels they get.
            </li>
            <li>
              The aim should be to get a row/column or a diagonal of labels
              ticked off (Like Bingo)
            </li>
            <li>The middle label is always ticked (just like Bingo)</li>
            <li>
              The player should remember all the names of every person and also
              the label they ticked for them when reviewing. If they forget,
              they are not awarded the prize.
            </li>
            <li>
              The winner is the one who completes a row/column/diagonal first
              and then also remembers the names of every person he ticked a
              label for.
            </li>
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RulesModal;
