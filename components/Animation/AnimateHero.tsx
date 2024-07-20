'use client'
import { AnimatePresence, motion } from "framer-motion"
import { ReactNode } from "react"

const AnimatedHero = ({ children, className = '' }: { children: ReactNode, className?: string }) => {

    return (
        <AnimatePresence>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                initial="hidden"
                animate="visible"
                className={`${className}`}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )

}

export default AnimatedHero