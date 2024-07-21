import Image from "next/image"
import Section from "@/components/common/Section"
import { H1, H4, P } from "@/components/common/Typography"
import { ButtonPrimary, ButtonSecondary } from "@/components/common/Button"
import Stats from "./Stats"
import ImageCard from "./ImageCard"
import AnimatedHero from "@/components/Animation/AnimateHero"


function index() {
    return (
        <Section>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <AnimatedHero className="space-y-6 lg:space-y-8 lg:p-8" >
                        <P>Next-prodcast software,AirVocal</P>
                        <H1>A podcast creators and enterpeneurs</H1>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim arcu cursus tincidunt et odio enim aliquam. Gravida augue arcu duis</P>
                        <div className=' flex flrx-col'>
                            <ButtonPrimary title='Subscribe' />
                            <ButtonSecondary title='Last Episode' />
                        </div>
                        <P>Recent engagement</P> 
                         <Stats />
                    </AnimatedHero>
                    <AnimatedHero className="relative">
                        <Image
                            src="/images/hero1.png"
                            width={600}
                            height={620}
                            alt=""
                            className="bg-cover object-contain"
                        />
                        {/* card that one on hero image */}
                        <ImageCard />
                    </AnimatedHero>
                </div>
            </div>
        </Section>
    )
}

export default index