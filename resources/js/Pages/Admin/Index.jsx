import Content from "@/Components/Admin/Content";
import Header from "@/Components/Admin/Header";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import React, { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import CategoryForm from "./CategoryForm";

export default function Admin() {
    return (
        <main className="relative min-h-screen min-w-full">
            <Header />        
            {/* <div className="flex justify-between px-5 mb-5">
                <h2 className="text-xl">{ option }</h2>
                <PrimaryButton
                    className="bg-orange-500 text-white py-2 px-4"
                    onClick={() => { setSelected({}); setModal(true)}}
                >
                    Novo
                </PrimaryButton>
            </div> */}
{/* 
            { loading ? <p className="text-xl font-bold">Carregando...</p> : <Content fetchData={fetchData} data={data} setSelected={setSelected} refresh={refresh}/> }
            
            <Modal show={modal} onClose={() => setModal(false)}>
                <div className="flex justify-center flex-col items-center relative min-w-full h-screen  bg-gray-200 p-6">
                    <h1 className="text-2xl text-">Novo(a)</h1>
                    {
                        options[option] ? options[option](selected, setModal, setRefresh) : null
                    }
                </div>
            </Modal> */}
        </main>
    );
}
