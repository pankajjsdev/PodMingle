'use client'
import CountUp from 'react-countup'
import { H3, P } from '@/components/common/Typography'

function Stats() {
    return (
        <>
            <P className="">Recent engagement</P>
            <div className='w-full lg:flex lg:space-x-4 items-center space-y-4'>
                <div className='flex items-center space-x-3'>
                    <H3>
                        <CountUp
                            end={20}
                            duration={5}
                            delay={1}
                            className="font-extrabold"
                        /><span className="font-extrabold">M</span>
                    </H3>
                    <span className="text-2xl font-light">Listeners</span>
                </div>
                <div className='flex items-center space-x-3'>
                    <H3>
                        <CountUp
                            end={12}
                            duration={5}
                            delay={2}
                            className="font-extrabold"
                        /><span className="font-extrabold">M</span></H3>
                    <span className="text-2xl font-light">Subscribers</span>
                </div>
            </div>
        </>
    )
}

export default Stats