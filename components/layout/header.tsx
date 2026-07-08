import styles from "@/styles/components/header.module.css";
import { FaYoutube, FaFacebook, FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import Image from "next/image";
import Button from "@/components/ui/button";
import Link from "next/link";
import Navbar from "./navbar";
import border from "@/styles/components/button.module.css";
import MobileNav from "./mobile-nav";

const Header = () => {
    return (
        <header className="w-full flex flex-col fixed z-10 animate__animated animate__fadeInDown">
            <div className="w-full min-h-[45px] bg-[var(--primary-color)] flex justify-center items-center text-sm">
                <div className={`${styles.container} text-[var(--white-color)] text-nowrap`}>
                    <div className={styles.flex}>
                        <div className="font-bold max-[450px]:hidden">Follow Me:</div>
                        <Link href="https://www.instagram.com/canadianbaddiee?igsh=MTY1dzlnaWNiOGtsNA==" className={styles.socialsIcon} title="Instagram" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </Link>
                        <Link href="https://www.tiktok.com/@canadianbaddiee" className={styles.socialsIcon} title="TikTok" target="_blank" rel="noopener noreferrer">
                            <FaTiktok />
                        </Link>
                        <Link href="https://youtube.com/@skypierceofficial?si=EzkACtMbRV0Z-1-k" className={styles.socialsIcon} title="YouTube" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </Link>
                        <Link href="https://x.com/skypierce_" className={styles.socialsIcon} title="Twitter" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter />
                        </Link>
                    </div>
                    <div className={`${styles.flex}`}>
                        <div className={`${styles.flex} ${styles.borderLeft} max-[750px]:!hidden`}>
                            <MdEmail className="text-[var(--white-color)]" />
                            <Link href="mailto:skypierceevip@gmail.com" className="text-[var(--white-color)] hover:underline">
                                skypierceevip@gmail.com
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[70px] bg-[var(--body-bg-color)] shadow flex justify-center items-center">
                <div className={styles.container}>
                    <Link href="/">
                        <div className="max-w-[200px] h-[60px] overflow-hidden flex items-center">
                            <Image
                                src="/all-images/image-pix/logo.png"
                                width={200} height={60}
                                alt="Nexovate Technologies Logo"
                                className="max-w-full max-h-full object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>
                    <Navbar />
                    <div className={`${styles.flex} gap-3`}>
                        <div className="max-[480px]:hidden">
                            <Link href="mailto:skypierceevip@gmail.com">
                                <Button
                                    label="Message Me" icon={<BsFillPencilFill />}
                                    title="Message Me"
                                    className={`bg-[var(--primary-color)] text-[var(--white-color)] ${border.buttonBorder}`}
                                />
                            </Link>
                        </div>

                        < MobileNav />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header