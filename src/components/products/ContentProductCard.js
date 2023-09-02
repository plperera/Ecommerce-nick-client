import styled, { keyframes } from "styled-components"
import { FaStar } from 'react-icons/fa';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import useNavigateAndMoveUp from "../../hooks/useNavigateAndMoveUp";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/API";
import useToken from "../../hooks/useToken";
import UserContext from "../../context/UserContext";

export default function ContentProductCard ({ productData }) {

    const navigateAndMoveUp = useNavigateAndMoveUp();

    const [isLoading, setIsLoading] = useState(true);
    const { userData, setUserData } = useContext(UserContext);
    const [ hasFavorite, setHasFavorite ] = useState(false)
    const token = useToken()

    useEffect(() => {

        if(!userData?.token){
            return
        }

        setHasFavorite(userData?.favorites?.some(e => e.productId === productData.productId))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userData])

    function handleFavorite(){

        if (!userData?.token) {
            return
        }

        if(userData?.favorites?.some(e => e.productId === productData.productId)){
            removeFavorite()
            return
        }

        createFavorite()

    }

    async function createFavorite(){
        try {
            const result = await api.AddNewFavorite({token, body: {productId: productData.productId}})
            
            if( result.status === 201){
                toast.dark("Produto adicionado aos favoritos")
                const newFavorites = [...userData?.favorites, {productId: productData.productId}]
                setUserData({...userData, favorites: newFavorites})
            }

        } catch (error) {
            toast.error("Ocorreu um erro, tente novamente")
            console.log(error)
        }
    }

    async function removeFavorite(){
        try {
            const result = await api.DeleteFavorite({token, body: {productId: productData.productId}})

            if( result.status === 200){
                const newFavorites = userData?.favorites?.filter(e => e.productId !== productData.productId)
                setUserData({...userData, favorites: newFavorites})
            }

        } catch (error) {
            toast.error("Ocorreu um erro, tente novamente")
            console.log(error)
        }
    }

    return(
        <Container>
            <UpContainer>

                <RateSession>
                    <RateStyledIcon/>
                    <div>{ 9.9 }</div>
                </RateSession>

                <FavoriteSession onClick={() => handleFavorite()}>
                    {hasFavorite ? (<FavoriteFilledStyledIcon/>):(<FavoriteStyledIcon/>)}
                </FavoriteSession>

            </UpContainer>

            <MiddleContainer onClick={() => navigateAndMoveUp({locate: `produto/${encodeURIComponent(productData.name)}`})}>

                <ImageContainer>

                    {isLoading && <Spinner />}

                    <img 
                        src={productData?.images[0]?.imageUrl} alt={""}
                        onLoad={() => setIsLoading(false)} 
                        style={{ display: isLoading ? "none" : "block" }}
                    />
                    
                </ImageContainer>

                <Title>{productData.name.substring(0, 40) + ( productData.name.length > 40?("..."):("") )}</Title>
                <SubTitle>{ productData.description }</SubTitle>
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
                            productData.price === 0 ? (
                                <></>
                            ):(
                                <LowPrice>
                                    <PriceSign>{"R$ "}</PriceSign><span>{ (productData.price / 100).toLocaleString('pt-BR')}</span>
                                </LowPrice>
                            ) 
                        )
                    }
                    
                </PriceContainer>

            </MiddleContainer>

            <ButtonContainer>
                {productData.price === 0 ? (
                    <BudgetButtonStyle onClick={() => navigateAndMoveUp({locate: `produto/${productData.name}`})}>{"Orçamento"}</BudgetButtonStyle>
                ):(
                    <ButtonStyle onClick={() => navigateAndMoveUp({locate: `produto/${productData.name}`})}>{"Comprar"}</ButtonStyle>
                )} 
            </ButtonContainer>
        </Container>
    )
}

const Container = styled.div`
    flex-shrink: 0;
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
    &:hover{ 
        transform: translateY(-1vh);
    }

    @media (max-width: 1366px) {
        padding: 1vh 1vw;
        height: 46vh;
    }
    
    @media (max-width: 850px) {
        min-width: 150px;
        width: 150px;
        min-height: 35vh;
        height: auto;
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

    @media (max-width: 850px) {
        height: 2vh;
    } 
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
    @media (max-width: 850px) {
        gap: 0;
        column-gap: 3px;
        font-size: 9px;
        padding: 0 1.5vw;
    } 
`
const RateSession = styled(DetailsSession)`
    justify-content: left; 
    color: #01989D;
`
const FavoriteSession = styled(DetailsSession)`
    justify-content: right;
    cursor: pointer;
    user-select: none;
`
const RateStyledIcon = styled(FaStar)`
    margin-top: -2.5px;
    font-size: 22px;
    @media (max-width: 1366px) {
        font-size: 19px;
    }
    @media (max-width: 850px) {
        font-size: 14.5px;
    }
`
const FavoriteStyledIcon = styled(HiOutlineHeart)`
    margin-top: -2.5px;
    font-size: 29px;
    font-weight: 700;
    @media (max-width: 1366px) {
        font-size: 21px;
    }
    @media (max-width: 850px) {
        font-size: 16px;
    }
`
const FavoriteFilledStyledIcon = styled(HiHeart)`
    margin-top: -2.5px;
    font-size: 29px;
    font-weight: 700;
    @media (max-width: 1366px) {
        font-size: 21px;
    }
    @media (max-width: 850px) {
        font-size: 16px;
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

    @media (max-width: 850px) {
        height: auto;
    }
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

    @media (max-width: 850px) {
        height: 120px;
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
    @media (max-width: 850px) {
        height: 50px;
        font-size: 11.5px;
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
    @media (max-width: 850px) {
        height: 40px;
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
        text-decoration-color: #009395ff;
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

        @media (max-width: 850px) {
            font-size: 16px;
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
    @media (max-width: 850px) {
        font-size: 14px;
        padding: 1.5vh 0;
        width: 80%;
        height: 45%;
    }
`
const BudgetButtonStyle = styled(ButtonStyle)`
    @media (max-width: 850px) {
        font-size: 15px;
        padding: 2.2vh 0;
        width: 80%;
        height: 45%;
        margin: -1vh;
        &:hover {
            background-color: #088DDA;
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