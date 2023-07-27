import { useEffect } from "react"
import styled from "styled-components"

export default function FilterOptionCard ({ name, selected, selectOption }) {

    useEffect(() => { console.log(selected)}, [selected])

    return(
        <Container 
            onClick={() => selectOption(name)} 
            border={(selected === name) ? ("3px solid #009395ff;"):("none")} 
            background={(selected === name) ? ("#44575F;"):("#283338")}
            fontWeight={(selected === name) ? ("600"):("initial")}
        >
            {name}
        </Container>
    )
}

const Container = styled.div`
    padding: 4px 6px;
    width: calc(17.1695vw - (1.2vw * 6));
    height: 5vh;
    color: #FFFFFF;
    background-color: ${props => props.background};
    border: ${props => props.border};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 5px;
    font-size: 14px;
    font-weight: ${props => props.fontWeight};
    cursor: pointer;
    user-select: none;

    @media (max-width: 850px) {
        width: 118px;
        font-size: 10px;
    }
`
