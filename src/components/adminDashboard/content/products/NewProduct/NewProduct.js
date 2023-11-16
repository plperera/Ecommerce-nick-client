import styled from "styled-components"
import ImageSelector from "../../selector/ImageSelector";
import { useCustomForm } from "../../../../../hooks/useCustomForms";
import { useEffect, useState } from "react";
import { IoMdCloseCircle } from 'react-icons/io';
import ImageCreator from "../../creator/ImageCreator";
import api from "../../../../../services/API";
import TitleComponent from "./TitleNewProduct";
import InputsComponent from "./InputsNewProduct";
import TecnicDetailsComponent from "./TecnicDetailsForms";
import { toast } from "react-toastify";
import AdminContext from "../../../../../context/AdminContext";
import { useContext } from "react";
import Button from "../../../../../common/form/Button";
import Input from "../../../../../common/form/Input";
import SubCategoryCreator from "../../creator/SubCategoryCreator";
import CategorySelector from "../../selector/CategorySelector";

export default function NewProduct () {

    const [ form, handleForm, setForm ] = useCustomForm();
    const [ refreshImage, setRefreshImage ] = useState(false)
    const [ refreshSubCategory, setRefreshSubCategory ] = useState(false)
    const [ getRefresh, setGetRefresh ] = useState(false)
    const [ subCategories, setSubCategories ] = useState(false)
    const [ images, setImages ] = useState(false)
    const [ haveAllData, setHaveAllData ] = useState(false)
    const [tecnicDetails, setTecnicDetails] = useState([{topic: "", topicDetail:""}])
    const [ showCreate, setShowCreate ] = useState({showSubCategoryCreate: false, showImageCreate: false})
    const { adminData } = useContext(AdminContext);
    

    async function GetAllSubCategories(){
        const response = await api.GetAllSubCategoriesData(adminData?.token)
        setSubCategories(response.data)
    }

    async function GetAllImages({token}){
        const response = await api.GetAllImages({token})
        setImages(response.data)
    }

    function ClearFilter(filterName) {

        setForm({...form, [filterName]: ''}); 

        if(filterName === "imageFilter"){
            return setRefreshImage(!refreshImage)
        }
        
        return setRefreshSubCategory(!refreshSubCategory)

    }

    function FormatBody(){
        const body = { 
            name: form?.name,
            description: form?.description,
            price: Number(form?.price?.replace(/[^0-9,-]+/g,"")?.replace(',', '.')) * 100,
            highPrice: Number(form?.highPrice?.replace(/[^0-9,-]+/g,"")?.replace(',', '.')) * 100,
            stock: Number(form?.stock?.replace(/[^0-9,-]+/g,"")?.replace(',', '.')),

            tecnicDetails: tecnicDetails.filter( e => (e?.topic.length > 0)),

            subCategories: form?.subCategories.filter( e => (!!e?.subCategoryId)),

            images: form?.images.filter( e => (!!e?.imageId)),
        }
        return body
    }

    async function SubmitForms(){

        const body = FormatBody()

        console.log(body)

        try {           
            const response = await api.CreateProduct({body, token: adminData.token})

            if( response.status === 201){
                //setIsLoading(false)
                //SuccessRefresh()
                toast.dark("Produto criado com Sucesso !!")
            }

        } catch (error) {
            console.log(error)
            //setIsLoading(false)
            toast.error("Verifique os valores !!")
        }  
    }

    useEffect(() => {
        GetAllSubCategories()
        GetAllImages({token: adminData.token})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getRefresh])

    useEffect(() => {

        if(form?.name && form?.description && form?.price && form?.subCategories && form?.images && form?.stock){
            return setHaveAllData(true)
        }
        return setHaveAllData(false)

    }, [form])

    return(
        <Container>

            <TitleComponent form={form} haveAllData={haveAllData} SubmitForms={SubmitForms}/>

            <PaddingContainer>

                <InputsComponent handleForm={handleForm} form={form}/>  

                <TecnicDetailsComponent tecnicDetails={tecnicDetails} setTecnicDetails={setTecnicDetails}/>
            
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
                    
                    {subCategories?(<CategorySelector filter={form.subCategoryFilter} refresh={refreshSubCategory} subCategories={subCategories} setForm={setForm} form={form} initSelect={[]}/>):(<></>)}
                </div> 

                <div>  
                    <h2>
                        {"Selecione a(s) imagens"}
                        <CreateButton onClick={() => setShowCreate({...showCreate, [`showImageCreate`]: !showCreate.showImageCreate})}>
                            {showCreate.showImageCreate ?("Minimizar"):("Criar nova")}
                        </CreateButton>
                    </h2>

                    {showCreate.showImageCreate ?(<ImageCreator refresh={getRefresh} setRefresh={setGetRefresh}/>):(<></>)}

                    <FilterContainer>
                        <input 
                            placeholder="Filtrar" 
                            onChange={handleForm}
                            value={form.imageFilter}
                            name={"imageFilter"}
                        />
                        <FilterButtonContainer onClick={() => setRefreshImage(!refreshImage)}>{"Filtrar Images"}</FilterButtonContainer>
                        {form?.imageFilter?(<ClearFilterContainer onClick={() => ClearFilter("imageFilter")}>{"X"}</ClearFilterContainer>):(<></>)}
                    </FilterContainer>
                    
                    {images?(<ImageSelector filter={form.imageFilter} refresh={refreshImage} images={images} setForm={setForm} form={form}/>):(<></>)}
                </div>
                
            </PaddingContainer>
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
    h2 {
        padding: 1.5vh 0;
        font-size: 25px;
    }
    h1 {
        font-size: 25px;
        margin-bottom: 2vh;
        font-weight: 600;
        padding-top: 1.4vh;
    }
`
const PaddingContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.5vh;
    padding: 25px 1.4vw;
    color: #171717;
    width: 100%;
    font-size: 21px;
    font-weight: 500;
    h2 {
        padding: 1.5vh 0;
        font-size: 25px;
        display: flex;
        align-items: center;
    }
    @media (max-width: 850px) {
        padding-top: 0;
        padding-left: 0;
    }
    @media (max-width: 850px) {
        padding: 0 2vw;
        padding-top: 8vh;
        h2 {
            display: flex;
            align-items: center;
            font-weight: 600;
            border-left: 5px solid #009395ff; 
            margin-bottom: 1.2vh;
            padding: 0.5vh 0;
            padding-left: 2vw;
            font-size: 15px;
            margin-top: 2vh;
        }
    }
`
const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    column-gap: .4vw;
    input { 
        margin-top: 1vh;
        margin-bottom: 1vh;
        height: 30px;
        text-decoration: none;
        opacity: 1;
        border: none;
        border: 2px solid #02131BA1 ;
        color: #171717;
        padding-left: 12px;
        padding-right: 12px;
        outline: none;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 600;

        ::placeholder{
            color: #171717;
            opacity: .2;
        }
        :focus {
            border-radius: 10px;
            border: 2px solid #0B83BE ;
        }
    }
`
const FilterButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    padding: 0 1vw;
    width: auto;
    height: 30px;
    border-radius: 50px;
    color: #FFFFFF;
    background-color: #0A1F2A;
    cursor: pointer; 
    @media (max-width: 850px) {
        padding: 0.4vh 3vw;
        margin-left: 1vw;
    }
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