import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import MethodCard from "./MethodCard"
import Button from "../../../../common/form/Button"

export default function DeliveryMethod () {

    const [deliveryMethodSelector, setDeliveryMethodSelector] = useState(undefined)
    const [deliveryMethods, setDeliveryMethods] = useState(undefined)

    useEffect(() => {

        const fake = [
            {   
                id: 1,
                name:"Braspress",
                price:2 * 200 * 100, 
            },
            {   
                id: 2,
                name:"Patrus Transportes",
                price:3 * 200 * 100, 
            },
            {   
                id: 3,
                name:"TNT Mercurio",
                price:4 * 200 * 100,  
            },
            {   
                id: 4,
                name:"Atlas Transportes & Logística",
                price:5 * 200 * 100,  
            },
        ]

        setDeliveryMethods(fake)
    },[])

    return(
        <Container>  
            <Title>{"Método de Entrega"}</Title>

            {deliveryMethods ? (
                deliveryMethods.map(e => <MethodCard key={e?.id} methodData={e} deliveryMethodSelector={deliveryMethodSelector} setDeliveryMethodSelector={setDeliveryMethodSelector}/>)
            ):(<></>)}

            <Button 
                width={"80%"} 
                height={"45px"} 
                fontsize={"18px !important"} 
                background={"#008183 !important"} 
                backgroundhover={"#009395ff !important"}
            >
                {"Ir para o Pagamento"}
            </Button>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 1.5vh;
    border-bottom: 3px solid #e6e6e6ff;
    row-gap: 1.4vh;
`
const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    color: #009395ff;
    font-weight: 600;
    padding: 1vh 0;
`