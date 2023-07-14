import styled, { keyframes } from "styled-components"
import { useCustomForm } from "../../../../hooks/useCustomForms";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../../../services/API";

export default function CategoryCreator ({setRefresh, refresh}) {

    const [ form, handleForm ] = useCustomForm();
    const [haveAllData, setHaveAllData] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    async function sendForm(){

        if(isLoading){
            return
        }

        if(!form?.newCategory){
            return toast.error("Verifique os valores")
        }

        setIsLoading(true)

        const body = {
            name: form?.newCategory
        }

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyQWRtaW5JZCI6MSwiaWF0IjoxNjg3ODA2MTk0fQ.ygwuAdiC40MOZXAjsNEr-CGDH8FZaS0Sp9Gthtmb8Cg"
        
        try {           
            const response = await api.CreateCategory({body, token})

            if( response.status === 201){
                setIsLoading(false)
                SuccessRefresh()
                toast.dark("Categoria criada com Sucesso !!")
            }

        } catch (error) {
            console.log(error)
            setIsLoading(false)
            toast.error("Verifique os valores !!")
        }         
    }
    
    function SuccessRefresh(){
        if(refresh === undefined){
            return
        }
        setRefresh(!refresh)
    }

    useEffect(() => {

        if(form?.newCategory){
            return setHaveAllData(true)
        }

        return setHaveAllData(false)

    }, [form])

    return(
        <Container>
            <InputStyled
                onChange={handleForm}
                placeholder="Insira um nome para a Categoria"
                name="newCategory"
                value={form.newCategory}
            />
            <ButtonStyled
                background={!isLoading?("#0C72A5"):("#0624332A")}
                color={haveAllData?("#FFFFFF"):("#1D1D1D")}
                cursor={!isLoading?("pointer"):("not-allowed")}
                display={haveAllData?("flex"):("none")}
                onClick={() => sendForm()}
            >
                {isLoading ?(<Spinner />):("Criar")}
            </ButtonStyled>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
    padding: 2vh 2vh;
    color: #171717;
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    background-color: #39525E15;
    border-radius: 5px;
    gap: 15px;
`
const InputStyled = styled.input`
    height: 32px;
    width: 30%;
    text-decoration: none;
    opacity: 1;
    border: none;
    border: 2px solid #02131B75 ;
    color: #171717;

    padding-left: 12px;
    padding-right: 12px;
    outline: none;
    border-radius: 0px;
    font-size: 14px;
    font-weight: 600;

    ::placeholder{
        color: #171717;
        opacity: .2;
    }
    :focus {
        border-radius: 10px;
        border: 2px solid #0B83BE ;
    }
`
const ButtonStyled = styled.div`
    width: auto;
    padding: 0 1.5vw;
    height: 30px;
    display: ${props => props.display};
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    border-radius: 15px;
    background-color: ${props => props.background};
    color: ${props => props.color};
    font-weight: 600;
    cursor: ${props => props.cursor};
`
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const Spinner = styled.div`
  border-radius: 50px;

  border-bottom: 2px dotted #00929544;
  border-right: 2px dotted #00929544;
  border-top: 4px ridge #009395;
  border-left: 2px dotted #00929544; 
  width: 22px;
  height: 22px;
  animation: ${spinAnimation} 2s linear infinite;
  //background-color: red;
`;