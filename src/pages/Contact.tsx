import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contacts = [
    { name: "Lebogang Mampho", phone: "065 978 8701" },
    { name: "Fhulufhelo Tambani", phone: "060 706 8221" },
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
            For More Information and Orders
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground font-light"
          >
            Get in touch with us today
          </motion.p>
        </div>
      </section>

      {/* Contact Details */}
      <AnimatedSection className="section-padding pt-12">
        <div className="container-premium">
          <div className="max-w-2xl mx-auto">
            {/* Personal Contacts */}
            <div className="space-y-8 mb-16">
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 p-6 bg-card rounded-lg border border-border/50 hover:border-primary transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">
                      {contact.name}
                    </h3>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="text-muted-foreground hover:text-primary transition-colors font-light"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-6 bg-card rounded-lg border border-border/50 hover:border-primary transition-colors mb-6"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">Email</h3>
                <a
                  href="mailto:Metsi012pta@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors font-light"
                >
                  Metsi012pta@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Business WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-6 bg-card rounded-lg border border-border/50 hover:border-primary transition-colors mb-6"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">
                  Business WhatsApp
                </h3>
                <a
                  href="https://wa.me/27659043472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors font-light"
                >
                  065 904 3472
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-6 bg-card rounded-lg border border-border/50 mb-16"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">
                  Location
                </h3>
                <p className="text-muted-foreground font-light">
                  Capital city. Pretoria, South Africa
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 font-medium">
                Follow Us
              </h3>
              <div className="flex items-center justify-center gap-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-card border border-border/50 flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://wa.me/27659043472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-card border border-border/50 flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                >
                  <MessageCircle size={24} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Contact;
