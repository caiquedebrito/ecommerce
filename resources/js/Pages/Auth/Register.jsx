import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { CpfValido } from "@/utils/cpfValido";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        last_name: "",
        email: "",
        cpf: "",
        birth_date: "",
        phone: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const today = new Date();
    const eighteenYearsAgo = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
    );

    const maxDate = eighteenYearsAgo.toISOString().split('T')[0];

    const submit = (e) => {
        e.preventDefault();

        if (CpfValido(data.cpf)) {
            post(route("register"));
        }

        alert("CPF inválido")
    };

    return (
        <GuestLayout>
            <Head title="Criar Cadastro" />

            <div className="my-40">
                <h1 className="text-4xl text-center mb-5">Criar cadastro</h1>

                <form onSubmit={submit} className="flex flex-col gap-3">
                    <div className="flex gap-3">
                        <div>
                            <InputLabel htmlFor="name" value="Nome" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="last_name" value="Sobrenome" />

                            <TextInput
                                id="last_name"
                                name="last_name"
                                value={data.last_name}
                                className="mt-1 block"
                                autoComplete="last_name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("last_name", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div>
                            <InputLabel htmlFor="cpf" value="CPF" />

                            <TextInput
                                id="cpf"
                                name="cpf"
                                value={data.cpf}
                                className="mt-1 block"
                                autoComplete="cpf"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("cpf", e.target.value)
                                }
                                required
                                pattern="^\d{3}\x2E\d{3}\x2E\d{3}\x2D\d{2}$"
                                placeholder="000.000.000-00"
                            />

                            <InputError
                                message={errors.cpf}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="birth_date"
                                value="Data de nascimento"
                            />

                            <TextInput
                                id="birth_date"
                                name="birth_date"
                                type="date"
                                value={data.birth_date}
                                className="mt-1 block"
                                autoComplete="birth_date"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("birth_date", e.target.value)
                                }
                                required
                                max={maxDate} 
                            />

                            <InputError
                                message={errors.birth_date}
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div>
                            <InputLabel htmlFor="email" value="Email"/>

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block"
                                autoComplete="email"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                                pattern="^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$"
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="phone" value="Telefone" />

                            <TextInput
                                id="phone"
                                name="phone"
                                value={data.phone}
                                className="mt-1 block"
                                autoComplete="phone"
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                                required
                                pattern="^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[0-9])[0-9]{3}\-?[0-9]{4}$"
                                placeholder="00000000000"
                            />

                            <InputError
                                message={errors.phone}
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div>
                            <InputLabel htmlFor="password" value="Senha" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block"
                                autoComplete="password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirmar senha"
                            />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                required
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-4 gap-2">
                        <PrimaryButton className="ms-4 w-80 text-center" disabled={processing}>
                            Continuar
                        </PrimaryButton>
                        <span>Já tem conta? <Link
                            href={route("login")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Faça login
                        </Link></span>
                        
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
