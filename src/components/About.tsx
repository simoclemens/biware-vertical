const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">
              About Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
              Clarity through
              <br />
              intelligence.
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Biware is a specialized business intelligence consulting firm. We partner with organizations to unlock the full potential of their data.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our team combines deep technical expertise with strategic thinking to deliver solutions that matter. From data architecture to visualization, we build the foundation for smarter decisions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border">
          {[
            { value: "50+", label: "Clients" },
            { value: "8+", label: "Years" },
            { value: "200+", label: "Projects" },
            { value: "15", label: "Experts" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl md:text-5xl text-gradient mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
