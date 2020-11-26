import React, { Component } from "react";
import instance from "../firebase/instance";
import ResultsAdd from "./ResultsAdd";
import ResultList from "./ResultsList";

export default class Results extends Component {
  state = {
    name: "",
    unit: "",
    grade: "",
    results: [],
    modalIsOpen: false,
  };

  componentDidMount() {
      instance.get('/results.json').then((response) => {
          console.log(response);

          const fetchedData = [];

          for(let key in response.data) {
            fetchedData.push({...response.data[key], id: key})
          }
          this.setState({
              results: fetchedData
          })
      })
  }



  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handlePost = (e) => {
    e.preventDefault();

    const Data = {
      name: this.state.name,
      unit: this.state.unit,
      grade: this.state.grade,
    };

    instance
      .post("/results.json", Data)
      .then((response) => {

        const results = [
            ...this.state.results,
            {...Data, id: response.data.name},
        ];

        this.setState({
            name: '',
            unit: '',
            grade: '',
            results: results
        })
      });
  };

  handleRemove = id => {
    instance.delete(`/results/${id}.json`).then((response) => {
        console.log(response)
    });
// delete using filter
    this.setState({
        results: this.state.results.filter(result => result.id !== id)
    })
}

handleModalOpen = () => {
    this.setState({
        modalIsOpen: true,
    })
}
handleModalClose = () => {
    this.setState({
        modalIsOpen: false,
    })
}

  render() {
    const { name, unit, grade, results,modalIsOpen } = this.state;

    return (
      <div className="container">
        <ResultsAdd
          name={name}
          unit={unit}
          grade={grade}
          handleChange={this.handleChange}
          handlePost={this.handlePost}
        />
        <ResultList results={results} handleRemove={this.handleRemove}
        modalIsOpen={modalIsOpen}
        handleModalOpen={this.handleModalOpen}
        handleModalClose={this.handleModalClose}
        />
      </div>
    );
  }
}
