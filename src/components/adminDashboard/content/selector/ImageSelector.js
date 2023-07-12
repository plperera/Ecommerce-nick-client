import { useEffect, useState } from "react"
import styled from "styled-components"

export default function ImageSelector ({filter, refresh}) {

    const [imageSelected, setImageSelected] = useState([])
    const [image, setImage] = useState([]);
    const ref = []

    for (var i = 1; i <= 20; i++) {
        ref.push({id: i, name: "Imagem " + i, imageUrl:"https://firebasestorage.googleapis.com/v0/b/imageuploads-7b8bc.appspot.com/o/maquina-teste-2.png?alt=media&token=349fc16f-9509-4a65-8019-bed809d93c7b"});
    }

    useEffect(() => {
        
        setImage(ref)

    }, [])

    function selectImage({name, id}){
        if( !imageSelected[`image${id}`] ){
            setImageSelected({...imageSelected, [`image${id}`]: name})
        } else {
            setImageSelected({...imageSelected, [`image${id}`]: undefined})
        }
    }

    useEffect(() => {
        

        if (!filter){
            console.log(filter)
            return setImage(ref)
        }

        const filteredImages = ref.filter( e => e.name.toLowerCase().includes(filter.toLowerCase()))
        setImage(filteredImages)

    }, [refresh])

    
 
    return(
        <Container>
            {image ? (
                image.map( e => 

                    <ImageCard key={e.id} onClick={() => selectImage(e)} isSelected={!!imageSelected[`image${e.id}`]}>
                        <h3>{e.name}</h3>
                        <img src={e.imageUrl} alt=""/>
                    </ImageCard>

                )
            ):(<h3>carregando...</h3>)}
        </Container>
    )
}

const Container = styled.div`
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
    justify-content: center;
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
