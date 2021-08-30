import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  color: {
    white: '#fff',
    black: '#000',
    gray: '#ccc',
    darkGray: '#aaa',
  },

  space: {
    sideBar: {
      default: '78px',
      full: '240px',
    },
  },

  spacing: (space) => `${space * 8}px`,
};

export { theme };
