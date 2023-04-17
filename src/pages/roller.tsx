import Button from "@/components/Button";
import DicesGroup from "@/components/DicesGroup";
import InputNumber from "@/components/InputNumber";
import InputSelector from "@/components/InputSelector";
import Table from "@/components/Table";
import Title from "@/components/Title";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface RollerData {
    dicesNumber: number;
    sides: number;
    rounds: number;
}

const numberDices = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
]

const dataTable = [
    {
        header: "Suceso Experimental",
        rows: [
            "1",
        ]
    },
    {
        header: "Probabilidad de fallo",
        rows: [
            "1",
        ]
    },
    {
        header: "Resultado Experimental",
        rows: [
            "1",
        ]
    },
    {
        header: "Probabilidad Teórica",
        rows: [
            "1",
        ]
    },
    {
        header: "Probabilidad Experimental",
        rows: [
            "1",
        ]
    }
]

export default function Roller() {
    const router = useRouter();
    const { dices, sides, rounds } = router.query;
    const [showResult, setShowResult] = useState<boolean>(false);
    const [data, setData] = useState<RollerData>({
        dicesNumber: 1,
        sides: 6,
        rounds: 1,
    });

    useEffect(() => {
        if (router.isReady && (dices || sides || rounds)) {
            setData({
                dicesNumber: parseInt(dices as string) || 1,
                sides: parseInt(sides as string) || 6,
                rounds: parseInt(rounds as string) || 1,
            })
        }
    }, [router.isReady, dices, sides, rounds]);

    const handleRollDices = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowResult(true);
    }

    return (
        <section>
            <Title size="h2" hidden={showResult}>Simulador</Title>

            <div hidden={!showResult}>
                <div className="inline-block">
                    <span onClick={() => setShowResult(false)} className="flex items-center gap-2 text-2xl cursor-pointer hover:underline">
                        <IconArrowNarrowLeft size={30} className="inline" />
                        Regresar al simulador
                    </span>
                </div>
            </div>

            <div className="flex">
                <div className={`min-w-fit transition-all delay-150 duration-300 overflow-hidden`} hidden={showResult}>
                    <form className="roller-form">
                        <InputSelector
                            label="Seleccione el número de dados que desea lanzar:"
                            onChange={(e: any) => setData({ ...data, dicesNumber: e.target.value })}
                            value={data.sides}
                            options={numberDices}
                        />

                        <InputNumber
                            label="Número de lanzamientos:"
                            value={data.rounds}
                            onChange={(e: any) => setData({ ...data, rounds: e.target.value })}
                        />
                    </form>

                    <Button onClick={handleRollDices}>Lanzar dados</Button>
                </div>

                <DicesGroup {...data} randomFaces />
            </div>

            <Table data={dataTable} hidden={!showResult} />
        </section>
    );
}
