import Link from "next/link";
import Lang from "./Lang";
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
    return (
        <header className="flex items-center justify-between py-12">
            <div className="left">
                <Logo />
            </div>
            <div className="right">
                <nav>
                    <ul className="flex items-center gap-6">
                        <li>
                            <Link href="/how-it-works">¿Cómo funciona?</Link>
                        </li>
                        <li>
                            <Link href="/roller">Simulador</Link>
                        </li>
                        <li>
                            <ThemeSwitch />
                        </li>
                        <li>
                            <Lang />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
