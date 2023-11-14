import styled from "styled-components"
import { BiLink, BiUnlink } from 'react-icons/bi';
import Image from "../common/Image";
import { useEffect, useState } from "react";

export default function ImageCard ({productId, imageData, handleImageLink, ImageBelong, selectionData }) {

    const [isSelected, setIsSelected] = useState(undefined)

    useEffect(() => {
        const value = selectionData?.includes(imageData?.id)
        setIsSelected(!!value)
    }, [imageData, selectionData])

    function handleIsSelected(imageId){
        handleImageLink({imageId, isSelected})
        setIsSelected(!isSelected)  
    }

    return(
        <Container >
            <UpperContainer>
                <ImageContainer>
                    <a href={imageData?.imageUrl} target="_blank" rel="noopener noreferrer">
                        <Image imageUrl={imageData?.imageUrl}/>
                    </a>
                </ImageContainer>   
                <p>{imageData?.imageName}</p>
            </UpperContainer>
            <ActionsContainer>
                <StyledIconContainer color={ImageBelong ? '#C54F4F': '#32829B'}>
                    { productId //Entra apenas quando possui ProductId
                        ? <StyledIconContainer color={ImageBelong ? '#C54F4F': '#32829B'}>
                            { ImageBelong
                                ? <BiUnlink onClick={() => handleImageLink({productId: productId, imageId: imageData?.id})}/>
                                : <BiLink onClick={() => handleImageLink({productId: productId, imageId: imageData?.id})}/>
                            }
                        </StyledIconContainer> 

                        : <StyledIconContainer color={!isSelected ? '#32829B':'#FFFFFF'} background={isSelected ? '#32829B':'none'}>
                            <BiLink onClick={() => handleIsSelected(imageData?.id)}/>
                        </StyledIconContainer> 
                    }
                    
                </StyledIconContainer>
            </ActionsContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    background-color: #DFDFDF;
    border-radius: 10px;
    padding: 1vh 0;
`
const UpperContainer = styled.div`
    padding: 0vh 1vw;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1vh 1vw;
    position: relative;
    row-gap: 1vh;
    p {
        font-size: 12px;
        font-weight: 600;
    }
`
const ActionsContainer = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 calc(1vw - 5px);
    opacity: 1;
    :hover {
        opacity: 1;
    }
`
const ImageContainer = styled.div`
    width: 100%;
    height: 140px;
    display: flex;
    align-items: center;    
    justify-content: center;
    background-color: #FFFFFF;
    border-radius: 5px;
    a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;    
        justify-content: center;
    }
    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
`
const StyledIconContainer = styled.div`
    position: relative;
    user-select: none;
    > svg {
        font-size: 35px;
        color: ${props => props.color};
        background-color: ${props => props.background};
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
        :hover {
            background-color: #BDBDBD;
        }
    }
    span {
        position: absolute;
        font-size: 12px;
        width: 150px;
        transform: translate( -22%, 100%);
    }
`