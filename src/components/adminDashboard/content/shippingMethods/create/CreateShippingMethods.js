import styled from "styled-components"
import { useContext } from "react"
import Title from "./TitleShipping"
import AdminContext from "../../../../../context/AdminContext";
import { useCustomForm } from "../../../../../hooks/useCustomForms";
import FormCreateShipping from "./FormCreateShipping";

export default function CreateShippingMethods () {

    const [ form, handleForm, setForm ] = useCustomForm();
    const { adminData } = useContext(AdminContext);


    return(
        <Container>

            <Title text={`Criar novo método de Entrega`} form={form} setForm={setForm} adminData={adminData}/>
            <FormCreateShipping form={form} handleForm={handleForm} setForm={setForm}/>
        
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
`