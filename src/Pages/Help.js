import React from "react";

function Help() {
    return (
        <section className="help-page">
            <div>
                <h2>
                    How to Play
                </h2>
                <ol>
                    <li>
                        <strong>Set the Board Size: </strong>
                        <p>
                            Choose the size of the chessboard (NxN). The number of queens equals the board size (e.g., 4 queens for a 4x4 board).
                        </p>
                    </li>
                    <li>
                        <strong>Place the Queens:</strong>
                        <ul type="disc">
                            <li>
                                Click on a square to place a queen.
                            </li>
                            <li>
                                Ensure that no two queens share the same row, column, or diagonal.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Adjust Your Moves:</strong>
                        <ul type="disc">
                            <li>
                                If you make a mistake, click the queen to remove it or place it elsewhere.
                            </li>
                            <li>
                                You can reset the board at any time to start over.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Win Condition:</strong>
                        <p>
                            Successfully place all N queens on the board following the rules to complete the puzzle.
                        </p>
                    </li>
                </ol>
            </div>
        </section>
    );
}

export default Help;