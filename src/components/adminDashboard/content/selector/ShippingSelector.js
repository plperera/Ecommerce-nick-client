import styled from "styled-components"
import ShippingCard from "./ShippingCard"

export default function ShippingSelector ({setSelectedShipping, shippings}) {

    return(
        <Container>
            {shippings ? (
                shippings.map( e => 

                    <ShippingCard key={e.id} shippingData={e} setSelectedShipping={setSelectedShipping}/>
                
                )
            ):(<h3>carregando...</h3>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
    color: #171717;
    width: 100%;
    min-height: 10vh;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    background-color: #39525E3A;
    border-radius: 5px;
    gap: 15px;
    h3 {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
    }
`
