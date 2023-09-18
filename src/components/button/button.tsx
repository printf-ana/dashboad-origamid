import { StyledButton } from './style';
import { ButtonProps } from './types';

export const Button = ({ size = 'medium', ...props }: ButtonProps) => {
  
  return (
    <StyledButton size={size} {...props}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
