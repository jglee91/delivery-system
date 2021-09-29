import styled from 'styled-components';

interface WrapperProps {
  columns: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}
export const Wrapper = styled.section<WrapperProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};

  @media only screen and (max-width: 1920px) {
    grid-template-columns: ${({ xl }) => `repeat(${xl}, 1fr)`};
  }
  @media only screen and (max-width: 1280px) {
    grid-template-columns: ${({ lg }) => `repeat(${lg}, 1fr)`};
  }
  @media only screen and (max-width: 960px) {
    grid-template-columns: ${({ md }) => `repeat(${md}, 1fr)`};
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: ${({ sm }) => `repeat(${sm}, 1fr)`};
  }
`;
