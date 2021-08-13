import { H1, H2, H3, H4, H5, H6, Paragraph, Span } from './styles';

interface TypographyProps {
  el?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
}

const Typography: React.FC<TypographyProps> = ({ el = 'span', children }) => {
  switch (el) {
    case 'h1':
      return <H1>{children}</H1>;
    case 'h2':
      return <H2>{children}</H2>;
    case 'h3':
      return <H3>{children}</H3>;
    case 'h4':
      return <H4>{children}</H4>;
    case 'h5':
      return <H5>{children}</H5>;
    case 'h6':
      return <H6>{children}</H6>;
    case 'span':
      return <Span>{children}</Span>;
    case 'p':
      return <Paragraph>{children}</Paragraph>;
  }
};

export default Typography;
