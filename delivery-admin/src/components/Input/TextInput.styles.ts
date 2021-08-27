import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  label {
    margin-bottom: 2px;
    font-weight: 700;
  }

  input {
    padding: 4px;
    border: 1px solid ${({ theme }) => theme.color.gray};
    border-radius: 4px;
    outline: none;

    &:focus {
      border: 1px solid ${({ theme }) => theme.color.darkGray};
    }
  }
`;
