import { ButtonPrimary, ButtonSecondary } from "@/components/common/Button"
import Section from "@/components/common/Section"
import { H3, H4, P } from "@/components/common/Typography"

function page() {
    return (
        <main className="bg-whitesmoke">
            <Section>
                <div className="container">
                    <div className="lg:w-2/3 space-y-4 mb-6">
                        <P>Contact Us</P>
                        <H3>For the closest Business office contact information, please get in touch with us.</H3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
                        <div className="border p-4 lg:p-12 rounded-2xl bg-white shadow lg:relative left-32 top-7 z-50">
                            <form className="p-4 space-y-8">
                                <div className="grid gap-3 items-center grid-cols-1 lg:grid-cols-2 ">
                                    <div>
                                        <label>Full Name</label>
                                        <input placeholder="Name" className="border w-full py-2 px-4 rounded-lg" />
                                    </div>
                                    <div>
                                        <label>Email Address</label>
                                        <input placeholder="Email" className="border w-full py-2 px-4 rounded-lg" />
                                    </div>
                                </div>
                                <div>
                                    <label>Phone Number</label>
                                    <input placeholder="Phone" className="border w-full py-2 px-4 rounded-lg" />
                                </div>
                                <div>
                                    <label>Email Address</label>
                                    <textarea rows={5} placeholder="Type your message..." className="border w-full py-2 px-4 rounded" />
                                </div>
                                <ButtonPrimary title="Subscribe" />
                            </form>
                        </div>
                        <div className="lg:relative left-20 overflow-hidden">
                            <div className="bg-black-dark h-full text-white p-4 lg:p-12 rounded-2xl">
                                <div className="p-4 space-y-12">
                                    <div className="border-b border-whitesmoke pb-3">
                                        <H4>Our Office Location</H4>
                                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse.</P>
                                    </div>
                                    <div className="border-b border-whitesmoke pb-3">
                                        <H4>Send us an email</H4>
                                        <P>example@email.com</P>
                                    </div>
                                    <div className="border-b border-whitesmoke pb-3">
                                        <H4>Give us a call</H4>
                                        <P>+1 946 - 4530</P>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    )
}

export default page