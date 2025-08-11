/* eslint-disable @next/next/no-img-element */
import { Badge, Button } from "#/base";
import { Brands } from "#/Brands";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function HeroSection({
  badge,
  title,
  description,
  buttons,
  ...rest
}) {
  return (
    <section {...rest} className="min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-20">
      <div className="container px-4 mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-5rem)] gap-6 md:gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center items-center lg:items-start gap-3 md:gap-4 text-center lg:text-left max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto order-1 lg:order-1">
            <motion.div
              className="cursor-pointer mt-4 sm:mt-6 md:mt-8"
              animate={{
                x: [0, 12],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Badge {...badge} />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-semibold text-center lg:text-left text-[#29375C] dark:text-white" style={{ lineHeight: 1.3 }}>
              {title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-center lg:text-left px-2 sm:px-0 text-[#29375C] dark:text-white">{description}</p>
            {buttons.length > 0 && (
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 sm:gap-4 mt-6 md:mt-8 w-full">
                {buttons.map((button, index) => (
                  <Button key={index} {...button} className="w-full sm:w-auto" />
                ))}
              </div>
            )}
          </div>

          {/* Right Mockups - Tablet & Desktop */}
          <div className="hidden md:flex flex-row items-center gap-3 md:gap-4 lg:gap-6 order-2 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.img
                src="./schedule_mockup.png"
                alt="Ứng dụng DigiSchool"
                className="w-40 md:w-48 lg:w-56 xl:w-64 h-auto drop-shadow-2xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.img
                src="./lessondetail_mockup.png"
                alt="Ứng dụng DigiSchool"
                className="w-40 md:w-48 lg:w-56 xl:w-64 h-auto drop-shadow-2xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>

          {/* Mobile Mockups - Stacked */}
          <div className="md:hidden flex flex-col items-center gap-3 sm:gap-4 order-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="./schedule_mockup.png"
                alt="Ứng dụng DigiSchool"
                className="w-36 sm:w-40 h-auto drop-shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src="./lessondetail_mockup.png"
                alt="Ứng dụng DigiSchool"
                className="w-36 sm:w-40 h-auto drop-shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
