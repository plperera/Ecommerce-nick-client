import styled from "styled-components"
import Input from "../../../../common/form/Input"
import Button from "../../../../common/form/Button"

export default function CategoryForms ({form, handleForm, submitForm}) {
    return(
        <Container>
            <Input 
                label="Nome da Categoria" 
                type="text" 
                name={"name"} 
                value={form?.name} 
                width="25%"
                onChange={handleForm}
            />
            <Button onClick={submitForm} width="25%" fontsize={"10px"} background={"#3093C9 !important"}>{"Salvar"}</Button>
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