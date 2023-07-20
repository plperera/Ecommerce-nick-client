import styled from "styled-components"
import CartItem from "./CartItem"
import { LoadingContainer } from "./LoadingContainer"

export default function CartList ({cartProducts, isLoading, handleProductQuantity}) {
    return(
        isLoading ? (
            <LoadingContainer width={"72%"} height={"56.8461vh"} borderradius={"5px"}/>
        ):(
            <Container>
                <UpperTable>
                <TitleUpperTable width={"45%"} justifyContent={"left"}>{"Produto"}</TitleUpperTable>
                <TitleUpperTable width={"15%"}>{"Preço"}</TitleUpperTable>
                <TitleUpperTable width={"25%"}>{"Quantidade"}</TitleUpperTable>
                <TitleUpperTable width={"15%"}>{"Total"}</TitleUpperTable>
                </UpperTable>
                
                {cartProducts.map(e => <CartItem cartProduct={e} handleProductQuantity={handleProductQuantity}/>)}
            </Container>
        )   
    )
}

const Container = styled.div`
    width: 72%;
    min-height: 600px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding-bottom: 0.5vh;
`
const UpperTable = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 4px solid #ebebebff;
    border-right: none;
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