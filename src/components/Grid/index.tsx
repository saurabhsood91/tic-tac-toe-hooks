import * as React from "react";
import { GameState, CellState } from "../../types";
import { GridOuterContainer, GridRow } from "./styled";
import reducer from "./reducer";
import { useReducer } from "react";
import Cell from "../Cell";

const MAX_ROWS = 3;
const MAX_COLS = 3;

const createCells = (): CellState[][] => {
  let cells: CellState[][] = [];
  for (let i = 0; i < MAX_ROWS; i++) {
    const row = [];
    for (let j = 0; j < MAX_COLS; j++) {
      row.push({
        row: i,
        column: j,
        playerNumber: -1,
        isEmpty: true
      });
    }
    cells.push(row);
  }
  return cells;
};

const initialState: GameState = {
  cells: createCells(),
  currentPlayer: 0,
  isGameOver: false
};

const Grid: React.FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cells } = state;

  const grid = cells.map(row => {
    const items = row.map(item => {
      return <Cell />;
    });
    return (
      <>
        <GridRow>{items}</GridRow>
      </>
    );
  });

  return <GridOuterContainer>{grid}</GridOuterContainer>;
};

export default Grid;
