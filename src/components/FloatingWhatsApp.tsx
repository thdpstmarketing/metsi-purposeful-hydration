import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappNumber = "27659043472";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="floating-cta flex items-center gap-2"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">Order on WhatsApp</span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
