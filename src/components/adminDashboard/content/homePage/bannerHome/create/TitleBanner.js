import styled from "styled-components"
import Button from "../../../../../../common/form/Button"
import { useState } from "react"
import { useEffect } from "react"
import { toast } from "react-toastify"
import api from "../../../../../../services/API"

export default function Title ({text, form, adminData, setForm}) {

    const [hasAllData, setHasAllData] = useState()

    async function SubmitForm(){
        try {
            if(!form?.text && !form?.images[0]?.imageId){
                return
            }
            const body = {
                text: form?.text,
                imageId: form?.images[0]?.imageId
            }
            console.log({token: adminData?.token, body})
            const result = await api.CreateBanner({token: adminData?.token, body})

            if( result.status === 201){
                toast.dark("Banner Criado com Sucesso")
                setForm({text:'', images:''})
                return
            }

        } catch (error) {
            console.log(error)
            toast.error("Verifique os Valores Inseridos")
        }
    }

    useEffect(() => {
        if(form?.text && form?.images[0]?.imageId){
            setHasAllData(true)
            return
        }
        setHasAllData(false)
    }, [form])

    return(
        <Container>
            <h1>{text}</h1>
            {hasAllData ?(
                <Button background={"#006FAA !important"} backgroundhover={"#0085CC !important"} onClick={() => SubmitForm()}>{"Criar Banner"}</Button>
            ):(
                <Button background={"#CACACA !important"} backgroundhover={"#A8A8A8 !important"}>{"Entre com todos os Campos"}</Button>
            )} 
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
    @media (max-width: 850px) {
        width: 100%;
        height: auto;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 1vh;
        border-radius: 15px;
        h1 {
            font-size: 17px !important;
            text-align: center;
        }
    }
`