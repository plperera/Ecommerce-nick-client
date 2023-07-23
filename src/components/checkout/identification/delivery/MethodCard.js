import styled from "styled-components"

export default function MethodCard ({methodData, checkoutDetails, setCheckoutDetails}) {
    return(
        <Container 
            onClick={() => setCheckoutDetails({...checkoutDetails, shippingId: methodData?.id, shippingPrice: methodData?.price})} 
            background={checkoutDetails.shippingId === methodData.id?("#B9CECF69"):("#F1F1F1A2")}
        > 

            <SelectorContainer>
                <SelectorCheckbox borderColor={checkoutDetails.shippingId === methodData.id?("#009395ff"):("#02131bff")}>
                    <SelectorPointCheckbox background={checkoutDetails.shippingId === methodData.id?("#009395ff"):("#FFFFFF00")}/>
                </SelectorCheckbox>
            </SelectorContainer>

            <AddressDataContainer>
                <h3>{methodData?.name}</h3>

                <PriceContainer>
                    <PriceSign>{"R$ "}</PriceSign><PriceNumber>{ (methodData?.price / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</PriceNumber>
                </PriceContainer>

            </AddressDataContainer>

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: start;
    justify-content: center;
    background-color: ${props => props.background};
    border-radius: 5px;
    cursor: pointer;
`
const AddressDataContainer = styled.div`
    width: 92%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1vw;
    h3 {
        display: flex;
        align-items: center;
        justify-content: left;
        color: #283338ff;
        font-weight: 700;
        font-size: 13px;
    }
`
const SelectorContainer = styled.div`
    width: 8%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const SelectorCheckbox = styled.div`
    width: 19px;
    height: 19px;
    border-radius: 50px;
    border: 2px solid;
    border-color: ${props => props.borderColor};
    display: flex;
    align-items: center;
    justify-content: center;
`
const SelectorPointCheckbox = styled.div`
    width: 11px;
    height: 11px;
    border-radius: 50px;
    background-color: ${props => props.background};
`
const PriceContainer = styled.div`
    display: flex;
    justify-content: right;
    align-items: end;
    color: #283338ff;
    font-weight: 600;
`
const PriceNumber = styled.span`
    font-size: 13px;
    font-weight: 600;
`
const PriceSign = styled.span`
    margin-right: 0.2vw;
    font-size: 10px;
`