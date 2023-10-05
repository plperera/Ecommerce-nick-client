import { toast } from "react-toastify";
import { useCustomForm } from "../../../../../hooks/useCustomForms";
import ManagementComponent from "../common/ManagementComponent"
import SubCategoryForms from "./SubCategoryForms"

export default function ManagementSubCategory ({SubCategoryData}) {

    const [ form, handleForm ] = useCustomForm({name: SubCategoryData?.name});

    const CategoryManagementData = {
        title:"Gerir SubCategorias",
        isMainComponent: false,
        components: [
            {
                title: "Editar",
                content: <SubCategoryForms form={form} handleForm={handleForm} submitForm={submitForm}/>
            },
            {
                title: "Lista de Produtos Atrelados",
                content: <div>{"Lista de Produtos"}</div>,
            },
        ]
    }

    function submitForm(){
        if(!form?.name) {
            toast.dark("Valor inválido!")
            return
        }
    }
    
    return(
        <ManagementComponent ManagementData={CategoryManagementData}/>
    )
}