import styled from "styled-components"
import Title from "./TitleBanner"
import { useCustomForm } from "../../../../../../hooks/useCustomForms"
import AdminContext from "../../../../../../context/AdminContext"
import { useContext } from "react"
import FormsCreateBannerHome from "./FormsCreateBannerHome"


export default function CreateBannerHome () {

    const [ form, handleForm, setForm ] = useCustomForm();
    const { adminData } = useContext(AdminContext);

    return(
        <Container>

            <Title text={`Criar Banner para Pagina Inicial`} form={form} setForm={setForm} adminData={adminData}/>
            <FormsCreateBannerHome form={form} handleForm={handleForm} setForm={setForm} adminData={adminData}/>
            
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: #171717;
    width: 100%;
    font-size: 21px;
    font-weight: 500;
    padding: 25px 1.4vw;
    h1 {
        font-size: 25px;
        margin-bottom: 2vh;
        font-weight: 600;
    }
    @media (max-width: 850px) {
        padding-top: 0;
    }
`