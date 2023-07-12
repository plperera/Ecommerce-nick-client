import styled from "styled-components"
import { useCustomForm } from "../../../../hooks/useCustomForms";
import { useEffect, useState } from "react";

export default function CategoryCreator () {

    const [ form, handleForm ] = useCustomForm();
    const [haveAllData, setHaveAllData] = useState(false)

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
                background={haveAllData?("#0C72A5"):("#0624332A")}
                color={haveAllData?("#FFFFFF"):("#1D1D1D")}
                cursor={haveAllData?("pointer"):("not-allowed")}
                display={haveAllData?("flex"):("none")}
            >
                {"Criar"}
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
    padding: 0 1vw;
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