import styled from "styled-components"
import logo from "../../assets/images/logoSVG/LogoWhite (2).svg"
import SearchBar from "./SearchBar"
import { AiOutlineHeart } from 'react-icons/ai';
import CartMenu from "./CartMenu";
import AccountMenu from "./AccountMenu";
import useNavigateAndMoveUp from "../../hooks/useNavigateAndMoveUp";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

export default function Menu ({ setExpandMenu }) {

    const navigateAndMoveUp = useNavigateAndMoveUp();
    const { userData } = useContext(UserContext);

    function handleFavorite(){
        if (!userData?.token) {
            navigateAndMoveUp({locate: `auth`})
            return
        }
        navigateAndMoveUp({locate: `favoritos`})
    }

    return(
        <Container onMouseEnter={() => setExpandMenu(false)}>

            <LogoContainer onClick={() => navigateAndMoveUp({locate: ""})}>
                <img src={logo} alt="Nick te ajuda"/>
            </LogoContainer>

            <SubContainer>
                <SearchBar navigateAndMoveUp={navigateAndMoveUp}/>
                <HearthIcon onClick={() => handleFavorite()}/>
                <CartMenu navigateAndMoveUp={navigateAndMoveUp}/>
                <AccountMenu/>
            </SubContainer>

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    //height: 75%;
    height: 100%;
    padding: 0 10vw;
    background-color: #02131B;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1366px) {
        padding: 0 4vw;
    }
    @media (max-width: 850px) {
        flex-wrap: wrap;
        height: 100%;
    }
`
const LogoContainer = styled.div`
    height: 100%;
    width: 14vw;
    display: flex;
    align-items: center;
    justify-content: left;
    img {
        max-width: 12vw;
        max-height: 85%;
        cursor: pointer;
    }

    @media (max-width: 850px) {
        width: 100%;
        height: 9vh;
        justify-content: center;
        img {
            max-width: 100%;
            max-height: 70%;
        }
    }
`
const SubContainer = styled.div`
    width: 50vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 850px) {
        width: 100%;
        //border: 2px solid red;
        padding: 2vh 3vw;
        & > :first-child {
            display: none;
        }
    }
`
const HearthIcon = styled(AiOutlineHeart)`
    font-size: 25px;
    color: #FFFFFF; 
    margin-left: -2.4vw;  
    cursor: pointer; 

    @media (max-width: 1366px) {
        font-size: 23px;
    }
    @media (max-width: 850px) {

        margin-left: 0;
        font-size: 30px;

    }
`