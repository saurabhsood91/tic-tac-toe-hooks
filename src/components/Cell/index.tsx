import * as React from "react";
import { CellBody } from "./styled";
import { CellProps } from "./types";

const Cell: React.FunctionComponent<CellProps> = ({ onClick }) => (
  <CellBody onClick={onClick} />
);

export default Cell;
