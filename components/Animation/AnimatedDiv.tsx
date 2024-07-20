'use client'
import { AnimatePresence, motion } from "framer-motion"
import { ReactNode } from "react"

const AnimatedDiv = ({ children, className = '' }: { children: ReactNode, className?: string }) => {

    return (
        <AnimatePresence>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ delay: 0.25, duration: 0.8, ease: "easeInOut" }}
                initial="hidden"
                whileInView="visible"
                className={`${className}`}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )

}

export default AnimatedDiv