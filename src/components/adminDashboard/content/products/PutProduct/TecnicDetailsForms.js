import { useState } from "react"
import { toast } from "react-toastify"
import styled from "styled-components"
import { InputWrapper } from "../../../../userDashboard/content/userData/InputWrapper"
import Input from "../../../../../common/form/Input"

export default function TecnicDetails ({ tecnicDetails, setForm, form }) {

    const [lines, setLines] = useState(Array.from({length: tecnicDetails?.length}));


    function AddMoreImages(){
        if (lines.length < 5){
            setLines([...lines, lines.length + 1])
        } else {
            toast.dark("Limite de tópicos atingido!!")
        }
    }

    function handleTecnincDetailsForm(index, event){

        const values = [...tecnicDetails];

        if (event.target.name === "topic") {

            values[index].topic = event.target.value;

        } else {

            values[index].topicDetails = event.target.value;

        }
    }

    return(
        <Container>
            <Title>
                {"Detalhes Técnicos"}
                <SpanStyle>{"(opcional)"}</SpanStyle>
            </Title>
            <InputContainer>
                {lines.map( (e, index) => 
                    <>

                        <InputWrapper width={"49.5%"}>
                            <Input 
                                label={`Topico ${index + 1}`}    
                                type="text" 
                                name={`topic${index}`} 
                                value={form?.tecnicDetails[index]?.topic} 
                                onChange={handleTecnincDetailsForm}
                                width="100%"
                            />
                        </InputWrapper>

                        <InputWrapper width={"49.5%"}>
                            <Input 
                                label={`Detalhamento do topico ${index + 1}`}    
                                type="text" 
                                name={`topic${index}`}  
                                value={form?.tecnicDetails[index]?.topicDetail} 
                                onChange={handleTecnincDetailsForm}
                                width="100%"
                            />
                        </InputWrapper>

                    </>
                )}
                <AddLineContainer onClick={() => AddMoreImages()}>{"Adicionar nova linha"}</AddLineContainer>   
            </InputContainer>         
        </Container>
    )
}
const Container = styled.div`
    width: 100%;
`
const Title = styled.div`
    font-size: 20px;
    margin-bottom: 2vh;
`
const SpanStyle = styled.span`
    color: #17171733;
    font-weight: 600;
    font-size: 14px;
    margin-left: 0.5vw;
`
const InputContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 1vh;
`
const AddLineContainer = styled.div`
    display: flex;
    align-items: center;    
    justify-content: center;
    width: 100%;
    height: 3.5vh;
    border-radius: 50px;
    border: 3px solid #F0F0F0;
    background-color: #E1E1E1;
    color: #3A3A3AAB;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    margin-top: 8px;
    cursor: pointer;
    user-select: none;
`