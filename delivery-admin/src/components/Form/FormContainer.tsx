import { Wrapper } from './FormContainer.styles';

interface FormContainerProps {
  onSubmit?: (e: React.FormEvent) => void;
}

const FormContainer: React.FC<FormContainerProps> = ({
  children,
  onSubmit,
}) => <Wrapper onSubmit={onSubmit}>{children}</Wrapper>;

export default FormContainer;
