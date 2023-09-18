import { ComponentProps } from "react";

type ButtonSize = 'small' | 'medium' | 'large'

export const buttonSizeMap = {
  small : {
    padding: '10px'
  },
  medium: {
    padding: '20px'
  },
  large: {
    padding: '30px'
  }
}

export type ButtonProps = ComponentProps<'button'> & {
   size?: ButtonSize;
 };
