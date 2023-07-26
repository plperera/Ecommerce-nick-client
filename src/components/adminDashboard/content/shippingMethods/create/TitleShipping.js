import styled from "styled-components"

import { toast } from "react-toastify"
import api from "../../../../../services/API"
import Button from "../../../../../common/form/Button"


export default function Title ({text, form, adminData, setForm}) {

    async function SubmitForm(){
        try {
            const body = {
                name: form?.name,
                price: (((form?.price.replace("R$ ", "").replace(/\./g, "").replace(",", ""))* 100).toFixed(0))
            }

            const response = await api.CreateShipping({body, token: adminData?.token})

            if (response.status === 201){
                toast.dark("Método de Entrega Criado com Sucesso")
                setForm({})
                return
            }
        } catch (error) {
            console.log(error)
            toast.error("Verifique os Valores Inseridos")
        }
    }



    return(
        <Container>
            <h1>{text}</h1>

            {form?.name ? (<Button background={"#006FAA !important"} backgroundhover={"#0085CC !important"} onClick={() => SubmitForm()}>{"Criar Método"}</Button>
            ):(<Button background={"#9D9D9D !important"} backgroundhover={"#727272 !important"} onClick={() => toast.error("Preencha todos os Inputs")}>{"Preencha todos os inputs"}</Button>)}
        </Container>
    )
}
const Container = styled.div`
    width: calc(71.6vw - 1.4vw - 1.4vw);
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