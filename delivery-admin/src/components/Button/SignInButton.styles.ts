import styled from 'styled-components';

export const Wrapper = styled.div`
  button {
    width: 100%;
    padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(4)}`};
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};

    &:disabled {
      opacity: 0.6;
    }

    &:active {
      opacity: 0.9;
    }
  }
`;
