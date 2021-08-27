import { Wrapper } from './SignInButton.styles';

interface SignInButtonProps {
  text: string;
  disabled?: boolean;
}

const SignInButton: React.FC<SignInButtonProps> = ({ text, disabled }) => (
  <Wrapper>
    <button type="submit" disabled={disabled}>
      {text}
    </button>
  </Wrapper>
);

export default SignInButton;
