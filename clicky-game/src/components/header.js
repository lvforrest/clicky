import React from "react";

const Header = props =>
    <div>
        <div className="row">
            <div className="col-lg-4">
                <h1>Clicky Game</h1>
            </div>
            <div className="col-lg-4">
                <h1>{props.click === "" ? "Click an image to begin!" : props.click === "true" ? "You guessed correctly!" : "You guessed incorrectly!"}</h1>
            </div>
            <div className="col-lg-4">
                <h1>Score:{props.score} | Top Score:{props.topScore}</h1>
            </div>
        </div>
    </div>

export default Header;