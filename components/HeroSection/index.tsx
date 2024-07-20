"use client"
import CountUp from "react-countup"

import Image from "next/image"
import Section from "../common/Section"
import { H1, H3, H4, HeadingLarge, P, SectionHeader, SmallText } from "../common/Typography"
import { ButtonPrimary, ButtonSecondary } from "../common/Button"


function index() {
    return (
        <Section>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div className="space-y-8">
                        <P>Next-prodcast software,AirVocal</P>
                        <H1>A podcast creators and enterpeneurs</H1>
                        <H4 className="font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim arcu cursus tincidunt et odio enim aliquam. Gravida augue arcu duis</H4>
                        <div className='flex space-x-4'>
                            <ButtonPrimary title='Subscribe' />
                            <ButtonSecondary title='Last Episode' />
                        </div>
                        <P>Recent engagement</P>
                        <div className='lg:flex lg:space-x-4'>
                            <H3>
                                <CountUp
                                    end={20}
                                    duration={5}
                                    delay={1}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />M
                                <span className="text-3lg font-light">Listeners</span></H3>
                            <H3> <CountUp
                                end={12}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />M  <span className="text-3lg font-light">Subscribers</span></H3>
                        </div>

                    </div>
                    <div>
                        <Image
                            src="/images/hero1.png"
                            width={600}
                            height={620}
                            alt=""
                            className="bg-cover object-contain"

                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default index