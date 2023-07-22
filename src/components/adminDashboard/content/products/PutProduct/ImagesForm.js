import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import api from "../../../../../services/API"

export default function ImagesForm ({ images, setForm, form, filter, refresh, token }) {

    const [filteredImages, setFilteredImages] = useState(undefined);
    const [allImages, setAllImages] = useState(undefined);
    const [imagesSelected, setImagesSelected] = useState([...images]);
    const [isLoad, setIsLoad] = useState(true);


    function selectImage({id}){
        if( imagesSelected.some(e => e.id === id) ){
            const newArray = imagesSelected.filter(e => e.id !== id)
            setImagesSelected([...newArray])
            return
        } 

        const newArray = [...imagesSelected, {id: id}]
        setImagesSelected([...newArray]) 
    }

    useEffect(() => {
        getImages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        
        filterImages()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh])

    async function getImages(){
        try {

            const result = await api.GetAllImages({token})
            setAllImages(result.data)
            setFilteredImages(result.data)

        } catch (error) {
            console.log(error)
        }
    }

    function filterImages(){

        if (!filter){
            return setFilteredImages(allImages)
        }
        
        const filterResponse = allImages.filter(e => e.name.toLowerCase().includes(filter.toLowerCase()))
        setFilteredImages(filterResponse)
        return
    }

    return(
        <Container>
            <Title>
                {"Selecione as Categorias para o Produto"}
            </Title>

            <ImagesContainer>
                {filteredImages ? (
                    filteredImages.map( e => 

                        // <CategoryCard key={e.id} onClick={() => selectImage(e)} isSelected={imagesSelected.some(selected => selected.id === e.id)}>
                        //     {e.name}
                        // </CategoryCard>
                        <ImageCard key={e?.id} onClick={() => selectImage(e)} isSelected={imagesSelected.some(selected => selected.id === e.id)}>
                            <h3>{e?.imageName}</h3>
                            <img src={e?.imageUrl} alt="" onLoad={() => setIsLoad({ ...isLoad, [e.id]: true })} key={e?.id}/>
                            {
                                isLoad[e.id] ? (<></>):(<Spinner/>)
                            }
                        </ImageCard>

                    )
                ):(<h3>carregando...</h3>)}
            </ImagesContainer>     

        </Container>
    )
}
const Container = styled.div`
    width: 100%;
`
const Title = styled.div`
    font-size: 20px;
    margin-bottom: 2vh;
`
const ImagesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
    color: #171717;
    width: 100%;
    min-height: 10vh;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    background-color: #39525E3A;
    border-radius: 5px;
    gap: 15px;
    h3 {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
    }
`
const ImageCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    width: 170px;
    height: 220px;
    border: 5px solid;
    border-color: ${props => props.isSelected ? ("#0B83BE"):("#E2E2E2")};
    border-radius: ${props => props.isSelected ? ("15px"):("5px")};
    background-color: ${props => props.isSelected ? ("#FFFFFF"):("#FFFFFF")};
    color: ${props => props.isSelected ? ("#171717"):("#171717")};
    cursor: pointer;
    user-select: none;
    img {
        max-height: 160px;
        max-width: 160px;
        border-radius: 15px;
    }
    h3 {
        max-height: 60px;
        max-width: 170px;
        font-size: 13px;
        text-align: center;
    }
`
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
    margin-top: 30px;
    border-radius: 50px;
    border-bottom: 2px dotted #00929544;
    border-right: 2px dotted #00929544;
    border-top: 4px ridge #009395;
    border-left: 2px dotted #00929544; 
    width: 50px;
    height: 50px;
    animation: ${spinAnimation} 2s linear infinite;
`;
