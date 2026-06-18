"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from "next/image";

const Navbar = () => {
    const pathname = usePathname()

    const links = [
        { href: '/', label: 'Main' },
        { href: '/#mybio', label: 'Bio' },
        { href: '/#portfolio', label: 'Portfolio' },
        { href: '/#schedule', label: 'Schedule' },
        { href: '/#bookme', label: 'Book Me' },
    ];

    return (
        <nav className="w-full px-10 max-[1050px]:hidden" aria-label="Main Navigation">
            <ul className="flex">
                {links.map((link) => (
                    <li key={link.href} className="group">
                        <Link
                            href={link.href}
                            title={link.label}
                            className={`px-5 py-8 text-nowrap hover:text-[var(--secondary-color)] text-sm hover:rounded-[5px] flex items-center gap-1.5 ${pathname === link.href ? 'text-[var(--secondary-color)] rounded-[5px]' : ''}`}
                        > <span>{link.label}</span>
                        </Link>

                    </li>
                ))}
            </ul>

        </nav>
    )
}

export default Navbar