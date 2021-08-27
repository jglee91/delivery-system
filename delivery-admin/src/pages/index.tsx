import { NextPage } from 'next';
import Layout from 'layout/Layout';

interface IndexProps {}

const Index: NextPage<IndexProps> = () => <Layout pageTitle="Home">Home Page</Layout>;

export default Index;
