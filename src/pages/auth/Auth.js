import styled from "styled-components"
import Login from "../../components/auth/Login"
import SignUp from "../../components/auth/SignUp"
import { useState } from "react"

export default function Auth () {

    const [hasLogin, setHasLogin] = useState(true)

    return(
        <Container>
            {hasLogin ? (<Login setHasLogin={setHasLogin}/>):(<SignUp setHasLogin={setHasLogin}/>)}
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