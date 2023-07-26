import styled from "styled-components"

export default function ResumeProductCard ({productData}) {
    return(
        <Container>  
            <ImageContainer>
                <img alt="" src={productData?.images[0].imageUrl}/>
            </ImageContainer>

            <RightContainer>
                <h2>{productData?.name}</h2>
    
                <PriceContainer>
                    <PriceSign>{"R$ "}</PriceSign><PriceSpan>{ (productData?.price / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</PriceSpan>
                </PriceContainer>

                <h3>{`Quantidade: ${productData?.quantity}`}</h3>

                <TotalPriceContainer>
                    <TotalPriceSign>{"R$ "}</TotalPriceSign><TotalPriceSpan>{ (productData?.price/100 * productData?.quantity).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</TotalPriceSpan>
                </TotalPriceContainer>
            </RightContainer>

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 120px;
    max-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    border-radius: 5px;
    flex-wrap: wrap;
`
const ImageContainer = styled.div`
    width: 30%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        max-width: 90%;
        max-height: 90%;
    }
`
const RightContainer = styled.div`
    width: 70%;
    height: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 0.85vh;
    h2 {
        font-size: 12px;
        font-weight: 600;
        width: 100%;
    }
    h3 {
        font-size: 11px;
        font-weight: 600;
        width: 100%;
    }
`
const PriceContainer = styled.div`
    width: 100%;
    display: flex; 
    justify-content: left;
    align-items: flex-end;
    column-gap: 0.15vw;
    color: #02131B9C;
`
const PriceSpan = styled.span`
    font-size: 11px;
    font-weight: 600;
`
const PriceSign = styled.span`
    font-size: 10px;
`
const TotalPriceContainer = styled(PriceContainer)`
    color: #02131B;
`
const TotalPriceSpan = styled(PriceSpan)`
    font-size: 17px;
    margin-bottom:-0.1vh;
`
const TotalPriceSign = styled(PriceSign)`
    font-size: 14px;
`