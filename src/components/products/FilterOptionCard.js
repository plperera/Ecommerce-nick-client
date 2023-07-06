import styled from "styled-components"

export default function FilterOptionCard ({ name }) {

    return(
        <Container>
            {name}
        </Container>
    )
}

const Container = styled.div`
    width: 7.8865vw;
    height: 5vh;
    color: #FFFFFF;
    background-color: #283338;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
`
