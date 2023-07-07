import styled from "styled-components"
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

export default function ProductImageSlide ({imageArray}) {
    return(
        <Container>
            <LeftArrowContainer>
                <LeftArrowIcon/>
            </LeftArrowContainer>

            <img src={imageArray[0]?.imageURL} alt=""/>

            <RightArrowContainer>
                <RightArrowIcon/>
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
    img {
        max-width: 90%;
        max-height: 90%;
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
const LeftArrowIcon = styled(HiOutlineChevronLeft)`
    font-size: 50px;
    color: black;
    box-shadow: -3px 3px 6px #000000B0;
    background-color: white;
    border-radius: 50px;
    padding: 6px;
    margin-left: -1vw;
    z-index: 200000;
    cursor: pointer;
`
const RightArrowIcon = styled(HiOutlineChevronRight)`
    font-size: 50px;
    color: black;
    box-shadow: 3px 3px 6px #000000B0;
    background-color: white;
    border-radius: 50px;
    padding: 6px;
    margin-right: -1vw;
    z-index: 200000;
    cursor: pointer;
`