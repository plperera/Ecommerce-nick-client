import styled from "styled-components"

export default function Identification () {
    return(
        <Container>  
            <Title>{"Identificação"}</Title>
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
    height: 700px;
    width: 100%;
    background-color: #E4E4E4;
`
const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #CCCCCC;
    color: #616161;
    padding: 1vh 0;
`