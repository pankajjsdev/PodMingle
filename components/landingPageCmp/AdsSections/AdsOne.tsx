import { ButtonPrimary } from "@/components/common/Button"
import Section from "@/components/common/Section"
import { H2, H3, P } from "@/components/common/Typography"

function AdsOne() {
    return (
        <section className="container mx-auto mb-8">
            <div className="bg-black-dark text-white py-8  rounded-xl flex flex-col items-center">
                <div className="lg:w-1/2 space-y-6 text-center">
                    <H3>Would you like to publish new episodes on AirVocal?</H3>
                    <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</P>
                    <div className="flex flex-wrap items-center justify-center space-y-3 space-x-3 px-6">
                        <input className="bg-black-dark w-full h-14  px-4 border border-white rounded-full" placeholder="Enter your email" />
                        <ButtonPrimary title="Subscribe" className="w-full h-14" />
                    </div>
                    <p className="text-xs">By clicking Sign Up you&apos;re confirming that you agree with our <span className="underline cursor-pointer">Terms and Conditions</span>.</p>
                </div>
            </div>

        </section>
    )
}

export default AdsOne