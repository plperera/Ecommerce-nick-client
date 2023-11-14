import styled from "styled-components"
import Input from "../../../../../common/form/Input"
import Button from "../../../../../common/form/Button"

export default function NewSubCategoryForms ({form, handleForm, submitForm, textButton, deleteButton}) {
    return(
        <Container>
            <Input 
                label="Nome da nova SubCategoria"
                type="text" 
                name={"newSubCategoryName"} 
                value={form?.newSubCategoryName} 
                width="25%"
                onChange={handleForm}
            />
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
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25%;
`