import React, { useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";
import SubmitButton from "../../Components/Forms/SubmitButton";
import TextInput from "../../Components/Forms/TextInput";
import Guest from "../../Layouts/Guest";
import ValidationErros from "../../Components/Forms/ValidationErrors";

export default function ConfirmPassword(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };
    const submit = (e) => {
        e.preventDefault();
        post(route("password.confirm"));
    };
    return (
        <Guest title="Confirm Password">
            <div className="mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </div>
            <ValidationErros errors={errors} />
            <form onSubmit={submit}>
                <div className="mt-4">
                    <TextInput
                        isFocused={true}
                        value={data.password}
                        type="password"
                        handleChange={onHandleChange}
                        label="Password"
                        name="password"
                    />
                </div>
                <div className="flex items-center justify-end mt-4">
                    <div className="ml-4">
                        <SubmitButton processing={processing} label="Confirm" />
                    </div>
                </div>
            </form>
        </Guest>
    );
}
