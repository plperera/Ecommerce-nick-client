import styled from "styled-components"
import BannerSelector from "../../selector/HomeBannerSelector"
import { useEffect, useState } from "react"
import api from "../../../../../services/API"

export default function BannerHome ({action}) {

    const [bannerSelect, setBannerSelect] = useState(undefined)
    const [bannersData, setBannersData] = useState(undefined)
    const [create, setCreate] = useState(action)

    async function getAllBanners(){
        try {
            const result = await api.GetAllBanners()
            setBannersData( result.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllBanners()
    }, [])

    return(
        <Container>

            <h1>{"Pagina Inicial - Banner"}</h1>

            {create === "Novo" ? (
                <>1</>
            ):(
                bannerSelect ? (
                    <></>
                ):(
                    bannersData?.length === 0 ?(
                        <BannerSelector setBannerSelect={setBannerSelect}/>                    
                    ):(
                        <BannerSelector setBannerSelect={setBannerSelect}/>
                    )                
                )
            )}
        
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: #171717;
    width: 100%;
    font-size: 21px;
    font-weight: 500;
    padding: 25px 1.4vw;
    h1 {
        font-size: 25px;
        margin-bottom: 2vh;
        font-weight: 600;
    }
`