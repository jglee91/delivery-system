import styled from 'styled-components';

interface WrapperProps {
  active: boolean;
}
export const Wrapper = styled.aside<WrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ active, theme }) =>
    active ? theme.space.sideBar.full : theme.space.sideBar.default};
  height: 100%;
  padding: 6px 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  z-index: 1;
  transition: width 0.5s ease;

  background: black;
  color: white;

  header {
    h2 {
      height: 34px;
      display: flex;
      align-items: center;
      white-space: nowrap;
      opacity: ${({ active }) => (active ? 1 : 0)};
      transition: opacity 0.5s ease;
      font-weight: 700;
      pointer-events: none;
    }

    button {
      position: absolute;
      top: 0;
      left: ${({ active }) => (active ? '90%' : '50%')};
      transform: translateX(-50%);

      svg {
        color: white;
      }
    }
  }
`;

export const MenuList = styled.ul`
  margin-top: 10px;
`;

interface MenuItemProps {
  active?: boolean;
}
export const MenuItem = styled.li<MenuItemProps>`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing(0.25)};

  &:last-child {
    margin-bottom: 0;
  }

  a {
    padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(1.625)}`};
    display: flex;
    align-items: center;
    border-radius: 12px;
    white-space: nowrap;
    transition: all 0.5s ease;

    &:hover {
      background-color: white;
      color: black;
    }

    span {
      margin-left: ${({ theme }) => theme.spacing(0.75)};
    }
  }
`;

interface TooltipProps {
  active: boolean;
}
export const Tooltip = styled.span<TooltipProps>`
  position: absolute;
  top: 0;
  left: 120px;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: all 0.5s ease;
  pointer-events: none;

  background-color: white;
  color: black;

  ${MenuItem}:hover & {
    top: ${({ active }) => (active ? 0 : '50%')};
    opacity: ${({ active }) => (active ? 0 : 1)};
  }
`;
