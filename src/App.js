import React, { Fragment } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import './App.css';

function App() {
  return (
    // using react Fragment becuase in here i am going to use 
    // more than one parent Element
    <Fragment>
      <div className="navbar">
        <h1>sohrab</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" component={Home} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
