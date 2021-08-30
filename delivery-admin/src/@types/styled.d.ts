import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      black: string;
      gray: string;
      darkGray: string;
    };

    space: {
      sideBar: {
        default: string;
        full: string;
      };
    };

    spacing: (space: number) => string;
  }
}
