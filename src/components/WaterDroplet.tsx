import { motion } from "framer-motion";

interface WaterDropletProps {
  className?: string;
  size?: number;
}

const WaterDroplet = ({ className = "", size = 200 }: WaterDropletProps) => {
  return (
    <motion.svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 100 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.path
        d="M50 0C50 0 10 55 10 85C10 107.091 27.909 125 50 125C72.091 125 90 107.091 90 85C90 55 50 0 50 0Z"
        fill="currentColor"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      {/* Inner highlight */}
      <motion.ellipse
        cx="35"
        cy="70"
        rx="8"
        ry="12"
        fill="white"
        fillOpacity="0.3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      />
    </motion.svg>
  );
};

export default WaterDroplet;
