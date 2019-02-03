import { ActionType, getType } from "typesafe-actions";
import { cellClick } from "../../actions";
import { GameState } from "../../types";

import * as allActions from "../../actions";
import { computeNewGameState } from "../../state/grid";

export type AllActions = ActionType<typeof allActions>;

const reducer = (state: GameState, action: AllActions): GameState => {
  switch (action.type) {
    case getType(cellClick): {
      const { row, column, currentPlayer } = action.payload;
      const newGameState = computeNewGameState(
        state,
        row,
        column,
        currentPlayer
      );
      console.log("STATE", newGameState, action);
      return newGameState;
    }
  }
  return state;
};

export default reducer;
