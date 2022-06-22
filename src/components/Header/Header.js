import "./Header.css";
import React from "react";
import { connect } from "react-redux";

const Header = ({ score }) => {
    let displayedScore = `000${score}`;
    if (score > 9) {
        displayedScore = `00${score}`;
    }
    if (score > 99) {
        displayedScore = `0${score}`;
    }
    return (
        <React.Fragment>
            <h1 className="game-title">SNAKE</h1>
            <h2 className="score-title">Score: {displayedScore}</h2>
        </React.Fragment>
    );
};

const mapStateToProps = ({ score }) => {
    return {
        score,
    };
};

export default connect(mapStateToProps)(Header);
