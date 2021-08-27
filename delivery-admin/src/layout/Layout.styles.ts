import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(3)}`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
