import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import { InertiaLink } from "@inertiajs/inertia-react";
import SubmitButton from "../../Components/Forms/SubmitButton";
import TextInput from "../../Components/Forms/TextInput";
import Guest from "../../Layouts/Guest";
import ValidationErros from "../../Components/Forms/ValidationErrors";

export default function Register(props) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false,
    });
    const onHandleChange = (event) => {
        if (event.target.type === "checkbox") {
            setData(event.target.name, event.target.checked);
        } else {
            setData(event.target.name, event.target.value);
        }
    };
    const submit = (e) => {
        e.preventDefault();
        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };
    return (
        <Guest title="Register">
            <ValidationErros errors={errors} />
            <form onSubmit={submit}>
                <TextInput
                    value={data.name}
                    type="text"
                    handleChange={onHandleChange}
                    isFocused={true}
                    label="Name"
                    name="name"
                    autoComplete="name"
                />

                <div className="mt-4">
                    <TextInput
                        value={data.email}
                        type="text"
                        handleChange={onHandleChange}
                        label="Email"
                        name="email"
                        autoComplete="username"
                    />
                </div>
                <div className="mt-4">
                    <TextInput
                        value={data.password}
                        type="password"
                        handleChange={onHandleChange}
                        label="Password"
                        name="password"
                        autoComplete="new-password"
                    />
                </div>

                <div className="mt-4">
                    <TextInput
                        value={data.password_confirmation}
                        type="password"
                        handleChange={onHandleChange}
                        label="Password"
                        name="password_confirmation"
                        autoComplete="new-password"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <InertiaLink
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                    >
                        Already registered?
                    </InertiaLink>
                    <div className="ml-4">
                        <SubmitButton
                            processing={processing}
                            label="Register"
                        />
                    </div>
                </div>
            </form>
        </Guest>
    );
}
