import React from 'react'
import Dropdown from './Dropdown'
import AccountIMG from "../assets/account.svg"

export default function AccountButton() {
  return (
    <Dropdown>
        <Dropdown.Trigger>
            <img src={AccountIMG} alt="Conta" />
        </Dropdown.Trigger>
        <Dropdown.Content>
            <Dropdown.Link href={""}>Minha conta</Dropdown.Link>
            <Dropdown.Link href={""}>Meus pedidos</Dropdown.Link>
            <Dropdown.Link href={route('logout')} method="post" as="button">
                Sair
            </Dropdown.Link>
        </Dropdown.Content>
    </Dropdown>
  )
}
