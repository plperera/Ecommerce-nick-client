import styled, { keyframes } from "styled-components"
import Button from "../../common/form/Button"

export default function CategoryCard ({indice, category, applyAnimation, navigateAndMoveUp}) {

    return(
        <Container height={"425px"} applyAnimation={applyAnimation} onClick={() => navigateAndMoveUp({locate:`catalogo/${category.title}`})}>
            <ImageContainer><img src={category.imageUrl} alt=""/></ImageContainer>
            <Title>{category.title}</Title>
            

                <SubContainer  display={"initial"}> 
                    <SubTitle>{category.subTitle}</SubTitle>
                    <ButtonContainer>
                        <Button
                            width={"calc(92% - 1.4vw)"} 
                            height={"40px"} 
                            fontsize={"18px !important"} 
                            background={"#008183 !important"} 
                            backgroundhover={"#009395ff !important"}
                        >
                            {"Ver Produtos"}
                        </Button>
                    </ButtonContainer>
                </SubContainer>
            
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
    padding: 2vh 0 1.8vh 0;
    display: flex;
    align-items: center;
    flex-direction: column; 
    row-gap: 1vh;
    background-color: #FFFFFF; 
    color: #173442;
    border-radius: 5px;
    box-shadow: 0px 4px 8px #00000068;
    height: ${props => props.height};
    cursor: pointer;
    
    animation: ${props => (!props.applyAnimation ? "none" : fadeIn)};
    animation-duration: .2s;
    animation-timing-function: linear;
    animation-iteration-count: 1;

    @media (max-width: 850px) {
        width: 140px;
        height: 100%;
    }
`
const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    padding: 7px 0;
    background-color: #FFFFFF; 
    img {
        max-width: 100%;
        max-height: 100%;
    }
    @media (max-width: 850px) {
        height: 150px;
    }
`
const Title = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    text-align: center;
    width: 100%;
    padding: 8px 1.4vw;
    font-weight: 700;
    max-height: 40px;
    height: auto;

    @media (max-width: 850px) {
        font-size: 14px;
        padding: 0 1.4vw;
    }
`
const SubTitle = styled(Title)`
    font-weight: 500;
    max-height: 100px;
    @media (max-width: 850px) {
        font-size: 12px;
        padding: 0 1.4vw;
    }
`
const ButtonContainer = styled(Title)`
    height: 55px;
    max-height: 100px;
    @media (max-width: 850px) {
        display: none;
    }
`
const loadAnimation = keyframes`
    0% { 
        opacity: 0; 
    }
    100% { 
        opacity: 1; 
    }
`;

const SubContainer = styled.div`
    display: ${props => props.display};
    animation: ${props => (!props.isLoading ? "none" : loadAnimation)};
    animation-duration: 0.5s;
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    animation-iteration-count: 1;
    width: 100%;

    @media (max-width: 850px) {
        display: initial;
    }
`