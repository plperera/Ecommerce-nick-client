import styled from "styled-components"
import { useState } from "react"
import { useEffect } from "react"
import api from "../../../services/API"
export default function Card ({navigateAndMoveUp}) {

    const [ banners, setBanners ] = useState(undefined)
    const [ slide, setSlide ] = useState(0)

    useEffect(() => {
        getAllBanners()
    }, [])

    async function getAllBanners(){
        try {
            const result = await api.GetProductsBannerHome()
            setBanners(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    function ChangeSlide(){
        (slide === (banners.length - 1)) ? (setSlide(0)):(setSlide(slide + 1))
    }

    useEffect(() => {

        const slideInterval = setInterval(() => {
            (slide === (banners.length - 1)) ? (setSlide(0)):(setSlide(slide + 1))
        }, (5 * 1000));

        return () => clearInterval(slideInterval);

    }, [banners?.length, slide]);


    return(
        <Container>

            { banners ? (
                <>
                    <ImageContainer onClick={() => navigateAndMoveUp({locate: `produto/${encodeURIComponent(banners[slide].productName)}`})}>
                        <img src={banners[slide]?.imageUrl} alt="" />  
                    </ImageContainer>

                    <Slide>
                        {banners.map( (e,i) => 
                            <SlideIcon 
                                onClick={() => ChangeSlide()} 
                                backgroundColor={slide === i?("#30BDFF"):("")}
                                key={i}
                            />
                        )}
                    </Slide>
                </>
            ):(
                <>
                </>
            )}
            
            
        </Container>
    )
}

const Container = styled.div`
    width: 20%;
    height: 100%;
    background-color: #e6e6e6ff;
    padding: 3vh 2vw;
    position: relative;
    @media (max-width: 850px) {
        height: 53vh;
        display: none;
    }
`
const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    //background-color: white;
    //border-radius: 15px;
    img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 15px;
    }
`
const Slide = styled.div`
    height: 24px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    position: absolute;
    bottom: 3.5vh;
    @media (max-width: 1366px) {
        bottom: 5vh;
    }
    @media (max-width: 850px) {
        gap: 4vw;
    }
`
const SlideIcon = styled.div`
    width: 20px;
    height: 18px;
    background-color: ${props => props.backgroundColor || "#30BDFF28"};
    box-shadow: 0 0 3px #00000052;
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: 850px) {
        width: 40px;
        height: 9px;
    }
`