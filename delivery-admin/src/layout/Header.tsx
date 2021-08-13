import { Wrapper, Navigation } from './Header.styles';

import AppLink from '../components/Link/AppLink';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => (
  <Wrapper>
    <AppLink href="/" label="Home" />
    <Navigation>
      <AppLink href="/about" label="About" />
      <AppLink href="/contact" label="Contact" />
      <AppLink href="/signin" label="Sign In" />
    </Navigation>
  </Wrapper>
);

export default Header;
