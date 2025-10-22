import { motion } from "framer-motion";

function HeroImage() {
  return (
    <motion.div
      className="flex justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.img
        src="./204cbd697b5100b59bf474b2e1de233048019bda.png"
        alt="Hero Product"
        className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      />
    </motion.div>
  );
}

export default HeroImage;
