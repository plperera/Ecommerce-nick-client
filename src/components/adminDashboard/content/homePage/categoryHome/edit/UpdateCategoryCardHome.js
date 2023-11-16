import styled from "styled-components"
import { useEffect, useState } from "react"
import api from "../../../../../../services/API"
import { useCustomForm } from "../../../../../../hooks/useCustomForms"
import AdminContext from "../../../../../../context/AdminContext"
import { useContext } from "react"
import { toast } from "react-toastify"
import ItemList from "../../../category/common/ItensList"
import CardHomeCategory from "./CardHomeCategory"
import CardImages from "./CardImages"
import CardSubCategories from "./CardSubCategories"
import Button from "../../../../../../common/form/Button"

export default function UpdateCategoryCardHome () {
    const { adminData } = useContext(AdminContext); 
    const [ form, handleForm, setForm ] = useCustomForm();


    const [ cardsCategoryData, setCardsCategoryData ] = useState(undefined)
    const [ selectCard, setSelectCard ] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)
    const [cardListData, setCardListData] = useState(undefined);

    useEffect(() => {
        getAllCategoriesCard()
        if(selectCard){
            setForm({
                ...form,
                cardSubCategoryId: [selectCard?.subCategoryId],
                cardImageId: [selectCard?.imageId]
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectCard])

    useEffect(() => {
        
        const listData = cardsCategoryData?.map(e => {
            return {
                content: <CardHomeCategory
                    cardData={e} 
                    setSelect={handleSelect}
                />
            }
        })
        console.log("listData", listData)
        setCardListData(listData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardsCategoryData, form, selectCard])


    function handleSelect(selectedCard){
        setSelectCard(selectedCard)
        setForm({
            newProductSubCategories: selectCard?.subCategoryId,
            newProductImages: selectCard?.imageId
        })
    }
    async function getAllCategoriesCard(){
        handleLoading(true)
        try {
            const response = await api.GetAllCategoryCardData(adminData?.token)
            setCardsCategoryData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    //Manipula o LoadSpinner
    function handleLoading(status){
        if(status !== undefined){
            setIsLoading(status)
            return
        }
        setIsLoading(!isLoading)
        return
    }

    //Cria uma nova Categoria
    async function handleSubmitUpdateCard() {
        if(!form?.cardSubCategoryId?.length > 0 || !form?.cardImageId?.length > 0){
            toast.dark("Valor inválido")
            return
        }
        handleLoading(true)
        try {
            const body = {
                homeCategoryId: selectCard?.categoryCardId,
                subCategoryId: form?.cardSubCategoryId[0],
                imageId: form?.cardImageId[0]
            }
            const response = await api.UpdateHomeSubCategory({body, token: adminData?.token})

            if(response?.status === 200){
                toast.dark("Atualização do Card feita com sucesso")
            }
            setSelectCard(undefined)
            handleLoading(false)
            return

        } catch (error) {
            console.log(error)
            toast.dark("Ocorreu um erro, tente novamente mais tarde ou contate o desenvolvedor")
            handleLoading(false)
            return
        }
    }
   
    return(
        <Container>
            <TitleContainer>
                <h1>{"Editar Card de Categoria"}</h1>
            </TitleContainer>

            <MiddleContainer>
                { cardListData
                    ? <ItemList 
                        ListData={cardListData} 
                        title={"Cards"} 
                        selectItem={selectCard} 
                        contentWhenSelected={
                            <>
                                <CardSubCategories form={form} handleForm={handleForm} setForm={setForm} handleSelect={handleSelect}/>
                                <CardImages form={form} handleForm={handleForm} setForm={setForm} handleSelect={handleSelect}/>
                            </>
                        }
                        />
                    : <></>
                }
                <Button onClick={handleSubmitUpdateCard} width={"30%"} fontsize={"10px"} background={"#3093C9 !important"} backgroundhover={"#5DB3E2 !important"}>{"Salvar"}</Button>              
            </MiddleContainer>

            
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
    background-color: #FFFFFF00;

    @media (max-width: 850px) {
        width: 100%;
    }
`
const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 1.4vw;
    > h1 {
        font-size: 28px;
        font-weight: 700;
        color: #999999;
    }
`
const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 1.4vw;
    row-gap: 4vh;
    padding-bottom: 6vh;
`