import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="w-full bg-blue-600 flex h-24 justify-between items-center px-12">
      <span className="text-2xl text-gray-50">LancheExpresso</span>

      <div className="flex gap-3">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/login">Login</NavLink>
        <NavLink href="register">Cadastro</NavLink>
      </div>
    </header>
  )
}