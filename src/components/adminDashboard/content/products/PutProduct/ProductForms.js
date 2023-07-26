import styled from "styled-components"
import { InputWrapper } from "../../../../userDashboard/content/userData/InputWrapper"
import Input from "../../../../../common/form/Input"
import { useValidation } from "../../../../../hooks/useValidation";
import validations from "./FormValidations";
import { ErrorMsg } from "../../../../userDashboard/content/userData/ErrorMsg";
import { useEffect, useState } from "react";
import TecnicDetails from "./TecnicDetailsForms";
import { IoMdCloseCircle } from 'react-icons/io';
import api from "../../../../../services/API";
import CategoryCreator from "../../creator/CategoryCreator";
import Button from "../../../../../common/form/Button";
import ImageCreator from "../../creator/ImageCreator";
import ImageSelector from "../../selector/ImageSelector";
import CategorySelector from "../../selector/CategorySelector";

export default function ProductForms ({form, handleForm, setForm, productData, token}) {

    console.log(productData)

    const [ refreshImage, setRefreshImage ] = useState(false)
    const [ refreshCategory, setRefreshCategory ] = useState(false)
    const [ getRefresh, setGetRefresh ] = useState(false)
    const [ images, setImages ] = useState(false)
    const [ categories, setCategories ] = useState(false)
    const [ showCreate, setShowCreate ] = useState({showCategoryCreate: false, showImageCreate: false})
    // eslint-disable-next-line no-unused-vars
    const { errors, validate } = useValidation(validations);

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

    function getSelectedImages() {
        const selectValue = {}
        productData?.images?.map(e =>   
            selectValue[`image${e?.id}`] = e?.id
        )
        return selectValue
    }

    function getSelectedCategories() {
        const selectValue = {}
        productData?.categories?.map(e =>   
            selectValue[`category${e?.categoryId}`] = e?.categoryId
        )
        return selectValue
    } 

    useEffect(() => {

        GetAllImages({token: token})
        GetAllCategories()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getRefresh])

    useEffect(() => {

        setForm({
            productId: productData?.productId,       
            name: productData?.name,       
            description: productData?.description,       
            price: productData?.price,    
            stock: productData?.stock,   
            tecnicDetails: productData?.tecnicDetails,       
            categories: productData?.categories,       
            images: productData?.images,       
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[productData])

    return(
        <Container>
            {form?.productId ? (        
                <>
                    <UpperInputsContainer>
                        <InputWrapper width={"100%"}>
                            <Input 
                                label="Nome do Produto"     
                                type="text" 
                                name={"name"} 
                                value={form.name} 
                                onChange={handleForm}
                                width="100%"
                            />
                            {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
                        </InputWrapper>

                        <InputWrapper width={"100%"}>
                            <Input 
                                label="Descrição sobre o Produto"     
                                type="text" 
                                name={"description"} 
                                value={form.description} 
                                onChange={handleForm}
                                width="100%"
                            />
                            {errors.description && <ErrorMsg>{errors.description}</ErrorMsg>}
                        </InputWrapper>

                        <InputWrapper width={"44%"}>
                            <Input 
                                label="Preço"     
                                type="text" 
                                name={"price"} 
                                value={form.price} 
                                onChange={handleForm}
                                width="100%"
                            />
                            {errors.price && <ErrorMsg>{errors.price}</ErrorMsg>}
                        </InputWrapper>

                        <InputWrapper width={"44%"}>
                            <Input 
                                label="Preço"     
                                type="text" 
                                name={"price"} 
                                value={form.price} 
                                onChange={handleForm}
                                width="100%"
                            />
                            {errors.price && <ErrorMsg>{errors.price}</ErrorMsg>}
                        </InputWrapper>

                        <InputWrapper width={"10%"}>
                            <Input 
                                label="Estoque"     
                                type="text" 
                                name={"stock"} 
                                value={form.stock} 
                                onChange={handleForm}
                                width="100%"
                            />
                            {errors.stock && <ErrorMsg>{errors.stock}</ErrorMsg>}
                        </InputWrapper>
                    </UpperInputsContainer>

                    <TecnicDetails setForm={setForm} form={form}/>

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
                        
                        {categories?(<CategorySelector filter={form.categoryFilter} refresh={refreshCategory} categories={categories} setForm={setForm} form={form} initSelect={getSelectedCategories()}/>):(<></>)}
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
                        
                        {images?(<ImageSelector filter={form.imageFilter} refresh={refreshImage} images={images} setForm={setForm} form={form} initSelect={getSelectedImages()}/>):(<></>)}
                    </div>
                </>
            ):(<></>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3vh;
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
const UpperInputsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
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

