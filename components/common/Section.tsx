import { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
    return (
        <section className="py-12 lg:py-24">
            {children}
        </section>
    );
};


export default Section;