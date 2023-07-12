import styled from "styled-components"
import NavigationBar from "../../components/adminDashboard/NavigationBar"
import { useState } from "react"

export default function AdminDashboard () {
    const [ content, setContent ] = useState(false)
    const [ expandNavigationBar, setExpandNavigationBar ] = useState(!true)
    return(
        <Container>
            <DashboardLayout>

                <NavigationBar expandNavigationBar={expandNavigationBar} setContent={setContent}/>

                <ContentContainer 
                style={
                    { 
                        width: expandNavigationBar ? "93%" : "80%", 
                        opacity: expandNavigationBar ? "1" : "1"
                    }
                } 
                >
                    {content?(content):(<IncialMenuContainer>Menu Inicial</IncialMenuContainer>)}
                </ContentContainer>

            </DashboardLayout>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #0A1F2A;
    display: flex;
    justify-content: center;
    align-items: center;
`
const DashboardLayout = styled.div`
    width: 90%;
    height: 88vh;
    background-color: #FFFFFF;
    display: flex;
    border-radius: 25px 0 0 25px;
`
const ContentContainer = styled.div`
    height: 100%;
    overflow-y: scroll;
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
`