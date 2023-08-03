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
    font-size: 19px;
    font-weight: 500;
    @media (max-width: 850px) {
        width: auto;
        font-size: 13px;
        text-align: center;
    }
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
    @media (max-width: 850px) {
        padding: 0 3vw;
        column-gap: 4vw;
        width: auto;
    }
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

    @media (max-width: 850px) {
        width: auto;
        font-size: 11px;
        font-weight: 700;
        text-align: left;
        padding-left: 2vw;
        background-color: #3F3F3F0A;
        border-left: 6px solid #01989D;
        padding-right: 2vw;
        &:hover{
            font-weight: 700;
            border-left: 6px solid #00C8CF;
        }
    }
`


