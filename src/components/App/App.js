import "./App.css";
import Header from "../Header/Header";
import CanvasContainer from "../Canvas";
import ControlPanel from "../ControlPanel";
import React from "react";

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <CanvasContainer />
            <ControlPanel />
        </div>
    );
};

export default App;
