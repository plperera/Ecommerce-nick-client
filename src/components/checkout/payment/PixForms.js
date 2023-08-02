import styled from "styled-components"
import { useCustomForm } from "../../../hooks/useCustomForms";
import Input from "../../../common/form/Input";
import { InputWrapper } from "./InputWrapper";
import Button from "../../../common/form/Button";
import { useState } from "react";
import { useEffect } from "react";
import { useValidation } from "../../../hooks/useValidation";
import validations from "./ValidationsPayment";
import { ErrorMsg } from "../../userDashboard/content/userData/ErrorMsg";
import api from "../../../services/API";
import LoadingContainer from "./LoadingContainer";

export default function PixForm ({userData, checkoutDetails}) {

    // eslint-disable-next-line no-unused-vars
    const [ isLoading, setIsLoading ] = useState(false);
    const [ pixDataResponse, setPixDataResponse] = useState({});
    // eslint-disable-next-line no-unused-vars
    const { errors, validate } = useValidation(validations);
    // eslint-disable-next-line no-unused-vars
    const [ form, handleForm, setForm ] = useCustomForm({})


    function customHandleForm({target: {id, value}}){
        const name = id.split("__")[1]
        setForm({...form, [name]: value})
    }

    useEffect(() => {

        const initialValues = {
            payerEmail: 'pedro@email.com',
            payerFirstName:'Pedro',
            payerLastName:'Pinchas',
            identificationNumberUnformated:'58472995089',
        }

        setForm(initialValues)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 

    console.log("checkoutDetails", checkoutDetails)

    async function handleTesteSubmit(){
        try {
            const formatedIdentificationNumber = form.identificationNumberUnformated?.replace(".", "")?.replace("-", "")?.replace("/", "")?.replace(".", "");

            const body = {
                transaction_amount: (userData.totalPrice + checkoutDetails.shippingPrice),
                description: 'Testeeee',
                payment_method_id: 'pix',
                payer: {
                  email: form.payerEmail,
                  first_name: form.payerFirstName,
                  last_name: form.payerLastName,
                  identification: {
                    type: formatedIdentificationNumber.length === 11 ? 'cpf':'cnpj',
                    number: formatedIdentificationNumber
                  },
                  address:  {
                    addressId: checkoutDetails.addressId
                  }
                }
            };

            const response = await api.CreateNewOrderByPix({token: userData.token, body})

            console.log(response)

            const formatedResponse = {
                id: response.data.body.id,
                status: response.data.body.status,
                status_detail: response.data.body.status_detail,
                transaction_details: {
                    net_received_amount: response.data.body.transaction_details.net_received_amount,
                    total_paid_amount: response.data.body.transaction_details.total_paid_amount,
                    overpaid_amount: response.data.body.transaction_details.overpaid_amount,
                    external_resource_url: response.data.body.transaction_details.external_resource_url,
                    installment_amount: response.data.body.transaction_details.installment_amount,
                    financial_institution: response.data.body.transaction_details.financial_institution,
                },
                point_of_interaction: {
                    type: response.data.body.point_of_interaction.type,
                    application_data: {
                        name: response.data.body.point_of_interaction.application_data.name,
                        version: response.data.body.point_of_interaction.application_data.version,
                    },
                    transaction_data: {
                        qr_code_base64: response.data.body.point_of_interaction.transaction_data.qr_code_base64,
                        qr_code: response.data.body.point_of_interaction.transaction_data.qr_code,
                        ticket_url: response.data.body.point_of_interaction.transaction_data.ticket_url,
                    }
                }
            }
            setPixDataResponse(formatedResponse)
            console.log(formatedResponse)         

        } catch (error) {
            //setIsLoading(false)
            console.log(error)
            //toast.error("Ocorreu um erro, tente novamente ou entre em contato com o suporte")
        }

    }

    useEffect(() => {
        console.log(pixDataResponse)
        console.log(pixDataResponse?.point_of_interaction?.transaction_data?.ticket_url)
    },[pixDataResponse])


    return(
        <>
            {isLoading ? (<LoadingContainer/>):(<></>)}
        
            <FormsContainer id="form-checkout">

                <InputWrapper width={"100%"}>
                    <Input 
                        label="Primeiro Nome"  
                        placeholder="Primeiro Nome"   
                        id="form-checkout__payerFirstName"  
                        type="text" 
                        name={"payerFirstName"} 
                        value={form?.payerFirstName} 
                        onChange={customHandleForm}
                        width="100%"
                    />
                    {errors.payerFirstName && <ErrorMsg>{errors.payerFirstName}</ErrorMsg>}
                </InputWrapper>

                <InputWrapper width={"100%"}>
                    <Input 
                        label="Ultimo Nome"  
                        placeholder="Ultimo Nome"   
                        id="form-checkout__payerLastName"  
                        type="text" 
                        name={"payerLastName"} 
                        value={form?.payerLastName} 
                        onChange={customHandleForm}
                        width="100%"
                    />
                    {errors.payerLastName && <ErrorMsg>{errors.payerLastName}</ErrorMsg>}
                </InputWrapper>

                <InputWrapper width={"100%"}>
                    <Input 
                        label="Numero do Documento"     
                        placeholder="Numero do Documento"   
                        id="form-checkout__identificationNumberUnformated"
                        mask={form?.identificationNumberUnformated?.length < 15 ? '999.999.999-999' : '99.999.999/9999-99'}
                        type="text" 
                        name={"identificationNumberUnformated"} 
                        value={form?.identificationNumberUnformated} 
                        onChange={customHandleForm}
                        width="100%"
                    />
                    {errors.identificationNumberUnformated && <ErrorMsg>{errors.identificationNumberUnformated}</ErrorMsg>}
                </InputWrapper>

                <InputWrapper display={"none"}>
                    <Input 
                        label="Numero do Documento"     
                        placeholder="Numero do Documento"   
                        id="form-checkout__identificationNumber"
                        type="text" 
                        name="identificationNumber"
                        value={form.identificationNumberUnformated?.replace(".", "")?.replace("-", "")?.replace("/", "")?.replace(".", "")} 
                        onChange={customHandleForm}
                        width="100%"
                    />
                    {errors.identificationNumber && <ErrorMsg>{errors.identificationNumber}</ErrorMsg>}
                </InputWrapper>

                <InputWrapper width={"100%"}>
                    <Input 
                        label="E-mail"     
                        placeholder="E-mail"   
                        id="form-checkout__payerEmail"
                        type="text" 
                        name={"payerEmail"} 
                        value={form?.payerEmail} 
                        onChange={customHandleForm}
                        width="100%"
                    />
                    {errors.payerEmail && <ErrorMsg>{errors.payerEmail}</ErrorMsg>}
                </InputWrapper>        

                {
                    pixDataResponse?.point_of_interaction?.transaction_data?.qr_code_base64 ? (

                        <QrCodeContainer>
                            <img src={`data:image/jpeg;base64,${pixDataResponse?.point_of_interaction?.transaction_data?.qr_code_base64}`}  alt=''/>
                            <Input label={"PIX COPIA E COLA"} width={"80%"} type="text" id="copiar"  value={pixDataResponse?.point_of_interaction?.transaction_data?.qr_code}/>
                        </QrCodeContainer>

                    ):(
                        <Button 
                            width={"100%"} 
                            background={"#009395ff !important"} 
                            backgroundhover={"#00B6B9 !important"} 
                            type="button"
                            id="form-checkout__submit"
                            onClick={() => handleTesteSubmit()}
                        >
                            {"Finalizar"}
                        </Button>
                    )
                }    

                   
                
                
            </FormsContainer>  
        </>
    )
}
const FormsContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 2vh;
`
const QrCodeContainer = styled.div`
    display: flex;
    width: 100%;
    height: 32vh;
    padding: 2vh 1vw;
    row-gap: 1.2vh;
    box-shadow: 0 0 10px #00000085;
    border-radius: 15px;
    align-items: start;
    justify-content: center;
    flex-wrap: wrap;
    img {
        max-width: 200px;
        max-height: 200px;
    }
    @media (max-width: 850px) {
        height: auto;
    }
`
