import { ButtonPrimary } from "@/components/common/Button"
import Section from "@/components/common/Section"
import { H3, H4, P } from "@/components/common/Typography"
import Image from "next/image"


const testimonialsData = [
    {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        client: {
            name: 'DAN ROGERS',
            role: 'Web designer, London',
            image: '/images/client1.png'
        }
    }
]

function index() {
    return (
        <Section>
            <div className="bg-black-dark text-white py-28  flex flex-col items-center justify-center">
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div className="space-y-8 p-4 lg:p-8">
                        <P>TESTIMONIALS</P>
                        <H3>See what our clients say</H3>
                        <P>Our clients say it best. Here’s a small sample of the feedback we get every day.</P>
                        <ButtonPrimary title="Get started" className="w-full py-4" />
                    </div>
                    <div className="p-4 lg:p-8">
                        {
                            testimonialsData?.map((item, index) => {
                                return (
                                    <div key={index} className="bg-black-light opacity-95 rounded-3xl p-4 lg:p-8 space-y-8">
                                       <div className="flex">
                                        {[1,2,3,4,5].map((star,index)=>{
                                            return(<div key={index}>
                                                <Image
                                                src={"/images/star.svg"}
                                                width={40}
                                                height={40}
                                                alt=""
                                                className="rounded-full"
                                            />
                                            </div>)
                                        })}
                                       </div>
                                        <P>{item.comment}</P>
                                        <div className="flex items-center space-x-3">
                                            <Image
                                                src={item.client.image}
                                                width={64}
                                                height={64}
                                                alt=""
                                                className="rounded-full shadow"
                                            />
                                            <div className="space-y-2">
                                                <H4>{item.client.name}</H4>
                                                <P>{item.client.role}</P>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

            </div>

        </Section>
    )
}

export default index