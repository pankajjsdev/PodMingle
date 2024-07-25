'use client'
import Image from "next/image"
import AnimatedHero from "../Animation/AnimateHero"
import Section from "../common/Section"
import { H2, H3, H4, P } from "../common/Typography"
import SwiperCmp from "../common/Swiper"
import { SwiperSlide } from "swiper/react"
import HostCard from "./HostCard"


const hostData = [
    {
        name:'Flores Jusnita',
        country:'Australia',
        image:'/images/host1.png'
    },
    {
        name:'Jack mourf',
        country:'USA',
        image:'/images/host2.png'
    },
    {
        name:'Robin hood',
        country:'Australia',
        image:'/images/host3.png'
    },
    {
        name:'Flores Jusnita',
        country:'Australia',
        image:'/images/host1.png'
    },
    {
        name:'Jack mourf',
        country:'USA',
        image:'/images/host2.png'
    },
    {
        name:'Robin hood',
        country:'Australia',
        image:'/images/host3.png'
    }
]

function OurHosts() {
    return (
        <Section>
            <div className="space-y-8 my-28">
                <AnimatedHero className=" container flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center px-24 space-y-4 text-center">
                        <H2>Our Hosts</H2>
                        <P>Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat nun eget massa velit eros etiam nunc.</P>
                    </div>
                </AnimatedHero>
               <AnimatedHero className="">
               <SwiperCmp>
                    {
                        hostData?.map((host, index)=>{
                            return(
                                <SwiperSlide key={index}>
                                <HostCard 
                                  host={host}
                                />
                                </SwiperSlide>
                            )
                        })
                    }

                </SwiperCmp>
               </AnimatedHero>
            </div>
        </Section>
    )
}

export default OurHosts