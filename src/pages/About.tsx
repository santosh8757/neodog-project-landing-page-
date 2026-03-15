import { motion } from "framer-motion";
import { Target, Eye, BookOpen, Award, Briefcase, Heart } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Target, title: "Our Mission", desc: "To provide quality technical education and foster a culture of innovation, creativity, and industry-readiness among polytechnic students." },
  { icon: Eye, title: "Our Vision", desc: "To be the premier polytechnic institution in Odisha, producing skilled professionals who drive technological advancement and social progress." },
  { icon: BookOpen, title: "What We Offer", desc: "Diploma programs in multiple engineering disciplines, hands-on workshops, industry mentorship, hackathons, and a vibrant student community." },
];

const strengths = [
  { icon: Award, title: "Accredited Programs", desc: "AICTE-approved diploma courses with a focus on practical skills and employability." },
  { icon: Briefcase, title: "Industry Connect", desc: "Strong ties with industry partners for internships, placements, and guest lectures." },
  { icon: Heart, title: "Student Welfare", desc: "Scholarships, hostel facilities, counseling support, and an inclusive campus culture." },
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
          C.V. Raman Polytechnic, Odisha — building tomorrow's engineers and innovators through quality technical education.
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
              className="rounded-lg border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
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
          <p>C.V. Raman Polytechnic was established with a vision to provide accessible, high-quality technical education to the students of Odisha. Named after the Nobel laureate Sir C.V. Raman, our institution embodies the spirit of scientific inquiry and innovation.</p>
          <p>Over the years, we have grown into a thriving academic community with over 500 students across departments including Computer Science, Electronics, Mechanical, Civil, and Electrical Engineering. Our graduates serve in leading organizations and many have become successful entrepreneurs.</p>
          <p>We believe that every student has the potential to create something remarkable — they just need the right environment, mentorship, and community to thrive. That's what we strive to provide every single day.</p>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <SectionHeading title="Our Strengths" subtitle="What sets C.V. Raman Polytechnic apart." />
        <div className="grid gap-8 md:grid-cols-3">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-md bg-secondary/10 p-3">
                <s.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
