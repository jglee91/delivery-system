import { Wrapper } from './FormLabel.styles';

interface FormLabelProps {}

const FormLabel: React.FC<FormLabelProps> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

export default FormLabel;
