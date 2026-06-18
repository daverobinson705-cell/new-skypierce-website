"use client";
import { useState, useEffect } from "react";
import { FaHandPointer } from "react-icons/fa";

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {showButton && (
                <div
                    className="fixed p-3 bottom-[100px] right-[2%] bg-amber-950 text-white rounded cursor-pointer"
                    style={{ background: 'var(--primary-color)'}}
                    title="Back To Top"
                    onClick={scrollToTop}
                >
                    <FaHandPointer />
                </div>
            )}
        </>
    );
}

export default BackToTop
