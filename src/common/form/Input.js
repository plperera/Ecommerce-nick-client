import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import InputMask from 'react-input-mask';

export default function Input({ mask = '', maskChar = '', formatChars, variant = 'outlined', value='', onChange = () => 0, width, ...props }) {
  return (mask || maskChar) ? (
    <InputMask  mask={mask} maskChar={maskChar} value={value} onChange={onChange} {...(formatChars && { formatChars })}>
      {() => <StyledTextField {...props} variant={variant} width={width}/>}
    </InputMask>
  ) : (
    <StyledTextField {...props} value={value} onChange={onChange} variant={variant} width={width}/>
  );
}

const StyledTextField = styled(TextField)`
  margin-top: 8px !important;
  width: ${(props) => props.width || 'auto'};
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #009395ff;  // Altere para a cor que você deseja quando o input está em foco
    }
  }
  & label.Mui-focused {
    color: #009395ff;  // Altere para a cor que você deseja quando o rótulo está focado
  }
`;