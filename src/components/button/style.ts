import styled from "styled-components";
import { ButtonProps, buttonSizeMap } from "./types";


export const StyledButton = styled.button<ButtonProps>`
   display: block;
   cursor: pointer;
   border: none;
   border-radius: var(--radius);
   transition: 0.1s;
   background: var(--color);
   color: var(--color-dark);  
   padding: ${({ size }) => size && buttonSizeMap[size].padding};
   font-size: var(--font-size);
   font-family: var(--font);

   :hover & :focus {
      background: var(--color);
      box-shadow: 0 0 0 3px var(--color-light), 0 0 0 4px var(--color);
      outline: none;
   }

   :active {
      box-shadow: 0 0 0 3px var(--color), 0 0 0 4px var(--color);
   }

   :disabled {
      opacity: 0.5;
      cursor: wait;
   }
`
