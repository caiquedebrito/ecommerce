import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import React from "react";

export default function CategoryForm({ category, setModal, setRefresh }) {
  const { post, patch, delete: destroy, data, setData } = useForm({
    name: category.name || "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if (category.id) {
        patch(route("categories.update", category.id));
    } else {
        post(route("categories.store"));
    }

    setModal(false)
    setRefresh(true)
  }

  const deleteCategory = () => {
    destroy(route("categories.destroy", id));
    setModal(false) 
    setRefresh(true)
  }

    return (
        <form
            className="flex flex-col justify-center w-96 h-96"
            onSubmit={handleSubmit}
        >
            <label>Nome</label>
            <input
                type="text"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
            />
            <PrimaryButton type="submit" className="mt-5">Salvar</PrimaryButton>
            { category.id ? <PrimaryButton type="button" className="mt-5" onClick={deleteCategory}>Apagar</PrimaryButton> : null  }
        </form>
    );
}
