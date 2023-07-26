import { useState } from "react"
import styled from "styled-components"
import AddressCard from "./AddressCard"
import NewAddress from "./NewAddress"
import { FiMapPin } from 'react-icons/fi';
import { useEffect } from "react";
import api from "../../../../services/API";


export default function UserAddress ({userData}) {
    
    const [address, setAddress] = useState(undefined)
    const [isCreating, setIsCreating] = useState(false)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        getAllAddress()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh])

    async function getAllAddress(){
        try {
            const result = await api.GetAllAddress(userData.token)
            setAddress(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    function handleRefresh(){
        setRefresh(!refresh)
    }

    return(
        <Container>

            <Title>{"Endereços"}</Title>
                {(address && address?.length > 0 && !isCreating) ? (
                    <>
                        <AddressListBotttom>
                            <ListTitle><ListIcon/>{"Lista de Endereços"}</ListTitle>
                            <ListButton onClick={() => {setIsCreating(true)}}>{"Cadastrar Novo Endereço"}</ListButton>
                        </AddressListBotttom>

                        <AddressListContainer>
                            {address?.map(e => <AddressCard addressData={e}/>)}
                        </AddressListContainer>
                    </>
                    
                ):(
                    <NewAddress setIsCreating={setIsCreating} userData={userData} handleRefresh={handleRefresh}/>
                )}
                

        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;
    align-content: start;
    padding: 25px 1.4vw;    
`
const Title = styled.h1`
    color: #02131B;
    font-size: 21px;
    font-weight: 500;
    width: 100%;
    margin-bottom: 4vh;
`
const AddressListContainer = styled.div`
    border-left: 2px solid #02131B;
    border-right: 2px solid #02131B;    
`
const AddressListBotttom = styled.div`
    width: 100%;
    height: 60px;
    background-color: #02131B;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px 1vw;
`
const ListTitle = styled.div`
    color: #FFFFFF;
`
const ListIcon = styled(FiMapPin)`
    margin-right: 0.5vw;
`
const ListButton = styled.div`
    background-color: #EEEEEE;
    width: auto;
    padding: 8px 1.4vw;
    border-radius: 5px;
    color: #02131B;
    font-weight: 600;
    cursor: pointer;
    user-select: none;
`
