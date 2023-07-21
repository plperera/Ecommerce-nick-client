import styled from "styled-components"
import CheckoutComponent from "../../components/checkout/Checkout"
import UserContext from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import api from "../../services/API";

export default function Checkout () {

    const [ allAddress, setAllAddress] = useState(undefined)
    const { userData } = useContext(UserContext);
    const [refreshAddress , setRefreshAddress] = useState(false)

    useEffect(() => {
        getAllAddress()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshAddress])

    useEffect(() => {
        console.log(allAddress)
    }, [allAddress])

    async function getAllAddress(){
        try {
            const result = await api.GetAllAddress(userData.token)
            setAllAddress(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
        <Container>    
            <CheckoutComponent userData={userData} allAddress={allAddress} refreshAddress={refreshAddress} setRefreshAddress={setRefreshAddress}/>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 8vh;
    width: 100%;
    min-height: 84vh;
    background-color: #0A1F2A;  
    padding: 25px 10vw;
`