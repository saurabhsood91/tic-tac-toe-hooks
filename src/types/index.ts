export interface GameState {
  cells: CellState[][];
  currentPlayer: number;
  isGameOver: boolean;
}

export interface CellRows {}

export interface CellState {
  row: number;
  column: number;
  playerNumber: number;
  isEmpty: boolean;
}
