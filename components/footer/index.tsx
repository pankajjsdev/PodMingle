import Image from "next/image";
import Link from "next/link";
import { ButtonPrimary } from "../common/Button";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-20">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-3">
                    <div className="">
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
                    <div>
                        <h4 className="font-semibold">Menu</h4>
                        <ul className="mt-4 space-y-2">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Episodes</li>
                            <li>Blog</li>
                            <li>Pricing</li>
                            <li>Contact Us</li>
                            <li>Sign up</li>
                            <li>Sign in</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold">CMS Page</h4>
                        <ul className="mt-4 space-y-2">
                            <li>Episodes details</li>
                            <li>Blog details</li>
                            <li>Team details</li>
                            <li>Pricing details</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold">Utility Page</h4>
                        <ul className="mt-4 space-y-2">
                            <li>Start Here</li>
                            <li>Style Guide</li>
                            <li>404 Not Found</li>
                            <li>Password Protected</li>
                            <li>Licenses</li>
                            <li>Terms & Condition</li>
                            <li>Privacy Policy</li>
                            <li>Changelog</li>
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
                <div className="my-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-xs mb-4 sm:mb-0">&copy; 2024 Pod mingle. All rights reserved.</p>
                    <div className="flex space-x-6 mb-4 sm:mb-0">
                        <a href="#" className="text-xs">Privacy Policy</a>
                        <a href="#" className="text-xs">Terms of Service</a>
                        <a href="#" className="text-xs">Cookies Settings</a>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;