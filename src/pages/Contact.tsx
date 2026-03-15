import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => (
  <>
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold md:text-5xl">
          Contact Us
        </motion.h1>
        <p className="mx-auto mt-4 max-w-2xl opacity-90">
          Have questions about C.V. Raman Polytechnic? We'd love to hear from you.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Form */}
          <div>
            <SectionHeading title="Send a Message" />
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Your Name" className="bg-card" />
              <Input type="email" placeholder="Your Email" className="bg-card" />
              <Input placeholder="Subject" className="bg-card" />
              <Textarea placeholder="Your Message" rows={5} className="bg-card" />
              <Button type="submit" size="lg">
                Send Message
              </Button>
            </form>
          </div>

          {/* Info */}
          <div>
            <SectionHeading title="Get in Touch" />
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-secondary/10 p-3">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-sm text-muted-foreground">info@cvramanpolytechnic.edu</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-secondary/10 p-3">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-secondary/10 p-3">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-sm text-muted-foreground">
                    C.V. Raman Polytechnic<br />
                    Odisha, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
