import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-toastify/dist/ReactToastify.css";
import { faChessQueen } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Sprinkler from './Sprinkler';

const ChessBoard = ({ number }) => {
  const chess_board_init = new Array(number).fill().map(() => new Array(number).fill(false));
  const [won, setWon] = useState(false);
  const navigate = useNavigate();
  const [chess_board, setChessBoard] = useState(chess_board_init);
  const board = [];
  const [curr, setCurr] = useState(0);
  useEffect(() => {
    if (curr >= number) {
      setWon(true);
      toast.success(`Congratulations! All ${number} Queens are Placed successfully!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [curr]);

  const handleChangeValue = (row, col) => {
    if (chess_board[row][col] && row === curr - 1) {
      const newchess = chess_board;
      newchess[row][col] = false;
      setCurr(curr - 1);
      setChessBoard(newchess);

    } else {
      if (row === curr) {
        const check = isSafe(row, col);
        if (check === -1) {
          const newchess = chess_board;
          newchess[row][col] = true;
          setChessBoard(newchess);
          setCurr(curr + 1);
        } else {
          toast.error(`Queen at row ${curr + 1} is clashing with the queen at Row: ${check + 1}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      } else {
        toast.error(`Please Place the Queen for the Row: ${curr + 1}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  }
  const isSafe = (row, col) => {
    for (let i = 0; i < row; i++) {
      if (chess_board[i][col]) return i;
    }

    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (chess_board[i][j]) return i;
    }

    for (let i = row, j = col; i >= 0 && j < number; i--, j++) {
      if (chess_board[i][j]) return i;
    }

    return -1;
  };

  for (let row = 0; row < number; row++) {
    const cells = [];
    for (let col = 0; col < number; col++) {
      const isBlack = (row + col) % 2 === 0;
      cells.push(
        <div
          key={`cell-${row}-${col}`}
          id={`${row}${col}`}
          onClick={() => { handleChangeValue(row, col) }}
          className={`cell ${isBlack ? 'black' : 'white'}`}>
          {chess_board[row][col] && <FontAwesomeIcon icon={faChessQueen} />}
        </div>
      );
    }
    board.push(
      <div key={`row-${row}`} className="chess-row">
        {cells}
      </div>
    );
  }

  const handleResetBoard = () => {
    setChessBoard(chess_board_init);
    setWon(false);
    setCurr(0);
  }

  const handleUndoBoard = () => {
    if (curr > 0 && !won) {
      const newchess = chess_board;
      for (let i = 0; i < number; i++) {
        newchess[curr - 1][i] = false;
      }
      setChessBoard(newchess);
      setCurr(curr - 1);
    }
  }

  const handleSolveByComputer = () => {
    navigate("/the-n-queens/solvebycomputer", { state: { number } });
  }

  return (
    <>
      <div>
        <button onClick={() => { handleUndoBoard() }}>
          Undo
        </button>
        <button onClick={() => { handleResetBoard() }}>
          Reset
        </button>
      </div>
      <div className="chessboard">
        {board}
        <ToastContainer />
      </div>
      <div>
        <button onClick={() => { handleSolveByComputer() }}>
          Solve By Computer?
        </button>
      </div>
      <Sprinkler won={won} />
    </>
  );
};

export default ChessBoard;