import { useState } from "react"
import styled from "styled-components"
import Input from "../../../../common/form/Input"
import { InputWrapper } from "../userData/InputWrapper"
import { ErrorMsg } from "../userData/ErrorMsg"
import Button from "../../../../common/form/Button"
import addressValidations from "./AddressFormValidations"
import { useValidation } from "../../../../hooks/useValidation"
import { useCustomForm } from "../../../../hooks/useCustomForms"
import api from "../../../../services/API"
import { toast } from "react-toastify"


export default function NewAddress ({setIsCreating, userData, handleRefresh}) {

    const [ form, handleForm, setForm ] = useCustomForm()
    const { errors, validate } = useValidation(addressValidations);


    async function SubmitForms(){
        const body = {
            addressName: form?.addressName,
            cep: form?.cep,
            street: form?.street,
            city: form?.city,
            state: form?.state,
            number: form?.number,
            neighborhood: form?.neighborhood,
            addressDetail: form?.addressDetail
        }
        const { isValid, errors } = validate(body)

        if (!isValid){
            return
        }

        try {
            const response = await api.CreateAddress({body, token: userData.token})
            if(response.status === 201){
                toast.dark("Endereço Cadastrado com Sucesso")
                setIsCreating(false)
                handleRefresh()
                return
            }
        } catch (error) {
            
            if(error.response.status === 403){
                toast.warning("Limite de Endereços Atingido")
                return
            } 
            toast.error("Verifique os valores inseridos")
            return
        }
    }

    async function handleCepChanges({ target: { value } }) {
        if( value?.length !== 9){
            return
        }

        try {
            const result = await api.GetCepDetails(value)
            console.log(result)
            if (result.status === 200){

                const bodyByCep = {
                    street: result?.data?.logradouro,
                    city: result?.data?.localidade,
                    state: result?.data?.uf,
                    neighborhood: result?.data?.bairro,
                    addressDetail: result?.data?.complemento,
                    cep: value
                }
                console.log(bodyByCep)
                setForm({...form, ...bodyByCep})
            }

        } catch (error) {
            console.log(error)
        }   
    }


    return(
        <Container>

            <UpperContainer>
                <h1>{"Preencha os Dados Abaixo"}</h1>
                <UpperButton onClick={() => setIsCreating(false)}>{"Voltar"}</UpperButton>
            </UpperContainer>

            <InputWrapper width="65%">
                <Input 
                    label="Identificação para o Endereço" 
                    type="text" 
                    name={"addressName"} 
                    value={form.addressName} 
                    onChange={handleForm}
                    width="100%"
                />
                {errors.addressName && <ErrorMsg>{errors.addressName}</ErrorMsg>}
            </InputWrapper>

            <InputWrapper width="34%">
                <Input 
                    label="CEP" 
                    type="text" 
                    mask="99999-999"
                    name={"cep"} 
                    value={form.cep} 
                    onChange={(e) => {
                        handleForm(e);
                        handleCepChanges(e)
                    }}
                    width="100%"
                />
                {errors.cep && <ErrorMsg>{errors.cep}</ErrorMsg>}
            </InputWrapper>

            <InputWrapper width="65%">
                <Input 
                    label="Rua/Logradouro" 
                    type="text" 
                    name={"street"} 
                    value={form.street} 
                    onChange={handleForm}
                    width="100%"
                />
                {errors.street && <ErrorMsg>{errors.street}</ErrorMsg>}
            </InputWrapper>

            <InputWrapper width="34%">
                <Input 
                    label="Numero" 
                    type="text" 
                    name={"number"} 
                    value={form.number} 
                    onChange={handleForm}
                    width="100%"
                />
                {errors.number && <ErrorMsg>{errors.number}</ErrorMsg>}
            </InputWrapper>

            <InputWrapper width="100%">
                <Input 
                    label="Complemento" 
                    type="text" 
                    name={"addressDetail"} 
                    value={form.addressDetail} 
                    onChange={handleForm}
                    width="100%"
                />
                {errors.addressDetail && <ErrorMsg>{errors.addressDetail}</ErrorMsg>}
            </InputWrapper>
            
            <InputWrapper width="28%">
                <Input 
                    label="Bairro" 
                    type="text" 
                    name={"neighborhood"} 
                    value={form.neighborhood} 
                    onChange={handleForm}
                    width="100%"
                />
                {errors.neighborhood && <ErrorMsg>{errors.neighborhood}</ErrorMsg>}
            </InputWrapper>

            <InputWrapper width="40%">
                <Input 
                    label="Cidade" 
                    type="text" 
                    name={"city"} 
                    value={form.city} 
                    onChange={handleForm}
                    width="100%"
                />
                {errors.city && <ErrorMsg>{errors.city}</ErrorMsg>}
            </InputWrapper>

            <InputWrapper width="28%">
                <Input 
                    label="Estado" 
                    type="text" 
                    name={"state"} 
                    value={form.state} 
                    onChange={handleForm}
                    width="100%"
                />
                {errors.state && <ErrorMsg>{errors.state}</ErrorMsg>}
            </InputWrapper>

            <ButtonContainer>
                <Button type="submit" width="70%" color="primary" onClick={() => SubmitForms()}>{"Salvar"}</Button>
            </ButtonContainer>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 2vh;
`
const ButtonContainer = styled.div`
    margin-top: 2vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const UpperContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.6vh 0;
    padding-left: 4px;
    border-left: 6px solid #009395;
    h1 {
        color: #02131B;
        font-size: 19px;
        font-weight: 500;
    }
`
const UpperButton = styled.div`
    background-color: #EEEEEE;
    width: auto;
    padding: 8px 1.4vw;
    border-radius: 5px;
    color: #02131B;
    font-weight: 600;
    cursor: pointer;
    user-select: none;
`