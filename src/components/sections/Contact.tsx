"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const body = `Hi Dimas,%0D%0A%0D%0AMy name is ${encodeURIComponent(name)} (${encodeURIComponent(email)}).%0D%0A%0D%0A${encodeURIComponent(message)}`;
    const mailtoUrl = `mailto:dimasalvinf@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.open(mailtoUrl, "_blank");

    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-muted font-mono text-sm mb-12 text-center">
            // let&apos;s build something together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="p-8 bg-card-bg border border-card-border rounded-xl"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-mono text-muted mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-background border border-card-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-mono text-muted mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-background border border-card-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-mono text-muted mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-background border border-card-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-mono text-muted mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-card-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent/10 border border-accent/30 text-accent rounded-lg font-mono text-sm hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 glow-accent"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
        </motion.div>
      </div>

      {/* Toast notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 left-1/2 z-50 flex items-center gap-3 px-5 py-3 bg-card-bg border border-accent/30 rounded-lg shadow-lg glow-accent"
          >
            <CheckCircle size={18} className="text-accent" />
            <span className="text-sm font-mono text-foreground">
              Email client opened — send your message!
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
