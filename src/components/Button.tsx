interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props: ButtonProps) {
    return (
        <button
            className={`bg-primary hover:bg-primary/90 text-white text-xl my-6 font-semibold py-6 px-8 rounded ${props.className}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}