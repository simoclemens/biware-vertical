import { ArrowDown } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-4xl animate-fade-up">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">
          Business Intelligence Consulting
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-8">
          Data-driven
          <br />
          <span className="text-gradient">decisions</span>,
          <br />
          simplified.
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed">
          We transform complex data into actionable insights that drive growth and efficiency for your business.
        </p>
      </div>
      
      <a href="#about" className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
        <span className="text-sm tracking-wider">Scroll</span>
        <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
      </a>
    </section>;
};
export default Hero;