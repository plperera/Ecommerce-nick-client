import styled from "styled-components"

export default function Footer () {

    return(
        <Container>
            <SubContainer>
                Rodape
            </SubContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 15vh;
    background-color: #A7A8D3;
    padding: 0 10vw;
`
const SubContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #8A8BB1;
    padding: 0 10vw;
    display: flex;
    align-items: center;
    justify-content: center;
`