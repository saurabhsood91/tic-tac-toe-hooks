import * as React from "react";
import { StatusWrapper } from "./styled";
import { StatusProps } from "./types";

const Status: React.FunctionComponent<StatusProps> = ({
  isGameOver,
  currentPlayer
}) => (
  <StatusWrapper>
    {isGameOver ? `Game Over: Winner is: Player ${currentPlayer + 1}` : ""}
  </StatusWrapper>
);

export default Status;
