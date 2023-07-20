import styled from "styled-components"
import { useCustomForm } from "../../../hooks/useCustomForms";
import Input from "../../../common/form/Input";
import { InputWrapper } from "./InputWrapper";
import Button from "../../../common/form/Button";
import { useState } from "react";
import { useEffect } from "react";

export default function CreditCardForm () {

    const [cardForm, setCardForm] = useState(null);
    const [ form, handleForm ] = useCustomForm({
        cardNumber:'5031433215406351',
        expirationMonth:'11',
        expirationYear:'25',
        securityCode:'123',
        cardholderName:'Taldo Testador',
        issuer:'MasterCard',
        identificationNumber:"74699347070",
        cardholderEmail:"pedro@email.com"
    })
    
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://sdk.mercadopago.com/js/v2';
        script.addEventListener('load', () => initializeMercadoPago());
        document.body.appendChild(script);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])   

    function initializeMercadoPago() {
        const mp = new window.MercadoPago(process.env.REACT_APP_PUBLIC_KEY, {
            locale: 'pt-BR'
        })
        const newCardForm = mp.cardForm({
            amount: "100.5",
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
                    placeholder: "Email",
                },
            },
            callbacks: {
                onFormMounted: error => {
                    if (error) return console.warn("Form Mounted handling error: ", error);
                    console.log("Form mounted");
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
                    identificationNumber,
                    } = newCardForm.getCardFormData();

                    const identificationType = identificationNumber.length === 11 ? 'cpf' : 'cnpj';
            
                    console.log({

                        token,
                        issuer_id,
                        payment_method_id,
                        transaction_amount: Number(amount),
                        installments: Number(installments),
                        description: "Product description",
                        payer: {
                            email,
                            identification: {
                                type: identificationType,
                                number: identificationNumber,
                            },
                        },
                    })
                    
                    
                },

                // onFetching: (resource) => {
                //     console.log("Fetching resource: ", resource);
            
                //     // Animate progress bar
                //     const progressBar = document.querySelector(".progress-bar");
                //     progressBar.removeAttribute("value");
            
                //     return () => {
                //     progressBar.setAttribute("value", "0");
                //     };
                // }
            },
        });
        setCardForm(newCardForm)
    }
    
    const [teste, setTeste ] = useState("oi")
    
    useEffect(() => {
        console.log(cardForm)
    },[cardForm])

    async function handleSubmit(e) {
        e.preventDefault();
        //const response = await cardForm.createCardToken()
        //console.log(response)
        setTeste("Formulário enviado!")
    }

    return(
        <FormsContainer onSubmit={handleSubmit} id="form-checkout">

            <InputWrapper width={"50%"}>
                <Input 
                    label="Número do Cartão"     
                    placeholder="Número do Cartão"   
                    id="form-checkout__cardNumber"  
                    type="text" 
                    name={"cardNumber"} 
                    value={form.cardNumber} 
                    onChange={handleForm}
                    width="100%"
                />
            </InputWrapper>

            <InputWrapper width={"50%"}>
                <Input 
                    label="Mês"     
                    placeholder="Mês"   
                    id="form-checkout__expirationMonth"  
                    type="text" 
                    name={"expirationMonth"} 
                    value={form.expirationMonth} 
                    onChange={handleForm}
                    width="100%"
                />
            </InputWrapper>

            <InputWrapper width={"50%"}>
                <Input 
                    label="Ano"     
                    placeholder="Ano"   
                    id="form-checkout__expirationYear"  
                    type="text" 
                    name={"expirationYear"} 
                    value={form.expirationYear} 
                    onChange={handleForm}
                    width="100%"
                />
            </InputWrapper>

            <InputWrapper width={"50%"}>
                <Input 
                    label="CVV"     
                    placeholder="CVV"   
                    id="form-checkout__securityCode"  
                    type="text" 
                    name={"securityCode"} 
                    value={form.securityCode} 
                    onChange={handleForm}
                    width="100%"
                />
            </InputWrapper>

            <InputWrapper width={"50%"}>
                <Input 
                    label="Titular do Cartão"     
                    placeholder="Titular do Cartão"   
                    id="form-checkout__cardholderName"  
                    type="text" 
                    name={"cardholderName"} 
                    value={form.cardholderName} 
                    onChange={handleForm}
                    width="100%"
                />
            </InputWrapper>

            <InputWrapper width={"50%"}>
                <select 
                    label="Parcelas"     
                    placeholder="Parcelas"   
                    id="form-checkout__installments"  
                    type="text" 
                    name={"installments"} 
                    value={form.installments} 
                    onChange={handleForm}
                    width="100%"
                >
                    <option value="">Escolha o número de parcelas</option>
                    <option value="1">1</option>
                </select>
            </InputWrapper>

            <InputWrapper width={"50%"}>
                <select 
                    label="Bandeira"     
                    placeholder="Bandeira"   
                    id="form-checkout__issuer"  
                    type="text" 
                    name={"issuer"} 
                    value={form.issuer} 
                    onChange={handleForm}
                    width="100%"
                >
                </select>
            </InputWrapper>
            
            <InputWrapper width={"50%"}>
                <select
                    label="Tipo de Documento"     
                    placeholder="Tipo de Documento"   
                    id="checkout__identificationType"  
                    type="text" 
                    name={"identificationType"} 
                    value={form.identificationType} 
                    onChange={handleForm}
                    width="100%"
                >
                    <option value="">Selecione o tipo de documento</option>
                    <option value="cpf">CPF</option>
                    <option value="cnpj">CNPJ</option>
                </select>
            </InputWrapper>

            <InputWrapper width={"50%"}>
                <Input 
                    label="Numero do Documento"     
                    placeholder="Numero do Documento"   
                    id="form-checkout__identificationNumber"  
                    type="text" 
                    name={"identificationNumber"} 
                    value={form.identificationNumber} 
                    onChange={handleForm}
                    width="100%"
                />
            </InputWrapper>

            <InputWrapper width={"50%"}>
                <Input 
                    label="Email"     
                    placeholder="Email"   
                    id="form-checkout__cardholderEmail"  
                    type="text" 
                    name={"cardholderEmail"} 
                    value={form.cardholderEmail} 
                    onChange={handleForm}
                    width="100%"
                />
            </InputWrapper>

            <div>{teste}</div>

            <Button 
                width={"100%"} 
                background={"#009395ff !important"} 
                backgroundhover={"#00B6B9 !important"} 
                type="submit"
                id="form-checkout__submit"
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