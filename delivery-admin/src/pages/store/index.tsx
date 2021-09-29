import { useRouter } from 'next/router';

import Layout from 'layout/Layout';
import GridContainer from 'components/Grid/GridContainer';
import StoreCard from 'components/Store/StoreCard';

interface StoreProps {}

const Store: React.FC<StoreProps> = () => {
  const router = useRouter();

  const onClickAdd = () => router.push('/store/add');

  return (
    <Layout pageTitle="Store">
      <div>
        <select>
          <option>전체</option>
          <option>치킨</option>
          <option>피자</option>
          <option>햄버거</option>
        </select>
        <input type="text" placeholder="검색어를 입력해주세요." />
        <button type="button" onClick={onClickAdd}>
          등록
        </button>
      </div>
      <hr />
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
};

export default Store;
