import styled from "styled-components"
import logo from "../../assets/images/logoAuth/logo.png"
import { useState } from "react"
import { AiFillCheckSquare, AiOutlineBorder } from 'react-icons/ai';
import { useCustomForm } from "../../hooks/useCustomForms";
import api from "../../services/API";
import { toast } from "react-toastify";

export default function SignUp ({ setHasLogin }) {
    const [checkBox, setCheckBox] = useState(false)
    const [form, handleForm] = useCustomForm()

    async function SubmitForms(){

        if (!form.email || !form.name || !form.password || !form.passwordVerify){
            return toast.error("Preencha todos os Campos")
        }
        if (form.password !== form.passwordVerify){
            return toast.error("As Senhas devem ser Iguais")
        }
        if (!checkBox){
            return toast.error("Confirme os termos de Privacidade para Criar sua conta")
        }

        const body = {
            email: form.email,
            name: form.name,
            password: form.password,
            passwordVerify: form.passwordVerify
        }

        console.log(body)

        try {           
            const response = await api.CreateAccount(body)
            
            if( response.status === 201){
                //setIsLoading(false)
                //SuccessRefresh()
                console.log(response)
                toast.dark("Conta Criada com Sucesso")
                setTimeout(() => setHasLogin(true), 1500)
            }

        } catch (error) {
            console.log(error)
            //setIsLoading(false)
            toast.error("Verifique os valores !!")
        }
    }

    return(
        <Container>
            <img src={logo} alt="Nick Te Ajuda"/>

            <UserActionsContainer>
                <InputContainer>
                    <label>{"Nome"}</label>
                    <input 
                        name="name"
                        placeholder="Nome"
                        value={form.name}
                        onChange={handleForm}
                    />
                </InputContainer>

                <InputContainer>
                    <label>{"Email"}</label>
                    <input
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleForm}
                    />
                </InputContainer>

                <InputContainer>
                    <label>{"Senha"}</label>
                    <input
                        name="password"
                        placeholder="Senha"
                        value={form.password}
                        onChange={handleForm}
                    />
                </InputContainer>

                <InputContainer>
                    <label>{"Confirme sua Senha"}</label>
                    <input
                        name="passwordVerify"
                        placeholder="Repita a mesma senha"
                        value={form.passwordVerify}
                        onChange={handleForm}
                    />
                </InputContainer>

                <CheckBoxContainer>
                    <CheckBoxInput onClick={() => setCheckBox(!checkBox)} background={checkBox?("#171717"):("#17171700")}>{checkBox?(<CheckBoxIcon/>):(<UnCheckBoxIcon/>)}</CheckBoxInput>
                    <div>
                        <span>{"Concordo com os "} <CheckBoxSpanButton>{"Termos de Privacidade"}</CheckBoxSpanButton></span>
                    </div>
                </CheckBoxContainer>

            </UserActionsContainer>

            <ButtonsContainer>
                <ButtonStyle onClick={() => SubmitForms()}>{"Criar Conta"}</ButtonStyle>
                <NewAccountButtonStyle onClick={() => setHasLogin(true)}>{"Ja tenho uma Conta"}</NewAccountButtonStyle>
            </ButtonsContainer>
           
        </Container>
    )
}

const Container = styled.div`
    width: 470px;
    height: 610px;
    background-color: #FFFFFF;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3vh;
    row-gap: 2vh;
    img {
        max-height: 70px;
        max-width: 60%;
    }
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    input {
        margin-top: 0.4vh;
        margin-bottom: 0.8vh;
        height: 37px;
        width: 410px;
        text-decoration: none;
        opacity: 1;
        border: none;
        border: 2px solid #02131B ;
        color: #171717;

        padding-left: 12px;
        padding-right: 12px;
        outline: none;
        background-color: #FFFFFF;
        border-radius: 0px;
        font-size: 14px;
        font-weight: 600;

        ::placeholder{
            color: #1717172C;
            opacity: 1;
        }
        :focus {
            border-radius: 10px;
            border: 2px solid #0B83BE ;
        }
    }
    label {
        font-size: 18px;
        color: #02131B;
        font-weight: 500;
        margin-top: 1.4vh;
    }
`
const CheckBoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    margin-top: 1vh;
    span { 
        font-size: 16px;
        color: #02131B;
        font-weight: 500;
        margin-top: 1.4vh;
    }
`
const CheckBoxIcon = styled(AiFillCheckSquare)`
    font-size: 30px;
`
const UnCheckBoxIcon = styled(AiOutlineBorder)`
    font-size: 30px;
`
const CheckBoxInput = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 5px;
    margin-right: 0.4vw;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
`
const CheckBoxSpanButton = styled.span`
    text-decoration: underline;
    cursor: pointer;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 25px;
`
const ButtonStyle = styled.div`
    display: flex;
    justify-content: center;    
    align-items: center;
    font-size: 18px;
    width: 264px;
    height: 42px;
    background-color: #02131B;
    color: #FFFFFF;
    cursor: pointer;
    user-select: none;
    &:hover{
        background-color: #084663;
    }
`
const NewAccountButtonStyle = styled.div`
    display: flex;
    justify-content: center;    
    align-items: center;
    font-size: 17px;
    font-weight: 500;
    cursor: pointer;
`
const UserActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
`