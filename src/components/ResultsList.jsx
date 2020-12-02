import React from "react";
import ResultsDisplay from "./ResultsDisplay";

const ResultList = ({
                        results,
                        handleRemove,
                        modalIsOpen,
                        handleModalOpen,
                        handleModalClose,
                        name,
                        grade,
                        unit,
                        handleChange,
                        handleUpdate
                    }) => {
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
                    handleChange={handleChange}
                    name={name}
                    unit={unit}
                    grade={grade}
                    handleUpdate={handleUpdate}

                />
            ))}
        </div>
    );
};

export default ResultList;
