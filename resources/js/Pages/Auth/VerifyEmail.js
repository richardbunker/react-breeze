import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import { InertiaLink } from "@inertiajs/inertia-react";
import SubmitButton from "../../Components/Forms/SubmitButton";
import Guest from "../../Layouts/Guest";

export default function VerifyEmail(props) {
    const { post, processing } = useForm();

    const submit = (e) => {
        e.preventDefault();
        post(route("verification.send"));
    };
    return (
        <Guest title="Email Verifictation">
            <div className="mb-4 text-sm text-gray-600">
                Thanks for signing up! Before getting started, could you verify
                your email address by clicking on the link we just emailed to
                you? If you didn't receive the email, we will gladly send you
                another.
            </div>
            {props.status === "verification-link-sent" && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    A new verification link has been sent to the email address
                    you provided during registration.
                </div>
            )}
            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <SubmitButton
                        processing={processing}
                        label="Resend Verification Email"
                    />
                    <InertiaLink
                        href={route("logout")}
                        as="button"
                        method="post"
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                    >
                        Log Out
                    </InertiaLink>
                </div>
            </form>
        </Guest>
    );
}
