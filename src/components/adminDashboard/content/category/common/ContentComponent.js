import { useState } from "react"
import styled from "styled-components"

export default function ContentComponent ({showReturnButton, handleReturn, title, content}) {
    const [showComponents, setShowComponents] = useState(false)
    return(
        <>
            <MiddleTitleContainer>
                {showReturnButton
                    ? 
                        <StyledReturnButton onClick={handleReturn}>
                            <span>{`Voltar `}</span>
                            <span>{`(${title})`}</span>
                        </StyledReturnButton>
                    : <h2 onClick={() => setShowComponents(!showComponents)}>{title}</h2>         
                }
            </MiddleTitleContainer>

            <ContentContainer showComponents={showComponents}>
                {content}
            </ContentContainer>     
        </>        
    )
}

const MiddleTitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > h2 {
        font-size: 20px;
        font-weight: 600;
        padding: 4px 8px;
        border-left: 6px solid #4B4B4B; 
        cursor: pointer;
        user-select: none;
        :hover {
            background-color: #4B4B4B;
            color: #FFFFFF;
        }
    }
`
const ContentContainer = styled.div`
    display: ${props => props.showComponents ? 'flex':'none'};
    width: 100%;
    min-height: 100px;
    margin-bottom: 4vh;
`
const StyledReturnButton = styled.div`
    font-size: 20px;
    font-weight: 600;
    padding: 4px 0;
    border-left: 6px solid #434fb3; 
    color: #434fb3;
    padding-left: 8px;
    cursor: pointer;
    user-select: none;
    /* display: flex;
    align-items: center; */
    > :last-child {
        opacity: 0;
        font-size: 11px;
    }
    :hover {
        > :last-child {
            opacity: 1;
            font-size: 11px;
        }
    }
`