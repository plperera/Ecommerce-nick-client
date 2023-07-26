import styled from "styled-components"
import NavigationBar from "../../components/adminDashboard/NavigationBar"
import { useState } from "react"
import logo from "../../assets/images/logoSVG/Logo.svg"

export default function AdminDashboard () {
    const [ content, setContent ] = useState(false)
    return(
        <Container>
            <DashboardLayout>

                <NavigationBar setContent={setContent}/>

                <ContentContainer>
                    {content?(
                        content
                    ):(
                    <IncialMenuContainer>
                        <img src={logo} alt=""/>   
                        <h2>{"Menu Inicial"}</h2>
                    </IncialMenuContainer>)}
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
    width: 80%;
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
    flex-direction: column;
    justify-content: start;
    flex-wrap: wrap;
    padding-top: 7vh;
    height: 100%;
    font-size: 80px;
    font-weight: 700;
    color: #DADADA;
    img {
        max-width: 100%;
        max-height: 15%;
        height: 100%;
        font-size: 100px;        
    }
    h2 {
        padding-top: 10vh;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
`