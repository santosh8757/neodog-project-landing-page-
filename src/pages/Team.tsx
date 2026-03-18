import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const team = [
  { name: "Arjun Patel", reg: "2024001", role: "President", dept: "Computer Engineering", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Priya Sharma", reg: "2024002", role: "Vice President", dept: "Electronics & Telecom", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Rahul Desai", reg: "2024003", role: "Technical Lead", dept: "Information Technology", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Sneha Kulkarni", reg: "2024004", role: "Event Coordinator", dept: "Mechanical Engineering", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
  { name: "Vikram Singh", reg: "2024005", role: "Design Lead", dept: "Computer Engineering", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Ananya Rao", reg: "2024006", role: "Web Developer", dept: "Information Technology", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
  { name: "Karan Mehta", reg: "2024007", role: "IoT Specialist", dept: "Electronics & Telecom", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" },
  { name: "Divya Nair", reg: "2024008", role: "Content Head", dept: "Computer Engineering", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" },
  { name: "Rohan Mishra", reg: "2024009", role: "App Developer", dept: "Computer Engineering", photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80" },
  { name: "Meera Joshi", reg: "2024010", role: "Social Media Lead", dept: "Information Technology", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
  { name: "Amit Verma", reg: "2024011", role: "Hardware Lead", dept: "Electronics & Telecom", photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&q=80" },
  { name: "Pooja Reddy", reg: "2024012", role: "Treasurer", dept: "Mechanical Engineering", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
  { name: "Sanjay Kumar", reg: "2024013", role: "Workshop Lead", dept: "Computer Engineering", photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80" },
  { name: "Neha Gupta", reg: "2024014", role: "Documentation Head", dept: "Information Technology", photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80" },
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
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group flex aspect-[3/4] flex-col overflow-hidden rounded-lg border-2 border-foreground/15 bg-muted shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-shadow hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
            >
              <img
                src={m.photo}
                alt={m.name}
                className="w-full flex-1 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="px-2 py-3 text-center">
                <h3 className="text-sm font-bold text-foreground sm:text-base">{m.name}</h3>
                <p className="text-xs text-muted-foreground">Reg No: {m.reg}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Team;
