import Image from "next/image"
import Section from "../common/Section"
import { H1, P } from "../common/Typography"
import AnimatedHero from "../Animation/AnimateHero"


function AboutHeroSection() {
    return (
        <Section>
            <div className="container space-y-8">
                <AnimatedHero className="flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center w-1/2 space-y-4 text-center">
                        <H1>The AirVocal Podcast Journey A Story Unveiled</H1>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla</P>
                    </div>
                </AnimatedHero>
                <AnimatedHero>
                    <Image
                        src={"/images/about_us.png"}
                        width={500}
                        height={500}
                        className="w-full h-full"
                        alt=""
                    />
                </AnimatedHero>
            </div>
        </Section>
    )
}

export default AboutHeroSection