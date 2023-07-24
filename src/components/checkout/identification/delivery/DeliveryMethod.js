import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import MethodCard from "./MethodCard"
import Button from "../../../../common/form/Button"
import api from "../../../../services/API"

export default function DeliveryMethod ({checkoutDetails, setCheckoutDetails}) {

    const [deliveryMethodSelector, setDeliveryMethodSelector] = useState(undefined)
    const [deliveryMethods, setDeliveryMethods] = useState(undefined)

    function ScrollToTop() { 
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });    
    }

    useEffect(() => {

        getAllDeliveryMethods()

    },[])

    async function getAllDeliveryMethods(){
        try {

            const response = await api.GetAllShippingMethods()
            setDeliveryMethods(response.data)
            
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Container>  
            <Title>{"Método de Entrega"}</Title>

            {deliveryMethods ? (
                deliveryMethods.map(e => 
                    <MethodCard 
                        key={e?.id} 
                        methodData={e} 
                        deliveryMethodSelector={deliveryMethodSelector} 
                        setDeliveryMethodSelector={setDeliveryMethodSelector}
                        checkoutDetails={checkoutDetails} 
                        setCheckoutDetails={setCheckoutDetails}
                    />
                )
            ):(<></>)}

            <Button 
                width={"80%"} 
                height={"45px"} 
                fontsize={"18px !important"} 
                background={"#008183 !important"} 
                backgroundhover={"#009395ff !important"}
                onClick={() => ScrollToTop()}
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