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
              In a world where data grows faster than decisions are made, companies need more than spreadsheets — they need intelligence.
              We help organizations evolve from traditional Excel-based reporting toward modern analytics, automated insights, and business intelligence platforms.

            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              
              By integrating innovative technologies with existing reporting workflows, we preserve what already works integrating Excel Sheets with Microsoft Power BI unlocking new levels of efficiency, accuracy, and strategic clarity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border">
          {[
            { value: "50+", label: "Clients" },
            { value: "20+", label: "Years" },
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
