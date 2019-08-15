import React from "react";

// STYLED
import { StyledCell } from "./styles/StyledCell";
// HELPERS
import { TETROMINOS } from "../helpers/tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

export default Cell;
