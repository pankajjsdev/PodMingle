
import Link from 'next/link'
import React from 'react'
import { ButtonPrimary, ButtonSecondary } from '../common/Button'
import MobileNav from './MobileNav'

const links = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Episodes', path: '/episodes' },
    { title: 'Pages', path: '/pages' },
    { title: 'Blog', path: '/blog' }
]

const Header = () => {
    return (
        <header className='bg-white'>
            <div className='container mx-auto p-4 flex items-center justify-between'>
                {/* Header logo */}
                <h1 className='text-2xl font-bold'>
                    <Link href="/">Logo</Link>
                </h1>

                {/* Desktop Navigation and Action Buttons */}
                <div className='lg:flex items-center space-x-8 hidden'>
                    <nav>
                        <ul className='flex space-x-8'>
                            {links.map((link) => (
                                <li key={link.path}>
                                    <Link href={link.path} className='text-black-dark text-base font-normal hover:text-yellow'>
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className='flex space-x-4'>
                        <ButtonSecondary title='Log in' />
                        <ButtonPrimary title='Subscribe' />
                    </div>
                </div>

                <div className='lg:hidden'>
                <MobileNav links={links} />
                </div>

            </div>
        </header>
    )
}

export default Header
