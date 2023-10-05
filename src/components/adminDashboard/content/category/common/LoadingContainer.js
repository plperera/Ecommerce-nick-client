import styled, { keyframes } from "styled-components"
import logo from "../../../../../assets/images/logoSVG/Logo.svg"

export default function LoadingContainer ({isLoading}) {
    return(
        <Container isLoading={isLoading}>
            <Spinner logo={logo}/>
        </Container>
    )
}
const Container = styled.div`
    display: ${props => props.isLoading ? 'flex':'none'};
    width: 100%;
    height: 100%;
    z-index: 99;
    position: absolute;
    top: 0;
    left: 0;
    background: #D8D8D821;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    align-items: center;
    justify-content: center;
`
const rotate = keyframes`
    0% {
        transform: rotate(0deg) scale(1);
    }
    15%{
        transform: rotate(-15deg) scale(.85);
    }
    90% {
        transform: rotate(360deg) scale(1);
    }
    100% {
        transform: rotate(360deg);
    }
`;
const Spinner = styled.div`
    width: 100px;  // Ajuste conforme necessário
    height: 100px; // Ajuste conforme necessário
    background-image: ${props => `url(${props.logo})`};
    background-size: cover; 
    animation: ${rotate} 2s ease-in-out infinite;
`;