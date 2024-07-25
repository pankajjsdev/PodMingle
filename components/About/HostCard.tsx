import Image from "next/image"
import { H4, P } from "../common/Typography"

function HostCard({ host }: { host: { name: string, country: string, image: string } }) {
    return (
        <div className="p-4 shadow h-auto">
            <Image
                src={host.image}
                width={400}
                height={500}
                alt=""
            />
            <div>
                <H4>{host.name}</H4>
                <P>{host.country}</P>
                <div className="flex items-center space-x-3">
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