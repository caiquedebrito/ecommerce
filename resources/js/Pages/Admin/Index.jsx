import Content from "@/Components/Admin/Content";
import Header from "@/Components/Admin/Header";
import Modal from "@/Components/Modal";
import NavLink from "@/Components/NavLink";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import React, { useEffect, useState } from "react";



export default function Admin() {
    const [modal, setModal] = useState(false);
    const [products, setProducts] = useState([]);
    const { data, setData, post, reset } = useForm({
        name: "",
        description: "",
        price: 0,
        category: "",
    })

    const [option, setOption] = useState("Produtos")

    useEffect(() => {
        reset(["name", "description", "price", "category"])
        axios.get("/products")
            .then(response => {
                setProducts(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const createProduct = (e) => {
        e.preventDefault();

        post(route("products.store"));
    }

    return (
        <main className="relative min-h-screen min-w-full">
            <Header />

            <nav className="flex justify-center py-5 gap-5">
                <NavLink onClick={() => setOption("Produtos")} className="text-black">
                    Produtos
                </NavLink>
                <NavLink onClick={() => setOption("Categorias")} className="text-black">
                    Categorias
                </NavLink>
                <NavLink onClick={() => setOption("Pedidos")} className="text-black">
                    Pedidos
                </NavLink>
                <NavLink onClick={() => setOption("Clientes")} className="text-black">
                    Clientes
                </NavLink>
            </nav>

            <div className="flex justify-between px-5 mb-5">
                <h2 className="text-xl">{ option }</h2>
                <PrimaryButton
                    className="bg-orange-500 text-white py-2 px-4"
                    onClick={() => setModal(true)}
                >
                    Novo
                </PrimaryButton>
            </div>

            <Content data={products}/>
            
            <Modal show={modal} onClose={() => setModal(false)}>
                <div className="flex justify-center flex-col items-center relative min-w-full h-screen  bg-gray-200">
                        <h1 className="text-2xl text-">Novo Produto</h1>
                        <form className="flex flex-col justify-center w-96 h-96" onSubmit={createProduct}>
                            <label>Nome</label>
                            <input type="text" value={data.name} onChange={e => setData("name", e.target.value)}/>
                            <label>Descrição</label>
                            <textarea value={data.description} onChange={e => setData("description", e.target.value)}></textarea>
                            <label>Preço</label>
                            <input type="number" value={data.price} onChange={e => setData("price", e.target.value)}/>
                            <label>Categoria</label>
                            <input type="text" value={data.category} onChange={e => setData("category", e.target.value)}/>
                            <PrimaryButton type="submit">Salvar</PrimaryButton>
                        </form>
                    </div>
            </Modal>
        </main>
    );
}
