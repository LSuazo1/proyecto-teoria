import { superClassNames } from "@/utils/superClassname";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    className?: string;
    size?: 'h1' | 'h2' | 'h3';
    children: React.ReactNode;
}

const headings = {
    h1: 'text-9xl font-[600]',
    h2: 'text-7xl font-[500]',
    h3: 'text-5xl font-[600]',
}

export default function Title(props: TitleProps) {
    return (
        <h1
            className={superClassNames(
                props.className,
                props.size ? headings[props.size] : headings.h1,
                'mb-12'
            )}
            hidden={props.hidden}
        >
            {props.children}
        </h1>
    );
}