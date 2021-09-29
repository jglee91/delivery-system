import { Wrapper } from './FormGroup.styles';

interface FormGroupProps {}

const FormGroup: React.FC<FormGroupProps> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

export default FormGroup;
