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
                        <QuantityContainer><SpanStyled>{"Qtd: "}</SpanStyled>{`${e.productQuantity}`}</QuantityContainer>
                        <PriceContainer><SpanStyled>{"Unidade: "}</SpanStyled>{`R$ ${(e.productPrice / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`}</PriceContainer>         
                        <SubTotalPriceContainer><SpanStyled>{"SubTotal: "}</SpanStyled>{`R$ ${(e.productPrice * e.productQuantity / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`}</SubTotalPriceContainer>         
                    </ValuesContainer>
                </ProductCard>
            )}
            <TotalPrice>
                <div>{"Frete"}</div>
                <div>{`R$  ${(orderData.shippingPrice / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`}</div>           
            </TotalPrice>
            <TotalPrice>
                <div>{"Total do Produto"}</div>
                <div>{`R$  ${(orderData.transactionAmount / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`}</div>           
            </TotalPrice>
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
    padding-bottom: 3vh;
    
`
const ProductCard = styled.div`
    display: flex;
    width: 100%;
    box-shadow: 0 0 5px #0000001F;
    padding: 18px 0;
    @media (max-width: 850px) {
        padding: 12px 10px;
    } 
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
    @media (max-width: 850px) {
        width: 30%;
    } 
`
const ValuesContainer = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 850px) {
        width: 70%;
    } 
`
const TitleContainer = styled.div`
    height: 50px;
    width: 100%;
    text-align: left;
    font-weight: 500;
    padding: 8px;
    @media (max-width: 850px) {
        font-size: 10px;
    } 
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
    @media (max-width: 850px) {
        font-size: 8px;
    } 
`
const PriceContainer = styled(CommunStyle)`
    font-size: 15px;
    width: 40%;
    @media (max-width: 850px) {
        font-size: 7px;
    } 
`
const SubTotalPriceContainer = styled(CommunStyle)`
    font-size: 20px;
    width: 40%;
    @media (max-width: 850px) {
        font-size: 7px;
    } 
`
const SpanStyled = styled.span`
    margin-right: 0.5vw;
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 1px;
    @media (max-width: 850px) {
        font-size: 6px;
    } 
`
const TotalPrice = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    //background-color: #F5F5F5;
    border-top: 2px solid #e6e6e6ff;
    border-bottom: 2px solid #e6e6e6ff;
    padding: 18px 1vw;
    @media (max-width: 850px) {
        height: 40px;
    } 

    & > :first-child {
        display: flex;
        align-items: center;
        justify-content: left;
        width: 50%;
        height: 100%;
        font-weight: 600;
        font-size: 18px;
        @media (max-width: 850px) {
            font-size: 10px;
        } 
    }
    & > :last-child {
        display: flex;
        align-items: center;
        justify-content: right;
        width: 50%;
        height: 100%;
        font-weight: 600;
        font-size: 22px;
        @media (max-width: 850px) {
            font-size: 15px;
        } 
    }
`