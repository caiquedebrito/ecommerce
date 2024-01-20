import axios from "axios";
import ApplicationLogo from "../ApplicationLogo";
import NavLink from "../NavLink";
import PrimaryButton from "../PrimaryButton";


export default function Header() {
  return (
    <header className="w-full bg-blue-600 flex flex-col py-6  px-12">
      <div className="w-full flex justify-between">
        <ApplicationLogo />
        <div className="flex items-center gap-5">
          {/* <PrimaryButton onClick={() => axios.get(route("admin.logout"))}>
            Log out
          </PrimaryButton> */}
          <NavLink href={route("admin.logout")}>
            Sair
          </NavLink>
        </div>
      </div>
    </header>
  )
}