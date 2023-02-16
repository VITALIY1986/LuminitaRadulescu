import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "./Button";
import styles from "../styles/Header.module.scss";

export default function Header(props) {
    const router = useRouter();
    const [overlay, setOverlay] = useState(false);
    const [dropdown, setDropdown] = useState();

    function OverlayMenu() {
        function handleClick(index, link) {
            if (index === dropdown) {
                setDropdown(null);
            } else {
                setDropdown(index);
            }

            if (link.items && link.items.length > 0) {
                return 0;
            }

            setOverlay(!overlay);
        }

        return (
            <ul className="text-white">
                {links.map((link, index) => (
                    <li key={index} className={`mb-6 text-left ${link.items && link.items.length > 0 && dropdown === index && "active"} ${link.items && link.items.length > 0 && "has-children"}`}>
                        <Link href={link.path}>
                            <a className={`text-xl md:text-4xl font-heading ${dropdown === index && "active"} ${link.path === router.pathname && "text-primary"}`} onClick={(e) => handleClick(index, link)}>
                                {link.title}
                            </a>
                        </Link>
                        {link.items && link.items.length > 0 && dropdown === index && (
                            <ul className="children pt-4 pl-4">
                                {link.items.map((child, j) => (
                                    <li key={j}>
                                        <Link href={child.path}>
                                            <a className={`text-sm md:text-xl font-heading ${child.path === router.pathname && "text-primary"}`} onClick={(e) => handleClick(index, child, e)}>
                                                {child.title}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        );
    }

    const color = `post--${props.color}`;

    return (
        <>
            <div className={`off-canvas ${overlay && "active"}`}>
                <span className="off-canvas__overlay" onClick={() => setOverlay(false)}></span>
                <div className="off-canvas__menu">{OverlayMenu()}</div>
            </div>

            <header className={`header ${styles.header} ${props.className}`}>
                <div className={`${styles.header__nav} absolute top-4 left-4 md:top-8 md:left-8 md:fixed`}>
                    <div className={styles.header__nav__menu}>
                        <Button
                            type="menu"
                            active={overlay}
                            className="w-full h-full bg-black text-white"
                            onClick={() => {
                                setOverlay(!overlay);
                            }}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </Button>
                    </div>
                    <div className={`${styles.header__nav__logo} bg-white font-extrabold font-heading text-black`} style={{ fontSize: 33 }}>
                        <span>M</span>
                    </div>
                </div>
            </header>
        </>
    );
}

const links = [
    {
        title: "Demos",
        path: "/",
        items: [],
    },
    {
        title: "Travel",
        path: "#",
        items: [
            {
                title: "Travel. Demo 1",
                path: "travel-1",
            },
            {
                title: "Travel. Demo 2",
                path: "travel-2",
            },
        ],
    },
    {
        title: "Fashion",
        path: "#",
        items: [
            {
                title: "Fashion. Demo 1",
                path: "fashion-1",
            },
            {
                title: "Fashion. Demo 2",
                path: "fashion-2",
            },
        ],
    },
    {
        title: "Lifestyle",
        path: "#",
        items: [
            {
                title: "LifeStyle. Demo 1",
                path: "/lifestyle-1",
            },
            {
                title: "LifeStyle. Demo 2",
                path: "/lifestyle-2",
            },
        ],
    },
    {
        title: "About Us",
        path: "#",
        items: [
            {
                title: "Agency",
                path: "/about-agency-1",
            },
            {
                title: "Personal",
                path: "/about-personal-1",
            },
        ],
    },
    {
        title: "Contact",
        path: "/contacts-agency-1",
        items: [],
    },
];
