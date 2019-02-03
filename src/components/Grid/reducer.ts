import { ActionType, getType } from "typesafe-actions";
import { cellClick } from "../../actions";
import { GameState } from "../../types";

import * as allActions from "../../actions";

export type AllActions = ActionType<typeof allActions>;

const reducer = (state: GameState, action: AllActions): GameState => {
  switch (action.type) {
    case getType(cellClick): {
      return {
        ...state,
        currentPlayer: action.payload.currentPlayer === 0 ? 1 : 0
      };
    }
  }
  return state;
};

export default reducer;
