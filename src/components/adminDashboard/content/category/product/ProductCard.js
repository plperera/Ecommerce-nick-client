import styled from "styled-components"
import { BiLink, BiUnlink, BiEditAlt } from 'react-icons/bi';
import { PiWarningDiamondBold } from 'react-icons/pi';
import { toast } from "react-toastify";

export default function ProductCard ({productData, setSelect, productBelong, hasOtherSubCategory, handleLinkProduct, subcategoryId}) {
    function handleClick(){
        setSelect(productData)
    }
    function handleAlert(){
        toast.dark("Produto ja atrelado a outra subcategoria")
    }
    return(
        <Container >
            <UpperContainer>
                <ImageContainer>
                    <img alt="" src={productData?.imageUrl}/>
                </ImageContainer>   
                <p>{productData?.name}</p>
            </UpperContainer>
            <ActionsContainer>
                <StyledIconContainer color={productBelong ? '#C54F4F': hasOtherSubCategory ? '#79511D':'#32829B'}>
                    {productBelong
                        ? <BiUnlink onClick={() => handleLinkProduct({subcategoryId: subcategoryId, unlink: true})}/>
                        : <BiLink onClick={() => handleLinkProduct({subcategoryId: subcategoryId, unlink: false})}/>
                    }
                    {hasOtherSubCategory
                        ? <><PiWarningDiamondBold onClick={handleAlert}/></>
                    :<></>}
                </StyledIconContainer>

                <StyledIconContainer color={"#252525"} onClick={handleClick}>
                    <BiEditAlt/>
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
    height: 50px;
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
    height: 90px;
    display: flex;
    align-items: center;    
    justify-content: center;
    background-color: #FFFFFF;
    border-radius: 5px;
    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
`
const StyledIconContainer = styled.div`
    position: relative;
    > svg {
        font-size: 35px;
        color: ${props => props.color};
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