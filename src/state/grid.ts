import { CellState, GameState } from "../types";

const isDiagonalComplete = (cells: CellState[][], currentPlayer: number) => {
  const diagA = [0, 1, 2].reduce<boolean>((prev: boolean, curr: number) => {
    return (
      prev &&
      !cells[curr][curr].isEmpty &&
      cells[curr][curr].playerNumber === currentPlayer
    );
  }, true);

  const diagB = [2, 1, 0].reduce<boolean>(
    (prev: boolean, curr: number, index: number) => {
      return (
        prev &&
        !cells[index][curr].isEmpty &&
        cells[index][curr].playerNumber === currentPlayer
      );
    },
    true
  );

  return diagA || diagB;
};

const isRowComplete = (
  cells: CellState[][],
  row: number,
  currentPlayer: number
) => {
  return [0, 1, 2].reduce<boolean>((prev: boolean, curr: number) => {
    return (
      prev &&
      !cells[row][curr].isEmpty &&
      cells[row][curr].playerNumber === currentPlayer
    );
  }, true);
};

const isColumnComplete = (
  cells: CellState[][],
  column: number,
  currentPlayer: number
) => {
  return [0, 1, 2].reduce<boolean>((prev: boolean, curr: number) => {
    return (
      prev &&
      !cells[curr][column].isEmpty &&
      cells[curr][column].playerNumber === currentPlayer
    );
  }, true);
};

const isGameOver = (
  cells: CellState[][],
  row: number,
  column: number,
  currentPlayer: number
) => {
  let diagonalComplete = false;
  let rowComplete = false;
  let columnComplete = false;
  if (row === column) {
    // check diagonals too
    diagonalComplete = isDiagonalComplete(cells, currentPlayer);
  }
  rowComplete = diagonalComplete || isRowComplete(cells, row, currentPlayer);
  columnComplete =
    rowComplete || isColumnComplete(cells, column, currentPlayer);
  return columnComplete;
};

export const computeNewGameState = (
  state: GameState,
  row: number,
  column: number,
  player: number
): GameState => {
  const { cells } = state;

  if (!cells[row][column].isEmpty || state.isGameOver) {
    // no effect
    return state;
  }

  const newCell = {
    ...cells[row][column],
    playerNumber: player,
    isEmpty: false
  };

  const newCells: CellState[][] = Object.assign([...cells], {
    [row]: Object.assign([...cells[row]], {
      [column]: newCell
    })
  });

  const gameOver: boolean = isGameOver(newCells, row, column, player);

  let currentPlayer = player === 0 ? 1 : 0;
  if (gameOver) {
    currentPlayer = player;
  }

  return {
    cells: newCells,
    currentPlayer,
    isGameOver: gameOver
  };
};
