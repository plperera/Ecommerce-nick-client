import styled from "styled-components"
import { InputWrapper } from "../../../../userDashboard/content/userData/InputWrapper"
import Input from "../../../../../common/form/Input"
import { useValidation } from "../../../../../hooks/useValidation";
import validations from "./FormValidations";
import { ErrorMsg } from "../../../../userDashboard/content/userData/ErrorMsg";
import { useEffect } from "react";

export default function ProductForms ({form, handleForm, setForm, selectedProduct}) {

    const { errors, validate } = useValidation(validations);

    useEffect(() => {

        setForm({
            productId: selectedProduct.productId,       
            name: selectedProduct.name,       
            description: selectedProduct.description,       
            price: selectedProduct.price,       
            tecnicDetails: selectedProduct.tecnicDetails,       
            categories: selectedProduct.categories,       
            images: selectedProduct.images,       
        })

    },[selectedProduct])

    return(
        <Container>

            <div>
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

                <InputWrapper width={"100%"}>
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
            </div>
            
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
    //border: 1px solid blue;
`

