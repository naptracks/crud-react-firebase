import React from "react";

const ResultsUpdate = ({name, unit, grade, handleChange, handleUpdate, handleModalClose}) => {
  console.log(name)
  return (
    <div className="results-edit">
      <form className="ui-form" autoComplete="off" onSubmit={handleUpdate}>
        <h2>UpdateEntry</h2>
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
        <input type="submit" value='Update'/>
      </form>
      <button className='close-btn' onClick={() => handleModalClose()} >Close</button>
    </div>
  );
};

export default ResultsUpdate;
