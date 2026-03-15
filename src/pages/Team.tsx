import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const team = [
  { name: "Arjun Patel", role: "President", dept: "Computer Engineering", initials: "AP" },
  { name: "Priya Sharma", role: "Vice President", dept: "Electronics & Telecom", initials: "PS" },
  { name: "Rahul Desai", role: "Technical Lead", dept: "Information Technology", initials: "RD" },
  { name: "Sneha Kulkarni", role: "Event Coordinator", dept: "Mechanical Engineering", initials: "SK" },
  { name: "Vikram Singh", role: "Design Lead", dept: "Computer Engineering", initials: "VS" },
  { name: "Ananya Rao", role: "Web Developer", dept: "Information Technology", initials: "AR" },
  { name: "Karan Mehta", role: "IoT Specialist", dept: "Electronics & Telecom", initials: "KM" },
  { name: "Divya Nair", role: "Content Head", dept: "Computer Engineering", initials: "DN" },
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
          Meet the passionate individuals driving innovation and community building.
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
              className="group rounded-lg border border-border bg-card p-6 text-center transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10 text-xl font-bold text-secondary">
                {m.initials}
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
