import React from "react";
import styled from "styled-components";

const StyledCell = styled.div`
     cursor: pointer;
     display: flex;
     justify-content: center;
     align-items: center;
     font-weight: bold;
     font-size: 100px;
     box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Cell = ({ value, onClick, className }) => {
     return <StyledCell className={`${className}`} onClick={onClick}>
            {value}
     </StyledCell>;
};

export default Cell;
