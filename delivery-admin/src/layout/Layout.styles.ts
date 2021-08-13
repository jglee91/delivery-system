import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({ theme }) => `${theme.spacing(2)}px ${theme.spacing(3)}px`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
