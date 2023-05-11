import styled from "styled-components"

export default function Home () {

    return(
        <Container>
            <SubContainer>
                Home
            </SubContainer>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 15vh;
    width: 100%;
    height: 70vh;
    border: 3px solid #00FE15;
    padding: 0 10vw;
`
const SubContainer = styled.div`
    width: 100%;
    height: 100%;
    border: 3px solid #003B05;
    padding: 0 10vw;
`