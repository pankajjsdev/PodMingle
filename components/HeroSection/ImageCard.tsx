'use client'
import { motion } from "framer-motion"
import { H1 } from "../common/Typography"

function ImageCard() {
  return (
    <motion.div
    initial={{ opacity: 0, x: -80 }}
    animate={{ opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } }}
    className="hidden lg:flex flex-col p-4 w-80 h-40 shadow-2xl absolute bottom-8 -left-20 bg-white rounded-lg">

    <H1>Platform</H1>
    <h4>Lorem ipsum</h4>
    <h4>Lorem ipsum</h4>

</motion.div>
  )
}

export default ImageCard