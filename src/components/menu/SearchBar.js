import styled from "styled-components"
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar () {

    return(
        <Container>
            <SearchInput/>
            <SearchIcon onClick={() => console.log("click")}/>
        </Container>
    )
}

const Container = styled.div`
    width: 22vw;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;  
    @media (max-width: 1366px) {
        width: 24vw;
    }
`
const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    background-color: transparent;
    margin: 0;
    padding: 0;
    padding-right: 3.5vw;
    padding-left: 0.5vw;
    border: 0;
    vertical-align: baseline;
    outline: none;
    border-bottom: 1.4px solid #FFFFFF;
    margin-left: -1.1vw; 
    font-size: 18px;
    color: #FFFFFF;

    @media (max-width: 1366px) {
        font-size: 15px;
    }
`
const SearchIcon = styled(AiOutlineSearch)`
    font-size: 25px;
    color: #FFFFFF; 
    margin-left: -2.4vw;  
    cursor: pointer; 

    @media (max-width: 1366px) {
        font-size: 20px;
    }
`