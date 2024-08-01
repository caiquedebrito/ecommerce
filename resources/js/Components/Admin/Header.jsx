import ApplicationLogo from "../ApplicationLogo";
import NavLink from "../NavLink";
import PrimaryButton from "../PrimaryButton";


export default function Header() {
  return (
    <header className="w-full flex flex-col">
      <div className="w-full flex justify-between bg-blue-600 p-6">
        <ApplicationLogo />
        <div className="flex items-center gap-5 bg-orange-500 text-white px-5 py-2 rounded">
          {/* <PrimaryButton onClick={() => axios.get(route("admin.logout"))}>
            Log out
          </PrimaryButton> */}
          <NavLink href={route("admin.logout")}>
            Sair
          </NavLink>
        </div>
      </div>

      <div className="flex justify-center gap-10 py-5">
        <NavLink className="text-black text-xl" href={route("admin.products")}>Produtos</NavLink>
        <NavLink className="text-black text-xl">Categorias</NavLink>
      </div>
    </header>
  )
}