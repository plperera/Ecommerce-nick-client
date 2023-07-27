import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { RiExchangeFill } from 'react-icons/ri';
import { BiPackage } from 'react-icons/bi';
import { FaTruckLoading } from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';
import { LuPackageCheck } from 'react-icons/lu';

export default function OrderTimeline ({orderData}) {

    const obj = [
        {status: "Payd", text: "Pagamento Recebido"},
        {status: "Sorting", text: "Em Separação"},
        {status: "ReceivedByCarrier", text: "Recebido pela transportadora"},
        {status: "InTransit", text: "Em Transito"},
        {status: "Delivered", text: "Entregue"},
    ];
    
    const [count, setCount] = useState(0);
    const [hasFound, setHasFound] = useState(false);
    
    useEffect(() => {
        GenerateAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count]);
    
    function GenerateAnimation() {

        if(orderData.status === "waiting" || hasFound){
            return
        }
    
        if (count >= 5) {
            console.log("to vazando");
            return;
        }
        //orderData.status
        if (obj[count].status !== orderData.status) {
            console.log("repete");

            setTimeout(() => {
                const newTotal = count + 1
                setCount(newTotal);  
            }, [800]);

            return;
        }
    
        console.log("achei");
        setTimeout(() => {
            setHasFound(true)
            const newTotal = count + 1
            setCount(newTotal);  
        }, [800]);
        return;
    }
    

    return(
        <Container>

            <IconContainer color={count >= 1 ? ("#009395ff"):("#8d8d8d")}>
                <RiExchangeFill/>
                <h3>{obj[0].text}</h3>
            </IconContainer>

            <ProgressBarContainer>
                <AnimationContainer start={(count === 1) && !hasFound} end={(count > 1)}></AnimationContainer>
            </ProgressBarContainer>

            <IconContainer color={count >= 2 ? ("#009395ff"):("#8d8d8d")}>
                <BiPackage/>
                <h3>{obj[1].text}</h3>
            </IconContainer>
            
            <ProgressBarContainer>
                <AnimationContainer start={(count === 2) && !hasFound} end={(count > 2)}></AnimationContainer>
            </ProgressBarContainer>

            <IconContainer color={count >= 3 ? ("#009395ff"):("#8d8d8d")}>
                <FaTruckLoading/>
                <h3>{obj[2].text}</h3>
            </IconContainer>
            
            <ProgressBarContainer>
                <AnimationContainer start={(count === 3) && !hasFound} end={(count > 3)}></AnimationContainer>
            </ProgressBarContainer>

            <IconContainer color={count >= 4 ? ("#009395ff"):("#8d8d8d")}>
                <TbTruckDelivery/>
                <h3>{obj[3].text}</h3>
            </IconContainer>

            <ProgressBarContainer>
                <AnimationContainer start={(count === 4) && !hasFound} end={(count > 4)}></AnimationContainer>
            </ProgressBarContainer>

            <IconContainer color={count >= 5 ? ("#009395ff"):("#8d8d8d")}>
                <LuPackageCheck/>
                <h3>{obj[4].text}</h3>
            </IconContainer>
            

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: calc(80px + 2vh * 2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2vh;
`
const IconContainer = styled.div`
    width: 100px;
    height: 100%;
    border: 2px solid;
    border-color: ${props => props.color};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: start;
    padding-top: 7px;
    flex-direction: column;
    row-gap: 7px;
    color: ${props => props.color};;

    & > :first-child {
        font-size: 50px;
    }
    h3 {
        font-size: 11px;
        text-align: center;
        font-weight: 500;
        width: 95%;
    }
`

const ProgressBarContainer = styled.div`
    width: calc((100% - (100px * 5)) / 4);
    height: 5px;
    background-color: #4E4E4EA4;
    position: relative;
`
const loadingBar = keyframes`
    0% { 
        width: 0; 
    }

    100% { 
        width: 100%;  
    }
`;

const AnimationContainer = styled.div`
    position: absolute;
    width: ${props => (props.end ? "100%": "0%" )};
    height: 100%;
    background-color: #009395ff;
    animation: ${props => (props.start ? loadingBar: "none" )};
    animation-duration: .81s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
`


