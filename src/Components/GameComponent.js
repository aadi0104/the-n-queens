import React from "react";
import { useLocation } from "react-router-dom";
import ChessBoard from "./ChessBoard";

function GameComponent() {
    const location = useLocation()
    const { number } = location.state;
    return (
        <section className="game">
            <div>
                <div>
                    <ChessBoard number={number} />
                </div>
            </div>
        </section>
    );
}

export default GameComponent;