import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import WaterDroplet from "@/components/WaterDroplet";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const founders = [
    { name: "Lebogang Mampho", instagram: "@quintonmampho" },
    { name: "Fhulufhelo Tambani", instagram: "@fhulu.t" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingWhatsApp />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-20 section-padding">
        <div className="container-premium text-center">
          {/* Droplet Logo */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mb-12"
          >
            <WaterDroplet size={160} className="text-foreground mx-auto" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-foreground leading-tight"
          >
            'A MONATE METSI 012
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground font-light mb-12 max-w-md mx-auto"
          >
            Stay Hydrated and Drink Metsi.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              to="/products"
              className="btn-outline inline-block rounded-none"
            >
              View Our Sizes
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <AnimatedSection className="section-padding bg-card">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-primary text-sm uppercase tracking-[0.3em] mb-6 block font-medium"
            >
              Our Purpose
            </motion.span>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-foreground">
              Youth Employment
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              'Metsi' meaning water, is a brand formed by two young entrepreneurs collaborating into bringing a product that will forever be in demand, the purpose of this brand is to create youth employment especially after this Pandemic.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Founders Section */}
      <AnimatedSection className="section-padding">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-primary text-sm uppercase tracking-[0.3em] mb-6 block font-medium"
            >
              The Founders
            </motion.span>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-foreground">
              Meet The Team
            </h2>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {founders.map((founder, index) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  {/* Avatar placeholder */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                    <WaterDroplet size={40} className="text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {founder.name}
                  </h3>

                  <a
                    href={`https://instagram.com/${founder.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-light"
                  >
                    <Instagram size={16} />
                    {founder.instagram}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Index;
