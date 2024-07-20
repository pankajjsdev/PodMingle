import { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
    return (
        <section className="mb-8">
            {children}
        </section>
    );
};


export default Section;