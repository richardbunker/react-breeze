import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import SubmitButton from "../../Components/Forms/SubmitButton";
import TextInput from "../../Components/Forms/TextInput";
import Guest from "../../Layouts/Guest";
import ValidationErros from "../../Components/Forms/ValidationErrors";

export default function ForgotPassword(props) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };
    const submit = (e) => {
        e.preventDefault();
        post(route("password.email"));
    };
    return (
        <Guest title="Forgot Password">
            <div class="mb-4 text-sm text-gray-500 leading-normal">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </div>
            {status && (
                <div class="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
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
                <div className="flex items-center justify-end mt-4">
                    <div className="ml-4">
                        <SubmitButton
                            processing={processing}
                            label="Email Password Reset Link"
                        />
                    </div>
                </div>
            </form>
        </Guest>
    );
}
