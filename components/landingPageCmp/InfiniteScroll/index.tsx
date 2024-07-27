'use client'

import Section from "@/components/common/Section";
import { H4 } from "@/components/common/Typography";
import Image from "next/image";
import { motion } from "framer-motion";

function Index() {
  return (
    <Section>
      <H4 className="text-center font-bold">
        Trusted by 7000+ podcasters and brands worldwide
      </H4>
      <div className="overflow-hidden mt-16">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex space-x-5 opacity-50"
        >
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((img, index) => {
              return (
                <>
                  <Image
                    src={"/images/common/brand1.png"}
                    width={180}
                    height={80}
                    alt=""
                    className="bg-contain"
                  />
                  <Image
                    src={"/images/common/brand2.png"}
                    width={180}
                    height={80}
                    alt=""
                    className="bg-contain"
                  />

                  <Image
                    src={"/images/common/brand3.png"}
                    width={180}
                    height={80}
                    alt=""
                    className="bg-contain"
                  />
                  <Image
                    src={"/images/common/brand4.png"}
                    width={180}
                    height={80}
                    alt=""
                    className="bg-contain"
                  />
                </>
              )
            })
          }

        </motion.div>
      </div>
    </Section>
  );
}

export default Index;
