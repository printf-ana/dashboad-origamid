import styled from "styled-components";
import { InputProps } from "./types";

export const StyledInput = styled.input<InputProps>`
   font-size: var(--font-size);
   font-family: var(--font);
   display: block;
   border: 1px solid #ccc;
   width: 100%;
   padding: 0.75rem;
   border-radius: var(--radius);
   background: #eee;
   transition: 0.2s;

   &:focus {
      outline: none;
      border-color: var(--color);
      background: white;
      box-shadow: 0 0 0 3px var(--color-light);
   }
`
