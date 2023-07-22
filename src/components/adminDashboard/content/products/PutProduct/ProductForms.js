import styled from "styled-components"
import { InputWrapper } from "../../../../userDashboard/content/userData/InputWrapper"
import Input from "../../../../../common/form/Input"
import { useValidation } from "../../../../../hooks/useValidation";
import validations from "./FormValidations";
import { ErrorMsg } from "../../../../userDashboard/content/userData/ErrorMsg";
import { useEffect, useState } from "react";
import TecnicDetails from "./TecnicDetailsForms";
import CategoriesForm from "./CategoriesForm";
import ImagesForm from "./ImagesForm";

export default function ProductForms ({form, handleForm, setForm, selectedProduct, token}) {

    const { errors, validate } = useValidation(validations);
    const [filterCategories, setFilterCategories] = useState(undefined)

    useEffect(() => {

        setForm({
            productId: selectedProduct?.productId,       
            name: selectedProduct?.name,       
            description: selectedProduct?.description,       
            price: selectedProduct?.price,    
            stock: selectedProduct?.stock,   
            tecnicDetails: selectedProduct?.tecnicDetails,       
            categories: selectedProduct?.categories,       
            images: selectedProduct?.images,       
        })

    },[selectedProduct])

    return(
        <Container>
            {form?.productId ? (        
                <>
                    <UpperInputsContainer>
                        <InputWrapper width={"100%"}>
                            <Input 
                                label="Nome do Produto"     
                                type="text" 
                                name={"name"} 
                                value={form.name} 
                                onChange={handleForm}
                                width="100%"
                            />
                            {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
                        </InputWrapper>

                        <InputWrapper width={"100%"}>
                            <Input 
                                label="Descrição sobre o Produto"     
                                type="text" 
                                name={"description"} 
                                value={form.description} 
                                onChange={handleForm}
                                width="100%"
                            />
                            {errors.description && <ErrorMsg>{errors.description}</ErrorMsg>}
                        </InputWrapper>

                        <InputWrapper width={"44%"}>
                            <Input 
                                label="Preço"     
                                type="text" 
                                name={"price"} 
                                value={form.price} 
                                onChange={handleForm}
                                width="100%"
                            />
                            {errors.price && <ErrorMsg>{errors.price}</ErrorMsg>}
                        </InputWrapper>

                        <InputWrapper width={"44%"}>
                            <Input 
                                label="Preço"     
                                type="text" 
                                name={"price"} 
                                value={form.price} 
                                onChange={handleForm}
                                width="100%"
                            />
                            {errors.price && <ErrorMsg>{errors.price}</ErrorMsg>}
                        </InputWrapper>

                        <InputWrapper width={"10%"}>
                            <Input 
                                label="Estoque"     
                                type="text" 
                                name={"stock"} 
                                value={form.stock} 
                                onChange={handleForm}
                                width="100%"
                            />
                            {errors.stock && <ErrorMsg>{errors.stock}</ErrorMsg>}
                        </InputWrapper>
                    </UpperInputsContainer>

                    <TecnicDetails tecnicDetails={selectedProduct?.tecnicDetails} setForm={setForm} form={form}/>

                    <CategoriesForm categories={selectedProduct?.categories} setForm={setForm} form={form} filter={filterCategories}/>

                    <ImagesForm images={selectedProduct?.images?.map( e => {return {id: e.id}})} setForm={setForm} form={form} filter={filterCategories} token={token}/>
                </>
            ):(<></>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: #171717;
    width: 100%;
    min-height: 100px;
    font-size: 21px;
    font-weight: 500;
    row-gap: 3vh;
    //border: 1px solid blue;
`
const UpperInputsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
`

