import styled from "styled-components"
import Input from "../../../../common/form/Input"
import { InputWrapper } from "../../../userDashboard/content/userData/InputWrapper";
import { useCustomForm } from "../../../../hooks/useCustomForms";
import { useValidation } from "../../../../hooks/useValidation";
import addressValidations from "../../../userDashboard/content/userAddress/AddressFormValidations";
import api from "../../../../services/API";
import { useState } from "react";
import { PiMapPinFill } from 'react-icons/pi';
import Button from "../../../../common/form/Button";
import { ErrorMsgCheckout } from "./ErrorMsgCheckout";
import { toast } from "react-toastify";

export default function AddNewAddress ({setAddNewAddres, setIsLoading, isLoading, token, refreshAddress, setRefreshAddress}) {
    const [ form, handleForm, setForm ] = useCustomForm()
    const { errors, validate } = useValidation(addressValidations);
    const [ showAnotherInputs, setShowAnotherInputs ] = useState(false);
    const [ showMoreInputs, setShowMoreInputs ] = useState(false);

    async function handleCepChanges({ target: { value } }) {
        if( value?.length !== 9){
            return
        }
        try {

            setIsLoading(true)
            const result = await api.GetCepDetails(value)

            if (result.status === 200 && !result?.data?.erro){
                setTimeout(() => {
                    setShowMoreInputs(false)
                    setShowAnotherInputs(true)
                    setIsLoading(false)

                    const bodyByCep = {
                        street: result?.data?.logradouro,
                        city: result?.data?.localidade,
                        state: result?.data?.uf,
                        neighborhood: result?.data?.bairro,
                        addressDetail: result?.data?.complemento,
                        cep: value
                    }

                    if(!bodyByCep?.street || !bodyByCep?.city || !bodyByCep?.state || !bodyByCep?.neighborhood){
                        console.log(bodyByCep)
                        setShowMoreInputs(true)
                    }

                    setForm({...form, ...bodyByCep})

                }, [500])  
                return
            }

            setTimeout(() => {
                const bodyByCep = {
                    street: undefined,
                    city: undefined,
                    state: undefined,
                    neighborhood: undefined,
                    addressDetail: undefined,
                    cep: value
                }
                setForm({...form, ...bodyByCep})
                setShowMoreInputs(true)
                setShowAnotherInputs(true)
                setIsLoading(false)
            }, [500])

        } catch (error) {

            setTimeout(() => {
                setShowMoreInputs(true)
                setShowAnotherInputs(true)
                setIsLoading(false)
            }, [500])
            console.log(error)
        }   
    }

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
        
        // eslint-disable-next-line no-unused-vars
        const { isValid, errors } = validate(body)

        if (!isValid){
            return
        }

        try {

            const response = await api.CreateAddress({token, body})

            if (response?.status === 201){
                setRefreshAddress(!refreshAddress)
                window.scrollTo({top: 0, behavior: 'smooth'});
                toast.dark("Endereço cadastrado com Sucesso")
                return
            }

            console.log("response", response)
            

        } catch (error) {


            if (error?.response?.status === 403){
                setRefreshAddress(!refreshAddress)
                toast.error("Você estorou o limite de endereços cadastrados")
                return 
            }
            
            toast.error("Ocorreu algum erro, revise os dados inseridos ou entre em contato com o suporte")
            console.log(JSON.stringify(error))
            
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
                    events={ isLoading ?("none"):("initial")}
                    background={ isLoading ?("#E9E9E948"):("initial")}
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
                                    events={ isLoading ?("none"):("initial")}
                                    background={ isLoading ?("#E9E9E948"):("initial")}
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
                                    events={ isLoading ?("none"):("initial")}
                                    background={ isLoading ?("#E9E9E948"):("initial")}
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
                                    events={ isLoading ?("none"):("initial")}
                                    background={ isLoading ?("#E9E9E948"):("initial")}
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
                                    events={ isLoading ?("none"):("initial")}
                                    background={ isLoading ?("#E9E9E948"):("initial")}
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
                height={"30px"} 
                fontsize={"11px !important"} 
                fontColor={"#283338ff"} 
                background={"#CACACAA2 !important"} 
                backgroundhover={"#CACACA60 !important"}
                onClick={() => setAddNewAddres(false)}
            >
                {" Voltar"}
            </Button>
            
            <Button 
                width={"75%"} 
                height={"30px"} 
                fontsize={"11px !important"} 
                background={"#008183 !important"} 
                backgroundhover={"#009395ff !important"}
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
    filter: ${props => props.blur};
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
    @media (max-width: 850px) {
        padding: 2vh 3vw;
        span {
            column-gap: 2vw;
        }
        div {
            padding-top: 2vh;
            font-size: 13px;
        }
    }
`
const LocationIcon = styled(PiMapPinFill)`
    color: #009395ff;
    font-size: 20px;
    @media (max-width: 850px) {
        font-size: 25px;
    }
`
const AnotherInputsContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 1.2vh;
`