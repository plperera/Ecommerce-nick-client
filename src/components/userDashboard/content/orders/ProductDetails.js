import styled from "styled-components"

export default function ProductDetails ({orderData}) {
    console.log(orderData)
    return(
        <Container>
            {orderData.products.map(e => 
                <ProductCard>
                    <ImageContainer>
                        <img src={e.productImages[0].imageUrl} alt=""/>
                    </ImageContainer>
                    <ValuesContainer>
                        <TitleContainer>{e.productName}</TitleContainer>
                        <QuantityContainer><SpanStyled>{"Quantidade: "}</SpanStyled>{`${e.productQuantity}`}</QuantityContainer>
                        <PriceContainer><SpanStyled>{"Valor Unitário: "}</SpanStyled>{`R$ ${(e.productPrice / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`}</PriceContainer>         
                        <SubTotalPriceContainer><SpanStyled>{"SubTotal: "}</SpanStyled>{`R$ ${(e.productPrice * e.productQuantity / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`}</SubTotalPriceContainer>         
                    </ValuesContainer>
                </ProductCard>
            )}
           
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    min-height: 90px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 2vh;
    padding-top: 4vh;
    
`
const ProductCard = styled.div`
    display: flex;
    width: 100%;
    box-shadow: 0 0 5px #0000001F;
    padding: 18px 0;
`
const ImageContainer = styled.div`
    width: 15%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        max-width: 100%;
        max-height: 90%;
    }
`
const ValuesContainer = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const TitleContainer = styled.div`
    height: 50px;
    width: 100%;
    text-align: left;
    font-weight: 500;
    padding: 8px;
`
const CommunStyle = styled.div`
    display: flex;
    align-items: end;
    justify-content: left;
    height: 50px;
    width: 20%;
    padding: 0 8px;
    font-weight: 600;
`
const QuantityContainer = styled(CommunStyle)`
    font-size: 18px;
`
const PriceContainer = styled(CommunStyle)`
    font-size: 15px;
    width: 40%;
`
const SubTotalPriceContainer = styled(CommunStyle)`
    font-size: 20px;
    width: 40%;
`
const SpanStyled = styled.span`
    margin-right: 0.5vw;
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 1px;
`
