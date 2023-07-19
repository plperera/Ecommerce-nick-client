import styled from "styled-components"
import logo from "../../../assets/images/logoSVG/LogoWhite (2).svg"

export default function CheckoutMenu () {
    return(
        <Container>
            <Title textAlign={"left"}>{"Ser o melhor vendedor do Brasil é apenas consequência de ser o melhor pós-vendas do Brasil."}</Title>    
            <img src={logo} alt=""/>    
            <Title textAlign={"right"}>{"Comprometidos em ajudar você a aumentar sua Produção e Resultados"}</Title>  
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 8vh;
    background-color: #19323d;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10vw;
    z-index: 9;
    position: fixed;
    top: 0;
    img {
        height: 70%;
        max-height: 8vh;
    }
`
const Title = styled.h2`
    width: 25%;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 14px;
    text-align: ${props => props.textAlign}; 
`