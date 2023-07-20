import styled from "styled-components"
import AddressCard from "./AddressCard"
import { useState } from "react"
import Button from "../../../../common/form/Button"
import AddNewAddress from "./AddNewAddress"
import { useEffect } from "react"

export default function AddressSelector () {

    const [addressSelector , setAddressSelector] = useState(undefined)
    const [addNewAddres , setAddNewAddres] = useState(false)
    const [allAddress , setAllAddress] = useState(undefined)

    
    useEffect(() => {

        const fake = [
            {   
                addressId: 1,
                addressName:"Apartamento", //isMain é sempre o primeiro retornado
                fullAddress:"Rua Governador Milton Campos, 105, CEP 37200-064, Apt 501, Centro, Lavras - MG", 
            },
            {   
                addressId: 2,
                addressName:"Casa", //isMain é sempre o primeiro retornado
                fullAddress:"Rua Torino, 92, CEP 37205-022, Em frente lava-jato, Parque Belvedere, Lavras - MG", 
            },
        ]

        setAllAddress(fake)
        console.log(allAddress)
        

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {

        if(!allAddress){
            return
        }
        
        setAddressSelector(allAddress[0]?.addressId)

    }, [allAddress])

    return(
        <Container>  
            <Title>{"Endereço para entrega"}</Title>
            { addNewAddres ? (
                <AddNewAddress setAddNewAddres={setAddNewAddres}/>
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
