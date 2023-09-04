import { useState } from "react"
import styled from "styled-components"
import UserNavigationBar from "../../components/userDashboard/UserNavigationBar"
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import UserData from "../../components/userDashboard/content/userData/UserData";

export default function UserAccount () {

    const { userData } = useContext(UserContext);
    const [ content, setContent ] = useState({
        name:"Meus Dados",
        ref: <UserData userData={userData}/>
    })

    return(
        <Container>
            <DashboardLayout>

                <UserNavigationBar setContent={setContent} content={content} userData={userData}/>

                <ContentContainer>
                    {content?(content?.ref):(<IncialMenuContainer>Menu Inicial</IncialMenuContainer>)}
                </ContentContainer>

            </DashboardLayout>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding: calc(10.5vh + 3vh) 10vw 3vh 10vw;
    background-color: #0A1F2A;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 850px) {
        padding: 20vh 0vw 3vh 0vw;;
    }
`
const DashboardLayout = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    column-gap: 1.8vw;
    @media (max-width: 850px) {
        flex-wrap: wrap;
        height: auto;
    }
`
const ContentContainer = styled.div`
    height: 100%;
    width: 93%;
    border-radius: 15px;
    overflow-y: scroll;
    background-color: #FFFFFF;
    &::-webkit-scrollbar {
        width: 7px;
        background-color: #1D1D1D00;
        border-radius: 0;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #00575A;
        border-radius: 0;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #01989D;
        cursor: pointer;
    }
    @media (max-width: 850px) {
        width: 100%;
    }
`
const IncialMenuContainer = styled.div`
    display: flex;
    align-items: self-start;
    justify-content: center;
    padding-top: 7vh;
    height: 100%;
    font-size: 80px;
    font-weight: 700;
    color: #DADADA;
    background-color: #FFFFFF;
`