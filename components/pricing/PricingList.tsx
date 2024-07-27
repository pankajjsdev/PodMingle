import Image from "next/image"
import { ButtonPrimary, ButtonSecondary } from "../common/Button"
import Section from "../common/Section"
import { H1, H2, H3, H4, P, SmallText } from "../common/Typography"
import AnimatedHero from "../Animation/AnimateHero"

const plansData = [
    {
        title: 'Basic plan',
        price: '168.00',
        time: 'mo',
        currency: '$',
        features: [
            'Feature text goes here',
            'Feature text goes here',
            'Feature text goes here',
            'Feature text goes here'
        ]
    },
    {
        title: 'Business plan',
        price: '300.00',
        time: 'mo',
        currency: '$',
        features: [
            'Feature text goes here',
            'Feature text goes here',
            'Feature text goes here',
            'Feature text goes here'
        ]
    },
    {
        title: 'Enterprise plan',
        price: '790.00',
        time: 'mo',
        currency: '$',
        features: [
            'Feature text goes here',
            'Feature text goes here',
            'Feature text goes here',
            'Feature text goes here'
        ]
    }
]

function PricingList() {
    return (
        <Section>
            <div className="container">
                <AnimatedHero className="my-6 flex flex-col items-center justify-between">
                    <div className="text-center lg:w-2/3 space-y-4">
                        <H1>Affordable Solutions Tailored to Your Business Needs</H1>
                        <P>Simple, transparent pricing that grows with you. Try any plan free for 30 days.</P>
                    </div>
                </AnimatedHero>
                <AnimatedHero className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {
                        plansData?.map((plan, index) => {
                            return (
                                <div key={index} className="border p-6 rounded-2xl hover:shadow-xl transition-all duration-500 ease-in-out cursor-pointer">
                                    <div className="text-center my-6">
                                        <SmallText>{plan.title}</SmallText>
                                        <H3>{plan.currency} {plan.price} {plan.time}</H3>
                                    </div>
                                    <ul className="p-4 space-y-4">
                                        {
                                            plan.features.map((feature, index) => {
                                                return (
                                                    <li key={index} className="flex items-center space-x-3">
                                                        <Image
                                                            src={"/images/common/right.svg"}
                                                            width={25}
                                                            height={25}
                                                            alt=""
                                                            className=""
                                                        />

                                                        <span>{feature}</span>

                                                    </li>
                                                )

                                            })
                                        }
                                    </ul>
                                    <ButtonSecondary
                                        title="Subscribe"
                                        className="w-full"
                                    />
                                </div>
                            )
                        })
                    }
                </AnimatedHero>
            </div>
        </Section>
    )
}

export default PricingList