import Image from "next/image"
import AnimatedHero from "../Animation/AnimateHero"
import Section from "../common/Section"
import { H2, H3, P } from "../common/Typography"

function OurMissionVision() {
    return (
        <Section>
            <div className="container space-y-8">
                <AnimatedHero className="flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center px-24 space-y-4 text-center">
                        <H2>Shaping Tomorrow&apos;s Soundscapes, Navigating Narratives</H2>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla</P>
                    </div>
                </AnimatedHero>
                <section className=" bg-whitesmoke rounded-3xl p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <Image
                            src={"/images/our-mission-vission.png"}
                            width={600}
                            height={500}
                            alt=""
                            className="w-full h-full"
                        />
                        <div className="flex flex-col space-y-3">
                            <div className="bg-white p-4 shadow rounded-xl">
                                <div className="flex space-x-4">
                                    <Image
                                        src={"/images/mission.png"}
                                        width={60}
                                        height={60}
                                        alt=""
                                        
                                    />
                                    <H3>Mission</H3>
                                </div>
                                <P className="p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially</P>
                            </div>
                            <div className="bg-white p-4 shadow rounded-xl">
                                <div className="flex space-x-4">
                                    <Image
                                        src={"/images/mission.png"}
                                        width={60}
                                        height={60}
                                        alt=""
                                    />
                                    <H3>Mission</H3>
                                </div>
                                <P className="p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially</P>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Section>
    )
}

export default OurMissionVision