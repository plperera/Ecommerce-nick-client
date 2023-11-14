import styled from "styled-components"
import { BiLink, BiUnlink, BiEditAlt } from 'react-icons/bi';
import { PiWarningDiamondBold } from 'react-icons/pi';
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function SubCategoryCard ({subCategoryData, setSelect, subCategoryBelong, hasOtherMainCategory, handleLinkSubCategory, mainCategoryId, selectionData }) {
    const [isSelected, setIsSelected] = useState(undefined)

    useEffect(() => {
        const value = selectionData?.includes(subCategoryData?.subCategoryId)
        setIsSelected(!!value)
    }, [subCategoryData, selectionData])

    function handleIsSelected(subCategoryId){
        handleLinkSubCategory({subCategoryId, isSelected})
        setIsSelected(!isSelected)  
    }

    function handleClick(){
        setSelect(subCategoryData)
    }
    function handleAlert(){
        toast.dark("Essa Subcategoria ja esta atrelada")
    }
    return(
        <Container >
            <UpperContainer countBackground={subCategoryData?.products?.length > 0 ? '#434FB3':'#B9B9B9'}>
                {/* <p>{subCategoryData?.name}</p> */}
                <p>{subCategoryData?.subCategoryName}</p>
                <p>{subCategoryData?.products?.length}</p>
            </UpperContainer>
            <ActionsContainer>
                

                {setSelect === undefined //Entra apenas quando não possui uma logica explicita de seleção
                    ? <>
                        <StyledIconContainer color={!isSelected ? '#32829B':'#FFFFFF'} background={isSelected ? '#32829B':'none'}>
                            <BiLink onClick={() => handleIsSelected(subCategoryData?.subCategoryId)}/>
                        </StyledIconContainer>
                    </>
                    : <>
                        <StyledIconContainer color={subCategoryBelong ? '#C54F4F': hasOtherMainCategory ? '#79511D':'#32829B'}>
                            {subCategoryBelong
                                ? <BiUnlink onClick={() => handleLinkSubCategory({mainCategoryId: mainCategoryId, subCategoryId: subCategoryData?.subCategoryId, unlink: true})}/>
                                : <BiLink onClick={() => handleLinkSubCategory({mainCategoryId: mainCategoryId, subCategoryId: subCategoryData?.subCategoryId, unlink: false})}/>
                            }
                            {hasOtherMainCategory
                                ? <><PiWarningDiamondBold onClick={handleAlert}/></>
                            :<></>}
                        </StyledIconContainer>

                        <StyledIconContainer color={"#252525"} onClick={handleClick}>
                            <BiEditAlt/>
                        </StyledIconContainer>
                    </>
                }
                
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
    row-gap: 1vh;
`
const UpperContainer = styled.div`
    padding: 0vh 1vw;
    font-size: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    > :last-child {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 25px;
        max-width: 32px;
        position: absolute;
        right: 1vw;
        top: calc(1vh - 5px * 1);
        padding: 5px 8px;
        border-radius: 5px;
        background-color: ${props => props.countBackground};
        color: white;
        font-size: 12px;
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
const StyledIconContainer = styled.div`
    position: relative;
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