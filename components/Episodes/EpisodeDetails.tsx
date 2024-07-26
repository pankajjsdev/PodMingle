import Image from "next/image"
import Section from "../common/Section"
import { H1, H4, P } from "../common/Typography"
import FAQ from "@/components/FAQ"
import AdsOne from "@/components/landingPageCmp/AdsSections/AdsOne"
import SocialShare from "./SocialShare"


const detailsInfo = [
    {
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed est varius ultricies et diam at viverra. Nisi nunc dolor vulputate porttitor amet lobortis cursus curabitur quam. Ut mi ut turpis dictumst purus massa phasellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed est varius ultricies et diam at viverra. Nisi nunc dolor vulputate porttitor amet lobortis cursus curabitur quam. Ut mi ut turpis dictumst purus massa phasellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed est varius ultricies et diam at viverra. Nisi nunc dolor vulputate porttitor amet lobortis cursus curabitur quam. Ut mi ut turpis dictumst purus massa phasellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed est varius ultricies et diam at viverra. Nisi nunc dolor vulputate porttitor amet lobortis cursus curabitur quam. Ut mi ut turpis dictumst purus massa phasellus',

    },
    {
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed est varius ultricies et diam at viverra. Nisi nunc dolor vulputate porttitor amet lobortis cursus curabitur quam. Ut mi ut turpis dictumst purus massa phasellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed est varius ultricies et diam at viverra. Nisi nunc dolor vulputate porttitor amet lobortis cursus curabitur quam. Ut mi ut turpis dictumst purus massa phasellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed est varius ultricies et diam at viverra. Nisi nunc dolor vulputate porttitor amet lobortis cursus curabitur quam. Ut mi ut turpis dictumst purus massa phasellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed est varius ultricies et diam at viverra. Nisi nunc dolor vulputate porttitor amet lobortis cursus curabitur quam. Ut mi ut turpis dictumst purus massa phasellus',

    },
    {
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed est varius ultricies et diam at viverra. Nisi nunc dolor vulputate porttitor amet lobortis cursus curabitur quam. Ut mi ut turpis dictumst purus massa phasellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed est varius ultricies et diam at viverra. Nisi nunc dolor vulputate porttitor amet lobortis cursus curabitur quam. Ut mi ut turpis dictumst purus massa phasellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed est varius ultricies et diam at viverra. Nisi nunc dolor vulputate porttitor amet lobortis cursus curabitur quam. Ut mi ut turpis dictumst purus massa phasellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed est varius ultricies et diam at viverra. Nisi nunc dolor vulputate porttitor amet lobortis cursus curabitur quam. Ut mi ut turpis dictumst purus massa phasellus',

    },
    {
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed est varius ultricies et diam at viverra. Nisi nunc dolor vulputate porttitor amet lobortis cursus curabitur quam. Ut mi ut turpis dictumst purus massa phasellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed est varius ultricies et diam at viverra. Nisi nunc dolor vulputate porttitor amet lobortis cursus curabitur quam. Ut mi ut turpis dictumst purus massa phasellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed est varius ultricies et diam at viverra. Nisi nunc dolor vulputate porttitor amet lobortis cursus curabitur quam. Ut mi ut turpis dictumst purus massa phasellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed est varius ultricies et diam at viverra. Nisi nunc dolor vulputate porttitor amet lobortis cursus curabitur quam. Ut mi ut turpis dictumst purus massa phasellus',
        specifications: [
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            "Dolores eos architecto beatae vitae dicta sunt explicabo.",
            "Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ]
    }
]

function EpisodeDetails() {
    return (
        <Section>
            <div className="container">
                <div className="">
                    <H1 className="text-center">Episode Description</H1>
                    <div className="p-4">
                        {
                            detailsInfo?.map((info, index) => {
                                return (
                                    <div key={index}>
                                        <P >{info.para}</P>
                                        <ul className="list-disc p-8">
                                            {
                                                info?.specifications?.map((specifications, index) => {
                                                    return (
                                                        <li><P key={index}>{specifications}</P></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div>
                <Image
                    src={"/images/common/bg-episode1.png"}
                    width={600}
                    height={600}
                    alt=""
                    className="w-full h-full"
                />
            </div>



            <div className="container my-8">
                <div className="flex items-center justify-between my-4">
                    <H4>Share this post
                    </H4>
                    <div><span>Technology</span></div>
                </div>
                <SocialShare />
            </div>


        </Section>
    )
}

export default EpisodeDetails