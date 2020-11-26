import React from "react";
import ResultsDisplay from "./ResultsDisplay";

const ResultList = ({ results, handleRemove, modalIsOpen, handleModalOpen, handleModalClose }) => {
  return (
    <div className="results-display">
      <h2>{results.length} - Results Found</h2>
      {results.map((result) => (
        <ResultsDisplay
          result={result}
          key={result.id}
          handleRemove={handleRemove}
          modalIsOpen={modalIsOpen}
          handleModalOpen={handleModalOpen}
          handleModalClose={handleModalClose}
        />
      ))}
    </div>
  );
};

export default ResultList;
