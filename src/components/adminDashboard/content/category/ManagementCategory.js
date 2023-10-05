import ManagementComponent from "./common/ManagementComponent"
import ItemList from "./common/ItensList"
import CategoryCard from "./CategoryCard"
import { useState } from "react"
import Category from "./Category"

export default function ManagementCategory () {

    const [selectCategory, setSelectCategory] = useState(undefined)

    const CategoryCardData = {
        name: "Maquina Nova",
        subCategories: [1, 2, 3]
    }

    const CategoryListData = [
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
    ]

    const CategoryManagementData = {
        title:"Gerir Categorias",
        isMainComponent: true,
        components: [
            {
                title: selectCategory ? "Voltar" : "Lista de Categorias:",
                content: selectCategory ? <Category mainCategoryData={selectCategory} /> : <ItemList ListData={CategoryListData} title={"Categorias"}/>,
                handleReturn: handleReturnCategoryList
            },
        ]
    }

    function handleReturnCategoryList(){
        if(!selectCategory){
            return
        }
        setSelectCategory(undefined)
    }
    
    return(
        <ManagementComponent ManagementData={CategoryManagementData}/>
    )
}