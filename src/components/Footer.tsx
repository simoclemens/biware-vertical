const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © 2024 Biware. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
