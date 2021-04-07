import React, { Children } from "react";

export default function SubmitButton(props) {
    return props.processing ? (
        <button
            disabled={props.processing}
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-purple-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 cursor-wait"
        >
            {props.label}
        </button>
    ) : (
        <button
            disabled={props.processing}
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"
        >
            {props.label}
        </button>
    );
}
