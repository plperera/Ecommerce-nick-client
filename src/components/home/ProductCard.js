import styled from "styled-components"
import produto01 from "../../assets/images/produto-em-destaque01.png"

export default function ProductCard () {

    return(
        <Container> 

            <TopContainer>
                <RateContainer>★ 9.9</RateContainer>
                <LikeContainer>Favoritar ♥</LikeContainer>
            </TopContainer>

            <BottomContainer>
                <ImageContainer>
                    <img src={produto01} alt=""/>
                </ImageContainer>
                <Title>NOVA SI 400</Title>
                <Description>Serra circular com serra inclinável com desempenho profissional para uma alta qualidade.</Description>
                <Price>R$ 20.000,00</Price>
                <ButtonStyle>Comprar</ButtonStyle>
            </BottomContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 350px;
    height: 100%;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 8px #00000068;
    padding: 2vh;
`
const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`
const RateAndLike = styled.div`
    height: 2vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 19px;
    font-weight: 700;
`
const RateContainer = styled(RateAndLike)`

`
const LikeContainer = styled(RateAndLike)`

`
const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ImageContainer = styled.div`
    width: 100%;
    height: 23vh;
    margin-top: 1vh;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        max-height: 23vh;
        max-width: 100%;
    }
`
const Title = styled.h1`
    font-size: 20px;
    font-weight: 500;
    margin-top: 1vh;
    text-align: center;
`
const Description = styled.h3`
    margin-top: 1.5vh;
    font-size: 17px;
    text-align: center;
`
const Price = styled.p`
    margin-top: 2.5vh;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`
const ButtonStyle = styled.div`
    margin-top: 4vh;
    width: 220px;
    height: 38px;
    background-color: #009395;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
`