import styled from "styled-components"
import { useCustomForm } from "../../../../hooks/useCustomForms"
import Input from "../../../../common/form/Input"
import Button from "../../../../common/form/Button"

import { ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns'; // ou MomentUtils, dependendo de qual biblioteca você deseja usar
import { CustomDatePicker } from "./CustomDatePicker";
import { datePickerTheme } from "./datePickerTheme";

export default function UserData () {

    const [ form, handleForm, setForm ] = useCustomForm()

    function SubmitForms(){
        const body = {
            cpf: form.cpf,
            birthday: form.birthday,
            phone: form.phoneNumber,
        }
        console.log(body)
    }

    function customHandleForm(date){
        const isoString = date.toISOString();
        setForm({ ...form, "birthday": isoString });
    }

    return(
        <Container>
            <Title>{"Suas Informações"}</Title>

            <InputContainer>
                <Input 
                    label="Nome" 
                    type="text" 
                    name={"name"} 
                    value={form.name} 
                    disable={true}
                    onChange={handleForm}
                    width="58%"
                />

                <Input 
                    label="Telefone para Contato"     
                    mask={form?.phoneNumber?.length < 15 ? '(99) 9999-99999' : '(99) 99999-9999'}
                    type="text" 
                    name={"phoneNumber"} 
                    value={form.phoneNumber} 
                    onChange={handleForm}
                    width="40%"
                />

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <ThemeProvider theme={datePickerTheme}>
                        <CustomDatePicker
                            value={form.birthday}
                            onChange={customHandleForm}
                            format="dd/MM/yyyy"
                            disableFuture={true}
                            name="birthday"
                            error={false}
                            helperText={null}
                            label="Data de Nascimento"
                            inputVariant="outlined"
                            clearable
                            width={"30%"}
                        />
                    </ThemeProvider>
                </MuiPickersUtilsProvider>
                
                <Input 
                    label="CPF ou CNPJ" 
                    //mask="999.999.999-99"
                    mask={form?.cpf?.length < 15 ? '999.999.999-999' : '99.999.999/9999-99'}
                    type="text" 
                    name={"cpf"} 
                    value={form.cpf} 
                    onChange={handleForm}
                    width="68%"
                />

                <Input 
                    label="E-mail" 
                    type="text" 
                    name={"email"} 
                    value={form.email} 
                    onChange={handleForm}
                    width="100%"
                />
            </InputContainer>

            <ButtonContainer>

                <Button type="submit" width="60%" color="primary" onClick={() => SubmitForms()}>{"Salvar"}</Button>

            </ButtonContainer>
            
            {/* <ButtonStyle>{"Cancelar"}</ButtonStyle> */}
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    //border-right: 2px solid #D1D1D1;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    grid-template-columns: 1fr;
    align-items: start;
    align-content: start;
    row-gap: 2vh;
    padding: 25px 1.4vw;
`
const Title = styled.h1`
    color: #02131B;
    font-size: 21px;
    font-weight: 500;
    width: 100%;
`
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 2vh;
    padding: 2vh 0 2vh 0;
`