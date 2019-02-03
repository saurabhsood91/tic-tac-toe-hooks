import { createStandardAction } from "typesafe-actions";
import { ClickCellPayload } from "./types";

const CLICK_CELL = "grid/CLICK_CELL";

export const cellClick = createStandardAction(CLICK_CELL)<ClickCellPayload>();
