import styled, { keyframes } from "styled-components"
import { PriceSign } from "./PriceSign"

export default function CartItem ({cartProduct, handleProductQuantity, isLoadingQuantity}) {
    return(
        <Container>    
            <TableItem width={"45%"} justifyContent={"space-evenly"}>
                <ImageContainer>
                    <img src={cartProduct?.images[0]?.imageUrl} alt=""/>
                </ImageContainer> 
                <LineProductName>{cartProduct.name}</LineProductName>
            </TableItem>

            <TableItem width={"15%"}>
                <LinePrice>
                    <PriceSign>{"R$ "}</PriceSign><span>{ (cartProduct.price / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                </LinePrice>
            </TableItem>

            <TableItem width={"25%"} columnGap={"6px"}>
                {isLoadingQuantity ? (
                    <LoadingContainer/>
                ):(
                    <>
                        <AmountButtons 
                        onClick={() => handleProductQuantity(cartProduct, -1)}
                        >{"-"}</AmountButtons>

                        <LineAmount>
                            <h3>{cartProduct?.quantity}</h3>
                        </LineAmount>

                        <AmountButtons 
                            onClick={() => handleProductQuantity(cartProduct, 1)}
                        >{"+"}</AmountButtons>
                    </>
                )}
            </TableItem>

            <TableItem width={"15%"}>
                <LineTotal>
                    <PriceSign fontSize={"17px"} >{"R$ "}</PriceSign><span>{ ((cartProduct.price / 100) * cartProduct?.quantity).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                </LineTotal>
            </TableItem>          
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 4px solid #EBEBEB53;
`
const TableItem = styled.div`
    width: ${props => props.width || "auto"};
    display: flex;
    align-items: center;
    justify-content: ${props => props.justifyContent || "center"};
    column-gap: ${props => props.columnGap || "none"};
    padding: 1.6vh 1vw;
    font-size: 18px;
    font-weight: 500;
`
const ImageContainer = styled.div`
    width: 50%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    img {
        max-width: 100%;
        max-height: 100%;
    }
`
const LineProductName = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    height: 150px;
    width: 50%;
    padding: 3px;
    font-size: 14px;
    font-weight: 500;
`
const LineDefault = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    width: 100%;
    padding: 3px;
    font-size: 14px;
    font-weight: 500;
`
const LinePrice = styled(LineDefault)`
    font-size: 17px;
`
const LineAmount = styled(LineDefault)`
    width: auto;
    h3 { 
        padding: 1.3vh 1.4vw;
        background-color: #EBEBEB;
        border-radius: 50px;
        position: relative;
    }   
`
const LineTotal = styled(LineDefault)`
    font-size: 21px;
    font-weight: 700;
    color: #02131bff;
`
const AmountButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: auto;
    padding: 0.5vh 0.5vw;
    background-color: #02131bff;
    color: #FFFFFF;
    border-radius: 50px;
    cursor: pointer;
    user-select: none;
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
