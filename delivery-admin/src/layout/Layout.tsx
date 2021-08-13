import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import { Wrapper } from './Layout.styles';

// FIXME - hard coding
const creator = 'jglee91';

interface LayoutProps {
  pageTitle: string;
  description?: string;
  header?: boolean;
  footer?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, description, header = true, footer = true, children }) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content={creator} key="twhandle" />
      <title>Delivery Admin | {pageTitle}</title>
    </Head>
    {header && <Header />}
    <Wrapper>{children}</Wrapper>
    {footer && <Footer />}
  </>
);

export default Layout;
