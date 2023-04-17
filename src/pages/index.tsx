import Dice from "@/components/Dice";
import DicesGroup from "@/components/DicesGroup";
import Title from "@/components/Title";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { Lobster } from "next/font/google";
import Link from "next/link";

const LobsterFont = Lobster({
    weight: "400",
    subsets: ["latin"]
});

export default function Home() {
    return (
        <section>
            <div className="flex items-center justify-evenly">
                <div>
                    <Title className="text-shadow">
                        Simulador
                        <br /> de <span className={`text-primary ${LobsterFont.className}`}>dados</span>
                        <br /> Online
                    </Title>

                    <div className="inline-block">
                        <Link href="/roller" className="flex items-end gap-2 text-2xl hover:underline">
                            Ir al simulador
                            <IconArrowNarrowRight size={30} />
                        </Link>
                    </div>
                </div>

                <DicesGroup dicesNumber={5} />
            </div>
        </section>
    );
}
