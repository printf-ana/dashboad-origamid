import { StyledButton } from './style';
import { ButtonProps } from './type';

export const Button = ({children, size, onClick}: ButtonProps) => {

  return (
    <StyledButton onClick={onClick} size={size}>
      {children}
    </StyledButton>
  );
};

export default Button;
