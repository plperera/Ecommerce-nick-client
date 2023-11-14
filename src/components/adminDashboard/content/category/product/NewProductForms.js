import styled from "styled-components"
import Input from "../../../../../common/form/Input"
import Button from "../../../../../common/form/Button"
import { InputWrapper } from "../common/InputWrapper"
import ProductTecnicDetails from "./ProductTecnicDetails"
import ProductSubCategories from "./ProductSubCategories"
import ProductImages from "./ProductImages"

export default function NewProductForms ({form, handleForm, setForm, submitForm}) {
    return(
        <Container>    
            <InputWrapper width={"80%"}>
                <Input 
                    label="Nome do Produto" 
                    type="text" 
                    name={"newProductName"} 
                    value={form?.newProductName} 
                    width="100%"
                    onChange={handleForm}
                />
                
            </InputWrapper>

            <InputWrapper width={"80%"}>
                <StyledTextArea 
                    label="Descrição sobre o Produto"    
                    placeholder="Descrição do Produto" 
                    type="text" 
                    name={"newProductDescription"} 
                    value={form?.newProductDescription} 
                    onChange={handleForm}
                    width="100%"
                />
            </InputWrapper>

            <InputWrapper width={"80%"}>
                <Input 
                    label="Preço" 
                    type="text" 
                    name={"newProductPrice"} 
                    value={form?.newProductPrice} 
                    width="37%"
                    onChange={handleForm}
                />
                <Input 
                    label="Preço antes do Desconto" 
                    type="text" 
                    name={"newProductHighPrice"} 
                    value={form?.newProductHighPrice} 
                    width="37%"
                    onChange={handleForm}
                />
                <Input 
                    label="Estoque" 
                    type="text" 
                    name={"newProductStock"} 
                    value={form?.newProductStock} 
                    width="20%"
                    onChange={handleForm}
                />
            </InputWrapper>

            <ProductTecnicDetails form={form} handleForm={handleForm} setForm={setForm}/>
            
            <ProductSubCategories form={form} handleForm={handleForm} setForm={setForm}/>

            <ProductImages form={form} handleForm={handleForm} setForm={setForm}/>

            <ButtonContainer>
                <Button onClick={submitForm} width={"100%"} fontsize={"10px"} background={"#3093C9 !important"} backgroundhover={"#5DB3E2 !important"}>{"Criar"}</Button>
            </ButtonContainer>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.5vh;
    width: 100%;
    padding: 2vh 0;
`
const StyledTextArea = styled.textarea`
    margin-top: 10px;
    max-width: 100%;
    min-width: 100%;
    height: 200px;
    padding: 10px;
    border: 1px solid #b8b8b8;
    border-radius: 7px;
    resize: vertical;  // permite o redimensionamento vertical
    font-size: 14px;
    font-weight: 600;
    color: #02131B;
    box-sizing: border-box;
    background-color: transparent;
    ::placeholder{
        color: #6e6e6e;
        font-weight: 500;
        font-size: 16px;
        opacity: 1;
    }
    &:focus {
        outline: none;
        border: 2px solid #009395ff;
        border-radius: 10px;
    }
`
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    margin-top: 1vh;
`
