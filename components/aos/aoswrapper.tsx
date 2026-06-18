import { AnimatedWrapperProps } from "@/types/ui";

export default function AnimatedWrapper({ children, animation = "fade-up", delay = 0, className }: AnimatedWrapperProps) {
    return (
        <div data-aos={animation} data-aos-delay={delay} className={className}>
            {children}
        </div>
    );
}
