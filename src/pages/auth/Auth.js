import styled from "styled-components"
import Login from "../../components/auth/Login"

export default function Auth () {
    return(
        <Container>
            <Login/>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 14vh;
    width: 100%;
    min-height: 73vh;
    background-color: #0A1F2A;
    display: flex;
    justify-content: center;
    padding-top: 4vh;
`