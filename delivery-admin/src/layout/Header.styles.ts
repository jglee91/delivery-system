import styled from 'styled-components';

export const Wrapper = styled.header`
  padding: 0 ${({ theme }) => theme.spacing(2)};
  height: ${({ theme }) => theme.spacing(8)};
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.nav`
  a {
    position: relative;
    margin-right: ${({ theme }) => theme.spacing(2)};

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: -${({ theme }) => theme.spacing(1)};
      width: 1px;
      height: 100%;
      background-color: #000;
    }

    &:last-child {
      margin-right: 0;

      &::after {
        display: none;
      }
    }
  }
`;
