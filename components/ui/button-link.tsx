import Link from "next/link"
import Button from "./button"
import { BsFillPencilFill } from "react-icons/bs";
import border from "@/styles/components/button.module.css";

const ButtonLink = () => {
    return (
        <>
            <div className="flex gap-5 flex-wrap">
                <Link href="mailto:skypierceevip@gmail.com">
                    <Button
                        label="Book a Session"
                        icon={<BsFillPencilFill />}
                        title="Book a Session"
                        className={`bg-[var(--primary-color)] ${border.buttonBorder}`}
                    />
                </Link>
                <Link href="/#portfolio">
                    <Button
                        label="View Portfolio"
                        icon={<BsFillPencilFill />}
                        title="View Portfolio"
                        className={`bg-[var(--white-color)] text-[var(--text-color)] ${border.buttonBorder}`}
                    />
                </Link>
            </div>
        </>
    )
}

export default ButtonLink