import styled from "styled-components"
import Input from "../../../../../common/form/Input";

export default function FormCreateShipping ({ form, handleForm, setForm }) {

    function customHandleChange(event) {
        const value = event.target.value;
        let newValue = value.replace(/[^\d,]/g, ""); // mantem os numeros e a virgula

        const parts = newValue.split(",");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, "."); // adiciona separadores de milhar na parte inteira
        
        newValue = parts.join(",");
        if (newValue.length > 0) {
            newValue = `R$ ${newValue}`; // adiciona prefixo
        }

        // Limita casas decimais para 2 se houver valor decimal
        if(parts[1] && parts[1].length > 2) {
            const integerPart = parts[0];
            const decimalPart = parts[1].substring(0, 2); // pega apenas os primeiros 2 dígitos da parte decimal
            newValue = `R$ ${integerPart},${decimalPart}`; 
        }
        setForm({...form, price: newValue})
      }

    return(

        <Container>
            <div>
                <h2>
                    {"Insira o texto que ira aparcerer junto da Categoria"}
                </h2>

                <InputContainer>
                    <Input 
                        label="Nome" 
                        type="text" 
                        name={"name"} 
                        value={form?.name} 
                        width="49%"
                        onChange={handleForm}
                    />

                    <Input 
                        label="Preço" 
                        type="text" 
                        name={"price"} 
                        value={form?.price} 
                        width="49%"
                        onChange={customHandleChange}
                    /> 
                </InputContainer>   
            </div>            
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3vh;
    margin-top: calc(2vh + 7vh);
    color: #171717;
    width: 100%;
    font-size: 21px;
    font-weight: 500;
    h2 {
        padding: 0.2vh 0.3vw;
        font-size: 20px;
        display: flex;
        align-items: center;
        font-weight: 600;
        border-left: 5px solid #009395ff; 
        margin-bottom: 1.2vh;
    }
    h1 {
        font-size: 25px;
        margin-bottom: 2vh;
        font-weight: 600;
        padding-top: 1.4vh;
    }
`
const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2vh;
`