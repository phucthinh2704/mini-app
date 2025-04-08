import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import styled from "styled-components";
import { calculateWinner } from "../../helpers";

const ButtonReset = styled.button`
     box-shadow: 0 4px #c1a23c;
     color: #5e4800;
     background-color: #ffd95e;
     text-transform: uppercase;
     padding: 10px 20px;
     border-radius: 5px;
     transition: all 0.2s ease;
     font-weight: 900;
     cursor: pointer;
     position: relative;
     left: 15%;
`;

const Game = () => {
     const [board, setBoard] = useState(Array(9).fill(null));
     const [xIsNext, setXIsNext] = useState(true);
     const winner = calculateWinner(board);
     const handleClick = (index) => {
          const boardCopy = [...board];
          if (winner || boardCopy[index]) return;
          boardCopy[index] = xIsNext ? "X" : "O";
          setBoard(boardCopy);
          setXIsNext(!xIsNext);
     };

     const handleResetGame = () => {
          setBoard(Array(9).fill(null));
     };

     return (
          <div>
               <Board cells={board} onClick={handleClick}></Board>
               {winner && <div className="game-winner">Winner is {winner}</div>}
               <ButtonReset className="game-reset" onClick={handleResetGame}>
                    RESET
               </ButtonReset>
          </div>
     );
};

export default Game;
