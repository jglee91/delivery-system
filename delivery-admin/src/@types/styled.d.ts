import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      black: string;
      gray: string;
      darkGray: string;
    };

    spacing: (space: number) => string;
  }
}
