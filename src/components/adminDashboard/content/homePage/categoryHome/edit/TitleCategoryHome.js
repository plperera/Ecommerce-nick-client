import styled from "styled-components"
import Button from "../../../../../../common/form/Button"
import { toast } from "react-toastify"
import api from "../../../../../../services/API"

export default function Title ({text, form, adminData, setForm, categoryData, setCategoriesCardSelect}) {

    async function SubmitForm(){
        try {
            const body = {
                homeCategoryId: categoryData?.categoryCardId,
                categoryId: form?.categories[0]?.categoryId, 
                imageId: form.images[0]?.imageId, 
                subTitle: form?.text,
            }
            const response = await api.UpdateHomeCategory({body, token: adminData?.token})

            if (response.status === 200){
                toast.dark("Card de Categoria Atualizado com Sucesso")
                setForm({})
                setCategoriesCardSelect(undefined)
                return
            }
        } catch (error) {
            console.log(error)
            toast.error("Verifique os Valores Inseridos")
        }
    }
    async function deleteHomeCategory(){
        try {
            const body = {
                homeCategoryId: categoryData?.categoryCardId,
            }

            const result = await api.DeleteHomeCategory({token: adminData?.token, body})

            if( result.status === 200){
                toast.dark("Card de Categoria deletado com Sucesso")
                setForm({})
                setCategoriesCardSelect(undefined)
                return
            }
        } catch (error) {
            console.log(error)
            toast.error("Verifique os Valores Inseridoss")
        }
    }

    return(
        <Container>
            <h1>{text}</h1>

            {categoryData ? (
                <>
                    <ButtonContainer>
                        <Button onClick={() => deleteHomeCategory()} backgroundhover={"#C71313 !important"} background={"#A70B0B !important"}>{"Desabilitar"}</Button>                    
                        <Button background={"#006FAA !important"} backgroundhover={"#0085CC !important"} onClick={() => SubmitForm()}>{"Atualizar Banner"}</Button>
                        <Button onClick={() => setCategoriesCardSelect(undefined)} background={"#949494 !important"}>{"Voltar"}</Button>
                    </ButtonContainer>
                    <MobileButtonContainer>
                        <Button width={"30%"} fontsize={"12px !important"}  onClick={() => deleteHomeCategory()} backgroundhover={"#C71313 !important"} background={"#A70B0B !important"}>{"Desabilitar"}</Button>                    
                        <Button width={"30%"} fontsize={"12px !important"}  background={"#006FAA !important"} backgroundhover={"#0085CC !important"} onClick={() => SubmitForm()}>{"Atualizar Banner"}</Button>
                        <Button width={"30%"} fontsize={"12px !important"}  onClick={() => setCategoriesCardSelect(undefined)} background={"#949494 !important"}>{"Voltar"}</Button>
                    </MobileButtonContainer>
                </>
            ):(<></>)}
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