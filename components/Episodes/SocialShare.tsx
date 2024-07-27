import Link from "next/link";
import {SlLink , SlSocialLinkedin , SlSocialTwitter, SlSocialFacebook} from "react-icons/sl";
import { H4 } from "../common/Typography";

const icons = [
    {
        icon: SlLink,
        link: ''
    },
    {
        icon: SlSocialLinkedin,
        link: ''
    },
    {
        icon: SlSocialTwitter,
        link: ''
    },
    {
        icon: SlSocialFacebook,
        link: ''
    }
]
function SocialShare() {
    return (
        <div>
            <ul className="inline-flex space-x-4">
            {
                icons?.map((icon, index) => {
                    return (
                        <Link key={index} href={icon.link} className="p-2 bg-white shadow rounded-full  group">
                            <icon.icon className="text-yellow font-bold group-hover:text-royal-blue" />
                        </Link>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default SocialShare