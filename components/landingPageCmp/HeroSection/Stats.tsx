'use client'
import CountUp from 'react-countup'
import { H3 } from '@/components/common/Typography'

function Stats() {
    return (
        <div className='w-full lg:flex lg:space-x-4 items-center'>
            <H3>
                <CountUp
                    end={20}
                    duration={5}
                    delay={1}
                    className="font-extrabold"
                /><span className="font-extrabold">M</span>
            </H3>
            <span className="text-2xl font-light">Listeners</span>
            <H3>
                <CountUp
                    end={12}
                    duration={5}
                    delay={2}
                    className="font-extrabold"
                /><span className="font-extrabold">M</span></H3>
            <span className="text-2xl font-light">Subscribers</span>
        </div>
    )
}

export default Stats