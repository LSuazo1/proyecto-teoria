import style from "@/styles/Dice.module.css";

export const Dot = () => <span className={style.dot}></span>;
export const Face = ({ children }: any) => <div className={style.face}>{children}</div>;

interface DiceProps {
    className?: string;
    faces?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
    faceUp?: this["faces"];
    randomFace?: boolean;
    animation?: "roll" | "shake";
    animationDuration?: number;
}

export default function Dice(props: DiceProps) {
    const numberFaces = props.faces || 6;
    const randomFace = Math.floor(Math.random() * numberFaces) + 1;
    const faceUp = props.faceUp ?? randomFace;

    const animation = props.animation || "roll";
    const animationDuration = props.animationDuration || 1;

    const arrayDots = (numberDots: number): any[] => {
        return Array.from(Array(numberDots).keys()).map((_, index) => (
            <Dot key={index} />
        ));
    };

    const arrayFaces = (numberFaces: number): any[] => {
        return Array.from(Array(numberFaces + 1).keys()).map((_, index) => (
            <Face key={index}>
                {arrayDots(index)}
            </Face>
        ));
    };

    const faces = arrayFaces(numberFaces);

    return <>{faces[faceUp]}</>

}   