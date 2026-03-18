import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bot, Globe, Brain, Settings, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import neodogHero from "@/assets/neodog-hero.png";

const features = [
  { icon: Bot, label: "Robotics", desc: "Advanced servo-driven quadruped locomotion system" },
  { icon: Globe, label: "IoT", desc: "Cloud-connected sensors for real-time monitoring" },
  { icon: Brain, label: "Artificial Intelligence", desc: "Computer vision and autonomous navigation" },
  { icon: Settings, label: "Automation", desc: "Self-balancing and obstacle avoidance" },
];

const gallery = [
  { img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80", alt: "Robot dog prototype" },
  { img: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=600&q=80", alt: "Circuit assembly" },
  { img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&q=80", alt: "Testing phase" },
];

const reviews = [
  { name: "Arjun Patel", role: "Student, ECE Dept.", text: "Working on NeoDog taught me more about embedded systems than an entire semester of lectures. The hands-on experience is invaluable.", rating: 5 },
  { name: "Dr. Sneha Rao", role: "Faculty Advisor", text: "NeoDog showcases what students can achieve when given the right tools and mentorship. A truly impressive interdisciplinary project.", rating: 5 },
];

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary py-24 text-primary-foreground md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(250_80%_70%/0.3),transparent_60%)]" />
      <div className="container relative z-10 flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-center lg:text-left"
        >
          <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            🤖 C.V. Raman Polytechnic Project
          </span>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight md:text-6xl">
            NeoDog – Smart
            <br />
            Robot Dog
          </h1>
          <p className="mt-5 text-lg opacity-90">
            An innovative robotics project using AI, IoT, and Automation — designed and built by students of C.V. Raman Polytechnic, Odisha.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button size="lg" className="bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 shadow-lg" asChild>
              <Link to="/projects">
                Explore Project <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-64 md:w-80 lg:w-96"
        >
          <img src={neodogHero} alt="NeoDog robot dog" className="drop-shadow-2xl" />
        </motion.div>
      </div>
    </section>

    {/* Icon Features */}
    <section className="py-20">
      <div className="container">
        <h2 className="mb-2 text-center text-3xl font-bold">Core Technologies</h2>
        <p className="mx-auto mb-12 max-w-lg text-center text-muted-foreground">
          NeoDog combines multiple cutting-edge technologies into one platform.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="mx-auto mb-4 inline-flex rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-4">
                <f.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-1 text-lg font-bold">{f.label}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Gallery Preview */}
    <section className="bg-surface-alt py-20">
      <div className="container">
        <h2 className="mb-2 text-center text-3xl font-bold">Project Gallery</h2>
        <p className="mx-auto mb-12 max-w-lg text-center text-muted-foreground">
          A glimpse into the build process and final prototype.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <motion.div
              key={g.alt}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl shadow-md"
            >
              <img src={g.img} alt={g.alt} className="aspect-video w-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Reviews */}
    <section className="py-20">
      <div className="container">
        <h2 className="mb-2 text-center text-3xl font-bold">What People Say</h2>
        <p className="mx-auto mb-12 max-w-lg text-center text-muted-foreground">
          Feedback from students and faculty involved in the project.
        </p>
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-4 text-sm text-muted-foreground italic">"{r.text}"</p>
              <div>
                <p className="font-bold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">Read All Reviews</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-gradient-to-r from-primary to-accent py-16 text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Interested in NeoDog?</h2>
        <p className="mx-auto mt-3 max-w-lg opacity-90">
          Reach out to learn more about the project, collaborate, or see a live demo.
        </p>
        <Button size="lg" className="mt-8 bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 shadow-lg" asChild>
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  </>
);

export default Index;
