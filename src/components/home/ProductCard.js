import styled, { keyframes } from "styled-components"
import useNavigateAndMoveUp from "../../hooks/useNavigateAndMoveUp";
import { useState } from "react";

export default function ProductCard ({product}) {

    const [isLoading, setIsLoading] = useState(true);
    const navigateAndMoveUp = useNavigateAndMoveUp();

    return(
        <Container> 

            <TopContainer>
                <RateContainer>★ 9.9</RateContainer>
                <LikeContainer>Favoritar ♥</LikeContainer>
            </TopContainer>

            <BottomContainer  onClick={() => navigateAndMoveUp({locate: "produto/NOVASI400"})}>
                <ImageContainer>
                    {isLoading && <Spinner />}
                    <img src={product?.images[0]?.imageUrl} alt="" onLoad={() => setIsLoading(false)} style={{ display: isLoading ? "none" : "block" }}/>
                </ImageContainer>
                <Title>{product.name}</Title>
                <Price>
                    {product.price}
                </Price>
                <ButtonStyle>Comprar</ButtonStyle>
            </BottomContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 350px;
    height: 100%;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 8px #00000068;
    padding: 2vh;
`
const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`
const RateAndLike = styled.div`
    height: 2vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 19px;
    font-weight: 700;
    @media (max-width: 1366px) {
        font-size: 16.5px; 
    }
`
const RateContainer = styled(RateAndLike)`

`
const LikeContainer = styled(RateAndLike)`

`
const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const ImageContainer = styled.div`
    width: 100%;
    height: 23vh;
    margin-top: 1vh;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        max-height: 23vh;
        max-width: 100%;
    }
`
const Title = styled.h1`
    font-size: 20px;
    font-weight: 500;
    margin-top: 1vh;
    text-align: center;
    @media (max-width: 1366px) {
        font-size: 18px; 
    }
`
const Price = styled.p`
    margin-top: 2.5vh;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    @media (max-width: 1366px) {
        font-size: 18px; 
        font-weight: 600;
    }
`
const ButtonStyle = styled.div`
    margin-top: 4vh;
    width: 220px;
    height: 38px;
    background-color: #009395;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        width: 230px;
        background-color: #01B0B3;
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
`;