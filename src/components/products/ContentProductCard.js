import styled from "styled-components"
import { FaStar } from 'react-icons/fa';
import { HiOutlineHeart } from 'react-icons/hi';
import useNavigateAndMoveUp from "../../hooks/useNavigateAndMoveUp";

export default function ContentProductCard ({ productData }) {

    const navigateAndMoveUp = useNavigateAndMoveUp();

    return(
        <Container>
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

            <MiddleContainer onClick={() => navigateAndMoveUp({locate: `produto/${productData.name}`})}>

                <ImageContainer>
                    <img src={productData.image[0].imageUrl} alt={""}/>
                </ImageContainer>

                <Title>{productData.name.substring(0, 40) + ( productData.name.length > 40?("..."):("") )}</Title>
                <SubTitle>{ productData.description }</SubTitle>
                <PriceContainer>
                    {
                        productData?.highPrice ? (
                            <>
                                <HighPrice>
                                    {"De:"} <span>{"R$ "}</span><span>{ (productData.highPrice / 100).toLocaleString('pt-BR') + ",00" }</span>
                                </HighPrice>
                                <LowPrice>
                                    Por: <PriceSign>{"R$ "}</PriceSign><span>{ (productData.price / 100).toLocaleString('pt-BR') + ",00" }</span>
                                </LowPrice>
                            </>
                        ):(
                            <>
                                <LowPrice>
                                    <PriceSign>{"R$ "}</PriceSign><span>{ (productData.price / 100).toLocaleString('pt-BR') + ",00" }</span>
                                </LowPrice>
                            </>
                        )
                    }
                    
                </PriceContainer>

            </MiddleContainer>

            <ButtonContainer>
                <ButtonStyle onClick={() => navigateAndMoveUp({locate: `produto/${productData.name}`})}>{"Comprar"}</ButtonStyle>
            </ButtonContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 18.272vw;
    min-width: 235px;
    max-width: 350px;
    height: 45vh;
    color: #000000;
    background-color: #FFFFFF;
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
`

//UPCONTAINER -----------------------
const UpContainer = styled.div`
    height: 4vh;
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
    font-size: 19px;
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
    font-size: 22px;
    @media (max-width: 1366px) {
        font-size: 19px;
    }
`
const FavoriteStyledIcon = styled(HiOutlineHeart)`
    margin-top: -2.5px;
    font-size: 25px;
    font-weight: 700;
    @media (max-width: 1366px) {
        font-size: 19px;
    }
`

//MIDDLECONTAINER -----------------------
const MiddleContainer = styled.div`
    height: 35vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    cursor: pointer;
`
const ImageContainer = styled.div`

    height: 20vh; 
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
    height: 5vh; //falta 10vh

    display: flex;
    align-items: center;    
    justify-content: center;
    font-size: 17px;
    font-weight: 500;
    text-align: center;
    @media (max-width: 1366px) {
        font-size: 14px; 
        height: 6vh;
    }
`
const SubTitle = styled.div`
    display: none;
    /*
    border: 4px solid red;
    height: 7vh;
    width: 100%;
    font-size: 17px;
    text-align: center; */
`
const PriceContainer = styled.div`
    height: 8vh;
    width: 100%;
    //border: 1px solid red;
    display: flex;
    align-items: center;    
    justify-content: center;
    flex-direction: column;
    font-size: 17px;
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
        font-size: 27px;
        font-weight: 600;

        @media (max-width: 1366px) {
            font-size: 21px;
            margin-bottom: -0.1vh;
        }
    }
`

//BUTTONCONTAINER -----------------------
const ButtonContainer = styled.div`
    border: 0px solid #400F53;
    width: 100%;
    height: 6vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`
const ButtonStyle = styled.div`
    width: 80%;
    height: 65%;
    background-color: #009395;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        width: 82%;
        background-color: #01B0B3;
    }

    @media (max-width: 1366px) {
        font-size: 19px;
    }
`
