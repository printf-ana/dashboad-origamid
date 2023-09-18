import { StyledInput } from "./styles"
import { InputProps } from "./types"

export const Input = ({ label, id, ...props }: InputProps) => {
   return (
      <div>
         <label htmlFor={id}>
            <span>{label}</span>
            <StyledInput name={id} id={id} {...props} />
         </label>
      </div>
   )
}
