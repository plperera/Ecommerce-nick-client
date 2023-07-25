import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"

export default function ImageSelector ({filter, refresh, images, setForm, form, limitSelect, initSelect}) {

    const [imageSelected, setImageSelected] = useState(initSelect || [])
    const [filteredImage, setFilteredImage] = useState(undefined);
    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        console.log(imageSelected)
    },[imageSelected])

    function selectImage({id}){

        if (limitSelect) {

            const totalSelected = Object.values(imageSelected).filter(Boolean).length;
            if(totalSelected >= limitSelect && !imageSelected[`image${id}`]) {
                setImageSelected({[`image${id}`]: id})
                return;
            }

        }
        if( !imageSelected[`image${id}`] ){
            setImageSelected({...imageSelected, [`image${id}`]: id})
        } else {
            setImageSelected({...imageSelected, [`image${id}`]: undefined})
        }
    }

    function filterImages(){

        if (!filter){
            return setFilteredImage(images)
        }
        const filterResponse = images.filter( e => e?.imageName?.toLowerCase().includes(filter.toLowerCase()))
        setFilteredImage(filterResponse)
        return
    }

    useEffect(() => {
        
        setFilteredImage(images)

    }, [images])

    useEffect(() => {
        
        filterImages()

    // eslint-disable-next-line react-hooks/exhaustive-deps   
    }, [refresh])

    useEffect(() => {

        const bodyFormat = Object.entries(imageSelected).reduce((acc, [key, value]) => {
            if(value !== undefined) {
              acc.push({imageId: value, mainImage: false});
            }
            return acc;
        }, []);

        setForm({...form, "images": bodyFormat})

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageSelected])

    
 
    return(
        <Container>
            {filteredImage ? (
                filteredImage.map( e => 

                    <ImageCard key={e?.id} onClick={() => selectImage(e)} isSelected={!!imageSelected[`image${e?.id}`]}>
                        <h3>{e?.imageName}</h3>
                        <img src={e?.imageUrl} alt="" onLoad={() => setIsLoad({ ...isLoad, [e.id]: true })} key={e?.id}/>
                        {
                            isLoad[e.id] ? (<></>):(<Spinner/>)
                        }
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
