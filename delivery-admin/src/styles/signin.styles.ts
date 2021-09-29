import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(3)};
  min-width: 480px;
  border: 1px solid black;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
  }

  form {
  }
`;
