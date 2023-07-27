import styled from "styled-components"
import CartItem from "./CartItem"
import { LoadingContainer } from "./LoadingContainer"
import MobileCartItem from "./MobileCartItem"

export default function CartList ({cartProducts, isLoading, handleProductQuantity, isLoadingQuantity}) {
    console.log(isLoading)
    return(
        isLoading ? (
            <LoadingContainer width={"72%"} height={"56.8461vh"} borderradius={"5px"}/>
        ):(
            <>
                <MobileTitle>{"Carrinho"}</MobileTitle>

                <Container>
                    <UpperTable>
                        <TitleUpperTable width={"45%"} justifyContent={"left"}>{"Produto"}</TitleUpperTable>
                        <TitleUpperTable width={"15%"}>{"Preço"}</TitleUpperTable>
                        <TitleUpperTable width={"25%"}>{"Quantidade"}</TitleUpperTable>
                        <TitleUpperTable width={"15%"}>{"Total"}</TitleUpperTable>
                    </UpperTable>

                    

                    <CartItemContainer>
                        {cartProducts.map(e => <CartItem cartProduct={e} handleProductQuantity={handleProductQuantity} isLoadingQuantity={isLoadingQuantity}/>)}
                    </CartItemContainer>

                    <MobileCartItemContainer>
                        {cartProducts.map(e => <MobileCartItem cartProduct={e} handleProductQuantity={handleProductQuantity} isLoadingQuantity={isLoadingQuantity}/>)}
                    </MobileCartItemContainer>
                    
                </Container>
            </>
        )   
    )
}

const Container = styled.div`
    width: 72%;
    min-height: 600px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding-bottom: 0.5vh;

    @media (max-width: 850px) {
        width: 100%;
        min-height: 0px;
        padding-bottom: 2vh;
    }
`
const UpperTable = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 4px solid #ebebebff;
    border-right: none;

    @media (max-width: 850px) {
        display: none;
    }
`
const TitleUpperTable = styled.div`
    width: ${props => props.width || "auto"};
    display: flex;
    align-items: center;
    justify-content: ${props => props.justifyContent || "center"};
    padding: 1.6vh 1vw;
    font-size: 18px;
    font-weight: 500;
`
const CartItemContainer = styled.div`
    display: inherit;
    @media (max-width: 850px) {
        display: none;
    }
`
const MobileCartItemContainer = styled.div`
    display: none;
    @media (max-width: 850px) {
        display: inherit;
    }
`
const MobileTitle = styled.div`
    width: 100%;
    display: none;
    align-items: center;
    height: 4.5vh;
    border-left: 8px solid #01989D;
    color: #FFFFFF;
    font-size: 24px;
    padding-left: 1.6vw;

    @media (max-width: 850px) {
        display: flex;
    }
`