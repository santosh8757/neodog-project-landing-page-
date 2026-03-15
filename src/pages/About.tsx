import { motion } from "framer-motion";
import { Target, Eye, BookOpen } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Target, title: "Our Mission", desc: "To foster a culture of innovation and technical excellence among polytechnic students by providing platforms for learning, collaboration, and skill development." },
  { icon: Eye, title: "Our Vision", desc: "To become the leading student-driven technical community that bridges academic learning with industry-ready skills and real-world impact." },
  { icon: BookOpen, title: "What We Offer", desc: "Hands-on workshops, mentorship programs, hackathons, project showcases, and a vibrant community of like-minded peers passionate about technology." },
];

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const About = () => (
  <>
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold md:text-5xl">
          About Us
        </motion.h1>
        <p className="mx-auto mt-4 max-w-2xl opacity-90">
          We are a community of passionate polytechnic students dedicated to building innovative solutions and growing together.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg border border-border bg-card p-8"
            >
              <div className="mb-4 inline-flex rounded-md bg-secondary/10 p-3">
                <v.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{v.title}</h3>
              <p className="text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-surface-alt py-20">
      <div className="container max-w-3xl">
        <SectionHeading title="Our Story" />
        <div className="space-y-4 text-muted-foreground">
          <p>Founded in 2020, PolyTechHub started as a small group of students who wanted to go beyond classroom learning. What began as weekend coding sessions quickly grew into a full-fledged technical community.</p>
          <p>Today, we have over 200 active members across multiple departments, with projects spanning web development, IoT, robotics, AI/ML, and more. Our members have won national hackathons, contributed to open-source projects, and launched startups.</p>
          <p>We believe that every student has the potential to create something remarkable — they just need the right environment, mentorship, and community to thrive.</p>
        </div>
      </div>
    </section>
  </>
);

export default About;
