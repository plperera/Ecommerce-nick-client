import styled from "styled-components"

export default function AddressCard ({addressData, setAddressSelector, addressSelector}) {
    return(
        <Container 
            onClick={() => setAddressSelector(addressData.addressId)} 
            background={addressSelector === addressData.addressId?("#B9CECF69"):("#F1F1F1A2")}
        > 

            <SelectorContainer>
                <SelectorCheckbox borderColor={addressSelector === addressData.addressId?("#009395ff"):("#02131bff")}>
                    <SelectorPointCheckbox background={addressSelector === addressData.addressId?("#009395ff"):("#FFFFFF00")}/>
                </SelectorCheckbox>
            </SelectorContainer>

            <AddressDataContainer>
                <h3>{addressData?.addressName}</h3>
                <h4>{addressData?.fullAddress}</h4>
            </AddressDataContainer>

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: start;
    justify-content: center;
    background-color: ${props => props.background};
    border-radius: 5px;
    cursor: pointer;
`
const AddressDataContainer = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 0.8vw;
    h3 {
        width: 100%;
        color: #85929C;
        font-weight: 700;
        font-size: 13px;
    }
    h4 {
        width: 100%;
        color: #283338ff;
        font-weight: 600;
        font-size: 13px;
        padding: 0.8vh 0;
        line-height: 17px;
    }
`
const SelectorContainer = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const SelectorCheckbox = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50px;
    border: 2px solid;
    border-color: ${props => props.borderColor};
    display: flex;
    align-items: center;
    justify-content: center;
`
const SelectorPointCheckbox = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50px;
    background-color: ${props => props.background};
`