import logo from "@/assets/biware-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-1 flex items-center justify-between bg-background/90 backdrop-blur-sm border-b border-border/50">
      <a href="#">
        <img src={logo} alt="Biware" className="h-12 md:h-14" />
      </a>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          About
        </a>
        <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          Services
        </a>
        <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
