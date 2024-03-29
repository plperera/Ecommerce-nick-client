import styled from "styled-components"
import { useState } from "react";
import api from "../../../../../../services/API";
import { useEffect } from "react";
import ImageCreator from "../../../creator/ImageCreator";
import ImageSelector from "../../../selector/ImageSelector";
import { IoMdCloseCircle } from 'react-icons/io';
import Input from "../../../../../../common/form/Input";
import Button from "../../../../../../common/form/Button";
import CategorySelector from "../../../selector/CategorySelector";
import SubCategoryCreator from "../../../creator/SubCategoryCreator";

export default function FormsCreateBannerHome ({form, handleForm, setForm, adminData}) {

    const [ refreshImage, setRefreshImage ] = useState(false)
    const [ refreshSubCategory, setRefreshSubCategory ] = useState(false)
    const [ getRefresh, setGetRefresh ] = useState(false)
    const [ images, setImages ] = useState(false)
    const [ subCategories, setSubCategories ] = useState(false)
    const [ showCreate, setShowCreate ] = useState({showSubCategoryCreate: false, showImageCreate: false})
    
    async function GetAllImages({token}){
        const response = await api.GetAllImages({token})
        setImages(response.data)
    }

    async function GetAllSubCategories({token}){
        const response = await api.GetAllSubCategoriesData(token)
        setSubCategories(response.data)
    }

    function ClearFilter(filterName) {
        setForm({...form, [filterName]: ''}); 

        if(filterName === "imageFilter"){
            return setRefreshImage(!refreshImage)
        }
        
        return setRefreshSubCategory(!refreshSubCategory)
    }

    useEffect(() => {

        GetAllImages({token: adminData?.token})
        GetAllSubCategories({token: adminData?.token})

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
                    {"Selecione uma SubCategoria"}
                    <CreateButton onClick={() => setShowCreate({...showCreate, [`showSubCategoryCreate`]: !showCreate.showSubCategoryCreate})}>
                        {showCreate.showSubCategoryCreate ?("Minimizar"):("Criar nova")}
                    </CreateButton>
                </h2>

                {showCreate.showSubCategoryCreate ?(<SubCategoryCreator refresh={getRefresh} setRefresh={setGetRefresh}/>):(<></>)}

                <FilterContainer>
                    <Input 
                        label="Filtrar" 
                        type="text" 
                        name={"subCategoryFilter"}
                        value={form?.subCategoryFilter} 
                        width="30%"
                        onChange={handleForm}
                    />
                    <Button onClick={() => setRefreshSubCategory(!refreshSubCategory)} fontsize={"10px"} background={"#0A1F2A69 !important"}>{"Filtrar Images"}</Button>
                    {form?.subCategoryFilter?(<ClearFilterContainer onClick={() => ClearFilter("subCategoryFilter")}>{"X"}</ClearFilterContainer>):(<></>)}
                </FilterContainer>
                
                {subCategories?(<CategorySelector filter={form.subCategoryFilter} refresh={refreshSubCategory} subCategories={subCategories} setForm={setForm} form={form} limitSelect={1}/>):(<></>)}
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
                
                {images?(<ImageSelector filter={form.imageFilter} refresh={refreshImage} images={images} setForm={setForm} form={form} limitSelect={1}/>):(<></>)}
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
        padding-top: 7vh;
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
`