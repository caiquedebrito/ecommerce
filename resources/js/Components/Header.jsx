import NavLink from "./NavLink";
import TextInput from "./TextInput";
import ShoppingCart from "../assets/shopping-cart.svg";
import ApplicationLogo from "./ApplicationLogo";
import AccountButton from "./AccountButton";
import Dropdown from "./Dropdown";

const categories = ['Categoria 1', 'Categoria 1', 'Categoria 1',]

export default function Header({auth}) {
  return (
    <header className="w-full bg-blue-600 flex flex-col pt-6  px-12">
      <div className="w-full flex justify-between">
        <ApplicationLogo />
        <TextInput placeholder="Digite o que você procura..." type="search"/>

        <div className="flex items-center gap-5">
          {
            !!auth?.user ? <AccountButton /> : <span className="text-white"><NavLink href="/login">
            Login
          </NavLink> ou <NavLink href="/register">Cadastre-se</NavLink></span>
          }
          <NavLink>
            <img src={ShoppingCart} alt="Carrinho de compras" />
          </NavLink>
        </div>
      </div>

      <nav className="w-full flex justify-center gap-5 py-3 ">
        <NavLink href="/">Início</NavLink>
        <Dropdown>
          <Dropdown.Trigger>
            <span>Categorias</span>
          </Dropdown.Trigger>
          <Dropdown.Content>
            {
              categories.map(category => <Dropdown.Link>{category}</Dropdown.Link>)
            }
          </Dropdown.Content>
        </Dropdown>
        <NavLink href="/sobre-nos">Sobre nós</NavLink>
        <NavLink href="/contato">Contato</NavLink>
      </nav>
    </header>
  )
}