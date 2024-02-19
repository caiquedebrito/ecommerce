import NavLink from "./NavLink";
import ShoppingCart from "../assets/shopping-cart.svg";
import ApplicationLogo from "./ApplicationLogo";
import AccountButton from "./AccountButton";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";

export default function Header({auth}) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get("/categories")
      .then(response => setCategories(response.data))
      .catch(error => console.error(error))
  }, [])

  const searchByCategory = (category) => {
      window.location.href = `/products/search?c=${category}`;
  }

  return (
    <header className="w-full bg-blue-600 flex flex-col pt-6  px-12">
      <div className="w-full flex justify-between">
        <ApplicationLogo />
        
        <SearchInput />

        <div className="flex items-center gap-5">
          {
            !!auth?.user ? <AccountButton /> : <span className="text-white"><NavLink href="/login">
            Login
          </NavLink> ou <NavLink href="/register">Cadastre-se</NavLink></span>
          }
          <NavLink href="/carrinho">
            <img src={ShoppingCart} alt="Carrinho de compras" />
          </NavLink>
        </div>
      </div>

      <nav className="w-full flex justify-center gap-5 py-3 text-sm">
        <NavLink href="/">Início</NavLink>
        <Dropdown>
          <Dropdown.Trigger>
            <span>Categorias</span>
          </Dropdown.Trigger>
          <Dropdown.Content>
            {
              categories.map(category => <Dropdown.Link key={category.id} onClick={() => {searchByCategory(category.name);}}>{category.name}</Dropdown.Link>)
            }
          </Dropdown.Content>
        </Dropdown>
        <NavLink href="/sobre">Sobre nós</NavLink>
        <NavLink href="/contato">Contato</NavLink>
      </nav>
    </header>
  )
}