import styled, { keyframes } from "styled-components"
import { FaStar } from 'react-icons/fa';
import { HiOutlineHeart } from 'react-icons/hi';
import { useState } from "react";

export default function ProductCard ({ productData, setSelectedProduct }) {
    const [isLoading, setIsLoading] = useState(true);

    return(
        <Container onClick={() => setSelectedProduct(productData)} opacity={productData.isActive ? ("1"):("0.5")}>
            <UpContainer>

                <RateSession>
                    <RateStyledIcon/>
                    <div>{ 9.9 }</div>
                </RateSession>               

                <FavoriteSession>
                    <div>{"Favoritar"}</div>
                    <FavoriteStyledIcon/>
                </FavoriteSession>

            </UpContainer>

            <MiddleContainer>

                <ImageContainer>

                    {isLoading && <Spinner />}

                    <img 
                        src={productData?.images[0]?.imageUrl} alt={""}
                        onLoad={() => setIsLoading(false)} 
                        style={{ display: isLoading ? "none" : "block" }}
                    />
                    
                </ImageContainer>

                <Title>{productData.name.substring(0, 40) + ( productData.name.length > 40?("..."):("") )}</Title>
                <PriceContainer>
                    {
                        productData?.highPrice ? (
                            <>
                                <HighPrice>
                                    {"De:"} <span>{"R$ "}</span><span>{ (productData.highPrice / 100).toLocaleString('pt-BR')}</span>
                                </HighPrice>
                                <LowPrice>
                                    Por: <PriceSign>{"R$ "}</PriceSign><span>{ (productData.price / 100).toLocaleString('pt-BR')}</span>
                                </LowPrice>
                            </>
                        ):(
                            <>
                                <LowPrice>
                                    
                                    {productData.price === 0 ? (<span>{"ORÇAMENTO"}</span>):(<><PriceSign>{"R$ "}</PriceSign><span>{ (productData.price / 100).toLocaleString('pt-BR')}</span></>)}
                                </LowPrice>
                            </>
                        )
                    }
                    
                </PriceContainer>
            </MiddleContainer>
        </Container>
    )
}

const Container = styled.div`
    flex-shrink: 0;
    width: 13vw;
    height: 28vh;
    color: #000000;
    background-color: #FFFFFF;
    opacity: ${props => props.opacity};
    box-shadow: 0px 4px 8px #00000068;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 0.5vh 1vw;
    @media (max-width: 1366px) {
        padding: 1vh 1vw;
        height: 46vh;
    }
    &:hover{ 
        transform: translateY(-1vh);
    }
`

//UPCONTAINER -----------------------
const UpContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`
const DetailsSession = styled.div`
    height: 2vh;
    width: 50%;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    font-weight: 600;
    @media (max-width: 1366px) {
        font-size: 14.5px;
        gap: 3px; 
    }
`
const RateSession = styled(DetailsSession)`
    justify-content: left; 
    color: #01989D;
`
const FavoriteSession = styled(DetailsSession)`
    justify-content: right;
`
const RateStyledIcon = styled(FaStar)`
    margin-top: -2.5px;
    font-size: 15px;
    @media (max-width: 1366px) {
        font-size: 19px;
    }
`
const FavoriteStyledIcon = styled(HiOutlineHeart)`
    margin-top: -2.5px;
    font-size: 15px;
    font-weight: 700;
    @media (max-width: 1366px) {
        font-size: 19px;
    }
`

//MIDDLECONTAINER -----------------------
const MiddleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    cursor: pointer;
`
const ImageContainer = styled.div`
    height: 15vh; 
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100%;
        max-height: 100%;
    }
`
const Title = styled.div`

    width: 100%;
    height: 4vh;
    display: flex;
    align-items: center;    
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    @media (max-width: 1366px) {
        font-size: 14px; 
        height: 6vh;
    }
`
const PriceContainer = styled.div`
    height: 4vh;
    width: 100%;
    display: flex;
    align-items: center;    
    justify-content: center;
    flex-direction: column;
    font-weight: 500;
    text-align: center;
    @media (max-width: 1366px) {
        font-size: 15px; 
        font-weight: 600;
        height: 7vh;
    }
`
const PriceCommonStyle = styled.div`
    width: 100%;
    //border: 1px solid;
    display: flex;
    align-items: self-end;
    justify-content: center;
`
const PriceSign = styled.span`
    margin-left: 0.3vw;
`
const HighPrice = styled(PriceCommonStyle)`
    height: 3vh;
    border-color: #298F47;
    color: #494949;
    span {
        text-decoration: line-through;
        text-decoration-thickness: 2px;
        text-decoration-color: #FFB685;
    }
    
`
const LowPrice = styled(PriceCommonStyle)`
    height: 4.5vh;
    border-color: #29558F;
    color: #171717;
    padding-bottom: 1vh;
    span {
        font-size: 16px;
        font-weight: 600;

        @media (max-width: 1366px) {
            font-size: 21px;
            margin-bottom: -0.1vh;
        }
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
  //background-color: red;
`;