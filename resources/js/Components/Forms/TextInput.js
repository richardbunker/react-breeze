import React, { useEffect, useRef } from "react";

export default function TextInput(props) {
    const input = useRef();
    useEffect(() => {
        if (props.isFocused) {
            input.current.focus();
        }
    }, []);
    return (
        <div className="flex flex-col items-start">
            <label className="text-gray-400">{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                className="w-full p-2 border border-gray-300 outline-none focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50 rounded-md shadow-sm"
                value={props.value}
                onChange={(e) => props.handleChange(e)}
                ref={input}
                autoComplete={props.autoComplete}
                required
            />
        </div>
    );
}
