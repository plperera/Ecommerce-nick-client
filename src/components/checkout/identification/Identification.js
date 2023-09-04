import styled from "styled-components"
import UserData from "./userData/UserData"
import AddressSelector from "./address/AddressSelector"
import DeliveryMethod from "./delivery/DeliveryMethod"

export default function Identification ({userData, allAddress, refreshAddress, setRefreshAddress, checkoutDetails, setCheckoutDetails, selectedSession, setSelectedSession}) {
    return(
        <Container isSelected={selectedSession === 0}>  

            <Title>{"Identificação"}</Title>

            <SubContainer>

                <UserData 
                    userData={userData}
                />

                <AddressSelector 
                    allAddress={allAddress} 
                    token={userData.token} 
                    refreshAddress={refreshAddress} 
                    setRefreshAddress={setRefreshAddress} 
                    checkoutDetails={checkoutDetails} 
                    setCheckoutDetails={setCheckoutDetails}
                />

                <DeliveryMethod
                    checkoutDetails={checkoutDetails} 
                    setCheckoutDetails={setCheckoutDetails}
                    setSelectedSession={setSelectedSession}
                />

            </SubContainer>

        </Container>
    )
}

const Container = styled.div`
    width: 32%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    pointer-events: ${props => props.isSelected ? ("initial"):("none")};
    opacity: ${props => props.isSelected ? ("1"):(".8")};
    @media (max-width: 850px) {
        width: 100%;
    }
`
const SubContainer = styled.div`
    min-height: 700px;
    width: 100%;
    background-color: #FFFFFF;
    padding: 1vh 0.7vw;
    @media (max-width: 850px) {
        padding: 1vh 3vw;
    }
`
const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #CCCCCCCB;
    color: #02131bff;
    padding: 1vh 0;
    font-weight: 600;
`