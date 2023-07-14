import { useState } from "react"
import { toast } from "react-toastify"
import styled from "styled-components"

export default function TecnicDetails ({ tecnicDetails, setTecnicDetails }) {

    const [lines, setLines] = useState([1])
    

    function AddMoreImages(){
        if (lines.length < 5){
            setLines([...lines, lines.length + 1])
            setTecnicDetails([...tecnicDetails, {topic: "", topicDetails:""}])
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

        setTecnicDetails(values);
    }

    return(
        <Container>
            <h2>
                {"Detalhes Técnicos"}
                <SpanStyle>{"(opcional)"}</SpanStyle>
            </h2>
            {lines.map( (e, index) => 
                <SubContainer key={index}>
                    <TopicInputContainer>
                        <label>{`Tópico (${e})`}</label>
                        <input 
                            placeholder="Tópico"
                            name={"topic"}
                            value={tecnicDetails[index].topic}
                            onChange={event => handleTecnincDetailsForm(index, event)}
                        />
                    </TopicInputContainer>
                    <TopicDetailsInputContainer>
                        <label>{`Detalhes do tópico (${e})`}</label>
                        <input 
                            placeholder="Detalhes do tópico"
                            name={"topicDetails"}
                            value={tecnicDetails[index].topicDetails}
                            onChange={event => handleTecnincDetailsForm(index, event)}
                        />
                    </TopicDetailsInputContainer>
                </SubContainer>
            )}
            <AddLineContainer onClick={() => AddMoreImages()}>{"Adicionar nova linha"}</AddLineContainer>            
        </Container>
    )
}
const Container = styled.div`
    width: 100%;
    padding-bottom: 3vh;
`
const SpanStyle = styled.span`
    color: #17171733;
    font-weight: 600;
    font-size: 14px;
    margin-left: 0.5vw;
`
const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    flex-wrap: nowrap;

    input {
        margin-top: 1vh;
        margin-bottom: 1vh;
        height: 42px;
        text-decoration: none;
        opacity: 1;
        border: none;
        border: 2px solid #02131B87 ;
        color: #171717;

        padding-left: 12px;
        padding-right: 12px;
        outline: none;
        border-radius: 0px;
        font-size: 13px;
        font-weight: 600;

        ::placeholder{
            color: #171717;
            opacity: .2;
        }
        :focus {
            border-radius: 10px;
            border: 2px solid #0B83BE ;
        }
    }
    label {
        font-size: 13px;
        color: #02131BAA;
        font-weight: 500;
        margin-top: 7px;
    }
`
const TopicInputContainer = styled(InputsContainer)`
    width: 49%;
`
const TopicDetailsInputContainer = styled(InputsContainer)`
    width: 49%;
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