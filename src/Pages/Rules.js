import React from "react";

function Rules() {
    return (
        <section className="rules-page">
            <div>
                <h2>
                    Rules for the N-Queens Game:
                </h2>
                <ol>
                    <li>
                        <strong>Objective: </strong>Place N queens on an NxN chessboard so that no two queens threaten each other.
                    </li>
                    <li>
                        <strong>Queen's Threats: </strong>A queen can attack another if it is in the same row, column, or diagonal.
                    </li>
                    <li>
                        <strong>Placement Rules: </strong>
                        <ul type="disc">
                            <li>
                                Each row and column must have exactly one queen.
                            </li>
                            <li>
                                No two queens can share the same diagonal.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Board Size: </strong>The game can be played on any board size NxN, where N ≥ 4 for a valid solution.
                    </li>
                    <li>
                        <strong>Winning Condition: </strong>Successfully place all N queens on the board following these rules.
                    </li>
                </ol>
            </div>
        </section>
    );
}

export default Rules;