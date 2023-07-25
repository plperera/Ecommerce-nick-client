import styled from "styled-components"
import BannerSelector from "../../../selector/HomeBannerSelector"
import { useEffect, useState } from "react"
import api from "../../../../../../services/API"
import { useCustomForm } from "../../../../../../hooks/useCustomForms"
import AdminContext from "../../../../../../context/AdminContext"
import { useContext } from "react"
import EditBannerHome from "./EditBannerHome"
import Title from "./TitleBanner"

export default function UpdateBannerHome () {

    const [bannerSelect, setBannerSelect] = useState(undefined)
    const [bannersData, setBannersData] = useState(undefined)
    const [ form, handleForm, setForm ] = useCustomForm();
    const { adminData } = useContext(AdminContext);


    async function getAllBanners(){
        try {
            const result = await api.GetAllBanners()
            setBannersData(result.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllBanners()
    }, [bannerSelect])

    return(
        <Container>

            <Title text={`Editar um banner para Pagina Inicial`} form={form} setForm={setForm} adminData={adminData} bannerData={bannerSelect} setBannerSelect={setBannerSelect}/>

            {bannerSelect ? (
                <EditBannerHome bannerData={bannerSelect} form={form} handleForm={handleForm} setForm={setForm} adminData={adminData}/>
            ):(
                bannersData?.length === 0 ?(
                    <></>                    
                ):(
                    <BannerSelector setBannerSelect={setBannerSelect} bannersData={bannersData}/>
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