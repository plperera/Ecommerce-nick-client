import styled from "styled-components"

export default function ShippingCard ({ shippingData, setSelectedShipping }) {

    return(
        <Container onClick={() => setSelectedShipping(shippingData)} opacity={shippingData.isActive ? ("1"):("0.5")}>
        
            <h1>{shippingData.name}</h1>
            <h2>{`R$ ${(shippingData.price / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`}</h2>

        </Container>
    )
}

const Container = styled.div`
    flex-shrink: 0;
    width: 8vw;
    height: 9vh;
    color: #000000;
    background-color: #FFFFFF;
    opacity: ${props => props.opacity};
    box-shadow: 0px 4px 8px #00000068;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1vh;
    justify-content: center;
    border-radius: 5px;
    padding: 0.5vh 1vw;
    h1 {
        font-size: 13px;
    }
    h2 {
        font-size: 15px;
    }
    @media (max-width: 1366px) {
        padding: 1vh 1vw;
        height: 46vh;
    }
    &:hover{ 
        transform: translateY(-1vh);
    }
    cursor: pointer;
    user-select: none;
`