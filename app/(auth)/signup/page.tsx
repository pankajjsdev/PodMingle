import { ButtonPrimary } from "@/components/common/Button"
import { H1, H3, P } from "@/components/common/Typography"
import Image from "next/image"
import Link from "next/link"

function page() {
    return (
        <main>
            <div className="container my-12 lg:my-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between">
                    <div className="p-2 lg:p-12 text-center">
                        <H3>Create your account</H3>
                        <P>Sign up with</P>
                        <div className="my-6">
                            <form className="flex flex-col w-full space-y-6 p-8">
                                <div className="">
                                    <input placeholder="Name" className="border w-full py-2 px-4 rounded-full" />
                                </div>
                                <div className="">
                                    <input placeholder="Email" className="border w-full py-2 px-4 rounded-full" />
                                </div>
                                <div className="">
                                    <input placeholder="Password" type="password" className="border w-full py-2 px-4 rounded-full" />
                                </div>
                                <ButtonPrimary title="Sign up" />
                                <Link href="/login">Already have an account? Sign In</Link>
                            </form>
                        </div>
                    </div>
                    <div className="">
                        <Image
                            src={"/images/common/login_bg.png"}
                            width={500}
                            height={500}
                            className="w-full h-full"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page