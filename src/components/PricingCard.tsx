import { motion } from "framer-motion";

interface PricingCardProps {
  item: string;
  price: string;
  index: number;
}

const PricingCard = ({ item, price, index }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="pricing-card flex items-center justify-between rounded-lg"
    >
      <span className="text-lg font-light text-foreground">{item}</span>
      <span className="text-xl font-semibold text-primary">{price}</span>
    </motion.div>
  );
};

export default PricingCard;
