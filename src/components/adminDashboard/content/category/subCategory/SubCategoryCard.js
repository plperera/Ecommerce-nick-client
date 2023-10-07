import styled from "styled-components"
import { BiLink, BiUnlink, BiEditAlt } from 'react-icons/bi';
import { PiWarningDiamondBold } from 'react-icons/pi';
import { toast } from "react-toastify";

export default function SubCategoryCard ({subCategoryData, setSelect, subCategoryBelong, hasOtherMainCategory, handleLinkSubCategory, mainCategoryId}) {
    function handleClick(){
        setSelect(subCategoryData)
    }
    function handleAlert(){
        toast.dark("Essa Subcategoria ja esta atrelada")
    }
    return(
        <Container >
            <UpperContainer>
                {/* <p>{subCategoryData?.name}</p> */}
                <p>{subCategoryData?.name}</p>
                <p>{subCategoryData?.products?.length}</p>
            </UpperContainer>
            <ActionsContainer>
                <StyledIconContainer color={subCategoryBelong ? '#C54F4F': hasOtherMainCategory ? '#79511D':'#32829B'}>
                    {subCategoryBelong
                        ? <BiUnlink onClick={() => handleLinkSubCategory({mainCategoryId: mainCategoryId, subCategoryId: subCategoryData?.id, unlink: true})}/>
                        : <BiLink onClick={() => handleLinkSubCategory({mainCategoryId: mainCategoryId, subCategoryId: subCategoryData?.id, unlink: false})}/>
                    }
                    {hasOtherMainCategory
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
    font-size: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1vh 1vw;
    position: relative;
    > :last-child {
        position: absolute;
        right: 1vw;
        top: calc(1vh - 5px * 1);
        padding: 5px 8px;
        border-radius: 5px;
        background-color: #434FB3;
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