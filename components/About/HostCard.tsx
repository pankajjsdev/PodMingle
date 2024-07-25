import Image from "next/image"
import { H4, P } from "../common/Typography"

function HostCard({ host }: { host: { name: string, country: string, image: string } }) {
    return (
        <div className="flex flex-col items-center p-4 shadow border rounded-xl">
            <div className="overflow-hidden cursor-pointer">
            <Image
                src={host.image}
                width={394}
                height={394}
                alt=""
                className="hover:scale-105 transition-all duration-300 ease-in-out"
            />
            </div>
            <div className="my-8 space-y-3">
                <div>
                    <H4>{host.name}</H4>
                    <P>{host.country}</P>
                </div>
                <div className="flex items-center space-x-6">
                    <Image
                        src={"/images/linkedin.svg"}
                        width={28}
                        height={28}
                        alt=""
                    />
                    <Image
                        src={"/images/twitter.svg"}
                        width={28}
                        height={28}
                        alt=""
                    />
                    <Image
                        src={"/images/dribble.svg"}
                        width={20}
                        height={20}
                        alt=""
                    />
                </div>
            </div>

        </div>
    )
}

export default HostCard