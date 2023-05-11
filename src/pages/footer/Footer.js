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
    border: 3px solid #070BE2;
    padding: 0 10vw;
`
const SubContainer = styled.div`
    width: 100%;
    height: 100%;
    border: 3px solid #070550;
    padding: 0 10vw;
`