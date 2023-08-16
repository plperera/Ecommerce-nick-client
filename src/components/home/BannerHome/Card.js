import styled from "styled-components"
import cardPropaganda from "../../../assets/images/Card-Teste-Propaganda.png"
export default function Card () {

    return(
        <Container>
            <ImageContainer>
                <img src={cardPropaganda} alt="" />  
            </ImageContainer>
            
        </Container>
    )
}

const Container = styled.div`
    width: 20%;
    height: 100%;
    background-color: #e6e6e6ff;
    padding: 3vh 2vw;
    @media (max-width: 850px) {
        height: 53vh;
    }
`
const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
`