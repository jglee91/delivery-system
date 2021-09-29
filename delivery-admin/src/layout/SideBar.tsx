import { useState } from 'react';
import Link from 'next/link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import StoreIcon from '@material-ui/icons/Store';
import SettingsIcon from '@material-ui/icons/Settings';

import { Wrapper, MenuList, MenuItem, Tooltip } from './SideBar.styles';

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const [active, setActive] = useState(false);

  return (
    <Wrapper active={active}>
      <header>
        <h2>Delivery Admin</h2>
        <IconButton
          className="menu"
          aria-label="menu"
          onClick={() => setActive(!active)}
        >
          <MenuIcon />
        </IconButton>
      </header>
      <MenuList>
        <MenuItem active={active}>
          <Link href="/store">
            <a>
              <StoreIcon />
              {active && <span>상점 관리</span>}
            </a>
          </Link>
          <Tooltip active={active}>상점 관리</Tooltip>
        </MenuItem>
        <MenuItem active={active}>
          <Link href="/setting">
            <a>
              <SettingsIcon />
              {active && <span>설정</span>}
            </a>
          </Link>
          <Tooltip active={active}>설정</Tooltip>
        </MenuItem>
      </MenuList>
    </Wrapper>
  );
};

export default SideBar;
