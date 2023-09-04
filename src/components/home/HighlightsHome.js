import styled, { keyframes } from "styled-components"
import { useEffect, useState } from "react"
import useNavigateAndMoveUp from "../../hooks/useNavigateAndMoveUp"
import ContentProductCard from "../products/ContentProductCard"

export default function HighlightsHome ({ products }) {
    const [ slide, setSlide ] = useState(0)
    const [ applyAnimation, setApplyAnimation ] = useState(false)

    useEffect(() => {

        setApplyAnimation(true)

        setTimeout(() => {
            setApplyAnimation(false)
        }, 200); 
      
    }, [slide]);


    function ChangeSlide(changeAmount){
        let newSlide = slide + changeAmount;

        if (newSlide > products.length - 1) {
            newSlide = 0;
        }
    
        if (newSlide < 0) {
            newSlide = products.length - 1;
        }
        setSlide(newSlide);
    }
    
    return(
        <Container>
            <Title>{"Produtos em destaque"}</Title>

            <LeftArrowContainer onClick={() =>  applyAnimation ? (""):(ChangeSlide(-1))}>{"<"}</LeftArrowContainer>
            
            <ProductContainer>
                {products ? (
                    Array(products.length > 4 ?(4):(products.length)).fill(0).map((_, i) => {
                        const index = (slide + i) % products.length;
                        return <ContentProductCard productData={products[index]} key={index}/>
                    })
                ):(
                    <SpinnerContainer>
                        <Spinner/>
                    </SpinnerContainer>
                )}

            </ProductContainer>

            <MobileProductContainer>
                {products ? (
                    Array(products.length > 2 ?(2):(products.length)).fill(0).map((_, i) => {
                        const index = (slide + i) % products.length;
                        return <ContentProductCard productData={products[index]} key={index}/>
                    })
                ):(
                    <SpinnerContainer>
                        <Spinner/>
                    </SpinnerContainer>
                )}
            </MobileProductContainer>

            <RightArrowContainer onClick={() =>  applyAnimation ? (""):(ChangeSlide(1))}>{">"}</RightArrowContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    min-height: 56vh;
    padding: 4vh 10vw;
    padding-bottom: 6vh;
    display: flex;
    flex-direction: column;
    row-gap: 4vh;
    @media (max-width: 1366px) {
        padding: 0 4vw;  
        padding-top: 5vh;  
        row-gap: 0vh; 
    }
    @media (max-width: 850px) {
        padding: 3vh 4vw;  
        min-height: 20vh;
        row-gap: 3vh; 
    } 
`
const Title = styled.h1`
    border-left: 8px solid #009395;
    font-size: 42px;
    font-weight: 600;
    padding-left: 1vw;
    @media (max-width: 1366px) {
        font-size: 36px;    
    }
    @media (max-width: 850px) {
        font-size: 26px;
        padding-left: 2.2vw;
    }
`
const ProductContainer = styled.div`    
    width: 100%;
    height: 425px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 2.6vw;
    user-select: none;
    @media (max-width: 850px) {
        display: none;
    }   
`
const MobileProductContainer = styled(ProductContainer)`
    display: none;
    @media (max-width: 850px) {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 4vw;
        user-select: none;   
    }
` 

const ArrowContainer = styled.div`
    position: absolute;
    width: 40px;
    height: 100px;
    top: 164vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 70px;
    font-weight: 600;
    user-select: none;
    cursor: pointer;
    color: #009395ff;
    &:hover {
        color: #00BFC2;
    }
    @media (max-width: 1366px) {
        top: 170vh;
    }
    @media (max-width: 850px) {
        top: 140vh;
        font-size: 60px;
    }
`
const LeftArrowContainer = styled(ArrowContainer)`
    left: 3vw;
    display: ${props => props.display};
    @media (max-width: 1366px) {
        left: 2vw;
    }
    @media (max-width: 850px) {
        left: .6vw;
        justify-content: left;
    }
`
const RightArrowContainer = styled(ArrowContainer)`
    right: 3vw;
    display: ${props => props.display};
    @media (max-width: 1366px) {
        right: 2vw;
    }
    @media (max-width: 850px) {
        right: .6vw;
        justify-content: right;
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
  width: 70px;
  height: 70px;
  animation: ${spinAnimation} 2s linear infinite;
  //background-color: red;
`;
const SpinnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`