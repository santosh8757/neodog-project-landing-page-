import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";

const projects = [
  { title: "Smart Campus IoT", desc: "An IoT-based system for monitoring classroom temperature, humidity, and occupancy in real time.", tags: ["IoT", "Arduino", "React"], color: "bg-secondary/10 text-secondary" },
  { title: "AI Attendance System", desc: "Face-recognition-based attendance tracker using OpenCV and deep learning models.", tags: ["Python", "AI/ML", "OpenCV"], color: "bg-secondary/10 text-secondary" },
  { title: "E-Waste Tracker", desc: "A web platform to catalog and responsibly dispose of electronic waste across campus.", tags: ["React", "Node.js", "MongoDB"], color: "bg-secondary/10 text-secondary" },
  { title: "Line-Following Robot", desc: "An autonomous robot built for national robotics competitions with PID control.", tags: ["Robotics", "C++", "Embedded"], color: "bg-secondary/10 text-secondary" },
  { title: "Student Portal", desc: "A centralized portal for accessing notes, timetables, and exam results.", tags: ["React", "Firebase", "Tailwind"], color: "bg-secondary/10 text-secondary" },
  { title: "Health Monitor Band", desc: "A wearable device that tracks heart rate and sends alerts to a mobile app.", tags: ["IoT", "Flutter", "BLE"], color: "bg-secondary/10 text-secondary" },
];

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const Projects = () => (
  <>
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold md:text-5xl">
          Student Projects
        </motion.h1>
        <p className="mx-auto mt-4 max-w-2xl opacity-90">
          Explore innovative projects built by our community members.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <SectionHeading title="Featured Projects" subtitle="From IoT to AI — our students are building the future." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <h3 className="mb-2 text-lg font-bold">{p.title}</h3>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="bg-secondary/10 text-secondary border-0 text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Projects;
