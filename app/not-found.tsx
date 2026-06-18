import styles from "@/styles/main.module.css";
import Header from "@/components/layout/header";
import Link from "next/link";
import Button from "@/components/ui/button";
import border from "@/styles/components/button.module.css";
import AnimatedWrapper from "@/components/aos/aoswrapper";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/layout/back-to-top";
import { BsFillPencilFill } from "react-icons/bs";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 – Page Not Found | Nexovaste Technologies",
    description: "The page you are looking for does not exist or has been moved.",
    robots: {
        index: false,
        follow: false,
    },
};

const NotFound = () => {
    return (
        <>
            <Header />
            <div className="absolute w-full h-full top-[115px]">
                <main>
                    <section className={`w-full min-h-[450px] text-[var(--white-color)] ${styles.titleBg}`}>
                        <div className="w-[90%] max-w-[1200px] flex">
                            <div className={`w-[500px] flex flex-col gap-5 ${styles.textShadow}`}>

                                <AnimatedWrapper animation="zoom-in">
                                    <h1 className="text-[clamp(25px,4vw,40px)]">
                                        404
                                    </h1>
                                    <h2 className="mt-4 text-2xl font-semibold">
                                        Page Not Found
                                    </h2>
                                </AnimatedWrapper>
                                <AnimatedWrapper>
                                    <p>
                                        The page you’re looking for doesn’t exist or has been moved.
                                    </p>
                                </AnimatedWrapper>

                                <div className="flex gap-5 flex-wrap">
                                    <Link href="/">
                                        <Button
                                            label="Go Home"
                                            icon={<BsFillPencilFill />}
                                            title="Go Home"
                                            className={`bg-[var(--primary-color)] ${border.buttonBorder}`}
                                        />
                                    </Link>
                                    <Link href="/contact-us">
                                        <Button
                                            label="Contact Us"
                                            icon={<BsFillPencilFill />}
                                            title="Contact Us"
                                            className={`bg-[var(--white-color)] text-[var(--text-color)] ${border.buttonBorder}`}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
            <BackToTop />
        </>
    )
}

export default NotFound
