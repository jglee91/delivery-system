import FooterElement from './Footer.styles';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => (
  <FooterElement>
    <p>&copy; {new Date().getFullYear()}</p>
  </FooterElement>
);

export default Footer;
