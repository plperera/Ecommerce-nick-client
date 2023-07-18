import styled from "styled-components"
import Input from "../../../common/form/Input"
import { InputWrapper } from "../../userDashboard/content/userData/InputWrapper";
import { useCustomForm } from "../../../hooks/useCustomForms";
import { useValidation } from "../../../hooks/useValidation";
import addressValidations from "../../userDashboard/content/userAddress/AddressFormValidations";
import api from "../../../services/API";
import { useState } from "react";
import { PiMapPinFill } from 'react-icons/pi';
import Button from "../../../common/form/Button";
import { ErrorMsgCheckout } from "./ErrorMsgCheckout";

export default function AddNewAddress ({setAddNewAddres}) {
    const [ form, handleForm, setForm ] = useCustomForm()
    const { errors, validate } = useValidation(addressValidations);
    const [ showAnotherInputs, setShowAnotherInputs ] = useState(false);
    const [ showMoreInputs, setShowMoreInputs ] = useState(false);

    async function handleCepChanges({ target: { value } }) {
        if( value?.length !== 9){
            return
        }
        try {
            const result = await api.GetCepDetails(value)

            if (result.status === 200){

                setShowMoreInputs(false)
                setShowAnotherInputs(true)

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

    function SubmitForms(){
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
    }

    return(
        <Container> 
            <InputWrapper width="100%">
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
                {errors.cep && <ErrorMsgCheckout>{errors.cep}</ErrorMsgCheckout>}
            </InputWrapper>

            {showAnotherInputs?(
                <AnotherInputsContainer>

                    {showMoreInputs ? (
                        <>
                            <InputWrapper width="100%">
                                <Input 
                                    label="Rua/Logradouro" 
                                    type="text" 
                                    name={"street"} 
                                    value={form.street} 
                                    onChange={handleForm}
                                    width="100%"
                                />
                                {errors.street && <ErrorMsgCheckout>{errors.street}</ErrorMsgCheckout>}
                            </InputWrapper>

                            <InputWrapper width="69%">
                                <Input 
                                    label="Cidade" 
                                    type="text" 
                                    name={"city"} 
                                    value={form.city} 
                                    onChange={handleForm}
                                    width="100%"
                                />
                                {errors.city && <ErrorMsgCheckout>{errors.city}</ErrorMsgCheckout>}
                            </InputWrapper>

                            <InputWrapper width="29%">
                                <Input 
                                    label="Estado" 
                                    type="text" 
                                    name={"state"} 
                                    value={form.state} 
                                    onChange={handleForm}
                                    width="100%"
                                />
                                {errors.state && <ErrorMsgCheckout>{errors.state}</ErrorMsgCheckout>}
                            </InputWrapper>

                            <InputWrapper width="100%">
                                <Input 
                                    label="Bairro" 
                                    type="text" 
                                    name={"neighborhood"} 
                                    value={form.neighborhood} 
                                    onChange={handleForm}
                                    width="100%"
                                />
                                {errors.neighborhood && <ErrorMsgCheckout>{errors.neighborhood}</ErrorMsgCheckout>}
                            </InputWrapper>
                        </>
                    ):(

                        <GetCepResultContainer>
                            <span><LocationIcon/> {`${form?.street}, ${form?.neighborhood}, ${form?.city}-${form?.state}, Cep ${form?.cep}`}</span>
                            <div onClick={() => setShowMoreInputs(true)}>{"Não é meu endereço"}</div>
                        </GetCepResultContainer>

                    )}
                    
                    <InputWrapper width="29%">
                        <Input 
                            label="Numero" 
                            type="text" 
                            name={"number"} 
                            value={form.number} 
                            onChange={handleForm}
                            width="100%"
                        />
                        {errors.number && <ErrorMsgCheckout>{errors.number}</ErrorMsgCheckout>}
                    </InputWrapper>

                    <InputWrapper width="69%">
                        <Input 
                            label="Complemento" 
                            type="text" 
                            name={"addressDetail"} 
                            value={form.addressDetail} 
                            onChange={handleForm}
                            width="100%"
                        />
                        {errors.addressDetail && <ErrorMsgCheckout>{errors.addressDetail}</ErrorMsgCheckout>}
                    </InputWrapper>

                    <InputWrapper width="100%">
                        <Input 
                            label="Apelido / Identificação para o Endereço" 
                            type="text" 
                            name={"addressName"} 
                            value={form.addressName} 
                            onChange={handleForm}
                            width="100%"
                        />
                        {errors.addressName && <ErrorMsgCheckout>{errors.addressName}</ErrorMsgCheckout>}
                    </InputWrapper>
                    
                </AnotherInputsContainer>
            ):(
                <></>
            )}

            <Button 
                width={"23%"} 
                height={"35px"} 
                fontSize={"12px !important"} 
                fontColor={"#283338ff"} 
                background={"#CACACA !important"} 
                backgroundHover={"#CACACA !important"}
                onClick={() => setAddNewAddres(false)}
            >
                {" Voltar"}
            </Button>
            
            <Button 
                width={"75%"} 
                height={"35px"} 
                fontSize={"12px !important"} 
                background={"#008183 !important"} 
                backgroundHover={"#009395ff !important"}
                onClick={() => SubmitForms()}
            >
                {"Adicionar"}
            </Button>
            
            

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 0vh;
    row-gap: 2.2vh;
    padding-bottom: 1vh;
    background-color: ${props => props.background};
    border-radius: 5px;
    cursor: pointer;
`
const GetCepResultContainer = styled.div`
    width: 100%;
    padding: 1.3vh 1vw;
    background-color: #B9CECF44;
    border-radius: 5px;
    span {
        font-size: 14px;
        display: flex;
        align-items: start;
        justify-content: center;
        column-gap: 0.4vw;
    }
    div {
        padding-top: 1vh;
        text-decoration: underline;
        font-size: 14px;
        font-weight: 600;
        color: #2B2F33;
    }
`
const LocationIcon = styled(PiMapPinFill)`
    color: #009395ff;
    font-size: 20px;
`
const AnotherInputsContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 1.2vh;
`