import Section from "../common/Section"
import { H3, H4, P } from "../common/Typography"

function Stats() {
    return (
        <Section>
            <div className="container grid grid-cols-1 text-center lg:grid-cols-4 items-center bg-black-dark text-white py-10 lg:py-20 opacity-95">
                <div className="p-4 my-4">
                    <H4>4M</H4>
                    <P>Community members</P>
                </div>
                <div className="p-4 my-4">
                    <H4>3M</H4>
                    <P>Podcast subscribers</P>
                </div>
                <div className="p-4 my-4">
                    <H4>3M</H4>
                    <P>Podcast downloads</P>
                </div>
                <div className="p-4 my-4">
                    <H4>100+</H4>
                    <P>Happy Clients</P>
                </div>
            </div>
        </Section>
    )
}

export default Stats