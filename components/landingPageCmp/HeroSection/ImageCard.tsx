'use client'
import { motion } from "framer-motion"
import { H1 } from "@/components/common/Typography"
import Image from "next/image"

function ImageCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.5, duration: 1, ease: "easeInOut" } }}
      className="hidden lg:flex flex-col items-end p-4 w-80 h-40 shadow-2xl absolute bottom-8 -left-20 bg-white rounded-lg">
      <Image
        src="/images/common/mic.jpg"
        width={120}
        height={100}
        alt=""
      />
    </motion.div>
  )
}

export default ImageCard