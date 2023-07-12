import styled from "styled-components"
import MaskedInput from 'react-text-mask';
import { createNumberMask } from 'text-mask-addons';
import CategorySelector from "../selector/CategorySelector";
import ImageSelector from "../selector/ImageSelector";
import { useCustomForm } from "../../../../hooks/useCustomForms";
import { useEffect, useState } from "react";
import { IoMdCloseCircle } from 'react-icons/io';

export default function NewProduct () {

    const currencyMask = createNumberMask({
        prefix: 'R$ ',
        suffix: '',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ',',
        decimalLimit: 2,
        integerLimit: 13,
        allowNegative: false,
        allowLeadingZeroes: false,
    });

    const [ form, handleForm, setForm ] = useCustomForm();
    const [refreshImage, setRefreshImage] = useState(false)
    const [refreshCategory, setRefreshCategory] = useState(false)
    const [haveAllData, setHaveAllData] = useState(false)

    useEffect(() => {

        if(form?.name && form?.description && form?.price){
            return setHaveAllData(true)
        }

        return setHaveAllData(false)

    }, [form])
    

    function ClearFilter(filterName) {

        setForm({...form, [filterName]: ''}); 

        if(filterName === "imageFilter"){
            return setRefreshImage(!refreshImage)
        }
        
        return setRefreshCategory(!refreshCategory)

    }

    return(
        <Container>

            <TitleContainer>
                <h1>{"Novo Produto"}</h1>
                <ButtonStyle 
                    background={haveAllData?("#0C72A5"):("#0624332A")}
                    color={haveAllData?("#FFFFFF"):("#1D1D1D")}
                    cursor={haveAllData?("pointer"):("not-allowed")}
                >

                    {haveAllData?("Criar Produto"):("Preecha todos os Campos")}

                </ButtonStyle>
            </TitleContainer>

            <PaddingContainer>

        
                <SubContainer>

                    <NameInputContainer>
                        <label>{"Nome"}</label>
                        <input 
                            placeholder="Nome"
                            onChange={handleForm}
                            value={form.name}
                            name={"name"}
                        />
                    </NameInputContainer>

                    <PriceInputContainer>
                        <label>{"Preço"}</label>
                        <Input 
                            placeholder="Preço"
                            mask={currencyMask}
                            maskChar={null}
                            onChange={handleForm}
                            value={form.price}
                            name={"price"}
                        />
                    </PriceInputContainer>  

                    <DescriptionInputContainer>
                        <label>{"Descrição"}</label>
                        <input 
                            placeholder="Descrição" 
                            onChange={handleForm}
                            value={form.description}
                            name={"description"}
                        />
                    </DescriptionInputContainer>


                </SubContainer>
            
                <div>
                    <h2>{"Selecione a(s) categorias"}</h2>
                    <FilterContainer>
                        <input 
                            placeholder="Filtrar" 
                            onChange={handleForm}
                            value={form.categoryFilter}
                            name={"categoryFilter"}
                        />
                        <FilterButtonContainer onClick={() => setRefreshCategory(!refreshCategory)}>{"Filtrar Images"}</FilterButtonContainer>
                        <ClearFilterContainer onClick={() => ClearFilter("categoryFilter")}>{"X"}</ClearFilterContainer>
                    </FilterContainer>

                    <CategorySelector filter={form.categoryFilter} refresh={refreshCategory}/>
                </div>

                <div>
                    
                    <h2 >{"Selecione a(s) imagens"}</h2>
                    <FilterContainer>
                        <input 
                            placeholder="Filtrar" 
                            onChange={handleForm}
                            value={form.imageFilter}
                            name={"imageFilter"}
                        />
                        <FilterButtonContainer onClick={() => setRefreshImage(!refreshImage)}>{"Filtrar Images"}</FilterButtonContainer>
                        <ClearFilterContainer onClick={() => ClearFilter("imageFilter")}>{"X"}</ClearFilterContainer>
                    </FilterContainer>
                    
                    <ImageSelector filter={form.imageFilter} refresh={refreshImage}/>
                </div>
            </PaddingContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: #171717;
    width: 100%;
    font-size: 21px;
    font-weight: 500;
    h2 {
        padding: 1.5vh 0;
        font-size: 25px;
    }
`
const TitleContainer = styled.div`
    width: 71.6vw;
    padding: 0 1.4vw;
    height: 7vh;
    font-size: 25px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    position: fixed;
    z-index: 9999;
`
const PaddingContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.5vh;
    padding: 25px 1.4vw;
    color: #171717;
    width: 100%;
    font-size: 21px;
    font-weight: 500;
    h2 {
        padding: 1.5vh 0;
        font-size: 25px;
    }
`
const ButtonStyle = styled.div`
    width: auto;
    padding: 0 2vw;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    border-radius: 15px;
    background-color: ${props => props.background}; //;
    color: ${props => props.color};
    font-weight: 600;
    cursor: ${props => props.cursor};
`
const Input = styled(MaskedInput)`
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 1em;
  width: 100%;
`;
const SubContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 1vw;
    padding: 2vh 0;
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    flex-wrap: nowrap;
    input {
        margin-top: 1vh;
        margin-bottom: 1vh;
        height: 42px;
        text-decoration: none;
        opacity: 1;
        border: none;
        border: 2px solid #02131B ;
        color: #171717;

        padding-left: 12px;
        padding-right: 12px;
        outline: none;
        border-radius: 0px;
        font-size: 14px;
        font-weight: 600;

        ::placeholder{
            color: #171717;
            opacity: .2;
        }
        :focus {
            border-radius: 10px;
            border: 2px solid #0B83BE ;
        }
    }
    label {
        font-size: 18px;
        color: #02131B;
        font-weight: 500;
        margin-top: 16px;
    }
`
const NameInputContainer = styled(InputContainer)`
    width: 75%;
`
const PriceInputContainer = styled(InputContainer)`
    width: 20%;
`
const DescriptionInputContainer = styled(InputContainer)`
    width: calc( 95% + 1vw);
`
const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    column-gap: .4vw;
    input { 
        margin-top: 1vh;
        margin-bottom: 1vh;
        height: 30px;
        text-decoration: none;
        opacity: 1;
        border: none;
        border: 2px solid #02131BA1 ;
        color: #171717;
        padding-left: 12px;
        padding-right: 12px;
        outline: none;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 600;

        ::placeholder{
            color: #171717;
            opacity: .2;
        }
        :focus {
            border-radius: 10px;
            border: 2px solid #0B83BE ;
        }
    }
`
const FilterButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    padding: 0 1vw;
    width: auto;
    height: 30px;
    border-radius: 50px;
    color: #FFFFFF;
    background-color: #0A1F2A;
    cursor: pointer; 
`
const ClearFilterContainer = styled(IoMdCloseCircle)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 30px;
    color: #0A1F2A69;
    cursor: pointer; 
`