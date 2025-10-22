/* eslint-disable jsx-a11y/img-redundant-alt */
import { motion } from "framer-motion";

function Home2() {
  return (
    <div className="mt-10 bg-[#8AB1DB] w-screen -mx-[6%] min-h-[400px] lg:h-[600px] flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 relative overflow-hidden py-8 lg:py-0">
      {/* Left Image */}
      <motion.img
        src="./left.png"
        alt="Left product image"
        className="w-full max-w-[200px] sm:max-w-[300px] lg:w-[453px] h-[200px] sm:h-[300px] lg:h-full object-contain lg:object-cover rounded-lg order-1 lg:order-1 mb-4 lg:mb-0"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Text Section */}
      <motion.div
        className="text-center max-w-md order-2 lg:order-2 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="leading-tight">
          <h1 className="text-[#005BBC] tracking-[2px] sm:tracking-[4px] lg:tracking-[6px] text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center lg:text-left font-bold">
            One Hoodie
          </h1>
          <p className="mt-3 sm:mt-5 font-medium text-xl sm:text-2xl md:text-3xl lg:text-5xl text-center lg:text-left">
            Thousands of Looks{" "}
            <span className="block mt-2 sm:mt-3">Start the Style.</span>
          </p>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.img
        src="./home2.png"
        alt="Right product image"
        className="w-full max-w-[200px] sm:max-w-[300px] lg:w-[453px] h-[200px] sm:h-[300px] lg:h-full object-contain lg:object-cover rounded-lg order-3 lg:order-3 mt-4 lg:mt-0"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}

export default Home2;
