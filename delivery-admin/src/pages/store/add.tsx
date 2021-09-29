import Layout from 'layout/Layout';
import FormContainer from 'components/Form/FormContainer';
import FormGroup from 'components/Form/FormGroup';
import FormLabel from 'components/Form/FormLabel';
import TextInput from 'components/Input/TextInput';
import KakaoMap from 'components/KakaoMap/KakaoMap';

interface StoreAddProps {}

const StoreAdd: React.FC<StoreAddProps> = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('click');
  };

  return (
    <Layout pageTitle="Add Store">
      <h2>상점 등록</h2>
      <hr />
      <FormContainer onSubmit={onSubmit}>
        <FormGroup>
          <FormLabel>카테고리</FormLabel>
          <select>
            <option>전체</option>
            <option>치킨</option>
            <option>피자</option>
            <option>햄버거</option>
          </select>
        </FormGroup>
        <FormGroup>
          <FormLabel>상점명</FormLabel>
          <TextInput name="name" placeholder="상점명을 입력해주세요." />
        </FormGroup>
        <FormGroup>
          <FormLabel>전화번호</FormLabel>
          <TextInput
            type="tel"
            name="tel"
            placeholder="전화번호를 입력해주세요."
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>주소</FormLabel>
          <TextInput name="address" placeholder="주소를 입력해주세요." />
        </FormGroup>
        <FormGroup>
          <FormLabel>영업시간</FormLabel>
          {/* FIXME - 영업시간 입력 UI 재구성  */}
        </FormGroup>
        <FormGroup>
          <FormLabel>배달지역</FormLabel>
          <KakaoMap />
        </FormGroup>
        <button type="submit">등록</button>
      </FormContainer>
    </Layout>
  );
};

export default StoreAdd;
