import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

export default function Image({ imageUrl, alt }) {

    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <Spinner />}
            <StyledImg 
                alt={alt || ""} 
                src={imageUrl || ""}
                onLoad={() => setIsLoading(false)} 
            />
        </>
    );
}

const StyledImg = styled.img`
`;
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