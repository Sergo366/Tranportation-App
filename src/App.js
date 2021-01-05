import './App.css';
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import React from "react";
import HeaderBurger from "./Components/Header/Header";


const App = (props) => {
    return (
        <div>
            <HeaderBurger />
            <HomePage  />
        </div>
    )
}

export default App;
