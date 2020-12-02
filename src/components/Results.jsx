import React, {Component} from "react";
import instance from "../firebase/instance";
import ResultsAdd from "./ResultsAdd";
import ResultList from "./ResultsList";
import {trackPromise} from 'react-promise-tracker'
import {toast} from 'react-toastify';

export default class Results extends Component {
    state = {
        name: "",
        unit: "",
        grade: "",
        results: [],
        modalIsOpen: false,
        id: ''
    };

    componentDidMount() {
        trackPromise(instance.get('/results.json').then((response) => {
            console.log(response);

            const fetchedData = [];

            for (let key in response.data) {
                fetchedData.push({...response.data[key], id: key})
            }
            this.setState({
                results: fetchedData
            })
        }))
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

       trackPromise( instance

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
                   results
               })
               toast.success('You added a new entry !')
           }))
    };

    handleRemove = id => {
        instance.delete(`/results/${id}.json`).then((response) => {
            console.log(response)
        });
// delete using filter
        this.setState({
            results: this.state.results.filter(result => result.id !== id)
        })
        toast.error('Entry removed !')
    }

    handleModalOpen = (id) => {
        const result = this.state.results.find(result => result.id === id)
        this.setState({
            name: result.name,
            unit: result.unit,
            grade: result.grade,
            id: result.id,
            modalIsOpen: true,
        })
    }
    handleModalClose = () => {
        this.setState({
            modalIsOpen: false,
        })
    }

    handleUpdate = (e) => {
        e.preventDefault();
        const id = this.state.id
        this.setState({
            modalIsOpen: false,
        })

        const Data = {
            name: this.state.name,
            unit: this.state.unit,
            grade: this.state.grade
        };

       trackPromise( instance
           .put(`/results/${id}.json`, Data)
           .then(response => {
               instance.get('/results.json').then((response) => {
                   console.log(response);

                   const fetchedData = [];

                   for (let key in response.data) {
                       fetchedData.push({...response.data[key], id: key})
                   }
                   this.setState({
                       results: fetchedData,
                       name: '',
                       unit: '',
                       grade: '',
                   })
                   toast.info('Entry Updated !')
               })
           })
           .catch(err => console.error(err)))
    }

    render() {
        const {name, unit, grade, results, modalIsOpen} = this.state;
        return (
            <div className="container">
                <ResultsAdd
                    name={name}
                    unit={unit}
                    grade={grade}
                    handleChange={this.handleChange}
                    handlePost={this.handlePost}
                />
                <ResultList
                    results={results}
                    handleRemove={this.handleRemove}
                    modalIsOpen={modalIsOpen}
                    handleModalOpen={this.handleModalOpen}
                    handleModalClose={this.handleModalClose}
                    name={name}
                    unit={unit}
                    grade={grade}
                    handleChange={this.handleChange}
                    handleUpdate={this.handleUpdate}
                />
            </div>
        );
    }
}
