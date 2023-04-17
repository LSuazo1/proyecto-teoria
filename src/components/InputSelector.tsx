import { useState } from "react";

interface InputSelectorProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label: string;
    options: { label: string, value: string }[];
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputSelector(props: InputSelectorProps) {
    const options = props.options;
    const [selectedOption, setSelectedOption] = useState<number>(1);

    const selectedColor = (option: string) => (
        option === selectedOption.toString()
            ? "bg-secondary"
            : "bg-[#DFDFDF]"
    )

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(parseInt(e.target.value));
        props.onChange(e);
    }

    const optionsList = options?.map((option, index) => (
        <div key={index} className="flex items-center">
            <div className="w-full">
                <div>
                    <input
                        name="answer"
                        type="radio"
                        id={option.value}
                        value={option.value}
                        onChange={handleChangeValue}
                        hidden
                    />
                    <label
                        htmlFor={option.value}
                        className={
                            `${selectedColor(option.value)} cursor-pointer flex items-end justify-end w-10 h-10 px-3 py-1 text-xl font-semibold lg:text-2xl lg:w-14 lg:h-14`
                        }
                    >
                        {option.label}
                    </label>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="w-auto mb-8 justify-evenly">
            <div className="mb-4">
                <label htmlFor="entries">{props.label}</label>
            </div>
            <div className="flex gap-2">
                {optionsList}
            </div>
        </div>
    );
}