import styled from "styled-components"

export default function UserData () {
    return(
        <Container>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    //border-right: 2px solid #D1D1D1;
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;
    align-content: start;
    row-gap: 2vh;
    padding: 25px 1.4vw;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 7px;
        background-color: #1D1D1D2F;
        border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #00575A;
        border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #01989D;
        cursor: pointer;
    }
    
`
