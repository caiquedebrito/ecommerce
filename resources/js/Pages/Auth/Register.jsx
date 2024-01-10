import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

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

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Criar Cadastro" />

            <div className="mb-5">
                <h1 className="text-4xl text-center mb-5">Criar cadastro</h1>

                <form onSubmit={submit}>
                    <div className="flex gap-3">
                        <div>
                            <InputLabel htmlFor="name" value="Nome" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
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
                                className="mt-1 block w-full"
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
                                className="mt-1 block w-full"
                                autoComplete="cpf"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("cpf", e.target.value)
                                }
                                required
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
                                className="mt-1 block w-full"
                                autoComplete="birth_date"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("birth_date", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.birth_date}
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div>
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="email"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
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
                                className="mt-1 block w-full"
                                autoComplete="phone"
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                                required
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
                                className="mt-1 block w-full"
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
                                className="mt-1 block w-full"
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
                    <div className="flex flex-col justify-center items-center mt-4">
                        <PrimaryButton className="ms-4 w-80 text-center" disabled={processing}>
                            Continuar
                        </PrimaryButton>
                        <Link
                            href={route("login")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Já tem conta? Faça login
                        </Link>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
