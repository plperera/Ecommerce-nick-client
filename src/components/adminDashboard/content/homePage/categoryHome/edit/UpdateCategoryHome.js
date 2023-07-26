import styled from "styled-components"
import { useEffect, useState } from "react"
import api from "../../../../../../services/API"
import { useCustomForm } from "../../../../../../hooks/useCustomForms"
import AdminContext from "../../../../../../context/AdminContext"
import { useContext } from "react"
import Title from "./TitleCategoryHome"
import CategorySelector from "../../../selector/HomeCategorySelector"
import EditCategoryHome from "./EditCategoryHome"

export default function UpdateCategoryHome () {

    const [categoriesCardSelect, setCategoriesCardSelect] = useState(undefined)
    const [categoriesCard, setCategoriesCard] = useState(undefined)
    const [ form, handleForm, setForm ] = useCustomForm();
    const { adminData } = useContext(AdminContext);


    async function getAllCategoriesCard(){
        try {
            const result = await api.GetAllCategoriesCard()
            setCategoriesCard(result.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllCategoriesCard()
    }, [categoriesCardSelect])

    return(
        <Container>

            <Title text={`Editar uma Categoria para Pagina Inicial`} form={form} setForm={setForm} adminData={adminData} categoryData={categoriesCardSelect} setCategoriesCardSelect={setCategoriesCardSelect}/>

            {categoriesCardSelect ? (
                <EditCategoryHome categoryData={categoriesCardSelect} form={form} handleForm={handleForm} setForm={setForm} adminData={adminData}/>
            ):(
                categoriesCard?.length === 0 ?(
                    <></>                    
                ):(
                    <CategorySelector setCategoriesCardSelect={setCategoriesCardSelect} categoriesCard={categoriesCard}/>
                )                
            )} 
        
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