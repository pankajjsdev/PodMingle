'use client'

import { ButtonPrimary } from '@/components/common/Button'
import Link from 'next/link'
import React from 'react'
import { signin } from "@/app/actions"

function FormLogin() {
    return (
        <div className="my-6">
            <form action={signin} className="flex flex-col w-full space-y-6 p-8">
               
                <div>
                    <input 
                        placeholder="Email" 
                        className="border w-full py-2 px-4 rounded-full" 
                        name="email" 
                        type="email"
                    />
                </div>
                <div>
                    <input 
                        placeholder="Password" 
                        className="border w-full py-2 px-4 rounded-full" 
                        name="password"
                    />
                </div>
                <ButtonPrimary title="Sign in" />
                <Link href="/signup">You Don&apos;t have an account? Sign Up</Link>
            </form>
        </div>
    )
}

export default FormLogin
