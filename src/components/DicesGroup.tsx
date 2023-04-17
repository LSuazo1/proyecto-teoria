import { useEffect, useState } from "react";
import Dice from "./Dice";

interface DicesGroupProps {
    className?: string;
    randomFaces?: boolean;
    dicesNumber: number;
}

export default function DicesGroup(props: DicesGroupProps) {
    const [numberDices, setNumberDices] = useState<number[]>([])

    useEffect(() => {
        const dicesArray = Array.from({ length: props.dicesNumber }, (_, i) => i + 1);
        setNumberDices(dicesArray);
    }, [props.dicesNumber]);

    return (
        <div className={`${props.className} my-8 flex flex-wrap w-full justify-center`}>
            {numberDices.map((dice: any, index) => (
                <Dice animation="shake" key={index} {...(props.randomFaces ? { randomFace: true } : { faceUp: dice })} />
            ))}
        </div>
    );
}