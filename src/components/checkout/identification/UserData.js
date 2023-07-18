import styled from "styled-components"

export default function UserData () {
    return(
        <Container>  
            <Title>{"Dados pessoais"}</Title>

            <h3>{"Nome Completo"}</h3>
            <h4>{"Pedro Leoncio Pereira"}</h4>

            <h3>{"E-mail"}</h3>
            <h4>{"plp.leoncio@gmail.com"}</h4>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 1.5vh;
    border-bottom: 3px solid #e6e6e6ff;
    
    h3 {
        display: flex;
        align-items: center;
        justify-content: left;
        width: 100%;
        color: #B3BCC2;
        font-weight: 600;
        font-size: 13px;
        padding: 1vh 0 0.4vh 0;
    }
    h4 {
        display: flex;
        align-items: center;
        justify-content: left;
        width: 100%;
        color: #283338ff;
        font-weight: 600;
        font-size: 13px;
        //border: 1px solid red;
        padding: 0.4vh 0;
    }
`
const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    color: #009395ff;
    font-weight: 600;
    padding: 1vh 0;
`
