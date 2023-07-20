import styled from "styled-components"
import { BsCart3 } from 'react-icons/bs';

export default function CartMenu ({ navigateAndMoveUp }) {

    return(
        <Container onClick={() => navigateAndMoveUp({locate: "carrinho"})}>
            <CartIcon/>
        </Container>
    )
}

const Container = styled.div`
    width: 2vw;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;  
    cursor: pointer;
    /* z-index:2;
    border: 1px solid green;   */
`
const CartIcon = styled(BsCart3)`
    font-size: 25px;
    color: #FFFFFF; 
    margin-left: -2.4vw;   
    @media (max-width: 1366px) {
        font-size: 23px;
    }
`