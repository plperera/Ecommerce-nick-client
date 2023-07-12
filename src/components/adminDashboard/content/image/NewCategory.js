import styled from "styled-components"
import ImageCreator from "../creator/ImageCreator"

export default function NewImage () {
    return(
        <Container>

            <h1>{"Nova Imagem"}</h1>

            <ImageCreator/>
           
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
`