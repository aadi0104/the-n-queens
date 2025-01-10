import React from "react";
import { Link } from "react-router-dom";

function NavComponent() {
    return (
        <div className="custom-nav">
            <div className="m-4">
                <div>
                    <Link to="/the-n-queens/">Home</Link>
                </div>
                <div>
                    <Link to="/the-n-queens/rules">Rules</Link>
                </div>
                <div>
                    <Link to="/the-n-queens/help">Help</Link>
                </div>
            </div>
        </div>
    );
}

export default NavComponent;