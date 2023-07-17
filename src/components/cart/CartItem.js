import styled from "styled-components"
import { PriceSign } from "./PriceSign"

export default function CartItem () {
    const imageUrl = "https://firebasestorage.googleapis.com/v0/b/imageuploads-7b8bc.appspot.com/o/1689369296686.png?alt=media&token=96edba69-e629-4545-b15e-c30e53a0546f"
    return(
        <Container>    
            <TableItem width={"45%"} justifyContent={"space-evenly"}>
                <ImageContainer>
                    <img src={imageUrl} alt=""/>
                </ImageContainer> 
                <LineProductName>{"ESQUADREJADEIRA 2900MM COM EIXO INCLINAVEL 45° SEM MOTOR - FORTG BY MAKSIWA- 106[1464]"}</LineProductName>
            </TableItem>

            <TableItem width={"15%"}>
                <LinePrice>
                    <PriceSign>{"R$ "}</PriceSign><span>{ (20000 / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                </LinePrice>
            </TableItem>

            <TableItem width={"25%"} columnGap={"6px"}>
                <AmountButtons>{"-"}</AmountButtons>
                <LineAmount>
                    <h3>{20}</h3>
                </LineAmount>
                <AmountButtons>{"+"}</AmountButtons>
            </TableItem>

            <TableItem width={"15%"}>
                <LineTotal>
                    <PriceSign fontSize={"17px"} >{"R$ "}</PriceSign><span>{ ((20011 / 100) * 20).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                </LineTotal>
            </TableItem>          
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 4px solid #ebebebff;
`
const TableItem = styled.div`
    width: ${props => props.width || "auto"};
    display: flex;
    align-items: center;
    justify-content: ${props => props.justifyContent || "center"};
    column-gap: ${props => props.columnGap || "none"};
    padding: 1.6vh 1vw;
    font-size: 18px;
    font-weight: 500;
`
const ImageContainer = styled.div`
    width: 50%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    img {
        max-width: 100%;
        max-height: 100%;
    }
`
const LineProductName = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    height: 150px;
    width: 50%;
    padding: 3px;
    font-size: 14px;
    font-weight: 500;
`
const LineDefault = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    width: 100%;
    padding: 3px;
    font-size: 14px;
    font-weight: 500;
`
const LinePrice = styled(LineDefault)`
    font-size: 17px;
`
const LineAmount = styled(LineDefault)`
    width: auto;
    h3 { 
        padding: 1.3vh 1.4vw;
        background-color: #EBEBEB;
        border-radius: 50px;
    }   
`
const LineTotal = styled(LineDefault)`
    font-size: 21px;
    font-weight: 700;
    color: #02131bff;
`
const AmountButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: auto;
    padding: 0.5vh 0.5vw;
    background-color: #02131bff;
    color: #FFFFFF;
    border-radius: 50px;
    cursor: pointer;
`
