import Layout from 'layout/Layout';
import GridContainer from '../components/Grid/GridContainer';

interface StoreProps {}

const Store: React.FC<StoreProps> = () => (
  <Layout pageTitle="Store">
    <GridContainer sm={1} md={2} lg={3}>
      <div>Store Page</div>
      <div>Store Page</div>
      <div>Store Page</div>
      <div>Store Page</div>
      <div>Store Page</div>
      <div>Store Page</div>
    </GridContainer>
  </Layout>
);

export default Store;
