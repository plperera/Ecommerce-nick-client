import styled from "styled-components"
import BannerSelector from "../../../selector/HomeBannerSelector"
import { useEffect, useState } from "react"
import api from "../../../../../../services/API"
import HomeBannerCreator from "../create/FormsCreateBannerHome"
import Title from "../create/TitleBanner"
import { useCustomForm } from "../../../../../../hooks/useCustomForms"
import AdminContext from "../../../../../../context/AdminContext"
import { useContext } from "react"
import EditBannerHome from "./EditBannerHome"

export default function UpdateBannerHome ({action}) {

    const [bannerSelect, setBannerSelect] = useState(undefined)
    const [bannersData, setBannersData] = useState(undefined)
    const [create, setCreate] = useState(undefined)
    const [ form, handleForm, setForm ] = useCustomForm();
    const { adminData } = useContext(AdminContext);

    useEffect(() => {
        setCreate(action)
    },[action])

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
    }, [])

    return(
        <Container>

            <Title text={`Banner para Pagina Inicial - ${create}`} form={form} setForm={setForm} adminData={adminData}/>

            {create === "Novo" ? (
                <HomeBannerCreator form={form} handleForm={handleForm} setForm={setForm} adminData={adminData}/>
            ):(
                bannerSelect ? (
                    <EditBannerHome bannerData={bannerSelect}/>
                ):(
                    bannersData?.length === 0 ?(
                        <></>                    
                    ):(
                        <BannerSelector setBannerSelect={setBannerSelect} bannersData={bannersData}/>
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