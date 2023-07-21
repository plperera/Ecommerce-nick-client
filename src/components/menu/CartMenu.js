import styled from "styled-components"
import { BsCart3 } from 'react-icons/bs';
import UserContext from "../../context/UserContext";
import { useContext } from "react";

export default function CartMenu ({ navigateAndMoveUp }) {

    const { userData } = useContext(UserContext);

    return(
        <Container onClick={() => navigateAndMoveUp({locate: "carrinho"})}>

            <CartIcon/> 
            <CartAmountContainer 
                size={userData?.cart?.length > 0 ? ("23px"):("0px")}
                fontsize={userData?.cart?.length > 0 ? ("15px"):("0px")}
            >
                {userData?.cart?.length}
            </CartAmountContainer>
            
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
const CartAmountContainer = styled.div`
    width: ${props => props.size};
    height: ${props => props.size};
    background-color: #009395ff;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF; 
    font-size: ${props => props.fontsize};
    position: absolute;
    right: 23.1vw;
    top: 3.2vh;
`