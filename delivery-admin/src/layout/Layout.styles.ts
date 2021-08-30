import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: ${({ theme }) => theme.space.sideBar.default};
  width: calc(100% - ${({ theme }) => theme.space.sideBar.default});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Container = styled.main`
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(3)}`};
`;
