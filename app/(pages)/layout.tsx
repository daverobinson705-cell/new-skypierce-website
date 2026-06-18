import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/layout/back-to-top";
import { LayoutProps } from "@/types/ui";

const PageLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <div className="absolute w-full h-full top-[115px]">
                <main>{children}</main>
                <Footer />
            </div>
            <BackToTop/>
        </>
    );
}

export default PageLayout 