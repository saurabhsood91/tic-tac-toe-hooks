import * as React from "react";
import { useReducer } from "react";
import { cellClick } from "../../actions";
import { CellState, GameState } from "../../types";
import Cell from "../Cell";
import Status from "../Status";
import reducer from "./reducer";
import { GridOuterContainer, GridRow, Wrapper } from "./styled";

const MAX_ROWS = 3;
const MAX_COLS = 3;

const createCells = (): CellState[][] => {
  const cells: CellState[][] = [];
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
  const { cells, currentPlayer, isGameOver } = state;

  const grid = cells.map(cellRow => {
    const items = cellRow.map(item => {
      const { column, row } = item;
      const { isEmpty, playerNumber } = cells[row][column];
      return (
        <Cell
          playerNumber={playerNumber}
          onClick={() => dispatch(cellClick({ currentPlayer, column, row }))}
          isEmpty={isEmpty}
        />
      );
    });
    return (
      <>
        <GridRow>{items}</GridRow>
      </>
    );
  });

  return (
    <Wrapper>
      <GridOuterContainer>{grid}</GridOuterContainer>
      <Status currentPlayer={currentPlayer} isGameOver={isGameOver} />
    </Wrapper>
  );
};

export default Grid;
