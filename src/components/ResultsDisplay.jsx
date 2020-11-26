import React from "react";
import Modal from "react-modal";
import ResultsUpdate from './ResultsUpdate'

Modal.setAppElement("#root");

const ResultsDisplay = ({
  result,
  handleRemove,
  modalIsOpen,
  handleModalOpen,
  handleModalClose,
}) => {
  return (
    <div className="allProperties">
      <span className="display">{result.name}</span>
      <span className="display">{result.unit} </span>
      <span className="display">{result.grade} </span>
      <button className="remove-btn" onClick={() => handleRemove(result.id)}>
        Remove
      </button>
      <button className="edit-btn" onClick={() => handleModalOpen()}>
        Update
      </button>
      <hr />
      <Modal
        style={{ 
            overlay: { backgroundColor: "gray"},
            content: {
                border: 'none',
                background: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }}
        isOpen={modalIsOpen}
        onRequestClose={() => handleModalClose()}
      >
        <ResultsUpdate handleModalClose={handleModalClose}/>
      </Modal>
    </div>
  );
};

export default ResultsDisplay;
