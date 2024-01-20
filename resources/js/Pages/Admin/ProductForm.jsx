import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import React from "react";

export default function ProductForm({ product }) {
    const { data, setData, post, patch, delete: destroy } = useForm({
        name: product.name || "",
        description: product.description || "",
        price: product.price || "",
        category: product.category || "",
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (product.id) {
            patch(route("products.update", product.id));
            console.log("Produto atualizado")
            
        } else {
            post(route("products.store"));
            console.log("Produto criado")
        }

    };

    const deleteProduct = () => {
        console.log("Produto apagado")
        destroy(route("products.destroy", product.id));
    }

    return (
        <form
            className="flex flex-col justify-center w-96 h-96"
            onSubmit={handleOnSubmit}
        >
            <label>Nome</label>
            <input
                type="text"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                required
            />
            <label>Descrição</label>
            <textarea
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
                required
            ></textarea>
            <label>Preço</label>
            <input
                type="number"
                value={data.price}
                onChange={(e) => setData("price", e.target.value)}
                required
            />
            <label>Categoria</label>
            <input
                type="text"
                value={data.category}
                onChange={(e) => setData("category", e.target.value)}
                required
            />
            <PrimaryButton type="submit" className="mt-5">Salvar</PrimaryButton>
            { product.id ? <PrimaryButton className="mt-5" onClick={deleteProduct} type="button">Apagar</PrimaryButton> : null  }
        </form>
    );
}
