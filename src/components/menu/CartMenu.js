import styled, { keyframes } from "styled-components"
import { BsCart3 } from 'react-icons/bs';
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function CartMenu ({ navigateAndMoveUp }) {

    const { userData } = useContext(UserContext);
    const [ animation, setAnimation ] = useState(false)
    const [ animationKey , setAnimationKey ] = useState(0)

    useEffect(() => {

        if(animationKey === 0){
            setAnimationKey(animationKey + 1)
            return
        }

        setAnimation(true)
        setAnimationKey(animationKey + 1)

        setTimeout(() => {
            setAnimation(false)
        },[1000])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userData?.cart])

    return(
        <Container onClick={() => navigateAndMoveUp({locate: "carrinho"})}>

            <CartIcon/> 
            <CartAmountContainer 
                key={animationKey}
                size={userData?.cart?.length > 0 ? ("23px"):("0px")}
                fontsize={userData?.cart?.length > 0 ? ("15px"):("0px")}
                animation={animation}
                playstate={animationKey > 1}
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

    @media (max-width: 850px) {
        width: auto;
    }
`
const CartIcon = styled(BsCart3)`
    font-size: 25px;
    color: #FFFFFF; 
    margin-left: -2.4vw;   
    @media (max-width: 1366px) {
        font-size: 23px;
    }
    @media (max-width: 850px) {
        font-size: 30px;
    }
`
const spinAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.7);
    background-color: #00FBFF;
  }
  100% {
    transform: scale(1);
  }
`;
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
    animation:${spinAnimation} 0.2s linear 1;
    animation-play-state: ${props => props.playstate ? ("running"):("paused")};
    right: 23.1vw;
    top: 3.2vh;
    user-select: none;

    @media (max-width: 850px) {
        right: 44vw;
        top: 11vh;
    }
`