import ApplicationLogo from "../ApplicationLogo";
import PrimaryButton from "../PrimaryButton";


export default function Header() {
  return (
    <header className="w-full bg-blue-600 flex flex-col py-6  px-12">
      <div className="w-full flex justify-between">
        <ApplicationLogo />
        <div className="flex items-center gap-5">
          <PrimaryButton onClick={route("admin.logout")}>
            Log out
          </PrimaryButton>
        </div>
      </div>
    </header>
  )
}