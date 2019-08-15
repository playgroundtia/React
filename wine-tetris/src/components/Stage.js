import React from "react";

// STYLED
import { StyledStage } from "./styles/StyledStage";
// COMPONENTS
import Cell from "./Cell";

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;
