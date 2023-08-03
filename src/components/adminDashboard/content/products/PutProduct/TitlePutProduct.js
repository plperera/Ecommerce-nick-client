import styled from "styled-components"
import Button from "../../../../../common/form/Button"
import api from "../../../../../services/API"
import { toast } from "react-toastify"

export default function Title ({setSelectedProduct, productData, form, setForm, adminData}) {

    function convertToNumber(formattedString) {
        const value = formattedString.replace("R$ ", "").replace(/\./g, "").replace(",", ".");
        return parseFloat(value);
    }

    async function SubmitForm(){
        try {
            const body = {
                id: productData?.productId,  
                description: form?.description,     
                categories: form?.categories,
                images: form?.images,
                name: form?.name,       
                price: Number((convertToNumber(form?.price) * 100).toFixed(0)),    
                highPrice: Number((convertToNumber(form?.highPrice) * 100).toFixed(0)),    
                stock: Number(form?.stock),   
                tecnicDetails: form?.tecnicDetails.filter(e => (!!e.topic && e.topic !== '')),       
            }
            console.log(body)

            const response = await api.UpdateProduct({body, token: adminData?.token})

            if (response.status === 200){
                toast.dark("Produto Atualizado com Sucesso")
                setForm({})
                setSelectedProduct(undefined)
                return
            }

        } catch (error) {
            console.log(error)
            toast.error("Verifique os Valores Inseridos")
        }
    }
    async function deleteProduct(){
        try {
            const body = {
                id: productData?.productId,  
            }

            const result = await api.DisableProduct({token: adminData?.token, body})

            if( result.status === 200){
                toast.dark("Produto desabilitado com Sucesso")
                setForm({})
                setSelectedProduct(undefined)
                return
            }
        } catch (error) {
            console.log(error)
            toast.error("Verifique os Valores Inseridoss")
        }
    }
    async function enableProduct(){
        try {
            const body = {
                id: productData?.productId,  
            }

            const result = await api.EnableProduct({token: adminData?.token, body})

            if( result.status === 200){
                toast.dark("Produto habilitado novamente com Sucesso")
                setForm({})
                setSelectedProduct(undefined)
                return
            }
        } catch (error) {
            console.log(error)
            toast.error("Verifique os Valores Inseridoss")
        }
    }

    return(
        <Container>
            <h1>{"Editar Produto"}</h1>
           
            {productData ? (
                <>
                    <ButtonContainer>
                        {productData.isActive ? (
                            <Button onClick={() => deleteProduct()} backgroundhover={"#C71313 !important"} background={"#A70B0B !important"}>{"Desativar"}</Button> 
                        ):(
                            <Button onClick={() => enableProduct()} backgroundhover={"#28C713 !important"} background={"#18A705 !important"}>{"Habilitar"}</Button> 
                        )}
                                        
                        <Button background={"#006FAA !important"} backgroundhover={"#0085CC !important"} onClick={() => SubmitForm()}>{"Atualizar Produto"}</Button>
                        <Button onClick={() => setSelectedProduct(undefined)} background={"#949494 !important"}>{"Voltar"}</Button>
                    </ButtonContainer>

                    <MobileButtonContainer>
                        {productData.isActive ? (
                            <Button width={"30%"} fontsize={"12px !important"} onClick={() => deleteProduct()} backgroundhover={"#C71313 !important"} background={"#A70B0B !important"}>{"Desativar"}</Button> 
                        ):(
                            <Button width={"30%"} fontsize={"12px !important"} onClick={() => enableProduct()} backgroundhover={"#28C713 !important"} background={"#18A705 !important"}>{"Habilitar"}</Button> 
                        )}
                                        
                        <Button width={"30%"} fontsize={"12px !important"} background={"#006FAA !important"} backgroundhover={"#0085CC !important"} onClick={() => SubmitForm()}>{"Atualizar Produto"}</Button>
                        <Button width={"30%"} fontsize={"12px !important"} onClick={() => setSelectedProduct(undefined)} background={"#949494 !important"}>{"Voltar"}</Button>
                    </MobileButtonContainer>
                </>
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
    @media (max-width: 850px) {
        width: 100%;
        height: auto;
        justify-content: center;
        padding-bottom: 1vh;
        border-radius: 15px;
        flex-direction: column;
        h1 {
            font-size: 17px !important;
            text-align: center;
            width: 50%;
        }
    }
`
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1.2vw;
    @media (max-width: 850px) {
        display: none;
    }
`
const MobileButtonContainer = styled.div`
    display: none;
    @media (max-width: 850px) {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 1.2vw;
    }
`