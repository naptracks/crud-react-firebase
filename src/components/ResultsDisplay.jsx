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
    name,
    unit,
    grade,
    handleChange,
    handleUpdate
}) => {

    return (
    <div className="allProperties">
      <span className="display">{result.name}</span>
      <span className="display">{result.unit} </span>
      <span className="display">{result.grade} </span>
      <button className="remove-btn" onClick={() => handleRemove(result.id)}>
        Remove
      </button>
      <button className="edit-btn" onClick={() => handleModalOpen(result.id)}>
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
        <ResultsUpdate
            handleModalClose={handleModalClose}
            unit={unit}
            name={name}
            grade={grade}
            handleChange={handleChange}
            handleUpdate={handleUpdate}
        />
      </Modal>
    </div>
  );
};

export default ResultsDisplay;
