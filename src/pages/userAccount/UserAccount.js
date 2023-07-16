import { useState } from "react"
import styled from "styled-components"
import UserNavigationBar from "../../components/userDashboard/UserNavigationBar"
import useUserInfo from "../../hooks/useUserInfo"

export default function UserAccount () {
    const [ content, setContent ] = useState(false)

    const { email, name } = useUserInfo()
    
    return(
        <Container>
            <DashboardLayout>

                <UserNavigationBar setContent={setContent} content={content} userData={{email, name}}/>

                <ContentContainer>
                    {content?(content?.ref):(<IncialMenuContainer>Menu Inicial</IncialMenuContainer>)}
                </ContentContainer>

            </DashboardLayout>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding-top: 14vh;
    padding: calc(14vh + 3vh) 10vw 3vh 10vw;
    background-color: #0A1F2A;
    display: flex;
    justify-content: center;
    align-items: center;
`
const DashboardLayout = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    column-gap: 1.8vw;
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