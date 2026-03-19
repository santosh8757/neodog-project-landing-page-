import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Cpu, Users, Trophy, Lightbulb, Rocket, GraduationCap, Wrench } from "lucide-react";

const team = [
  { name: "Arjun Patel", reg: "2024001", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Priya Sharma", reg: "2024002", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Rahul Desai", reg: "2024003", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Sneha Kulkarni", reg: "2024004", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
  { name: "Vikram Singh", reg: "2024005", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Ananya Rao", reg: "2024006", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
  { name: "Karan Mehta", reg: "2024007", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" },
  { name: "Divya Nair", reg: "2024008", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" },
  { name: "Rohan Mishra", reg: "2024009", photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80" },
  { name: "Meera Joshi", reg: "2024010", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
  { name: "Amit Verma", reg: "2024011", photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&q=80" },
  { name: "Pooja Reddy", reg: "2024012", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
  { name: "Sanjay Kumar", reg: "2024013", photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80" },
  { name: "Neha Gupta", reg: "2024014", photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80" },
];
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/cvrp-campus.jpg";

const stats = [
  { icon: Users, label: "Active Students", value: "500+" },
  { icon: Trophy, label: "Awards Won", value: "35+" },
  { icon: Code, label: "Projects Built", value: "80+" },
  { icon: Cpu, label: "Workshops Held", value: "50+" },
];

const highlights = [
  { icon: GraduationCap, title: "Academic Excellence", desc: "Diploma programs in Computer Science, Electronics, Mechanical, Civil, and Electrical Engineering with industry-aligned curriculum." },
  { icon: Lightbulb, title: "Innovation Lab", desc: "A dedicated space for students to prototype and experiment with cutting-edge technologies like IoT, robotics, and AI." },
  { icon: Rocket, title: "Hackathons & Competitions", desc: "Regular hackathons and inter-college technical competitions that challenge students to solve real-world problems." },
  { icon: Wrench, title: "Hands-on Training", desc: "Practical workshops, industrial visits, and project-based learning that bridge the gap between theory and industry." },
  { icon: Code, title: "Open Source & Projects", desc: "Students contribute to open-source projects and build tools that benefit the wider community and their portfolios." },
  { icon: Users, title: "Student Community", desc: "A vibrant network of peers, mentors, and alumni who collaborate, learn together, and grow professionally." },
];

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <img src={heroBg} alt="C.V. Raman Polytechnic campus" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[#0000FF]/10" />
      <div className="container relative z-10 py-20 text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
        >
          🎓 Welcome to C.V. Raman Polytechnic, Odisha
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl"
        >
          Empowering Students
          <br className="hidden md:block" />
          Through Innovation & Skills
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 max-w-xl text-lg opacity-90"
        >
          Discover the talent and technical excellence of our polytechnic community. Explore student projects, achievements, and the innovation that drives us forward.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/projects">Our Student Projects</Link>
          </Button>
          <Button variant="hero" size="lg" asChild>
            <Link to="/team">Meet Our Team</Link>
          </Button>
          <Button variant="hero" size="lg" asChild>
            <Link to="/events">Events</Link>
          </Button>
          <Button variant="hero" size="lg" asChild>
            <Link to="/gallery">Gallery</Link>
          </Button>
          <Button variant="hero" size="lg" asChild>
            <Link to="/teacher-review">Teacher Review</Link>
          </Button>
          <Button variant="hero" size="lg" asChild>
            <Link to="/student-review">Student Review</Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-surface-alt py-14">
      <div className="container grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center rounded-lg bg-card p-6 shadow-sm"
          >
            <s.icon className="mb-2 h-8 w-8 text-secondary" />
            <span className="text-2xl font-bold">{s.value}</span>
            <span className="text-sm text-muted-foreground">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>




    {/* CTA */}
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Ready to Showcase Your Skills?</h2>
        <p className="mx-auto mt-3 max-w-lg opacity-90">
          Whether you're into coding, robotics, IoT, or design — there's a place for you at C.V. Raman Polytechnic.
        </p>
        <Button variant="hero" size="lg" className="mt-8" asChild>
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  </>
);

export default Index;
