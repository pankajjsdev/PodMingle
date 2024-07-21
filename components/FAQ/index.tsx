'use client'
import { useState, useRef, useEffect } from "react"
import Section from "../common/Section"
import { H3, H4, P } from "../common/Typography"
import { ButtonPrimary } from "../common/Button"

const FAQData = [
    {
        title: "May we use Intone if we’re not a call center but have voice support?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    },
    {
        title: "How can Intone benefit our customer support team?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    },
    {
        title: "What are the main features of Intone?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    }
]

function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="container mx-auto py-28 space-y-8">
            <section className="flex flex-col items-center">
                <div className="lg:w-1/2 text-center">
                    <P>FAQ</P>
                    <H3>Frequently Asked Questions</H3>
                    <H4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</H4>
                </div>
            </section>
            <section className=" lg:w-4/5 p-4 lg:p-12 mx-auto  bg-whitesmoke rounded-3xl">
                <div className=" transition-all duration-500 ease-in-out">
                    {
                        FAQData.map((faq, index) => {
                            const isOpen = openIndex === index
                            return (
                                <div key={index} className="my-3 border border-gray-300 rounded-xl px-4 lg:px-8 transition-all duration-500 ease-in-out">
                                    <div className="flex items-center justify-between cursor-pointer transition-all duration-500 ease-in-out hover:scale-x-95" onClick={() => handleClick(index)}>
                                        <H4>{faq.title}</H4>
                                        <span className={`text-3xl p-4 cursor-pointer transition-all duration-200 ease-in-out ${isOpen ? 'rotate-45' : ''}`}>+</span>
                                    </div>
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out`}
                                        style={{ maxHeight: isOpen ? '1000px' : '0' }}
                                    >
                                        <P className="mt-4">{faq.description}</P>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


                <section className="container bg-[#404040] rounded-3xl mx-auto my-8">
                    <div className="bg-[#404040] text-white py-8   flex flex-col items-center">
                        <div className="lg:w-4/5 space-y-6 text-center">
                            <H3>Would you like to publish new episodes on AirVocal?</H3>
                            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
                            <div className="flex flex-wrap items-center justify-center space-y-3 space-x-3 px-6">

                                <ButtonPrimary title="Contact us" className=" h-14" />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default FAQ
