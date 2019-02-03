export interface GameState {
  cells: CellState[][];
  currentPlayer: number;
  isGameOver: boolean;
}

export interface CellState {
  row: number;
  column: number;
  playerNumber: number;
  isEmpty: boolean;
}
