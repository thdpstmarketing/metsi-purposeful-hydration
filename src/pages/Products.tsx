import { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PricingCard from "@/components/PricingCard";
import AnimatedSection from "@/components/AnimatedSection";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stillWater = [
    { item: "6 × 500ML Still", price: "R51" },
    { item: "12 × 500ML Still", price: "R102" },
    { item: "24 × 500ML Still", price: "R204" },
    { item: "1 × 5L Still", price: "R25" },
    { item: "2 × 5L Still", price: "R45" },
  ];

  const sparklingWater = [
    { item: "1 × 500ML Sparkling", price: "R10" },
  ];

  const extras = [
    { item: "Ice Bag 1 × 2KG", price: "R22" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingWhatsApp />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container-premium text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-foreground mb-6"
          >
            Still and Sparkling Water
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground font-light"
          >
            Premium hydration for every occasion
          </motion.p>
        </div>
      </section>

      {/* Still Water Pricing */}
      <AnimatedSection className="section-padding pt-12">
        <div className="container-premium">
          <div className="max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block font-medium"
            >
              Still Water
            </motion.span>

            <div className="space-y-4">
              {stillWater.map((item, index) => (
                <PricingCard
                  key={item.item}
                  item={item.item}
                  price={item.price}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Sparkling Water Pricing */}
      <AnimatedSection className="py-16">
        <div className="container-premium">
          <div className="max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block font-medium"
            >
              Sparkling Water
            </motion.span>

            <div className="space-y-4">
              {sparklingWater.map((item, index) => (
                <PricingCard
                  key={item.item}
                  item={item.item}
                  price={item.price}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Extras */}
      <AnimatedSection className="py-16">
        <div className="container-premium">
          <div className="max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block font-medium"
            >
              Extras
            </motion.span>

            <div className="space-y-4">
              {extras.map((item, index) => (
                <PricingCard
                  key={item.item}
                  item={item.item}
                  price={item.price}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Delivery Note */}
      <AnimatedSection className="py-16">
        <div className="container-premium">
          <div className="max-w-2xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-muted-foreground font-medium italic"
            >
              Delivery charges may apply!!
            </motion.p>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Products;
