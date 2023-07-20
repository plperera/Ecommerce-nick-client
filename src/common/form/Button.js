import MuiButton from '@material-ui/core/Button';
import styled from 'styled-components';

export default function Button({ variant='contained', width, fontsize, children, background, backgroundhover, fontColor, ...props }) {
  return (
    <StyledMuiButton variant={variant} width={width} fontsize={fontsize} background={background} backgroundhover={backgroundhover} fontColor={fontColor} {...props}>
      {children}
    </StyledMuiButton>
  );
}

const StyledMuiButton = styled(MuiButton)`
  font-weight: 700 !important;
  font-size: ${(props) => props.fontsize || '18px !important'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  background-color: ${(props) => props.background || '#02131B !important'};
  color: ${(props) => props.fontColor || 'white !important'};

  &:hover {
    background-color: ${(props) => props.backgroundhover || '#032230 !important'};
  }
`;