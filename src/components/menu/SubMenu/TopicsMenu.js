import styled from "styled-components"
import { IoIosArrowDown } from 'react-icons/io';

export default function TopicsMenu ({ topic, setExpandMenu, expandMenu }) {
    return(
        <Container onMouseEnter={ () => {setExpandMenu(topic)}} onClick={ () => {setExpandMenu(topic)}} isSelect={expandMenu?.title === topic.title ? ("#263C4B"):("none")}>
            
            <TitleContainer isSelect={expandMenu?.title === topic.title ? ("1px solid #FFFFFF"):("none")}>{topic.title}</TitleContainer>
            <ArrowDownIcon/>

        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #FFFFFF;
    font-weight: 700;
    padding: 0 0.5vw;
    cursor: pointer;
    user-select: none;
    border-radius: 15px 15px 0 0;
    padding-left: 0.8vw;
    background-color: ${ props => props.isSelect};
    @media (max-width: 1366px) {
        font-size: 14px;
    }
`
const TitleContainer = styled.div`
    text-align: center;  
`
const ArrowDownIcon = styled(IoIosArrowDown)`
    margin-left: 0.4vw;
`