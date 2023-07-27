import styled, { keyframes } from "styled-components"

export default function MobileCartItem ({cartProduct, handleProductQuantity, isLoadingQuantity}) {
    return(
        <Container>  

            <UpperContainer>
                <ImageContainer>
                    <img src={cartProduct?.images[0]?.imageUrl} alt=""/>
                </ImageContainer> 
                <NameContainer>{cartProduct.name}</NameContainer>
            </UpperContainer>

            <BottomContainer>

                <div>
                    <PriceContainer>
                        <span>{"Preço Unitário: R$ "}</span><span>{ (cartProduct.price / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                    </PriceContainer>

                    <SubTotalContainer>
                        <span>{"SubTotal: R$ "}</span><span>{ ((cartProduct.price / 100) * cartProduct?.quantity).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                    </SubTotalContainer>
                </div>

                <QuantityContainer>
                    <AmountButtons 
                    onClick={() => handleProductQuantity(cartProduct, -1)}
                    >{"-"}</AmountButtons>

                    <LineAmount>
                        <h3>{cartProduct?.quantity}</h3>
                    </LineAmount>

                    <AmountButtons 
                        onClick={() => handleProductQuantity(cartProduct, 1)}
                    >{"+"}</AmountButtons>
                </QuantityContainer>

            </BottomContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: 4px solid #ebebebff;
`
const UpperContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
const ImageContainer = styled.div`
    height: 100px;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2vw;
    img {
        max-width: 100%;
        max-height: 90%;
    }
`
const NameContainer = styled.div`
    height: 100px;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 1vh 2vw;
    font-size: 12px;
    font-weight: 500;
`
const BottomContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & > :first-child {
        display: flex;
        align-items: center;
        justify-content: left;
        flex-direction: column;
        padding-left: 2vw;
    }
`
const PriceContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: left;
    color: #AAAAAA;
    
    & > :first-child {
        font-size: 10px;
    }
    & > :last-child {
        font-size: 12px;
        font-weight: 600;
        margin-left: .5vw;
        margin-bottom: .2vh;
    }
`
const SubTotalContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: left;
    font-weight: 500;

    & > :first-child {
        font-size: 10px;
    }
    & > :last-child {
        font-size: 16px;
        font-weight: 600;
        margin-left: 1vw;
        margin-bottom: .4vh;
    }
`
const QuantityContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    column-gap: 2vw;
`

const AmountButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 25px;
    background-color: #02131bff;
    color: #FFFFFF;
    border-radius: 50px;
    cursor: pointer;
    user-select: none;
`
const LineAmount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    height: 35px;
    width: 60px;
    background-color: #EBEBEB;
    border-radius: 50px;
    h3 { 
        padding: 1.3vh 1.4vw;
        
        
        position: relative;
    }   
`
const backgroundSkeletonAnimation = keyframes`
  0%, 100% { 
    background-position: 0% 0%;
  }
  50% { 
    background-position: 100% 0%;
  }
`;
export const LoadingContainer = styled.div`
  width: 135px;
  height: 40px;
  border-radius: 50px;
  background: linear-gradient(45deg, #E9E9E9, #BDBDBD, #E9E9E9);
  background-size: 300% 300%;
  animation: ${backgroundSkeletonAnimation} 3s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
`
