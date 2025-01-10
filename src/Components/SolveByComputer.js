import { faChessQueen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SolveByComputer() {
    const location = useLocation()
    const { number } = location.state;
    const initialBoard = Array.from({ length: number }, () => Array(number).fill(false));
    const [chessBoard, setChessBoard] = useState(initialBoard);

    useEffect(() => {
        solveNQueens(number);
    }, []);

    const solveNQueens = (queens) => {
        const localBoard = Array.from({ length: number }, () => Array(number).fill(false));
        if (nqueens(localBoard, queens, 0)) {
            setChessBoard(localBoard);
        }
    };

    const nqueens = (board, queens, qrow) => {
        if (queens === 0) {
            return true;
        }
        for (let col = 0; col < number; col++) {
            if (isSafe(board, qrow, col)) {
                board[qrow][col] = true;
                if (nqueens(board, queens - 1, qrow + 1)) {
                    return true;
                }
                board[qrow][col] = false;
            }
        }
        return false;
    };

    const isSafe = (board, row, col) => {

        for (let i = 0; i < row; i++) {
            if (board[i][col]) return false;
        }

        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j]) return false;
        }

        for (let i = row, j = col; i >= 0 && j < number; i--, j++) {
            if (board[i][j]) return false;
        }

        return true;
    };

    const board = [];
    for (let row = 0; row < number; row++) {
        const cells = [];
        for (let col = 0; col < number; col++) {
            const isBlack = (row + col) % 2 === 0;
            cells.push(
                <div
                    key={`cell-${row}-${col}`}
                    id={`${row}${col}`}
                    className={`cell ${isBlack ? 'black' : 'white'}`}>
                    {chessBoard[row][col] && <FontAwesomeIcon icon={faChessQueen} />}
                </div>
            );
        }
        board.push(
            <div key={`row-${row}`} className="chess-row">
                {cells}
            </div>
        );
    }

    return (
        <div className="solve-by-computer">
            <div>
                <h3>
                    Here is the Solution for {number} Queens
                </h3>
                <div className="chessboard">
                    {board}
                </div>

            </div>
        </div>
    );
}

export default SolveByComputer;