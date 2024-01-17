import React from "react";
import Bolo from "../assets/bolo.jpg";
import PrimaryButton from "./PrimaryButton";

export default function ProductCard() {
    return (
        <a href="">
            <div className="h-96 w-64 flex flex-col justify-between items-center border rounded-md p-1">
                <img src={Bolo} alt="" className="h-64 w-72" />
                <h3 className="text-xl">Bolo de limão</h3>
                <span className="text-xl font-bold">R$ 120,00</span>
                <PrimaryButton className="block w-full text-center">
                    Comprar
                </PrimaryButton>
            </div>
        </a>
    );
}
