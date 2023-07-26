import styled, { keyframes, css } from "styled-components"
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { useState } from "react";

export default function ProductImageSlide ({imageArray}) {

    const [slide, setSlide] = useState(0)
    const [isLoading, setIsLoading] = useState(true);

    function ChangeSlide(){
        setIsLoading(true);
        (slide === (imageArray.length - 1)) ? (setSlide(0)):(setSlide(slide + 1))
    }

    return(
        <Container>
            <LeftArrowContainer>
                {imageArray.length > 1 && <LeftArrowIcon onClick={() => ChangeSlide()}/>}
                
            </LeftArrowContainer>

            {isLoading && <Spinner />}

            <img 
                src={imageArray[slide]?.imageUrl} 
                alt="" 
                onLoad={() => setIsLoading(false)} 
                style={{ display: isLoading ? "none" : "block" }}
            />

            <RightArrowContainer>
                {imageArray.length > 1 && <RightArrowIcon onClick={() => ChangeSlide()}/>}
            </RightArrowContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    img {
        max-width: 90%;
        max-height: 90%;
        user-select: none;
    }
`
const CommonArrowStyle = styled.div`
    position: relative;
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
`
const RightArrowContainer = styled(CommonArrowStyle)`
    right: 0;
    justify-content: right;
`
const LeftArrowContainer = styled(CommonArrowStyle)`
    left: 0;
`
const CommonArrowIconStyle = css`
    font-size: 50px;
    color: black;
    background-color: white;
    border-radius: 50px;
    padding: 6px;
    z-index: 1;
    cursor: pointer;
    user-select: none;
`
const LeftArrowIcon = styled(HiOutlineChevronLeft)`
    ${CommonArrowIconStyle}
    box-shadow: -3px 3px 6px #000000B0;    
    margin-left: -1vw;
       
`
const RightArrowIcon = styled(HiOutlineChevronRight)`
    ${CommonArrowIconStyle}
    box-shadow: 3px 3px 6px #000000B0;
    margin-right: -1vw;
`
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border-radius: 50px;
  border-bottom: 2px dotted #00929544;
  border-right: 2px dotted #00929544;
  border-top: 4px ridge #009395;
  border-left: 2px dotted #00929544; 
  width: 50px;
  height: 50px;
  animation: ${spinAnimation} 2s linear infinite;
`;