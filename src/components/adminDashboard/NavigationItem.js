import { useState } from "react"
import styled from "styled-components"

export default function NavigationItem ({name, options, setContent}) {

    const [ showOptions, setShowOptions] = useState(false)

    return(
        <Container>
            <Title onClick={ () => setShowOptions(!showOptions)}>
                <h1>{name}</h1>
                <h2>{showOptions?("-"):("+")}</h2>
            </Title>

            {showOptions ? (
                <OptionsList>
                    {options.map( e => <Option onClick={ () => setContent(e.content)}>{e.name}</Option>)}
                </OptionsList>
            ):(<></>)}

        </Container>
    )
}

const Container = styled.div`
    color: #171717;
    width: 100%;
    font-size: 21px;
    font-weight: 500;
`
const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.3vw;
    height: 50px;
    width: 100%;
    background-color: #EBEBEB;
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
`
const OptionsList = styled.div`
    display: flex;
    align-items: start;
    justify-content: left;
    flex-direction: column;
    width: 100%;
    padding: 0.5vh 0.3vw;
    row-gap: 0.9vh;
    margin-top: 0.6vh;
    user-select: none;
`
const Option = styled.h2`
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    min-height: 30px;
    font-size: 16px;
    border-left: 3px solid #01989D;
    padding-left: 0.3vw;
    cursor: pointer;
    &:hover{
        font-weight: 600;
        border-left: 3px solid #00C8CF;
    }
`


