import styled from "styled-components"

export default function FooterCheckout ({setContent, content, userData}) {
    return(
        <Container>    
            <div>{"Nick Te Ajuda - Todos os direitos reservados - CNPJ 00.000.000/0000-00"}</div>
            <div>{"Av., 00, SP - CEP 00000-000"}</div>
        </Container>
    )
}

const Container = styled.div`
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #19323d;
    color: #FFFFFF;
    row-gap: 1vh;
    font-size: 12px;
`