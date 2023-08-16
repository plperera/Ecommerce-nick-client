import { useState } from "react";
import styled, { keyframes } from "styled-components"

export default function CategoryCard ({category, applyAnimation, navigateAndMoveUp}) {

    const [isLoading, setIsLoading] = useState(true);

    return(
        <Container height={"425px"} applyAnimation={applyAnimation} onClick={() => navigateAndMoveUp({locate:`catalogo/${category.title}`})}>

            {isLoading && <Spinner />}
            <ImageContainer>
                <img src={category.imageUrl} alt="" onLoad={() => setIsLoading(false)}/>
            </ImageContainer>            
        </Container>
    )
}

const fadeIn = keyframes`
    0% {
        transform: translateX(0);
        transform: rotate(0);
    }
    50% {
        transform: translateX(0px);
        transform: rotate(1deg);
    }
    100% {
        transform: translateX(0);
        transform: rotate(0);
    }
`;
const Container = styled.div`
    width: 320px;
    display: flex;
    align-items: center;
    flex-direction: column; 

    color: #173442;
    border-radius: 5px;
    box-shadow: 0px 4px 8px #00000068;
    height: ${props => props.height};
    cursor: pointer;
    
    animation: ${props => (!props.applyAnimation ? "none" : fadeIn)};
    animation-duration: .2s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    position: relative;

    @media (max-width: 1366px) {
        width: 230px;
        height: auto;
    }

    @media (max-width: 850px) {
        width: 160px;
        height: auto;
    }
    :hover {
        transform: translateY(-1vh)
    }
`
const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #FFFFFF; 
    img {
        max-width: 100%;
        max-height: 100%;
    }
    @media (max-width: 850px) {
        height: 100%;
    }
`
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border-radius: 50px;
  border-bottom: 2px dotted #00929544;
  border-right: 2px dotted #00929544;
  border-top: 4px ridge #009395;
  border-left: 2px dotted #00929544; 
  width: 50px;
  height: 50px;
  animation: ${spinAnimation} 2s linear infinite;
  position: absolute;
  top: 15vh;
`;