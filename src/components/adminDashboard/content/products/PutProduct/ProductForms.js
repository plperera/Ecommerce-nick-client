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
import Button from "../../../../../common/form/Button";
import ImageCreator from "../../creator/ImageCreator";
import ImageSelector from "../../selector/ImageSelector";
import AdminContext from "../../../../../context/AdminContext";
import { useContext } from "react";
import SubCategoryCreator from "../../creator/SubCategoryCreator";
import CategorySelector from "../../selector/CategorySelector";

export default function ProductForms ({form, handleForm, setForm, productData, token}) {

    console.log(productData)

    const [ refreshImage, setRefreshImage ] = useState(false)
    const [ refreshSubCategory, setRefreshSubCategory ] = useState(false)
    const [ getRefresh, setGetRefresh ] = useState(false)
    const [ images, setImages ] = useState(false)
    const [ subCategories, setSubCategories ] = useState(false)
    const [ showCreate, setShowCreate ] = useState({showSubCategoryCreate: false, showImageCreate: false})
    const { adminData } = useContext(AdminContext);
    // eslint-disable-next-line no-unused-vars
    const { errors, validate } = useValidation(validations);

    function convertToNumber(number) {
        // Divide o número por 100 para considerar os últimos dois dígitos como decimais
        let value = number / 100;

        // Converte para string com separadores de milhar e decimais
        value = value.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

        // Adiciona prefixo
        value = `R$ ${value}`;

        // Remove zeros desnecessários após a vírgula
        value = value.replace(/,00$/, '').replace(/(\d),0$/, '$1');

        return value;
    }

    async function GetAllImages({token}){
        const response = await api.GetAllImages({token})
        setImages(response.data)
    }

    async function GetAllSubCategories(){
        const response = await api.GetAllSubCategoriesData(adminData?.token)
        setSubCategories(response.data)
    }

    function ClearFilter(filterName) {
        setForm({...form, [filterName]: ''}); 

        if(filterName === "imageFilter"){
            return setRefreshImage(!refreshImage)
        }
        
        return setRefreshSubCategory(!refreshSubCategory)
    }

    function getSelectedImages() {
        const selectValue = {}
        productData?.images?.map(e =>   
            selectValue[`image${e?.id}`] = e?.id
        )
        return selectValue
    }

    function getSelectedSubCategories() {
        const selectValue = {}
        productData?.subCategories?.map(e =>   
            selectValue[`subCategory${e?.subCategoryId}`] = e?.subCategoryId
        )
        return selectValue
    } 

    function customHandleChange(event, type) {
        let value = event.target.value;

        // Remove all non-number and non-comma characters
        let newValue = value.replace(/[^\d,]/g, "");

        // Remove extra commas if there are any
        const splitValue = newValue.split(",");
        if (splitValue.length > 2) {
            newValue = splitValue[0] + ',' + splitValue.slice(1).join("");
        }

        // Add thousands separators to integer part
        const parts = newValue.split(",");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        // Join parts together
        newValue = parts.join(",");
        
        // Add prefix
        if (newValue.length > 0) {
            newValue = `R$ ${newValue}`;
        }

        // Limit decimal places to 2 if there's a decimal value
        if(parts[1] && parts[1].length > 2) {
            const integerPart = parts[0];
            const decimalPart = parts[1].substring(0, 2); // take only the first 2 digits of the decimal part
            newValue = `R$ ${integerPart},${decimalPart}`; 
        }
        if ( type === 'highPrice'){
            setForm({...form, highPrice: newValue})
            return
        }
        setForm({...form, price: newValue})
    }

    useEffect(() => {

        GetAllImages({token: token})
        GetAllSubCategories()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getRefresh])

    useEffect(() => {

        setForm({
            productId: productData?.productId,       
            name: productData?.name,       
            description: productData?.description,       
            price: convertToNumber(productData?.price),    
            highPrice: convertToNumber(productData?.highPrice),    
            stock: productData?.stock,   
            tecnicDetails: productData?.tecnicDetails,       
            subCategories: productData?.subCategories,       
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
                            <StyledTextArea 
                                label="Descrição sobre o Produto"     
                                type="text" 
                                name={"description"} 
                                value={form.description} 
                                onChange={handleForm}
                                width="100%"
                            />
                            {errors.description && <ErrorMsg>{errors.description}</ErrorMsg>}
                        </InputWrapper>

                        <DesktopInputWrapper width={"44%"}>
                            <Input 
                                label="Preço"     
                                type="text" 
                                name={"price"} 
                                value={form.price} 
                                onChange={(e) => customHandleChange(e, 'price')}
                                width="100%"
                            />
                            {errors.price && <ErrorMsg>{errors.price}</ErrorMsg>}
                        </DesktopInputWrapper>

                        <MobileInputWrapper width={"48%"}>
                            <Input 
                                label="Preço"     
                                type="text" 
                                name={"price"} 
                                value={form.price} 
                                onChange={(e) => customHandleChange(e, 'price')}
                                width="100%"
                            />
                            {errors.price && <ErrorMsg>{errors.price}</ErrorMsg>}
                        </MobileInputWrapper>

                        <DesktopInputWrapper width={"44%"}>
                            <Input 
                                label="Preço antes do Desconto"     
                                type="text" 
                                name={"highPrice"} 
                                value={form.highPrice} 
                                onChange={(e) => customHandleChange(e, 'highPrice')}
                                width="100%"
                            />
                            {errors.highPrice && <ErrorMsg>{errors.highPrice}</ErrorMsg>}
                        </DesktopInputWrapper>

                        <MobileInputWrapper width={"48%"}>
                            <Input 
                                label="Preço antes do Desconto"     
                                type="text" 
                                name={"highPrice"} 
                                value={form.highPrice} 
                                onChange={(e) => customHandleChange(e, 'highPrice')}
                                width="100%"
                            />
                            {errors.highPrice && <ErrorMsg>{errors.highPrice}</ErrorMsg>}
                        </MobileInputWrapper>

                        <DesktopInputWrapper width={"10%"}>
                            <Input 
                                label="Estoque"     
                                type="text" 
                                name={"stock"} 
                                mask={"999999"}
                                value={form.stock} 
                                onChange={handleForm}
                                width="100%"
                            />
                            {errors.stock && <ErrorMsg>{errors.stock}</ErrorMsg>}
                        </DesktopInputWrapper>

                        <MobileInputWrapper width={"100%"}>
                            <Input 
                                label="Estoque"     
                                type="text" 
                                name={"stock"} 
                                mask={"999999"}
                                value={form.stock} 
                                onChange={handleForm}
                                width="100%"
                            />
                            {errors.stock && <ErrorMsg>{errors.stock}</ErrorMsg>}
                        </MobileInputWrapper>
                    </UpperInputsContainer>

                    <TecnicDetails setForm={setForm} form={form}/>

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
                        
                        {subCategories?(<CategorySelector filter={form.subCategoryFilter} refresh={refreshSubCategory} subCategories={subCategories} setForm={setForm} form={form} initSelect={getSelectedSubCategories()}/>):(<></>)}
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
const UpperInputsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 1vh;
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
    @media (max-width: 850px) {
        padding: 0.4vh 3vw;
        margin-left: 1vw;
    }
`
const DesktopInputWrapper = styled(InputWrapper)`
    display: initial;
    @media (max-width: 850px) {
        display: none;
    }
`
const MobileInputWrapper = styled(InputWrapper)`
    display: none;
    @media (max-width: 850px) {
        display: initial;
    }
`
const StyledTextArea = styled.textarea`
    margin-top: 10px;
    max-width: 100%;
    min-width: 100%;
    height: 200px;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 7px;
    resize: vertical;  // permite o redimensionamento vertical
    font-size: 14px;
    font-weight: 600;
    color: #02131B;
    box-sizing: border-box;
    ::placeholder{
        color: #171717;
        opacity: .2;
    }
    &:focus {
        outline: none;
        border: 2px solid #009395ff;
        border-radius: 10px;
    }
`
