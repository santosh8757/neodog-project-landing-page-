import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";

const projects = [
  { title: "Smart Campus IoT", desc: "An IoT-based system for monitoring classroom temperature, humidity, and occupancy in real time.", tags: ["IoT", "Arduino", "React"], img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&q=80" },
  { title: "AI Attendance System", desc: "Face-recognition-based attendance tracker using OpenCV and deep learning models.", tags: ["Python", "AI/ML", "OpenCV"], img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&q=80" },
  { title: "E-Waste Tracker", desc: "A web platform to catalog and responsibly dispose of electronic waste across campus.", tags: ["React", "Node.js", "MongoDB"], img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=500&q=80" },
  { title: "Line-Following Robot", desc: "An autonomous robot built for national robotics competitions with PID control.", tags: ["Robotics", "C++", "Embedded"], img: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=500&q=80" },
  { title: "Student Portal", desc: "A centralized portal for accessing notes, timetables, and exam results.", tags: ["React", "Firebase", "Tailwind"], img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80" },
  { title: "Health Monitor Band", desc: "A wearable device that tracks heart rate and sends alerts to a mobile app.", tags: ["IoT", "Flutter", "BLE"], img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80" },
  { title: "Solar Energy Monitor", desc: "Real-time monitoring dashboard for solar panel output and energy consumption.", tags: ["IoT", "Python", "Dashboard"], img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&q=80" },
  { title: "Smart Irrigation System", desc: "Automated irrigation using soil moisture sensors and weather data integration.", tags: ["Arduino", "IoT", "Agriculture"], img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&q=80" },
  { title: "Campus Navigation App", desc: "Indoor navigation app for the campus using Bluetooth beacons and mapping.", tags: ["Flutter", "BLE", "Maps"], img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80" },
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
          Explore innovative projects built by students of C.V. Raman Polytechnic, Odisha.
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
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-bold">{p.title}</h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="border-0 bg-secondary/10 text-xs text-secondary">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Projects;
