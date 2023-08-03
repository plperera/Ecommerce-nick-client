import styled from "styled-components"
import CategoryCreator from "../creator/CategoryCreator"

export default function NewCategory () {
    return(
        <Container>

            <h1>{"Nova Categoria"}</h1>

            <CategoryCreator/>
        
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: #171717;
    width: 100%;
    font-size: 21px;
    font-weight: 500;
    padding: 25px 1.4vw;
    h1 {
        font-size: 25px;
        margin-bottom: 2vh;
        font-weight: 600;
    }
    @media (max-width: 850px) {
        width: 100%;
    }
`