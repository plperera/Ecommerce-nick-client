import styled, { keyframes } from "styled-components"
import Background from "../../assets/images/background-produtos-em-alta.png"
import ContentProductCard from "../products/ContentProductCard"

export default function CategoriesHome ({products}) {
    return(
        <Container backgroundImage={Background}>
            <Title>Produtos em destaque</Title>
            <ProductOptions>
                {products ? (products?.map((e, i) => <ContentProductCard productData={e} key={i}/>)):(<Spinner/>)}
                {/* {products ? (<><ContentProductCard productData={products[0]} /></>):(<Spinner/>)} */}
            </ProductOptions>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 72vh;
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
    @media (max-width: 850px) {
        height: 58vh;
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
    @media (max-width: 850px) {
        font-size: 28px;  
        font-weight: 600;
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

    @media (max-width: 850px) {
        padding-top: 0vh;
        justify-content: left;
        overflow-x: scroll;
    }
`
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border-radius: 50px;

  border-bottom: 2px dotted #00929544;
  border-right: 2px dotted #00929544;
  border-top: 4px ridge #009395;
  border-left: 2px dotted #00929544; 
  width: 70px;
  height: 70px;
  animation: ${spinAnimation} 2s linear infinite;
  //background-color: red;
`;