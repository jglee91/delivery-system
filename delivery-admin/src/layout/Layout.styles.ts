import styled from 'styled-components';

const LayoutElement = styled.div`
  height: 800px;
  padding: 0 ${({ theme }) => theme.spacing * 3}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default LayoutElement;
