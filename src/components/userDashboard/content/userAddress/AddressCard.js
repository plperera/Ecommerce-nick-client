import styled from "styled-components"

export default function AddressCard ({addressData}) {

    // addressBody = {
    //     cep: string,
    //     street: string,
    //     city: string,
    //     state: string,
    //     number: string,
    //     neighborhood: string,
    //     addressDetail: string
    //     addressDetail: string
    // }
    
    return(
        <Container>
            <AddressName>{`${addressData?.addressName}`}</AddressName>
            <AddressDetails>{`${addressData?.street}, ${addressData?.number}, ${addressData?.addressDetail}`}</AddressDetails>
            <AddressDetails>{`${addressData?.neighborhood} - ${addressData?.city} - ${addressData?.state}`}</AddressDetails>
            <AddressDetails>{`CEP ${addressData?.cep}`}</AddressDetails>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    border-bottom: 2px solid #02131B;
    padding: 2vh 1vw;
    color: #02131B;
    @media (max-width: 850px) {
        padding: 2vh 3vw;
    } 
`
const AddressName = styled.div`
    font-size: 18px;
    font-weight: 600;
    @media (max-width: 850px) {
        font-size: 14px;
        margin-bottom: .8vh;
    } 
`
const AddressDetails = styled.div`
    font-size: 16px;
    font-weight: 600;
    @media (max-width: 850px) {
        font-size: 12px;
    } 
`
