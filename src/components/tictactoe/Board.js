import React from "react";
import Cell from "./Cell";
import { calculateWinner } from "../../helpers";
import styled from "styled-components";

const StyledBoard = styled.div`
     margin: 25px;
     width: 500px;
     height: 500px;
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(3, 1fr);
     grid-gap: 25px;
`;

const Board = (props) => {
     const cells = [null, null, null, "X", "X", "X", null, null, null];
     console.log(calculateWinner(cells));
     return (
          <StyledBoard>
               {props.cells.map((item, index) => {
                    return (
                         <Cell
                              key={index}
                              value={item}
                              onClick={() => props.onClick(index)}
                              className={item === 'X' ? "is-x" : item === 'O' ? "is-o" : ""} 
                         ></Cell>
                    );
               })}
          </StyledBoard>
     );
};

export default Board;
