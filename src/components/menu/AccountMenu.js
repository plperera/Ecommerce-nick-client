import styled from "styled-components"
import { CiUser } from 'react-icons/ci';
import useNavigateAndMoveUp from "../../hooks/useNavigateAndMoveUp";

export default function AccountMenu () {

    const navigateAndMoveUp = useNavigateAndMoveUp();


    return(
        <Container onClick={() => navigateAndMoveUp({locate:"minha-conta"})}>
            <AccountIcon/>
            <Title>Minha Conta</Title>
        </Container>
    )
}

const Container = styled.div`
    width: 5vw;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;  
    cursor: pointer;
    @media (max-width: 1366px) {
        width: 6vw;
    }
    @media (max-width: 850px) {
        width: auto;
        height: auto;
    }
`
const AccountIcon = styled(CiUser)`
    font-size: 25px;
    color: #FFFFFF; 
    margin-left: -2.4vw;  
    cursor: pointer; 

    @media (max-width: 1366px) {
        font-size: 23px;
        margin-left: -2.4vw;  
    }

    @media (max-width: 850px) {
        font-size: 30px;
        margin: 0;
    }
`
const Title = styled.div`
    color: white;
    margin-left: 0.3vw;
    @media (max-width: 1366px) {
        font-size: 12px;
    }
    @media (max-width: 850px) {
        display: none;
    }
`