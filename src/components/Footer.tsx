import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12 border-t border-border/50"
    >
      <div className="container-premium text-center">
        <p className="text-sm text-muted-foreground font-light">
          Built by{" "}
          <a
            href="https://architeq.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline transition-colors"
          >
            Architeq Web Agency
          </a>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
