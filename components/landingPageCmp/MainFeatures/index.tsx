import { ButtonPrimary } from "@/components/common/Button"
import { H2, H3, H4, P } from "@/components/common/Typography"
import Image from "next/image"

function index() {
    return (
        <div className="bg-black-dark text-white py-28 mb-8">
            <section className="container mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-8">
                        <P>Main Features</P>
                        <H3>Effortlessly upload and manage your podcasts.</H3>
                        <ButtonPrimary title='Browse  Episode' className="w-full lg:w-1/3 py-4" />
                    </div>
                    <div className="space-y-8">
                        <H4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim arcu cursus tincidunt et odio enim allium. Gravida augue arcu duis turpis nisl. Sed tellus quis nisl, est ridiculus. Gravida faucibus in ut hendrerit. Eget sed sit.</H4>
                        <div className="flex items-center justify-between w-full">
                            <div>
                                <H4>20M</H4>
                                <P>Listeners</P>
                            </div>
                            <div>
                                <H4>12M</H4>
                                <P>Subscribers</P>
                            </div>
                            <div>
                                <H4>100K</H4>
                                <P>Episodes</P>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-3 lg:space-x-10">
                    <div className="space-y-10 lg:space-y-12 my-3">
                        <div className="shadow bg-black-light rounded-xl flex flex-col items-center justify-center px-4 py-6 text-center space-y-6">
                            <Image
                                src="/images/feature1.png"
                                width={40}
                                height={40}
                                alt=""
                            />
                            <H4>Audio Production</H4>
                            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</P>
                        </div>
                        <div className="shadow bg-black-light rounded-xl flex flex-col items-center justify-center px-4 py-6 text-center space-y-6">
                            <Image
                                src="/images/feature1.png"
                                width={40}
                                height={40}
                                alt=""
                            />
                            <H4>Audio Production</H4>
                            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</P>
                        </div>
                    </div>


                    <div className="shadow bg-black-light rounded-xl flex flex-col items-center justify-center px-4 py-6 text-center space-y-6 order-3 lg:order-none my-3">
                        <Image
                            src="/images/featureuser.png"
                            width={507}
                            height={556}
                            alt=""
                            className="w-full h-full bg-cover object-contain"
                        />
                    </div>
                    <div className="space-y-10 lg:space-y-12 my-3">
                        <div className="shadow bg-black-light rounded-xl flex flex-col items-center justify-center px-4 py-6 text-center space-y-6">
                            <Image
                                src="/images/feature1.png"
                                width={40}
                                height={40}
                                alt=""
                            />
                            <H4>Audio Production</H4>
                            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</P>
                        </div>
                        <div className="shadow bg-black-light rounded-xl flex flex-col items-center justify-center px-4 py-6 text-center space-y-6">
                            <Image
                                src="/images/feature1.png"
                                width={40}
                                height={40}
                                alt=""
                            />
                            <H4>Audio Production</H4>
                            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</P>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default index