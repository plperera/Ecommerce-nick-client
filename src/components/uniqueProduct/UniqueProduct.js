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

        //const whatsAppNumber = "+5511985546210" oficial
        const whatsAppNumber = "+5535999351124"

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
                        {
                            product?.highPrice ? (
                                <div>
                                    <HighPrice>
                                        {"De:"} <PriceSign>{"R$ "}</PriceSign><span>{ (product.highPrice / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                                    </HighPrice>
                                    <LowPrice>
                                        {"Por:"} <PriceSign>{"R$ "}</PriceSign><span>{ (product.price / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                                    </LowPrice>
                                </div>
                            ):(
                                    
                                product.price !== 0 ? (
                                    <>
                                        <>
                                            <Button 
                                                onClick={() => handleBudget()}
                                                width={"80%"}
                                                height={"45px !important"} 
                                                background={"#0074C2 !important"}
                                                backgroundhover={"#088DDA !important"} 
                                                margintop={"3vh !important"}
                                            >
                                                {"Solicitar um Orçamento"}
                                            </Button>
                                        </>    
                                    </>
                                ):(
                                    <>
                                        <LowPrice>
                                            <PriceSign>{"R$ "}</PriceSign><span>{ (product.price / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                                        </LowPrice>

                                        <>
                                            <Button 
                                                onClick={() => handleProduct()}
                                                width={"80%"}
                                                height={"45px !important"} 
                                                background={"#00BFC2 !important"}
                                                backgroundhover={"#02B9DA !important"} 
                                                margintop={"2vh !important"}
                                            >
                                                {"Comprar"}
                                            </Button>
                                        </>
                                    </>
                                )   
                            )
                        }
                        

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
`
const ProductContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: row;
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
`
const RightSideContainer = styled.div`
    width: 60%;
    height: 50vh;
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
const ButtonStyle = styled.div`
    width: 60%;
    height: 75%;
    background-color: #009395;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        width: 65%;
        background-color: #01B0B3;
    }
    @media (max-width: 1366px) {
        font-size: 19px;
    }
`