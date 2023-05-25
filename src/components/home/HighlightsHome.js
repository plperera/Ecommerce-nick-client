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
    height: 70vh;
    margin-top: 10vh;
    padding: 5vh 10vw;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    background-image: url(${props => props.backgroundImage});
`
const Title = styled.h1`
    width: 100%;
    border-left: 8px solid #009395;
    font-size: 42px;
    font-weight: 600;
    padding-left: 1vw;
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