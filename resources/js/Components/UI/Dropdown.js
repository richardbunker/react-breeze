import React, { useState } from "react";

export default function Dropdown(props) {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen((prevState) => !prevState);
    };
    return (
        <div className="relative">
            <div onClick={toggleOpen}>{props.trigger}</div>

            {open && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setOpen(false)}
                    ></div>

                    <div
                        className="absolute z-50 mt-2 rounded-md shadow-lg origin-top-left right-0 w-48"
                        onClick={() => setOpen(false)}
                    >
                        <div className="rounded-md bg-white ring-1 ring-black ring-opacity-5">
                            {props.children}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
