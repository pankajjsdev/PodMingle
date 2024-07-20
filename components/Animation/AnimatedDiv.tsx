'use client'
import { AnimatePresence, motion } from "framer-motion"
import { ReactNode } from "react"

const AnimatedDiv = ({ children, className = '' }: { children: ReactNode, className?: string }) => {

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } }}
                className={`${className}`}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )

}

export default AnimatedDiv