import styled, { keyframes } from 'styled-components';

const backgroundSkeletonAnimation = keyframes`
  0%, 100% { 
    background-position: 0% 0%;
  }
  50% { 
    background-position: 100% 0%;
  }
`;
export const LoadingContainer = styled.div`
  top: ${props => props.top || "initial"};
  position: ${props => props.position || "initial"};
  width: ${props => props.width || "100%"};
  height:  ${props => props.height || "100%"};
  border-radius:  ${props => props.borderradius || "5px"};
  background: linear-gradient(45deg, #0a1f2a, #17455E, #0a1f2a);
  background-size: 300% 300%;
  animation: ${backgroundSkeletonAnimation} 3s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
`