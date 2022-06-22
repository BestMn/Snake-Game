import "./ControlPanel.css";
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { resetGame, pauseGame } from "../../store/actions/actions";

const ControlPanel = ({ resetGame, pauseGame }) => {
    return (
        <div className="control-panel">
            <div className="control-button-container">
                <span className="control-panel-text">
                    USE{" "}
                    <img
                        className="move-keys-img"
                        src="https://i.imgur.com/HHkkkiP.jpeg"
                    />{" "}
                    TO MOVE
                </span>
            </div>

            <div className="control-button-container">
                <span className="control-panel-text">
                    PRESS{" "}
                    <button className="btn-reset" onClick={() => resetGame()}>
                        RESET
                    </button>{" "}
                    TO RESTART
                </span>
            </div>

            <div className="control-button-container">
                <span className="control-panel-text">
                    PRESS{" "}
                    <button className="btn-pause" onClick={() => pauseGame()}>
                        PAUSE
                    </button>{" "}
                    TO PAUSE
                </span>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ resetGame, pauseGame }, dispatch);
};

export default connect(null, mapDispatchToProps)(ControlPanel);
