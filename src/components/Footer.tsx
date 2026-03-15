import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-10">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-lg font-bold text-primary">PolyTech<span className="text-secondary">Hub</span></h3>
          <p className="text-sm text-muted-foreground">
            Empowering polytechnic students to innovate, collaborate, and showcase their technical excellence.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["About Us", "Projects", "Events", "Contact"].map((l) => (
              <li key={l}>
                <Link to={`/${l.toLowerCase().replace(" ", "-").replace("about-us","about")}`} className="hover:text-primary transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold">Get in Touch</h4>
          <p className="text-sm text-muted-foreground">polytechhub@college.edu</p>
          <p className="text-sm text-muted-foreground">+91 98765 43210</p>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} PolyTechHub. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
