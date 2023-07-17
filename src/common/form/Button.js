import MuiButton from '@material-ui/core/Button';
import styled from 'styled-components';

export default function Button({ variant='contained', width, fontSize, children, background, backgroundHover, fontColor, ...props }) {
  return (
    <StyledMuiButton variant={variant} width={width} fontSize={fontSize} background={background} backgroundHover={backgroundHover} fontColor={fontColor} {...props}>
      {children}
    </StyledMuiButton>
  );
}

const StyledMuiButton = styled(MuiButton)`
  font-weight: 700 !important;
  font-size: ${(props) => props.fontSize || '18px !important'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  background-color: ${(props) => props.background || '#02131B !important'};
  color: ${(props) => props.fontColor || 'white !important'};

  &:hover {
    background-color: ${(props) => props.backgroundHover || '#032230 !important'};
  }
`;