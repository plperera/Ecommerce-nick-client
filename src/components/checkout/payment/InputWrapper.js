import styled from 'styled-components';

export const InputWrapper = styled.div`

  width: ${props => props.width || "auto"};
  display: ${props => props.display || "initial"};
  opacity: ${props => props.opacity || "1"};

`;
