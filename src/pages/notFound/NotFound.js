import styled from "styled-components"

export default function NotFound () {

    return(
        <Container>
            <h1>{"Página não encontrada."}</h1>
        </Container>
    )
}

const Container = styled.div`
    min-height: 61vh;
    margin-top: 14vh;
    background-color: #0A1F2A;
    display: flex;
    align-items: start;
    justify-content: center;
    padding-top: 10vh;
    h1 {
        color: #D8D8D8;
        font-size: 40px;
        font-weight: 700;
        letter-spacing: 0.5px;
    }
`