import * as styledComponents from 'styled-components';

import {ThemedStyledComponentsModule} from 'styled-components';

import theme from './theme';

const {
    default: styled,
    css,
    keyframes,
    ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<typeof theme>;
export {css, keyframes, ThemeProvider};
export default styled;