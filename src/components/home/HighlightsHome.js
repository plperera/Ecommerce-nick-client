import styled from "styled-components"
import Background from "../../assets/images/background-produtos-em-alta.png"
import ProductCard from "./ProductCard"

export default function CategoriesHome () {

    return(
        <Container backgroundImage={Background}>
            <Title>Produtos em destaque</Title>
            <ProductOptions>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </ProductOptions>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 72vh;
    margin-top: 10vh;
    padding: 5vh 10vw;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    box-shadow: inset 0 0 50px #FFFFFF;
    @media (max-width: 1366px) {
        padding: 5vh 4vw;  
        height: 77vh; 
    }
`
const Title = styled.h1`
    width: 100%;
    border-left: 8px solid #009395;
    font-size: 42px;
    font-weight: 600;
    padding-left: 1vw;
    text-shadow: 4px 4px 6px #FFFFFF81;

    @media (max-width: 1366px) {
        font-size: 30px;  
        font-weight: 700;
    }
`
const ProductOptions = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3vw;
`