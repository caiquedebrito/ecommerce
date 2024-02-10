import Content from "@/Components/Admin/Content";
import Header from "@/Components/Admin/Header";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import React, { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import CategoryForm from "./CategoryForm";

const options = {
    "Produtos": (product, setModal, setRefresh) => <ProductForm product={product} setModal={setModal} setRefresh={setRefresh}/>,
    "Categorias": (category, setModal, setRefresh) => <CategoryForm category={category} setModal={setModal} setRefresh={setRefresh}/>, 
}

export default function Admin() {
    const [modal, setModal] = useState(false);
    
    const [option, setOption] = useState("Produtos")

    const [data, setData] = useState([]);

    const [selected, setSelected] = useState(null)

    const [loading, setLoading] = useState(true)

    const [refresh, setRefresh] = useState(false)
    const [path, setPath] = useState("/products")

    useEffect(() => { 
        if (selected) {
            setModal(true)
        }
    }, [selected])

    useEffect(() => {
        fetchData()
    }, [path])

    const fetchData = () => {
        axios.get(path)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <main className="relative min-h-screen min-w-full">
            <Header />

            <nav className="flex justify-center py-5 gap-5">
                <a onClick={() => { setOption("Produtos"); setPath("/products")}} className="text-black cursor-pointer">
                    Produtos
                </a>
                <a onClick={() => {setOption("Categorias"); setPath("/categories")}} className="text-black cursor-pointer">
                    Categorias
                </a>
                <a onClick={() => {setOption("Pedidos"); setData([])}} className="text-black cursor-pointer">
                    Pedidos
                </a>
                <a onClick={() => {setOption("Clientes"); setData([])}} className="text-black cursor-pointer">
                    Clientes
                </a>
            </nav>

            <div className="flex justify-between px-5 mb-5">
                <h2 className="text-xl">{ option }</h2>
                <PrimaryButton
                    className="bg-orange-500 text-white py-2 px-4"
                    onClick={() => { setSelected({}); setModal(true)}}
                >
                    Novo
                </PrimaryButton>
            </div>

            { loading ? <p className="text-xl font-bold">Carregando...</p> : <Content fetchData={fetchData} data={data} setSelected={setSelected} refresh={refresh}/> }
            
            <Modal show={modal} onClose={() => setModal(false)}>
                <div className="flex justify-center flex-col items-center relative min-w-full h-screen  bg-gray-200 p-6">
                    <h1 className="text-2xl text-">Novo(a)</h1>
                    {
                        options[option] ? options[option](selected, setModal, setRefresh) : null
                    }
                </div>
            </Modal>
        </main>
    );
}
