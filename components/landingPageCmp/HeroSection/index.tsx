import Image from "next/image"
import Section from "@/components/common/Section"
import { H1, H4, P } from "@/components/common/Typography"
import { ButtonPrimary, ButtonSecondary } from "@/components/common/Button"
import Stats from "./Stats"

import dynamic from "next/dynamic"
import AnimatedHero from "@/components/Animation/AnimateHero"
import HeroUser from "@/public/images/hero1.png"

const HeroOverlay = dynamic(() => import("./ImageCard"), {
    loading: () => <p>...</p>,
    ssr: false
})


function index() {
    return (
        <Section>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 space-y-6 lg:space-y-0">
                    <AnimatedHero className="space-y-6 lg:space-y-8 lg:p-8" >
                        <P>Next-prodcast software,AirVocal</P>
                        <H1>A podcast creators and enterpeneurs</H1>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim arcu cursus tincidunt et odio enim aliquam. Gravida augue arcu duis</P>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                            <ButtonPrimary title='Subscribe' />
                            <ButtonSecondary title='Last Episode' />
                        </div>
                        <Stats />
                    </AnimatedHero>
                    <AnimatedHero className="relative">
                        <Image
                            src={HeroUser}
                            priority={true}
                            width={600}
                            height={620}
                            alt=""
                            className=""
                        />
                        {/* card that one on hero image */}
                        <HeroOverlay />
                    </AnimatedHero>
                </div>
            </div>
        </Section>
    )
}

export default index