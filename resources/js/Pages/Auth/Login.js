import React, { useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";
import { InertiaLink } from "@inertiajs/inertia-react";
import CheckboxInput from "../../Components/Forms/CheckboxInput";
import SubmitButton from "../../Components/Forms/SubmitButton";
import TextInput from "../../Components/Forms/TextInput";
import Guest from "../../Layouts/Guest";
import ValidationErros from "../../Components/Forms/ValidationErrors";

export default function Login(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        if (event.target.type === "checkbox") {
            setData(event.target.name, event.target.checked);
        } else {
            setData(event.target.name, event.target.value);
        }
    };
    const submit = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };
    return (
        <Guest title="Log in">
            <ValidationErros errors={errors} />
            <form onSubmit={submit}>
                <TextInput
                    value={data.email}
                    type="text"
                    handleChange={onHandleChange}
                    isFocused={true}
                    label="Email"
                    name="email"
                />

                <div className="mt-4">
                    <TextInput
                        value={data.password}
                        type="password"
                        handleChange={onHandleChange}
                        label="Password"
                        name="password"
                    />
                </div>

                <div className="block mt-4">
                    <CheckboxInput
                        name="remember"
                        value={data.remember}
                        handleChange={onHandleChange}
                        label="Remember me"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    {props.canResetPassword && (
                        <InertiaLink
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Forgot your password?
                        </InertiaLink>
                    )}
                    <div className="ml-4">
                        <SubmitButton processing={processing} label="Log in" />
                    </div>
                </div>
            </form>
        </Guest>
    );
}
