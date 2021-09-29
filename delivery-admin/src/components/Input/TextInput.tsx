import { Wrapper } from './TextInput.styles';

interface TextInputProps {
  type?: string;
  label?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  type = 'text',
  label,
  name,
  value,
  placeholder,
  onChange,
}) => (
  <Wrapper>
    {label && <label>{label}</label>}
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </Wrapper>
);

export default TextInput;
