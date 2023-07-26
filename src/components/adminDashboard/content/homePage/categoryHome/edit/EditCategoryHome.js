import styled from "styled-components"
import Input from "../../../../../../common/form/Input"
import { IoMdCloseCircle } from 'react-icons/io';
import { useState } from "react";
import api from "../../../../../../services/API";
import { useEffect } from "react";
import Button from "../../../../../../common/form/Button";
import CategoryCreator from "../../../creator/CategoryCreator";
import CategorySelector from "../../../selector/CategorySelector";
import ImageCreator from "../../../creator/ImageCreator";
import ImageSelector from "../../../selector/ImageSelector";

export default function EditCategoryHome ({categoryData, form, handleForm, setForm, adminData}) {

    const [ refreshImage, setRefreshImage ] = useState(false)
    const [ refreshCategory, setRefreshCategory ] = useState(false)
    const [ getRefresh, setGetRefresh ] = useState(false)
    const [ images, setImages ] = useState(false)
    const [ categories, setCategories ] = useState(false)
    const [ showCreate, setShowCreate ] = useState({showCategoryCreate: false, showImageCreate: false})
    
    async function GetAllImages({token}){
        const response = await api.GetAllImages({token})
        setImages(response.data)
    }

    async function GetAllCategories(){
        const response = await api.GetAllCategories()
        setCategories(response.data)
    }

    function ClearFilter(filterName) {
        setForm({...form, [filterName]: ''}); 

        if(filterName === "imageFilter"){
            return setRefreshImage(!refreshImage)
        }
        
        return setRefreshCategory(!refreshCategory)
    }

    function getImageId() {
        const image = images.find(e => e.imageUrl === categoryData?.imageUrl);

        if(image) {
            return {[`image${image.id}`]: image.id};
        }

        return undefined
    }

    function getCategoryId() {
        const category = categories.find(e => e.name === categoryData?.title);
        if(category) {
            return {[`category${category.id}`]: category.id};
        }

        return undefined
    }

    useEffect(() => {
        console.log(categoryData)
        setForm({
            text: categoryData?.subTitle,
            title: categoryData?.title,
            imageUrl: categoryData?.imageUrl
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getRefresh])

    useEffect(() => {

        GetAllImages({token: adminData?.token})
        GetAllCategories()

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
                    {"Insira o texto que ira aparcerer junto da Categoria"}
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
                    {"Selecione uma Categoria"}
                    <CreateButton onClick={() => setShowCreate({...showCreate, [`showCategoryCreate`]: !showCreate.showCategoryCreate})}>
                        {showCreate.showCategoryCreate ?("Minimizar"):("Criar nova")}
                    </CreateButton>
                </h2>

                {showCreate.showCategoryCreate ?(<CategoryCreator refresh={getRefresh} setRefresh={setGetRefresh}/>):(<></>)}

                <FilterContainer>
                    <Input 
                        label="Filtrar" 
                        type="text" 
                        name={"categoryFilter"}
                        value={form?.categoryFilter} 
                        width="30%"
                        onChange={handleForm}
                    />
                    <Button onClick={() => setRefreshCategory(!refreshCategory)} fontsize={"10px"} background={"#0A1F2A69 !important"}>{"Filtrar Images"}</Button>
                    {form?.categoryFilter?(<ClearFilterContainer onClick={() => ClearFilter("categoryFilter")}>{"X"}</ClearFilterContainer>):(<></>)}
                </FilterContainer>
                
                {categories?(<CategorySelector filter={form.categoryFilter} refresh={refreshCategory} categories={categories} setForm={setForm} form={form} limitSelect={1} initSelect={getCategoryId()}/>):(<></>)}
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