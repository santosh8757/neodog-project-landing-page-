import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const images = [
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80", alt: "Students collaborating on project" },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80", alt: "Workshop session" },
  { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80", alt: "Working with technology" },
  { src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80", alt: "Team meeting" },
  { src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80", alt: "Coding session" },
  { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80", alt: "Electronics lab" },
  { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80", alt: "Group discussion" },
  { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80", alt: "Hackathon event" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold md:text-5xl">
            Gallery
          </motion.h1>
          <p className="mx-auto mt-4 max-w-2xl opacity-90">
            Moments captured from our workshops, hackathons, and community events.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionHeading title="Event Highlights" subtitle="Click on any image to view it in full." />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {images.map((img, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelected(i)}
                className="group overflow-hidden rounded-lg"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="aspect-square w-full object-cover transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 rounded-full bg-card p-2"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={images[selected].src.replace("w=600", "w=1200")}
              alt={images[selected].alt}
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
