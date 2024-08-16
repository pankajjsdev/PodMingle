import { cn } from '@/utils/cn'
import React from 'react'
import { LuLoader } from "react-icons/lu";

type PropsButton = {
    className?: string,
    title: string,
    isLoading?:boolean
}

export const ButtonPrimary = ({ title, className = '', isLoading }: PropsButton) => {
    return (
        <>
            <button disabled={isLoading} className={cn(`flex items-center justify-center cursor-pointer py-4 px-8 rounded-full border-2  border-yellow bg-yellow hover:border-gray-dark hover:bg-whitesmoke text-base text-black-dark ${className}`)}> 
                {isLoading ? <><LuLoader/> Please wait</> : title  }</button>
        </>
    )
}


export const ButtonSecondary = ({ title, className = '' }: PropsButton) => {
    return (
        <>
            <button className={cn(`py-4 px-8 rounded-full border-2  border-gray-dark hover:bg-yellow hover:border-yellow text-base text-black-dark ${className}`)}>{title}</button>
        </>
    )
}
