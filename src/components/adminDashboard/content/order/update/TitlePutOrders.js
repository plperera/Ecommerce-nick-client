import styled from "styled-components"
import Button from "../../../../../common/form/Button"
import api from "../../../../../services/API"
import { toast } from "react-toastify"

export default function Title ({setSelectedOrder, orderData, form, setForm, adminData}) {


    async function SubmitForm(){
        try {
            const optionsArray = [
                {status: "waiting", label: "Processando"},
                {status: "Payd", label: "Pagamento Recebido"},
                {status: "Sorting", label: "Em Separação"},
                {status: "ReceivedByCarrier", label: "Recebido pela transportadora"},
                {status: "InTransit", label: "Em Transito"},
                {status: "Delivered", label: "Entregue"},
            ]

            const body = {
                orderId: orderData.orderId,
                status: optionsArray.filter(e => form?.status === e.label)[0].status
            }

            console.log(form)
            console.log(optionsArray.filter(e => form?.status === e.label).status)

            console.log(body)

            const response = await api.UpdateOrder({body, token: adminData?.token})

            if (response.status === 200){
                toast.dark("Pedido Atualizado com Sucesso")
                setForm({})
                setSelectedOrder(undefined)
                return
            }

        } catch (error) {
            console.log(error)
            toast.error("Verifique os Valores Inseridos")
        }
    }

    return(
        <Container>
            <h1>{"Editar Pedido"}</h1>
           
            {orderData ? (
                <ButtonContainer>                                      
                    <Button background={"#006FAA !important"} backgroundhover={"#0085CC !important"} onClick={() => SubmitForm()}>{"Atualizar Pedido"}</Button>
                    <Button onClick={() => setSelectedOrder(undefined)} background={"#949494 !important"}>{"Voltar"}</Button>
                </ButtonContainer>
            ):(<></>)}
            
        </Container>
    )
}
const Container = styled.div`
    width: 71.6vw;
    padding: 0 1.4vw;
    height: 7vh;
    font-size: 25px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    position: fixed;
    z-index: 2;
    h1 {
        font-size: 25px;
        margin-bottom: 2vh;
        font-weight: 600;
        padding-top: 1.4vh;
    }
`
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1.2vw;
`