import { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
    return (
        <section className="mb-16">
            {children}
        </section>
    );
};


export default Section;