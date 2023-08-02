import styled from "styled-components"
import ProductImageSlide from "./ProductImageSlide"
import { useEffect } from "react"
import { useContext } from "react"
import UserContext from "../../context/UserContext";
import Button from "../../common/form/Button";

export default function UniqueProduct ({product}) {

    const { setUserData, userData } = useContext(UserContext);

    useEffect(() => {
        console.log("userData", userData)
    }, [userData])

    function handleProduct(){
        const productId = product.productId;
        let productExistsInCart = false;
    
        let updatedCart = [...(userData?.cart || [])];
    
        for (let product of updatedCart) {
            if (product.productId === productId) {
                product.quantity += 1;
                productExistsInCart = true;
                break;
            }
        }
    
        if (!productExistsInCart) {
            updatedCart.push({ productId: productId, quantity: 1 });
        }
    
        setUserData({ ...userData, cart: updatedCart });
    }

    function handleBudget(){
        //const msg = `Olá Nick, achei o seguinte produto no site: "${product.name.substring(0, 50) + ( product.name.length > 40?("..."):("") )}" e gostaria de solicitar um orçamento sem compromisso`
        
        const msg = `Olá, Nick!\n\nFiquei bastante interessado(a) pelo produto "${product.name}" que encontrei em seu site.\n\nSeria possível me enviar um orçamento sem compromisso? Gostaria de avaliar mais detalhadamente.\n\nAguardo o seu retorno. Obrigado(a)!`

        const whatsAppNumber = "+5511985546210"

        const url = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    function handleRequest(){
        //const msg = `Olá Nick, achei o seguinte produto no site: "${product.name.substring(0, 50) + ( product.name.length > 40?("..."):("") )}" e gostaria de solicitar um orçamento sem compromisso`
        
        const msg = `Olá, Nick!\n\nFiquei bastante interessado(a) pelo produto "${product.name}" que encontrei em seu site.\n\nPorem vi que estava sem estoque, seria possível me enviar um orçamento sem compromisso? Gostaria de avaliar mais detalhadamente.\n\nAguardo o seu retorno. Obrigado(a)!`

        const whatsAppNumber = "+5511985546210"

        const url = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    
    return(
        <Container>
            <ProductContainer>
                {product ? (
                <>
                    <LeftSideContainer>

                        <MainCategory>{product?.categories[0]?.name}</MainCategory>
                        <ProductName>{product.name.toUpperCase()}</ProductName>
                        { !product?.stock ? (
                            <>
                                <LowPrice>
                                    <PriceSign>{"R$ "}</PriceSign><span>{ (product.price / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                                </LowPrice>

                                <UnavailableContainer>
                                    {"Atualmente, o produto está indisponível em nosso estoque. No entanto, você tem a possibilidade de solicitar uma cotação diretamente. Para isso, basta clicar no botão abaixo"}
                                </UnavailableContainer>

                                <ButtonContainer>
                                    <Button 
                                        onClick={() => handleRequest()}
                                        width={"100%"}
                                        height={"45px !important"} 
                                        background={"#59778F !important"}
                                        backgroundhover={"#234968 !important"} 
                                        margintop={"2vh !important"}
                                    >
                                        {"Solicitar Contato"}
                                    </Button>
                                </ButtonContainer>
                            </>   
                        ):(

                            product?.highPrice ? (
                                <>
                                    <div>
                                        <HighPrice>
                                            {"De:"} <PriceSign>{"R$ "}</PriceSign><span>{ (product.highPrice / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                                        </HighPrice>
                                        <LowPrice>
                                            {"Por:"} <PriceSign>{"R$ "}</PriceSign><span>{ (product.price / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                                        </LowPrice>
                                    </div>

                                    <ButtonContainer>
                                        <Button 
                                            onClick={() => handleProduct()}
                                            width={"100%"}
                                            height={"45px !important"} 
                                            background={"#00BFC2 !important"}
                                            backgroundhover={"#02B9DA !important"} 
                                            margintop={"2vh !important"}
                                        >
                                            {"Comprar"}
                                        </Button>
                                    </ButtonContainer>
                                </>
                            ):(
                                    
                                product.price === 0 ? (
                                    <>
                                        <ButtonContainer>
                                            <Button 
                                                onClick={() => handleBudget()}
                                                width={"100%"}
                                                height={"45px !important"} 
                                                background={"#0074C2 !important"}
                                                backgroundhover={"#088DDA !important"} 
                                                margintop={"3vh !important"}
                                            >
                                                {"Solicitar um Orçamento"}
                                            </Button>
                                        </ButtonContainer>    
                                    </>
                                ):(
                                    <>
                                        <LowPrice>
                                            <PriceSign>{"R$ "}</PriceSign><span>{ (product.price / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                                        </LowPrice>

                                        <ButtonContainer>
                                            <Button 
                                                onClick={() => handleProduct()}
                                                width={"100%"}
                                                height={"45px !important"} 
                                                background={"#00BFC2 !important"}
                                                backgroundhover={"#02B9DA !important"} 
                                                margintop={"2vh !important"}
                                            >
                                                {"Comprar"}
                                            </Button>
                                        </ButtonContainer>
                                    </>
                                )   
                            )

                        )}

                        

                    </LeftSideContainer>

                    <RightSideContainer>
                        <ProductImageSlide imageArray={product?.images}/>
                    </RightSideContainer> 
                </>
                ):(<>Carregando...</>)}
            </ProductContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background-color: #0A1F2A;
    color: #ffffff;
    padding: 0 10vw;
    padding-bottom: 5vh;
    @media (max-width: 850px) {
        padding-top: 4vh;
    }
`
const ProductContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: row;
    @media (max-width: 850px) {
        flex-wrap: wrap-reverse;
    }
`
const LeftSideContainer = styled.div`
    width: 40%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: start;
    padding-top: 5vh;
    row-gap: 2vh;
    @media (max-width: 850px) {
        width: 100%;
        height: auto;
        padding-top: 2vh;
        row-gap: 4vh;
    }
`
const RightSideContainer = styled.div`
    width: 60%;
    height: 50vh;
    @media (max-width: 850px) {
        width: 100%;
        max-height: 340px;
    }
`
const CommumConfig = styled.div`
    height: 5vh;
    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: left;
`
const MainCategory = styled(CommumConfig)`
    font-size: 28px;
`
const ProductName = styled(CommumConfig)`
    font-size: 21px;
    @media (max-width: 1366px) {
        font-size: 17px;
    }
`
const PriceSign = styled.span`
    margin-left: 0.3vw;
`
const HighPrice = styled(CommumConfig)`
    height: 3vh;
    color: #FFFFFF8F;
    align-items: self-end;
    span {
        text-decoration: line-through;
        text-decoration-thickness: 2px;
        text-decoration-color: #FFB685;
    }
    
`
const LowPrice = styled(CommumConfig)`
    height: 4vh;
    align-items: self-end;
    font-size: 19px;
    span {
        font-size: 29px;
        font-weight: 600;
        margin-bottom: -0.3vh;

        @media (max-width: 1366px) {
            font-size: 21px;
            margin-bottom: -0.1vh;
        }
    }
`
const ButtonContainer = styled.div`
    width: 80%;
    @media (max-width: 850px) {
        width: 100%;
    }
`
const UnavailableContainer = styled.div`
    width: 80%;
    font-size: 13px;
    padding: 1.5vh;
    padding-left: 1vw;
    border-left: 4px solid #009395ff;
    background-color: #FFFFFF15;
    line-height: 15px;
`