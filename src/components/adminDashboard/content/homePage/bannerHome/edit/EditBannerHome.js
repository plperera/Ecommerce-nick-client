import styled from "styled-components"
import Input from "../../../../../../common/form/Input"
import { IoMdCloseCircle } from 'react-icons/io';
import { useState } from "react";
import api from "../../../../../../services/API";
import { useEffect } from "react";
import ImageCreator from "../../../creator/ImageCreator";
import Button from "../../../../../../common/form/Button";
import ImageSelector from "../../../selector/ImageSelector";

export default function EditBannerHome ({bannerData, form, handleForm, setForm, adminData}) {

    const [ refreshImage, setRefreshImage ] = useState(false)
    const [ getRefresh, setGetRefresh ] = useState(false)
    const [ images, setImages ] = useState(false)

    const [ showCreate, setShowCreate ] = useState({showImageCreate: false})
    
    async function GetAllImages({token}){
        const response = await api.GetAllImages({token})
        setImages(response.data)
    }

    function ClearFilter() {
        setForm({...form, imageFilter: ''}); 
        return setRefreshImage(!refreshImage)
    }

    function getImageId() {
        const image = images.find(e => e.imageUrl === bannerData?.imageUrl);

        if(image) {
            return {[`image${image.id}`]: image.id};
        }

        return undefined
    }

    useEffect(() => {

        GetAllImages({token: adminData?.token})

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getRefresh])

    useEffect(() => {
        console.log(bannerData)
        setForm({
            text: bannerData?.text,
            imageUrl: bannerData?.imageUrl
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getRefresh])

    useEffect(() => {

        if (form?.images?.length === 2) {
            setForm({...form, images: [form?.images[form?.images?.length - 1]]})
        }
      
        console.log(form)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form?.images?.length === 2])

    return(
        <Container>

            <div>
                <h2>
                    {"Insira o texto que ira aparcerer jundo do Banner"}
                </h2>

                <Input 
                    label="Texto" 
                    type="text" 
                    name={"text"} 
                    value={form?.text} 
                    width="100%"
                    onChange={handleForm}
                />
            </div>   
            
            <div>  
                <h2>
                    {"Selecione uma imagem"}
                    <CreateButton onClick={() => setShowCreate({...showCreate, [`showImageCreate`]: !showCreate.showImageCreate})}>
                        {showCreate.showImageCreate ?("Minimizar"):("Criar nova")}
                    </CreateButton>
                </h2>

                {showCreate.showImageCreate ?(<ImageCreator refresh={getRefresh} setRefresh={setGetRefresh}/>):(<></>)}

                <FilterContainer>
                    <Input 
                        label="Filtrar" 
                        type="text" 
                        name={"imageFilter"} 
                        value={form?.imageFilter} 
                        width="30%"
                        onChange={handleForm}
                    />
                    <Button onClick={() => setRefreshImage(!refreshImage)} fontsize={"10px"} background={"#0A1F2A69 !important"}>{"Filtrar Images"}</Button>
                    {form?.imageFilter?(<ClearFilterContainer onClick={() => ClearFilter("imageFilter")}>{"X"}</ClearFilterContainer>):(<></>)}
                </FilterContainer>
                
                {images?(<ImageSelector filter={form.imageFilter} refresh={refreshImage} images={images} setForm={setForm} form={form} limitSelect={1} initSelect={getImageId()}/>):(<></>)}
            </div>
                
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3vh;
    margin-top: calc(2vh + 7vh);
    color: #171717;
    width: 100%;
    font-size: 21px;
    font-weight: 500;
    h2 {
        padding: 0.2vh 0.3vw;
        font-size: 20px;
        display: flex;
        align-items: center;
        font-weight: 600;
        border-left: 5px solid #009395ff; 
        margin-bottom: 1.2vh;
    }
    h1 {
        font-size: 25px;
        margin-bottom: 2vh;
        font-weight: 600;
        padding-top: 1.4vh;
    }
    @media (max-width: 850px) {
        padding: 0 2vw;
        padding-top: 8vh;
        h2 {
            padding: 0.5vh 0;
            padding-left: 2vw;
            font-size: 15px;
        }
    }
`
const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    column-gap: .4vw;
    margin-bottom: 1vh;
`
const ClearFilterContainer = styled(IoMdCloseCircle)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 30px;
    color: #0A1F2A69;
    cursor: pointer; 
`
const CreateButton = styled.span`
    background-color: #0A1F2A1C;
    border-radius: 50px;
    width: auto;
    padding: 0.4vh 1vw;
    font-size: 14px;
    margin-left: 0.5vw;
    cursor: pointer;
    user-select: none;
    @media (max-width: 850px) {
        padding: 0.4vh 3vw;
        margin-left: 1vw;
    }
`