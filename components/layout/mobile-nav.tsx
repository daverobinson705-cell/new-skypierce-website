'use client';
import Button from "../ui/button";
import { TfiAlignJustify } from "react-icons/tfi";
import border from "@/styles/components/button.module.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoHomeSharp } from "react-icons/io5";
import { FaUserTag, FaServicestack } from "react-icons/fa";
import { RiChatHistoryFill, RiArrowDropDownLine } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <>
            <Button
                label={<TfiAlignJustify size={25} />}
                title="Open Mobile Menu"
                className={`bg-[var(--primary-color)] text-[var(--white-color)] !p-3 !min-w-0 rounded min-[1050px]:!hidden max-[1050px]:!block ${border.buttonBorder}`}
                onClick={() => setIsOpen(true)}
            />

            {isOpen && (
                <div className="fixed w-screen h-screen inset-0 backdrop-blur-sm bg-black/60 z-50" onClick={() => setIsOpen(false)}>
                    <nav className="fixed w-[250px] h-full bg-white/95 animate__animated animate__fadeInLeft" aria-label="Mobile Navigation" onClick={(e) => e.stopPropagation()}>
                        <Link href="/">
                            <div className="w-full h-[60px] overflow-hidden bg-white p-3 border-b border-[rgba(46,204,113,.5)]" onClick={() => setIsOpen(false)}>
                                <Image
                                    src="/all-images/image-pix/logo.png"
                                    width={200} height={60}
                                    alt="Skypierce Logo"
                                    className="max-w-full max-h-full object-contain object-center"
                                    priority
                                />
                            </div>
                        </Link>

                        <ul>
                            <Link href="/">
                                <li className="p-[15px] border-b border-black/10 flex items-center gap-3 text-sm" title="Main" onClick={() => setIsOpen(false)}>
                                    <IoHomeSharp className="text-[var(--primary-color)]" />
                                    <span>Main</span>
                                </li>
                            </Link>
                            <Link href="/#bio">
                                <li className="p-[15px] border-b border-black/10 flex items-center gap-3 text-sm" title="Bio" onClick={() => setIsOpen(false)}>
                                    <FaUserTag className="text-[var(--primary-color)]" />
                                    <span>Bio</span>
                                </li>
                            </Link>
                            <Link href="/#portfolio">
                                <li className="p-[15px] border-b border-black/10 flex items-center gap-3 text-sm" title="Portfolio" onClick={() => setIsOpen(false)}>
                                    <RiChatHistoryFill className="text-[var(--primary-color)]" />
                                    <span>Portfolio</span>
                                </li>
                            </Link>
                            <Link href="/#schedule">
                                <li className="p-[15px] border-b border-black/10 flex items-center gap-3 text-sm" title="Schedule" onClick={() => setIsOpen(false)}>
                                    <FaServicestack className="text-[var(--primary-color)]" />
                                    <span>Schedule</span>
                                </li>
                            </Link>
                            <Link href="/#bookme">
                                <li className="p-[15px] border-b border-black/10 flex items-center gap-3 text-sm" title="Book Me" onClick={() => setIsOpen(false)}>
                                    <MdContactPhone className="text-[var(--primary-color)]" />
                                    <span>Book Me</span>
                                </li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    )
}

export default MobileNav
