import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Cpu, Users, Trophy, Lightbulb, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
{ icon: Users, label: "Active Members", value: "200+" },
{ icon: Trophy, label: "Awards Won", value: "35+" },
{ icon: Code, label: "Projects Built", value: "80+" },
{ icon: Cpu, label: "Workshops Held", value: "50+" }];


const highlights = [
{ icon: Lightbulb, title: "Innovation Lab", desc: "A dedicated space for students to prototype and experiment with cutting-edge technologies." },
{ icon: Rocket, title: "Hackathons", desc: "Regular hackathons that challenge students to solve real-world problems in 24 hours." },
{ icon: Code, title: "Open Source", desc: "Contributing to open-source projects and building tools that benefit the wider community." }];


const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const Index = () =>
<>
    {/* Hero */}
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <img src={heroBg} alt="Students in innovation lab" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/70" />
      <div className="container relative z-10 py-20 text-primary-foreground">
        <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">C.V. RAMAN POLYTECHNIC ODISHA

        <br className="hidden md:block" />
          Showcase Your Skills.
        </motion.h1>
        <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-5 max-w-xl text-lg opacity-90">
        
          Join the polytechnic student community where technical excellence meets collaboration. Share projects, learn together, and grow.
        </motion.p>
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 flex flex-wrap gap-4 text-secondary">
        
          <Button variant="hero" size="lg" asChild>
            <Link to="/projects">OUR STUDENT</Link>
          </Button>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">PROJECT</Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-surface-alt py-14">
      <div className="container grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s, i) =>
      <motion.div
        key={s.label}
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        className="flex flex-col items-center rounded-lg bg-card p-6 shadow-sm">
        
            <s.icon className="mb-2 h-8 w-8 text-secondary" />
            <span className="text-2xl font-bold">{s.value}</span>
            <span className="text-sm text-muted-foreground">{s.label}</span>
          </motion.div>
      )}
      </div>
    </section>

    {/* Highlights */}
    <section className="py-20">
      <div className="container">
        <SectionHeading title="What We Do" subtitle="From innovation labs to hackathons, we provide students with platforms to learn, create, and lead." />
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((h, i) =>
        <motion.div
          key={h.title}
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-md">
          
              <div className="mb-4 inline-flex rounded-md bg-secondary/10 p-3">
                <h.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </motion.div>
        )}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Ready to showcase your skills?</h2>
        <p className="mx-auto mt-3 max-w-lg opacity-90">
          Whether you're into coding, robotics, IoT, or design — there's a place for you here.
        </p>
        <Button variant="hero" size="lg" className="mt-8" asChild>
          <Link to="/contact">Get Involved</Link>
        </Button>
      </div>
    </section>
  </>;


export default Index;