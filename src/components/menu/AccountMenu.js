import styled from "styled-components"
import { CiUser } from 'react-icons/ci';

export default function AccountMenu () {

    return(
        <Container>
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
`
const AccountIcon = styled(CiUser)`
    font-size: 25px;
    color: #FFFFFF; 
    margin-left: -2.4vw;  
    cursor: pointer; 
`
const Title = styled.div`
    color: white;
    margin-left: 0.3vw;
`