import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const upcoming = [
  { title: "CodeSprint 2026", date: "April 12, 2026", time: "9:00 AM – 9:00 PM", location: "Main Auditorium", desc: "A 12-hour hackathon where teams compete to build innovative solutions." },
  { title: "IoT Workshop", date: "April 20, 2026", time: "10:00 AM – 1:00 PM", location: "Lab 204", desc: "Hands-on workshop on building IoT projects with ESP32 and sensors." },
  { title: "Tech Talk: AI in Healthcare", date: "May 5, 2026", time: "2:00 PM – 4:00 PM", location: "Seminar Hall", desc: "Industry expert shares insights on AI applications in healthcare." },
];

const past = [
  { title: "RoboWars 2025", date: "December 2025", desc: "An inter-college robotics competition with 30+ participating teams." },
  { title: "Web Dev Bootcamp", date: "November 2025", desc: "A 3-day intensive workshop on modern web development with React and Node.js." },
  { title: "Open Source Day", date: "October 2025", desc: "Students contributed to open-source projects and learned about Git workflows." },
];

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const Events = () => (
  <>
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold md:text-5xl">
          Events
        </motion.h1>
        <p className="mx-auto mt-4 max-w-2xl opacity-90">
          Workshops, hackathons, and tech talks that keep our community learning.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <SectionHeading title="Upcoming Events" subtitle="Mark your calendar and join us!" />
        <div className="grid gap-6 md:grid-cols-3">
          {upcoming.map((e, i) => (
            <motion.div
              key={e.title}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="mb-3 text-lg font-bold">{e.title}</h3>
              <div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 text-secondary" /> {e.date}
              </div>
              <div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-secondary" /> {e.time}
              </div>
              <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-secondary" /> {e.location}
              </div>
              <p className="text-sm text-muted-foreground">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-surface-alt py-20">
      <div className="container">
        <SectionHeading title="Past Events" />
        <div className="grid gap-6 md:grid-cols-3">
          {past.map((e, i) => (
            <motion.div
              key={e.title}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="mb-1 font-bold">{e.title}</h3>
              <p className="mb-2 text-xs text-secondary">{e.date}</p>
              <p className="text-sm text-muted-foreground">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Events;
