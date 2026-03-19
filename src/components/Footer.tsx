import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-10">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-lg font-bold text-primary">
            C.V. Raman <span className="text-secondary">Polytechnic</span>
          </h3>
          <p className="text-sm text-muted-foreground">
            Empowering polytechnic students in Odisha to innovate, collaborate, and showcase their technical excellence.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              { label: "About Us", path: "/about" },
              { label: "Projects", path: "/projects" },
              { label: "Events", path: "/events" },
              { label: "Gallery", path: "/gallery" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold">Get in Touch</h4>
          <p className="text-sm text-muted-foreground">info@cvramanpolytechnic.edu</p>
          <p className="text-sm text-muted-foreground">+91 98765 43210</p>
          <p className="mt-2 text-sm text-muted-foreground">
            C.V. Raman Polytechnic<br />
            Odisha, India
          </p>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} C.V. Raman Polytechnic, Odisha. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
