import "../styles/globals.css";
import styles from "./Navigation.module.css";
import Link from "next/link";

const links = [
    { route: "/", label: "Home" },
    { route: "/about", label: "About" },
];

export function Navigation() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navigation}>
                    {links.map(({ route, label }) => {
                        return (
                            <li key={route}>
                                <Link href={route}>{label}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
