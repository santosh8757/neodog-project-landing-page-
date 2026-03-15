import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const team = [
  { name: "Arjun Patel", role: "President", dept: "Computer Engineering", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
  { name: "Priya Sharma", role: "Vice President", dept: "Electronics & Telecom", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" },
  { name: "Rahul Desai", role: "Technical Lead", dept: "Information Technology", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" },
  { name: "Sneha Kulkarni", role: "Event Coordinator", dept: "Mechanical Engineering", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" },
  { name: "Vikram Singh", role: "Design Lead", dept: "Computer Engineering", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" },
  { name: "Ananya Rao", role: "Web Developer", dept: "Information Technology", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80" },
  { name: "Karan Mehta", role: "IoT Specialist", dept: "Electronics & Telecom", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80" },
  { name: "Divya Nair", role: "Content Head", dept: "Computer Engineering", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80" },
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
