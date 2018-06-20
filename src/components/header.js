import React from "react";

const Header = props =>
    <div>
        <div className="row">
            <div className="col-lg-4">
                <h1>Clicky Game</h1>
            </div>
            <div className="col-lg-4">
                <h1>{props.correct === "" ? "Click an image to begin!" : props.correct === "true" ? "You guessed correctly!" : "You guessed incorrectly!"}</h1>
            </div>
            <div className="col-lg-4">
                <h1>Score:{props.correct} | Top Score:{props.topScore}</h1>
            </div>
        </div>
    </div>

export default Header;