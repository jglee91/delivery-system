import { Wrapper } from './Footer.styles';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => (
  <Wrapper>
    <p>&copy; {new Date().getFullYear()}</p>
  </Wrapper>
);

export default Footer;
