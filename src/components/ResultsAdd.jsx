import React from "react";

const ResultsAdd = ({name, unit, grade, handleChange, handlePost}) => {
  return (
    <div className="results-add">
      <form className="ui-form" autoComplete="off" onSubmit={handlePost}>
        <h2>New Entry</h2>
        <label htmlFor=""> Name</label>
        <input
          autofocus
          name="name"
          requiered
          placeholder="Name"
          value={name}
          type="text"
          onChange={handleChange}
        />
        <label htmlFor=""> Unit</label>
        <input
          autofocus
          name="unit"
          requiered
          placeholder="Unit"
          value={unit}
          type="text"
          onChange={handleChange}

        />{" "}
        <label htmlFor=""> Grade</label>
        <input
          autofocus
          name="grade"
          requiered
          placeholder="Grade"
          value={grade}
          type="text"
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ResultsAdd;
