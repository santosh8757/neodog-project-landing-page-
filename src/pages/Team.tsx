import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const team = [
  { name: "Arjun Patel", reg: "2024001", role: "President", dept: "Computer Engineering" },
  { name: "Priya Sharma", reg: "2024002", role: "Vice President", dept: "Electronics & Telecom" },
  { name: "Rahul Desai", reg: "2024003", role: "Technical Lead", dept: "Information Technology" },
  { name: "Sneha Kulkarni", reg: "2024004", role: "Event Coordinator", dept: "Mechanical Engineering" },
  { name: "Vikram Singh", reg: "2024005", role: "Design Lead", dept: "Computer Engineering" },
  { name: "Ananya Rao", reg: "2024006", role: "Web Developer", dept: "Information Technology" },
  { name: "Karan Mehta", reg: "2024007", role: "IoT Specialist", dept: "Electronics & Telecom" },
  { name: "Divya Nair", reg: "2024008", role: "Content Head", dept: "Computer Engineering" },
];

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const Team = () => (
  <>
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold md:text-5xl">
          Our Team
        </motion.h1>
        <p className="mx-auto mt-4 max-w-2xl opacity-90">
          Meet the passionate students of C.V. Raman Polytechnic driving innovation and community building.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <SectionHeading title="Core Team Members" subtitle="Dedicated students who lead workshops, organize events, and mentor peers." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-lg border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-secondary/20">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold">{m.name}</h3>
              <p className="text-sm font-medium text-secondary">{m.role}</p>
              <p className="mt-1 text-xs text-muted-foreground">{m.dept}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Team;
