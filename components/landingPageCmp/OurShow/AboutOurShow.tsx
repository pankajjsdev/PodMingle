import Image from "next/image"
import { ButtonPrimary, ButtonSecondary } from "../../common/Button"
import Section from "@/components/common/Section"
import { H1, H2, H3, H4, P } from "@/components/common/Typography"
import AnimatedDiv from "@/components/Animation/AnimatedDiv"

function AboutOurShow() {
    return (
        <Section>
            <div className="container mx-auto">
                <div className="py-40">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        <AnimatedDiv className="grid grid-cols-3 gap-6">
                            <div className="relative w-full h-full transition-all duration-300 ease-in-out  hover:-translate-y-8">
                                <Image
                                    src={"/images/ourshow1.png"}
                                    width={300}
                                    height={500}
                                    className="w-full h-full"
                                    alt=""

                                />
                            </div>
                            <div className="relative w-full h-full -translate-y-10 transition-all duration-300 ease-in-out  hover:-translate-y-16">
                                <Image
                                    src={"/images/ourshow2.png"}
                                    width={300}
                                    height={500}
                                    className="w-full h-full"
                                    alt=""
                                />
                            </div>
                            <div className="relative w-full h-full  transition-all duration-300 ease-in-out  hover:-translate-y-8">
                                <Image
                                    src={"/images/ourshow3.png"}
                                    width={300}
                                    height={500}
                                    className="w-full h-full"
                                    alt=""
                                />
                            </div>
                        </AnimatedDiv>
                        <AnimatedDiv className="space-y-8 px-8">
                            <P>Next-prodcast software,AirVocal</P>
                            <H3>Awareness and Presence in Everyday Moments</H3>
                            <H4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim arcu cursus tincidunt et odio enim allium. Gravida augue arcu duis turpis nisl. Sed tellus quis nisl, est ridiculus. Gravida faucibus in ut hendrerit. Eget sed sit.</H4>
                            <div className='flex space-x-4'>
                                <ButtonPrimary title='Subscribe' />
                                <ButtonSecondary title='Last Episode' />
                            </div>
                        </AnimatedDiv>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default AboutOurShow