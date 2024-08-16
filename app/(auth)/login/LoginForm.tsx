'use client'
import React, { FormEvent, useState } from 'react'
import { ButtonPrimary } from "@/components/common/Button"
import Link from 'next/link'
import apiFetch from '@/services/api'
import { END_POINTS } from '@/services/END_POINT'

function LoginForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({})

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrors({}) // Reset errors

        const formData = new FormData(e.currentTarget)
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        // Simple validation
        if (!email) {
            setErrors((prev) => ({ ...prev, email: 'Email is required' }))
            return
        }
        if (!password) {
            setErrors((prev) => ({ ...prev, password: 'Password is required' }))
            return
        }

        try {
            setIsLoading(true)
            const body = { email, password }
            const response = await apiFetch(END_POINTS.USER.LOGIN, { body })

            // Handle successful login response
            console.log('Login successful', response)

        } catch (error) {
            // Handle API errors
            setErrors((prev) => ({
                ...prev,
                general: 'Login failed. Please check your credentials and try again.',
            }))
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <form className="flex flex-col w-full space-y-6 p-8" onSubmit={handleSubmit} noValidate>
                <div>
                    <input
                        name="email"
                        required
                        type="email"
                        placeholder="Email"
                        className="border w-full py-2 px-4 rounded-full"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div>
                    <input
                        name="password"
                        type="password"
                        required
                        placeholder="Password"
                        className="border w-full py-2 px-4 rounded-full"
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}
                <ButtonPrimary title="Sign in" isLoading={isLoading} />

                <Link href="/signup">You Don&apos;t have an account? Sign Up</Link>
            </form>
        </>
    )
}

export default LoginForm
