import styled, { keyframes } from "styled-components"

export default function LoadingContainer () {
    return( 
        <Container>  
            <Spinner/>
        </Container>       
    )
}

const Container = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 111vh;
    padding-top: 40vh;
    position: absolute;
    z-index: 9;
    background-color: #02131BD0;
    display: flex;
    align-items: start;
    justify-content: center;
`
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border-radius: 50px;
  border-bottom: 4px dotted #00929544;
  border-right: 4px dotted #00929544;
  border-top: 8px ridge #009395;
  border-left: 4px dotted #00929544; 
  width: 80px;
  height: 80px;
  animation: ${spinAnimation} 2s linear infinite;
`;