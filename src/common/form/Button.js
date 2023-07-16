import MuiButton from '@material-ui/core/Button';
import styled from 'styled-components';

export default function Button({ variant='contained', width, children, ...props }) {
  return (
    <StyledMuiButton variant={variant} width={width} {...props}>
      {children}
    </StyledMuiButton>
  );
}

const StyledMuiButton = styled(MuiButton)`
  font-weight: 700 !important;
  font-size: 18px !important;
  width: ${(props) => props.width || 'auto'};
  background-color: #02131B !important;
  color: white !important;

  &:hover {
    background-color: #032230 !important;
  }
`;