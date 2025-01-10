import React from "react";

function Sprinkler({ won }) {
    return (
        <>
            <div className="sprinkler" style={{ display: won ? "block" : "none" }}>
            </div >
        </>
    );
}

export default Sprinkler;