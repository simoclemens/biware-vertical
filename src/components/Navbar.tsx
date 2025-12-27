const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between bg-background/80 backdrop-blur-sm border-b border-border/50">
      <a href="#" className="font-display text-2xl tracking-tight">
        biware<span className="text-primary">.</span>
      </a>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          About
        </a>
        <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Services
        </a>
        <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
