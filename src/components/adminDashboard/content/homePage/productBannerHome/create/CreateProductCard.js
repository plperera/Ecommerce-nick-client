import styled from "styled-components"
import { useCustomForm } from "../../../../../../hooks/useCustomForms"
import AdminContext from "../../../../../../context/AdminContext"
import { useContext } from "react"
import Title from "./TitleProductCard";
import FormsCreateBannerHome from "./FormsCreateCategoryHome";
import { useEffect } from "react";


export default function CreateProductCardHome () {

    const [ form, handleForm, setForm ] = useCustomForm();
    const { adminData } = useContext(AdminContext);

    useEffect(() => {
        console.log(form)
    }, [form])

    return(
        <Container>

            <Title text={`Criar Card de Produto para Pagina Inicial`} form={form} setForm={setForm} adminData={adminData}/>
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
        padding-left: 0;
    }
`