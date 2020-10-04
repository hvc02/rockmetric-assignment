import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Highchart } from "./components/Highchart";
import { Landing } from "./components/Landing";
import "./App.css";
const App = () => {
  return (
    <>
      {/* <Dashboard />
        <Highchart /> */}
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/chart" component={Highchart} />
        <Route exact path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </>
  );
};

export default App;
