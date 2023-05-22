import styled from "styled-components"
import logo from "../../assets/images/logo-menu.png"
import SearchBar from "./SearchBar"
import { AiOutlineHeart } from 'react-icons/ai';
import CartMenu from "./CartMenu";
import AccountMenu from "./AccountMenu";

export default function Menu () {

    return(
        <Container>
            <LogoContainer>
                <img src={logo} alt="Nick te ajuda"/>
            </LogoContainer>

            <SubContainer>
                <SearchBar/>
                <HearthIcon/>
                <CartMenu/>
                <AccountMenu/>
            </SubContainer>

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #02131B;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const LogoContainer = styled.div`
    height: 100%;
    width: 14vw;
    display: flex;
    align-items: center;
    justify-content: left;
    img {
        max-width: 14vw;
        max-height: 95%;
        cursor: pointer;
    }
`
const SubContainer = styled.div`
    width: 50vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const HearthIcon = styled(AiOutlineHeart)`
    font-size: 25px;
    color: #FFFFFF; 
    margin-left: -2.4vw;  
    cursor: pointer; 
`