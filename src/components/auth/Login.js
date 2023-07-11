import styled from "styled-components"
import logo from "../../assets/images/logoAuth/logo.png"

export default function Login () {
    return(
        <Container>
            <img src={logo} alt="Nick Te Ajuda"/>

            <UserActionsContainer>
                <InputContainer>
                    <label>{"Email"}</label>
                    <input/>
                </InputContainer>

                <InputContainer>
                    <label>{"Senha"}</label>
                    <input/>
                </InputContainer>

                <OptionsContainer>
                    <span>{"Esqueceu a senha?"}</span>
                    <span>{"Termo de Privacidade"}</span>
                </OptionsContainer>
            </UserActionsContainer>

            <ButtonsContainer>
                <ButtonStyle>{"Entrar"}</ButtonStyle>
                <NewAccountButtonStyle>{"Criar uma Conta"}</NewAccountButtonStyle>
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
const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    span {
        font-size: 14px;
        font-weight: 600;
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