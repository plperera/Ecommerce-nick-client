import styled from "styled-components"
import Button from "../../../../../../common/form/Button"
import { useEffect } from "react"
import { toast } from "react-toastify"
import api from "../../../../../../services/API"

export default function Title ({text, form, adminData, setForm, bannerData, setBannerSelect}) {

    async function SubmitForm(){
        try {
            const body = {
                bannerId: bannerData?.bannerId,
                text: form?.text,
                imageId: form?.images[0]?.imageId
            }
            console.log({token: adminData?.token, body})
            const result = await api.UpdateBanner({token: adminData?.token, body})

            if( result.status === 200){
                toast.dark("Banner Atualizado com Sucesso")
                setForm({text:'', images:''})
                setBannerSelect(undefined)
                return
            }
        } catch (error) {
            console.log(error)
            toast.error("Verifique os Valores Inseridoss")
        }
    }
    async function deleteBanner(){
        try {
            const body = {
                bannerId: bannerData?.bannerId,
            }

            const result = await api.DeleteBanner({token: adminData?.token, body})

            if( result.status === 200){
                toast.dark("Banner deletado com Sucesso")
                setForm({text:'', images:''})
                setBannerSelect(undefined)
                return
            }
        } catch (error) {
            console.log(error)
            toast.error("Verifique os Valores Inseridoss")
        }
    }

    useEffect(() => {
        console.log({
            bannerId: bannerData?.bannerId,
            form
        })
    }, [form, bannerData])

    return(
        <Container>
            <h1>{text}</h1>
            {bannerData ? (
                <>
                <ButtonContainer>
                    <Button onClick={() => deleteBanner()} backgroundhover={"#C71313 !important"} background={"#A70B0B !important"}>{"Desabilitar"}</Button>                    
                    <Button background={"#006FAA !important"} backgroundhover={"#0085CC !important"} onClick={() => SubmitForm()}>{"Atualizar Banner"}</Button>
                    <Button onClick={() => setBannerSelect(undefined)} background={"#949494 !important"}>{"Voltar"}</Button>
                </ButtonContainer>

                <MobileButtonContainer>
                    <Button width={"30%"} fontsize={"12px !important"} onClick={() => deleteBanner()} backgroundhover={"#C71313 !important"} background={"#A70B0B !important"}>{"Desabilitar"}</Button>                    
                    <Button width={"30%"} fontsize={"12px !important"} background={"#006FAA !important"} backgroundhover={"#0085CC !important"} onClick={() => SubmitForm()}>{"Atualizar Banner"}</Button>
                    <Button width={"30%"} fontsize={"12px !important"} onClick={() => setBannerSelect(undefined)} background={"#949494 !important"}>{"Voltar"}</Button>
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