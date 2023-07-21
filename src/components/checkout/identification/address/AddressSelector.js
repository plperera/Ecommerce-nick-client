import styled from "styled-components"
import AddressCard from "./AddressCard"
import { useState } from "react"
import Button from "../../../../common/form/Button"
import AddNewAddress from "./AddNewAddress"
import { useEffect } from "react"

export default function AddressSelector ({allAddress, token, refreshAddress, setRefreshAddress}) {

    const [addressSelector , setAddressSelector] = useState(undefined)
    const [addNewAddres , setAddNewAddres] = useState(false)
    const [isloading , setIsLoading] = useState(false)
    
    useEffect(() => {
        setAddNewAddres(false)
    }, [refreshAddress])

    useEffect(() => {

        if(!allAddress){
            return
        }

        if(allAddress.length === 0){
            setAddNewAddres(true)
        }
        
        setAddressSelector(allAddress[0]?.addressId)

    }, [allAddress])

    useEffect(() => {
        console.log(addressSelector)
    }, [addressSelector])

    return(
        <Container events={isloading ? ("none !important"):("initial")} opacity={isloading ? ("0.5"):("1")}>  
            <Title>{"Endereço para entrega"}</Title>
            { addNewAddres ? (
                <AddNewAddress setAddNewAddres={setAddNewAddres} setIsLoading={setIsLoading} isLoading={isloading} token={token} refreshAddress={refreshAddress} setRefreshAddress={setRefreshAddress}/>
            ):(
                allAddress?( 
                    <>
                        {allAddress.map(e => <AddressCard addressData={e} key={e.addressId} setAddressSelector={setAddressSelector} addressSelector={addressSelector}/>)}

                        <Button 
                            width={"47.5%"} 
                            height={"30px"} 
                            fontsize={"11px !important"} 
                            background={"#008183 !important"} 
                            backgroundhover={"#009395ff !important"}
                            onClick={() => setAddNewAddres(!addNewAddres)}
                        >
                            {"Adicionar novo endereço"}
                        </Button>
                    </>
                ):(<></>)
            )} 
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 1.5vh;
    border-bottom: 3px solid #e6e6e6ff;
    row-gap: 1.4vh;
    pointer-events: ${props => props.events};
    opacity: ${props => props.opacity};
`
const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    color: #009395ff;
    font-weight: 600;
    padding-top: 1vh;
`