import React from 'react'
import { H1, H3, P } from '../common/Typography'
import Section from '../common/Section'
import Image from 'next/image'
import AnimatedDiv from '../Animation/AnimatedDiv'
import Link from 'next/link'

function EpisodeHero() {
    return (
        <Section>
            <div className='container space-y-8'>
                <H1>Episodes</H1>
                <P className='lg:w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar nunc mauris lobortis etiam in cursus. Urna dolor tortor orci amet nisl integer purus risus.</P>

                <div className='grid grid-cols-1 lg:grid-cols-2 shadow  rounded-3xl' >
                    <Image
                        src={"/images/episode-hero.png"}
                        width={300}
                        height={300}
                        alt=''
                        className='w-full h-full'
                    />

                    <AnimatedDiv className="space-y-6 lg:space-y-8 p-4 lg:p-8">
                        <P>Business</P>
                        <H3>Ep 2 getting the first 300 customers for your web business</H3>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non facilisi eget ut sodales nec lacus egestas enim. In sed purus massa orci. Auctor fermentum, mauris urna faucibus a maecenas at fringilla mauris</P>
                        <div className="flex items-center justify-between">
                    <Link className="flex items-center space-x-2" href={'/'}>
                        <span>Listen Now</span>
                        <Image
                            src="/images/play-btn.png"
                            width={18}
                            height={18}
                            alt="Play button"
                        />
                    </Link>
                    <div>
                        <Image
                            src="/images/music-waves.png"
                            width={180}
                            height={150}
                            alt="Music waves"
                        />
                    </div>
                </div>
                    </AnimatedDiv>

                </div>
            </div>

        </Section>

    )
}

export default EpisodeHero