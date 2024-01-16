import NavLink from "./NavLink";
import TextInput from "./TextInput";
import Account from "../assets/account.svg";
import ShoppingCart from "../assets/shopping-cart.svg";
import ApplicationLogo from "./ApplicationLogo";

export default function Header() {
  return (
    <header className="w-full bg-blue-600 flex flex-col pt-6  px-12">
      <div className="w-full flex justify-between">
        <ApplicationLogo />
        <TextInput placeholder="Digite o que você procura..." type="search"/>

        <div className="flex items-center gap-5">
          <NavLink href="/login">
            {/* <img src={Account} alt="Conta" /> */}
            Login
          </NavLink>
          <NavLink>
            <img src={ShoppingCart} alt="Carrinho de compras" />
          </NavLink>
        </div>
      </div>

      <nav className="w-full flex justify-center gap-5 py-3 ">
        <NavLink href="/">Início</NavLink>
        <NavLink href="/categorias">Categorias</NavLink>
        <NavLink href="/sobre-nos">Sobre nós</NavLink>
        <NavLink href="/contato">Contato</NavLink>
      </nav>
    </header>
  )
}