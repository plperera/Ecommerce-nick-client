import styled from "styled-components"
import Input from "../../../../../common/form/Input"
import Button from "../../../../../common/form/Button"

export default function SubCategoryForms ({form, handleForm, submitForm, textButton, deleteButton}) {
    return(
        <Container>
            <Input 
                label="Nome da SubCategoria" 
                type="text" 
                name={"subCategoryName"} 
                value={form?.subCategoryName} 
                width="25%"
                onChange={handleForm}
            />
            <ButtonContainer>
                {
                deleteButton 
                    ? <Button onClick={() => submitForm("delete")} width="35%" fontsize={"10px"} background={"#C93030 !important"} backgroundhover={"#E25D5D !important"}>{"Desativar"}</Button>
                    : <></>
                }
                <Button onClick={() => submitForm(undefined)} width={deleteButton ? "60%": "100%"} fontsize={"10px"} background={"#3093C9 !important"} backgroundhover={"#5DB3E2 !important"}>{textButton || "Salvar"}</Button>
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