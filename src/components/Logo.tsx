import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <span>
            <Link href="/">
                <Image
                    draggable={false}
                    src="/equipo8.png"
                    priority
                    width={180}
                    height={40}
                    alt="Logo"
                />
            </Link>
        </span>
    );
}