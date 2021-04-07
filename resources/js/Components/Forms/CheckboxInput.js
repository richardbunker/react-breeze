import React from "react";

export default function CheckboxInput(props) {
    return (
        <label className="flex items-center">
            <input
                name={props.name}
                onChange={(e) => props.handleChange(e)}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="checkbox"
                value={props.value}
            />
            <span className="ml-2 text-sm text-gray-600">{props.label}</span>
        </label>
    );
}
