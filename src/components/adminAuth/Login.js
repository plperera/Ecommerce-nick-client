import styled from "styled-components"
import logo from "../../assets/images/logoAuth/logo.png"
import { useCustomForm } from "../../hooks/useCustomForms"
import { toast } from "react-toastify"
import api from "../../services/API"
import { useContext } from "react"
import useNavigateAndMoveUp from "../../hooks/useNavigateAndMoveUp"
import AdminContext from "../../context/AdminContext"

export default function Login () {

    const [form, handleForm] = useCustomForm()
    const { setAdminData } = useContext(AdminContext);
    const navigateAndMoveUp = useNavigateAndMoveUp();

    async function SubmitForms(){

        if (!form.email|| !form.password){
            return toast.error("Preencha todos os Campos")
        }

        const body = {
            email: form.email,
            password: form.password
        }

        try {           
            const response = await api.CreateAdminSession(body)

            if( response.status === 200){

                setAdminData(response.data)
                toast.dark("Login realizado com sucesso!")
                navigateAndMoveUp({locate: "admin/dashboard"})
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

            </UserActionsContainer>

            <ButtonsContainer>
                <ButtonStyle onClick={() => SubmitForms()}>{"Entrar"}</ButtonStyle>
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
    padding-top: 8vh;
    row-gap: 5vh;
    img {
        max-height: 70px;
        max-width: 60%;
    }
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    input {
        margin-top: 1vh;
        margin-bottom: 1vh;
        height: 42px;
        width: 416px;
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
            color: #E6E4FF;
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
        margin-top: 16px;
    }
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
const UserActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
`