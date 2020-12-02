import React from 'react';

import './App.css';
import Result from './components/Results';
import Loading from './components/Loading'
import {ToastContainer} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Result />
      <Loading />
      <ToastContainer/>
    </div>
  );
}

export default App;
