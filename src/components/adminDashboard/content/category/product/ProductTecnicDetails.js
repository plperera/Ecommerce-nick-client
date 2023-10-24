import { useState } from "react"
import styled from "styled-components"
import Input from "../../../../../common/form/Input"

export default function ProductTecnicDetails ({form, setForm}) {
    const [showTecnicDetails, setShowTecnicDetails] = useState(true)

    function handleTopicForm(index, event){
        const newTecnicDetails = [
            ...form?.tecnicDetails,
        ]
        newTecnicDetails[index][event?.target?.name] = event?.target?.value
        setForm({...form, tecnicDetails: newTecnicDetails})
    }
    function handleDeleteLine(index){
        const newTecnicDetails = [
            ...form?.tecnicDetails,
        ]
        newTecnicDetails.splice(index, 1)
        setForm({...form, tecnicDetails: newTecnicDetails})
    }
    function handleAddLine(){
        const newTecnicDetails = [
            ...form?.tecnicDetails,
        ]
        newTecnicDetails.push({topic:"", topicDetail: ""})
        setForm({...form, tecnicDetails: newTecnicDetails})
        console.log(form)
    }

    return(
        <Container>    
            <HandleShowContainer>
                <p>Detalhes Tecnicos</p>
                <p onClick={() => setShowTecnicDetails(!showTecnicDetails)}>{showTecnicDetails ? 'mostrar menos':'expandir'}</p>
            </HandleShowContainer>
            <AllDetailsContainer showTecnicDetails={showTecnicDetails}>
                {form?.tecnicDetails?.map( (e, index) => 
                    <UniqueDetailsForm>
                        <Input 
                            label={"Topico " + index} 
                            type="text" 
                            name={"topic"} 
                            value={e?.topic} 
                            width="40%"
                            onChange={(event) => handleTopicForm(index, event)}
                        />
                        <Input 
                            label={"Detalhes do Topico " + index} 
                            type="text" 
                            name={"topicDetail"} 
                            value={e?.topicDetail} 
                            width="58%"
                            onChange={(event) => handleTopicForm(index, event)}
                        />
                        <DeleteLineButton onClick={() => handleDeleteLine(index)}>X</DeleteLineButton>
                    </UniqueDetailsForm>    
                )}        
                <AddLineButton onClick={handleAddLine}>{"+"}</AddLineButton>      
            </AllDetailsContainer>
        </Container>
    )
}
const Container = styled.div`
    width: 80%;
    min-height: 60px;
`
const HandleShowContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > :last-child {
        background-color: #9E9E9E83;
        color: #464646;
        padding: 6px 12px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        user-select: none;
    }
`
const AllDetailsContainer = styled.div`
    width: 100%;
    display: ${props => props.showTecnicDetails ? `flex`:'none'};
    flex-direction: column;
    row-gap: 2vh;
`
const UniqueDetailsForm = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`
const DeleteLineButton = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #CF4D4D;
    color: #FFFFFF;
    position: absolute;
    border-radius: 5px;
    font-size: 17px;
    right: -35px;
    transform: translate(0%, 15%);
    :hover {
        cursor: pointer;
        transform: translate(0%, 10%);
        background-color: #E92E2E;
    }
`
const AddLineButton = styled.div`
    width: 40%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #BBBBBB;
    color: #A8A8A8;
    border-radius: 5px;
    font-size: 25px;
    :hover {
        cursor: pointer;
        border: 2px solid #BBBBBB;
        color: #FFFFFF;
        background-color: #BBBBBB;
    }
`