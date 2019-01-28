import { ThemedStyledProps } from "styled-components";

const theme = {
  colors: {
    black: "#000",
    white: "#fff",
    grey: "#9b9393"
  }
};

export default theme;

export type ThemeProps<P> = ThemedStyledProps<P, typeof theme>;
