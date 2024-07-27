import Image from "next/image";
import Link  from "next/link";
import { ButtonPrimary } from "../common/Button";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-20">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-3">
                    <div className="">
                        <Link className="hover:text-yellow" href="/">
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
                    <div>
                        <h4 className="font-semibold">Menu</h4>
                        <ul className="mt-4 space-y-2">
                            <li><Link className="hover:text-yellow" href="/">Home </Link></li>
                            <li><Link className="hover:text-yellow" href="/about">About Us </Link></li>
                            <li><Link className="hover:text-yellow" href="/episodes">Episodes </Link></li>
                            <li><Link className="hover:text-yellow" href="/blog">Blog </Link></li>
                            <li><Link className="hover:text-yellow" href="/pricing">Pricing </Link></li>
                            <li><Link className="hover:text-yellow" href="/contacts">Contact Us </Link></li>
                            <li><Link className="hover:text-yellow" href="/signup">Sign up </Link></li>
                            <li><Link className="hover:text-yellow" href="/signin">Sign in </Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold">CMS Page</h4>
                        <ul className="mt-4 space-y-2">
                            <li><Link className="hover:text-yellow" href="/episodes/episode-details">Episodes details </Link></li>
                            <li><Link className="hover:text-yellow" href="/">Blog details </Link></li>
                            <li><Link className="hover:text-yellow" href="/">Team details </Link></li>
                            <li><Link className="hover:text-yellow" href="/">Pricing details </Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold">Utility Page</h4>
                        <ul className="mt-4 space-y-2">
                            <li><Link className="hover:text-yellow" href="/">Start Here </Link></li>
                            <li><Link className="hover:text-yellow" href="/">Style Guide </Link></li>
                            <li><Link className="hover:text-yellow" href="/">404 Not Found </Link></li>
                            <li><Link className="hover:text-yellow" href="/">Password Protected </Link></li>
                            <li><Link className="hover:text-yellow" href="/">Licenses </Link></li>
                            <li><Link className="hover:text-yellow" href="/terms-conditions">Terms & Condition </Link></li>
                            <li><Link className="hover:text-yellow" href="/privacy-policy">Privacy Policy </Link></li>
                            <li><Link className="hover:text-yellow" href="/">Changelog </Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold">Subscribe</h4>
                        <p className="mt-4">Join our newsletter to stay up to date on features and releases.</p>
                        <form className="mt-4">
                            <div className="space-y-8 border-b border-gray-700 py-2">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none mb-2 sm:mb-0"
                                    type="email"
                                    placeholder="Enter your email"
                                    aria-label="Email"
                                />
                                <ButtonPrimary
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-4 w-full rounded"
                                    title="Subscribe"
                                />


                            </div>
                        </form>
                        <p className="mt-2 text-xs">
                            By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
                        </p>
                    </div>
                </div>
                <div className="mb-8 my-20 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-xs mb-4 sm:mb-0">&copy; 2024 Pod mingle. All rights reserved.</p>
                    <div className="flex space-x-6 mb-4 sm:mb-0">
                        <Link  href="/privacy-policy" className="text-xs hover:text-yellow">Privacy Policy</Link>
                        <Link  href="/terms-conditions" className="text-xs hover:text-yellow">Terms of Service</Link>
                        <Link  href="#" className="text-xs hover:text-yellow">Cookies Settings</Link>
                    </div>
                    {/* <div className="flex space-x-4">
                        <Link  href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></Link>
                        <Link  href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></Link>
                        <Link  href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></Link>
                        <Link  href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></Link>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;