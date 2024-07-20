import Image from "next/image"
import Section from "../common/Section"
import { H1, H4, P } from "../common/Typography"
import { ButtonPrimary, ButtonSecondary } from "../common/Button"
import AnimatedDiv from "../Animation/AnimatedDiv"
import Stats from "./stats"
import ImageCard from "./ImageCard"


function index() {
    return (
        <Section>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <AnimatedDiv className="space-y-8" >
                        <P>Next-prodcast software,AirVocal</P>
                        <H1>A podcast creators and enterpeneurs</H1>
                        <H4 className="font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim arcu cursus tincidunt et odio enim aliquam. Gravida augue arcu duis</H4>
                        <div className='flex space-x-4'>
                            <ButtonPrimary title='Subscribe' />
                            <ButtonSecondary title='Last Episode' />
                        </div>
                        <P>Recent engagement</P> 
                         <Stats />

                    </AnimatedDiv>


                    <AnimatedDiv className="relative">
                        <Image
                            src="/images/hero1.png"
                            width={600}
                            height={620}
                            alt=""
                            className="bg-cover object-contain"
                        />
                        {/* card that one on hero image */}
                        <ImageCard />
                    </AnimatedDiv>
                </div>
            </div>
        </Section>
    )
}

export default index