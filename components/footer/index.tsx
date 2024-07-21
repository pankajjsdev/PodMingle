import Image from "next/image"
import Link from "next/link"
import { H3, H4, P } from "../common/Typography"
import { ButtonPrimary } from "../common/Button"

const footerLinks = [
    {
        heading: 'Menu',
        links: [
            {
                title: 'Home',
                path: '/'
            },
            {
                title: 'About us',
                path: '/about-us'
            },
            {
                title: 'Episodes',
                path: '/episods'
            },
            {
                title: 'Blog',
                path: '/blog'
            },
            {
                title: 'Contact us',
                path: '/contact-us'
            },
            {
                title: 'Sign in',
                path: '/sign-in'
            },
            {
                title: 'Sign up',
                path: '/sign-up'
            }
        ]
    },
    {
        heading: 'Menu',
        links: [
            {
                title: 'Home',
                path: '/'
            },
            {
                title: 'About us',
                path: '/about-us'
            },
            {
                title: 'Episodes',
                path: '/episods'
            },
            {
                title: 'Blog',
                path: '/blog'
            },
            {
                title: 'Contact us',
                path: '/contact-us'
            },
            {
                title: 'Sign in',
                path: '/sign-in'
            },
            {
                title: 'Sign up',
                path: '/sign-up'
            }
        ]
    },
    {
        heading: 'Menu',
        links: [
            {
                title: 'Home',
                path: '/'
            },
            {
                title: 'About us',
                path: '/about-us'
            },
            {
                title: 'Episodes',
                path: '/episods'
            },
            {
                title: 'Blog',
                path: '/blog'
            },
            {
                title: 'Contact us',
                path: '/contact-us'
            },
            {
                title: 'Sign in',
                path: '/sign-in'
            },
            {
                title: 'Sign up',
                path: '/sign-up'
            }
        ]
    }
]

function index() {
    return (
        <footer className="bg-black-dark h-[40rem] py-8 text-white">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
                    <div>
                        <Link href="/">
                            <Image
                                src="/images/logo/logo.png"
                                width={120}
                                height={120}
                                quality={100}
                                alt=""
                                className="rounded-full"
                            />
                        </Link>
                    </div>
                    {
                        footerLinks?.map((nav, index) => {
                            return (
                                <div key={index}>
                                    <H4>{nav.heading}</H4>

                                    <ul className="space-y-4 my-6">
                                        {
                                            nav.links.map((link, index2) => {
                                                return (
                                                    <li key={index2}>
                                                        <Link className="text-lg font-normal " href={link.path}>{link.title}</Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>

                                </div>
                            )
                        })
                    }
                    <div>
                        <div>
                            <H4>Subscribe</H4>
                            <P>Join our newsletter to stay up to date on features and releases</P>
                            {/* <div className="flex items-center justify-center space-y-3 space-x-3">
                                <input className="bg-black-dark h-14  px-4 border border-white rounded-full" placeholder="Enter your email" />
                                <ButtonPrimary title="Subscribe" className="h-14" />
                            </div> */}
                            <p className="text-xs">By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
                        </div>
                    </div>


                </div>
            </div>


            <p className="container mx-auto  text-sm">All copy reserved to Pod mingle Company. This includes all content, images, and intellectual property. Unauthorized use or reproduction is strictly prohibited. For permissions and licensing, please contact us at info@podmingle.com.</p>

        </footer>
    )
}

export default index