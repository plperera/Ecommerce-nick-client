import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import api from "../../../services/API"

export default function BannerSlide ({navigateAndMoveUp}) {

    const [ banners, setBanners ] = useState(undefined)
    const [slide, setSlide] = useState(0)

    useEffect(() => {
        getAllBanners()
    },[])

    async function getAllBanners() {
        try {
            const response = await api.GetAllBanners()
            setBanners(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    function ChangeSlide(){
        (slide === (banners?.length - 1)) ? (setSlide(0)):(setSlide(slide + 1))
    }

    useEffect(() => {

        const slideInterval = setInterval(() => {
            (slide === (banners?.length - 1)) ? (setSlide(0)):(setSlide(slide + 1))
        }, (5 * 1000));

        return () => clearInterval(slideInterval);

    }, [banners?.length, slide]);


    return(
        banners ? (
            <>
                <ImageContainer backgroundImage={banners[slide]?.imageUrl}>

                    <Title>{banners[slide].text}</Title>
                    <Button onClick={() => navigateAndMoveUp({locate: "catalogo"})}>Conheça nosso catálogo</Button>

                </ImageContainer>

                <Slide>
                    {banners.map( (e,i) => 
                        <SlideIcon 
                            onClick={() => ChangeSlide()} 
                            backgroundColor={slide === i?("#009395"):("")}
                            key={i}
                        />
                    )}
                </Slide>
            </>
        ):(
            <></>
        )
    )
}

const ImageContainer = styled.div`
    width: 60%;
    height: 100%;
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: left;
    justify-content: center;
    padding: 0 2vw;    
    flex-direction: column;
    border-radius: 0 0 25px 25px;
    @media (max-width: 850px) {
        padding: 0 4vw;   
        width: 100%;
        border-radius: 0; 
    }
`
const Button = styled.div`
    width: 18vw;
    height: 5vh;
    background-color: #79838b;
    border-left: 8px solid #009395;
    color: #FFFFFF;
    text-shadow: 4px 2px 6px #0000006C;
    box-shadow: 2px 2px 5px #0000001A;
    font-weight: 700;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: left;
    padding-left: 0.65vw;
    border-radius: 5px;
    font-size: 21px;
    margin-top: 3vh;
    cursor: pointer;
    user-select: none;
    transition: all ease .1s !important;
    &:hover{
        border-left: 10px solid #00BABD;
    }
    @media (max-width: 1366px) {
        font-size: 16px;  
        width: 19vw;  
    }
    @media (max-width: 850px) {
        width: 65%;
        height: 4vh;
        font-size: 15px; 
        padding-left: 2vw; 
        text-align: left;
    }
`
const Title = styled.div`
    user-select: none;
    color: white;
    font-size: 52px;
    width: 32vw;
    font-weight: 700;
    text-shadow: 3px 3px 5px #00000070;
    @media (max-width: 1366px) {
        font-size: 32px;    
    }
    @media (max-width: 850px) {
        width: 100%;
        text-align: left;
        font-size: 25px;
    }
`
const Slide = styled.div`
    height: 24px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    top: 66vh;
    position: absolute;
    @media (max-width: 850px) {
        gap: 4vw;
        top: 61vh;
    }
`
const SlideIcon = styled.div`
    width: 80px;
    height: 18px;
    background-color: ${props => props.backgroundColor || "#00929528"};
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: 850px) {
        width: 40px;
        height: 9px;
    }
`