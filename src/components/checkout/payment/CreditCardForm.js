import styled from "styled-components"
import { useCustomForm } from "../../../hooks/useCustomForms";
import Input from "../../../common/form/Input";
import { InputWrapper } from "./InputWrapper";
import Button from "../../../common/form/Button";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useValidation } from "../../../hooks/useValidation";
import validations from "./ValidationsPayment";
import { ErrorMsg } from "../../userDashboard/content/userData/ErrorMsg";
import api from "../../../services/API";
import useNavigateAndMoveUp from "../../../hooks/useNavigateAndMoveUp";

export default function CreditCardForm ({userData, checkoutDetails}) {

    const [ cardForm, setCardForm ] = useState(null);
    const [ cardDataResponse, setCardDataResponse] = useState({});
    const { errors, validate } = useValidation(validations);
    // eslint-disable-next-line no-unused-vars
    const [ form, handleForm, setForm ] = useCustomForm({})
    const navigateAndMoveUp = useNavigateAndMoveUp();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://sdk.mercadopago.com/js/v2';
        script.addEventListener('load', () => initializeMercadoPago());
        document.body.appendChild(script);

        const initialValues = {
            cardNumber: '5031 4332 1540 6351',
            expirationMonth:'11',
            expirationYear:'25',
            securityCode:'123',
            cardholderName:'Pedro',
            cardholderEmail:'pedro@email.com',
            issuer:'',
            identificationNumberUnformated:'58472995089',
            identificationNumber: ''
        }

        setForm(initialValues)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])   

    function customHandleForm({target: {id, value}}){
        const name = id.split("__")[1]
        setForm({...form, [name]: value})
    }

    function initializeMercadoPago() {
        const mp = new window.MercadoPago(process.env.REACT_APP_PUBLIC_KEY, {
            locale: 'pt-BR'
        })
        const newCardForm = mp.cardForm({
            amount: ((userData.totalPrice + checkoutDetails.shippingPrice) / 100).toString(),
            iframe: false,
            form: {
                id: "form-checkout",
                cardNumber: {
                    id: "form-checkout__cardNumber",
                    placeholder: "Número do Cartão",
                },
                expirationMonth: {
                    id: "form-checkout__expirationMonth",
                    placeholder: "Mês",
                },
                expirationYear: {
                    id: "form-checkout__expirationYear",
                    placeholder: "Ano",
                },
                securityCode: {
                    id: "form-checkout__securityCode",
                    placeholder: "CVV",
                },
                cardholderName: {
                    id: "form-checkout__cardholderName",
                    placeholder: "Titular do Cartão",
                },
                installments: {  
                    id: "form-checkout__installments",
                    placeholder: "Parcelas",
                },
                issuer: {
                    id: "form-checkout__issuer",
                    placeholder: "Bandeira",
                },
                identificationNumber: {
                    id: "form-checkout__identificationNumber",
                    placeholder: "Numero do Documento",
                },
                cardholderEmail: {
                    id: "form-checkout__cardholderEmail",
                    placeholder: "E-mail",
                },
            },
            callbacks: {
                onFormMounted: error => {
                    if (error) return console.warn("Form Mounted handling error: ", error);
                },
                onSubmit: event => {
                    event.preventDefault();
                    
                    const {
                    paymentMethodId: payment_method_id,
                    issuerId: issuer_id,
                    cardholderEmail: email,
                    amount,
                    token,
                    installments,
                    identificationNumber
                    } = newCardForm.getCardFormData();
                  
                    setCardDataResponse({
                        token,
                        issuer_id,
                        payment_method_id,
                        transaction_amount: Number(amount),
                        installments: Number(installments),
                        description: "Product description",
                        payer: {
                            email,
                            identification: {
                                number: identificationNumber,
                            },
                        },
                    })
                },
                /*
                onFetching: (resource) => {
                    
                    console.log("Fetching resource: ", resource);
            
                    Animate progress bar
                    const progressBar = document.querySelector(".progress-bar");
                    progressBar.removeAttribute("value");
            
                    return () => {
                    progressBar.setAttribute("value", "0");
                    };
                }  
                */   
            },
        });
        setCardForm(newCardForm)
    }
    
    function handleSubmit(){
        // eslint-disable-next-line no-unused-vars

        if(!checkoutDetails.addressId){
            toast.error("Selecione um endereço para entrega");
            return;
        }

        if(!checkoutDetails.shippingPrice || !checkoutDetails.shippingId){
            toast.error("Selecione um método de entrega");
            return;
        }

        // eslint-disable-next-line no-unused-vars
        const { isValid, errors } = validate(form)
        
        if (!isValid) {
            toast.error("Todos os campos devem ser preenchidos!");
            return;
        }

       cardForm.submit();
    }

    useEffect(() => {

        if( !cardDataResponse?.token ){
            return
        }

        console.log("cardDataResponse", cardDataResponse)

        savePayment()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cardDataResponse])

    async function savePayment(){
        try {
            const body = {
                description: cardDataResponse.description,
                installments: cardDataResponse.installments,
                issuer_id: cardDataResponse.issuer_id,
                payment_method_id: cardDataResponse.payment_method_id,
                token: cardDataResponse.token,
                transaction_amount: Number((cardDataResponse.transaction_amount * 100).toFixed(2)),
                payer: {
                    email: cardDataResponse.payer.email,
                    identification: {
                        number: cardDataResponse.payer.identification.number,
                        type: cardDataResponse.payer.identification.number.length === 11 ? 'cpf':'cnpj'
                    }
                },
                addressId: checkoutDetails.addressId,
                shippingId: checkoutDetails.shippingId,
                shippingValue: checkoutDetails.shippingPrice,
                cart: userData.cart
            }

            const response = await api.CreateNewOrder({token: userData.token, body})

            if (response.status === 201){
                navigateAndMoveUp({locate:"checkout/obrigado"})
                toast.dark("Pedido Realizado com Sucesso")
            }
            

        } catch (error) {
            console.log(error)
            toast.error("Ocorreu um erro, tente novamente ou entre em contato com o suporte")
        }
    }

    return(
        <FormsContainer id="form-checkout">

            <InputWrapper width={"100%"}>
                <Input 
                    label="Titular do Cartão"  
                    placeholder="Titular do Cartão"   
                    id="form-checkout__cardholderName"  
                    type="text" 
                    name={"cardholderName"} 
                    value={form?.cardholderName} 
                    onChange={customHandleForm}
                    width="100%"
                />
                {errors.cardholderName && <ErrorMsg>{errors.cardholderName}</ErrorMsg>}
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
                    id="form-checkout__cardholderEmail"
                    type="text" 
                    name={"cardholderEmail"} 
                    value={form?.cardholderEmail} 
                    onChange={customHandleForm}
                    width="100%"
                />
                {errors.cardholderEmail && <ErrorMsg>{errors.cardholderEmail}</ErrorMsg>}
            </InputWrapper>

            <InputWrapper width={"20%"}>
                <Input 
                    label="Mês"     
                    mask="99"
                    placeholder="Mês"   
                    id="form-checkout__expirationMonth"  
                    type="text" 
                    name={"expirationMonth"} 
                    value={form?.expirationMonth} 
                    onChange={customHandleForm}
                    width="100%"
                />
                {errors.expirationMonth && <ErrorMsg>{errors.expirationMonth}</ErrorMsg>}                
            </InputWrapper>

            <InputWrapper width={"20%"}>
                <Input 
                    label="Ano"  
                    mask="99"   
                    placeholder="Ano"   
                    id="form-checkout__expirationYear"  
                    type="text" 
                    name={"expirationYear"} 
                    value={form?.expirationYear} 
                    onChange={customHandleForm}
                    width="100%"
                />
                {errors.expirationYear && <ErrorMsg>{errors.expirationYear}</ErrorMsg>}  
            </InputWrapper>

            <InputWrapper width={"54%"}>
                <Input 
                    label="CVV"  
                    mask="999"   
                    placeholder="CVV"   
                    id="form-checkout__securityCode"  
                    type="text" 
                    name={"securityCode"} 
                    value={form?.securityCode} 
                    onChange={customHandleForm}
                    width="100%"
                />
                {errors.securityCode && <ErrorMsg>{errors.securityCode}</ErrorMsg>}  
            </InputWrapper>

            <InputWrapper width={"100%"}>
                <Input 
                    label="Número do Cartão"     
                    placeholder="Número do Cartão"   
                    id="form-checkout__cardNumber"  
                    type="text" 
                    name={"cardNumber"} 
                    mask="9999 9999 9999 9999" 
                    value={form?.cardNumber} 
                    onChange={customHandleForm}
                    width="100%"
                />
                {errors.cardNumber && <ErrorMsg>{errors.cardNumber}</ErrorMsg>}  
            </InputWrapper>

            <InputWrapper width={"100%"}>
                <Select 
                    placeholder="Parcelas"   
                    id="form-checkout__installments"  
                    type="text" 
                    name={"installments"} 
                    value={form?.installments} 
                    onChange={customHandleForm}
                >
                </Select>
            </InputWrapper>

            <InputWrapper display={"none"}>
                <select 
                    label="Bandeira"     
                    placeholder="Bandeira"   
                    id="form-checkout__issuer"  
                    type="text" 
                    name={"issuer"} 
                    value={form?.issuer} 
                    onChange={customHandleForm}
                    width="100%"
                >
                </select>
            </InputWrapper>

            <InputWrapper display={"none"}>
                <select 
                    label="Bandeira"     
                    placeholder="Bandeira"   
                    id="form-checkout__issuer"  
                    type="text" 
                    name={"issuer"} 
                    value={form?.issuer} 
                    onChange={customHandleForm}
                    width="100%"
                >
                </select>
            </InputWrapper>
            
            <Button 
                width={"100%"} 
                background={"#009395ff !important"} 
                backgroundhover={"#00B6B9 !important"} 
                type="button"
                id="form-checkout__submit"
                onClick={() => handleSubmit()}
            >
                {"Finalizar"}
            </Button>
        </FormsContainer>  
    )
}
const FormsContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 2vh;
`
const Select = styled.select`
    width: 100%;
    height: 60px;
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px 16px;
    background-color: #fff;
    font-size: 17px;
    color: #171717A8;
    
    &:focus {
        border: 2px solid #009395ff;
    }

    &:disabled {
        opacity: 0.5;
    }
`;
