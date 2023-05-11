import styled from "styled-components"

export default function Menu () {

    return(
        <Container>
            <SubContainer>
                Menu
            </SubContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 15vh;
    border: 3px solid #E20707;
    padding: 0 10vw;
    position: absolute;
    top: 0;
`
const SubContainer = styled.div`
    width: 100%;
    height: 100%;
    border: 3px solid #500505;
    padding: 0 10vw;
`