'use client'
import { motion } from "framer-motion"
import { H1, H4 } from "@/components/common/Typography"
import Image from "next/image"
import Mic from "@/components/Lottie/Mic"

function ImageCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.5, duration: 1, ease: "easeInOut" } }}
      className="hidden lg:flex flex-col items-end p-4 w-80 h-40 shadow-2xl absolute bottom-8 -left-20 bg-white rounded-lg">
      <div className="flex items-center">
        <H4>OHHO </H4>
        <Mic />
      </div>
    </motion.div>
  )
}

export default ImageCard