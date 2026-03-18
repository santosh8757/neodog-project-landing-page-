import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Image, MessageSquare, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/", icon: Home },
  { label: "Gallery", path: "/gallery", icon: Image },
  { label: "Reviews", path: "/contact", icon: MessageSquare },
  { label: "Contact", path: "/contact", icon: Mail },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-lg font-bold md:text-xl">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">NeoDog</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.path}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                pathname === l.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <l.icon className="h-4 w-4" />
              {l.label}
            </Link>
          ))}
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {open && (
        <nav className="border-t border-border bg-card px-4 pb-4 md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.path}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted ${
                pathname === l.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <l.icon className="h-4 w-4" />
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
