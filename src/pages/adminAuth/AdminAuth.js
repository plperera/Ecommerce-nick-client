import styled from "styled-components"
import Login from "../../components/adminAuth/Login"

export default function AdminAuth () {
    return(
        <Container>
            <Login/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #0A1F2A;
    display: flex;
    justify-content: center;
    padding-top: 14vh;
`