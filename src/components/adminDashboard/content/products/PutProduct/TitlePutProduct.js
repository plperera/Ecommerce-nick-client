import styled from "styled-components"
import Button from "../../../../../common/form/Button"

export default function Title ({haveAllData, setSelectedProduct, selectedProduct}) {
    return(
        <Container>
            <h1>{"Editar Produto"}</h1>
           
                {selectedProduct ? (

                    <ButtonContainer>
                        <Button onClick={() => console.log("undefined")} backgroundhover={"#C71313 !important"} background={"#A70B0B !important"}>{"Desabilitar"}</Button>
                        <Button onClick={() => setSelectedProduct(undefined)} background={"#949494 !important"}>{"Voltar"}</Button>
                        <Button background={"#949494 !important"}>{haveAllData?("Criar Produto"):("Preecha todos os Campos")}</Button>
                    </ButtonContainer>
                    
                ):(<></>)}
            
        </Container>
    )
}
const Container = styled.div`
    width: 71.6vw;
    padding: 0 1.4vw;
    height: 7vh;
    font-size: 25px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    position: fixed;
    z-index: 2;
    h1 {
        font-size: 25px;
        margin-bottom: 2vh;
        font-weight: 600;
        padding-top: 1.4vh;
    }
`
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1.2vw;
`