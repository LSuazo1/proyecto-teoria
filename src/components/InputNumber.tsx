import { useState } from "react";

interface InputSelectorProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label: string;
}

export default function InputNumber(props: InputSelectorProps) {
    return (
        <div className="w-auto mb-8 justify-evenly">
            <div className="mb-4">
                <label htmlFor="entries">{props.label}</label>
            </div>

            <div className="flex gap-2">
                <input
                    type="number"
                    className="bg-[#DFDFDF] w-20 h-10 px-3 py-1 text-lg font-semibold text-right lg:text-2xl lg:w-32 lg:h-14 outline-none"
                    min={props.min || 1}
                    max={props.max}
                    // defaultValue={1}
                    {...props}
                />
            </div>
        </div>
    );
}