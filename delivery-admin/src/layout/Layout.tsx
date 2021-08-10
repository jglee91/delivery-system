import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import LayoutElement from './Layout.styles';

// FIXME - hard coding
const creator = 'jglee91';

interface LayoutProps {
  pageTitle: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, description, children }) => (
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
    <LayoutElement>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutElement>
  </>
);

export default Layout;
