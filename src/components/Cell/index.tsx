import * as React from "react";
import { CellBody, OccupiedCell } from "./styled";
import { CellProps } from "./types";

const Cell: React.FunctionComponent<CellProps> = ({
  onClick,
  isEmpty,
  playerNumber
}) => (
  <CellBody onClick={onClick}>
    {isEmpty ? (
      ""
    ) : (
      <OccupiedCell>{playerNumber === 0 ? "O" : "X"}</OccupiedCell>
    )}
  </CellBody>
);

export default Cell;
