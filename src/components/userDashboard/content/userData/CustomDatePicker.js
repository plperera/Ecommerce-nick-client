import styled from 'styled-components';
import { DatePicker } from '@material-ui/pickers';

export const CustomDatePicker = styled(DatePicker)`
margin-top: 8px !important;
width: ${(props) => props.width || 'auto'} !important;
> div {
  margin-top: auto !important;
}
> label {
  margin-top: auto !important;
}
`;
