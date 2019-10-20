import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Api from "./services/api";
import "./styles.css";
import Main from "./pages/main/index";
import Footer from "./Components/Footer/Footer";

const App = () => (
  <div className="App">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
