import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-10">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-lg font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">NeoDog</span>
          </h3>
          <p className="text-sm text-muted-foreground">
            A smart robot dog project by the students of C.V. Raman Polytechnic, Odisha.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              { label: "Home", path: "/" },
              { label: "Gallery", path: "/gallery" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="transition-colors hover:text-primary">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold">Get in Touch</h4>
          <p className="text-sm text-muted-foreground">neodog@cvramanpoly.edu</p>
          <p className="text-sm text-muted-foreground">+91 98765 43210</p>
          <div className="mt-4 flex gap-3">
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary"><Github className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} NeoDog – C.V. Raman Polytechnic, Odisha. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
