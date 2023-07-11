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
                        opacity: expandNavigationBar ? "1" : "0.7"
                    }
                } 
                >
                    {content?(content):(<>2</>)}
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
    border-radius: 25px;
`
const ContentContainer = styled.div`
    height: 100%;
`