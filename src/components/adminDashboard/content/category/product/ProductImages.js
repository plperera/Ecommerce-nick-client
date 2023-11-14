import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import ItemList from "../common/ItensList"
import api from "../../../../../services/API"
import AdminContext from "../../../../../context/AdminContext"
import ImageCard from "../image/ImageCard"

export default function ProductImages ({form, setForm}) {
    const [ showProductImages, setShowProductImages ] = useState(true)
    const [ allImagesData, setAllImagesData ] = useState(undefined)
    const [ allCardsData, setAllCardsData ] = useState(undefined)
    const { adminData } = useContext(AdminContext); 

    async function getAllImages() {
        try {
            const response = await api.GetAllImages({token: adminData?.token})
            setAllImagesData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    async function handleLinkImages({imageId, isSelected}) {
        let productImages

        if (form?.newProductImages?.length > 0){
            isSelected 
                ? productImages = [...form?.newProductImages].filter(e => e !== imageId)
                : productImages = [...form?.newProductImages, imageId]
            
        } else {
            productImages = [imageId] 
        }
        const lastForm = {...form}
        setForm({...lastForm, newProductImages: productImages})
    }

    useEffect(() => {
        getAllImages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const ImageListData = allImagesData
        ?.map((e) => ({
            content: (
                <ImageCard
                    imageData={e} 
                    handleImageLink={handleLinkImages}
                    selectionData={form?.newProductImages}
                />
            ),
        }));
        setAllCardsData(ImageListData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form, allImagesData])

    return(
        <Container>    
            <HandleShowContainer>
                <p>Selecionar Imagens<CountSelection>{form?.newProductImages?.length > 0 ? form?.newProductImages?.length : 0}</CountSelection></p>
                <p onClick={() => setShowProductImages(!showProductImages)}>{showProductImages ? 'mostrar menos':'expandir'}</p>
            </HandleShowContainer>

            <SubCategoriesListContainer showProductImages={showProductImages}>
                {
                    allCardsData
                        ? <ItemList 
                            ListData={allCardsData} 
                            title={"images"}
                        />
                        : <></>
                }    
            </SubCategoriesListContainer>
        </Container>
    )
}
const Container = styled.div`
    width: 80%;
    min-height: 60px;
`
const HandleShowContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > :last-child {
        background-color: #9E9E9E83;
        color: #464646;
        padding: 6px 12px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        user-select: none;
    }
`
const SubCategoriesListContainer = styled.div`
    width: 100%;
    display: ${props => props.showProductImages ? `flex`:'none'};
    flex-direction: column;
    row-gap: 2vh;
`
const CountSelection = styled.span`
    background-color: #434fb3;
    color: #FFFFFF;
    padding: 0 8px;
    border-radius: 4px;
    font-size: 16px;
    margin-left: 15px;
`