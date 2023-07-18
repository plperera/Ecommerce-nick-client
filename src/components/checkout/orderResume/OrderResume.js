import styled from "styled-components"

export default function OrderResume () {
    return(
        <Container>  
            <Title>{"Resumo do pedido"}</Title>
            <SubContainer>

            </SubContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 32%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
`
const SubContainer = styled.div`
    min-height: 700px;
    width: 100%;
    background-color: #FFFFFF;
    padding: 1vh 0.7vw;
`
const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #CCCCCCCB;
    color: #02131bff;
    padding: 1vh 0;
    font-weight: 600;
`