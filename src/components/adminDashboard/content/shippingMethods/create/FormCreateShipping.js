import styled from "styled-components"
import Input from "../../../../../common/form/Input";

export default function FormCreateShipping ({ form, handleForm, setForm }) {

    function customHandleChange(event) {
        let value = event.target.value;

        // Remove all non-number and non-comma characters
        let newValue = value.replace(/[^\d,]/g, "");

        // Remove extra commas if there are any
        const splitValue = newValue.split(",");
        if (splitValue.length > 2) {
            newValue = splitValue[0] + ',' + splitValue.slice(1).join("");
        }

        // Add thousands separators to integer part
        const parts = newValue.split(",");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        // Join parts together
        newValue = parts.join(",");
        
        // Add prefix
        if (newValue.length > 0) {
            newValue = `R$ ${newValue}`;
        }

        // Limit decimal places to 2 if there's a decimal value
        if(parts[1] && parts[1].length > 2) {
            const integerPart = parts[0];
            const decimalPart = parts[1].substring(0, 2); // take only the first 2 digits of the decimal part
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
    @media (max-width: 850px) {
        padding: 0 2vw;
        padding-top: 8vh;
        h2 {
            padding: 0.5vh 0;
            padding-left: 2vw;
            font-size: 15px;
        }
    }
`
const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2vh;
`