import { BarChart3, Database, LineChart, Lightbulb } from "lucide-react";

const services = [
  {
    icon: LineChart,
    title: "Financial Reporting",
    description: "At Biware, financial reporting is more than spreadsheets and statutory checklists. It about the experience of translating performance into a story that leaders understand, stakeholders trust, and investors believe in.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Providing expert Business Intelligence, Microsoft Power BI, financial reporting, consulting, and Excel services for informed decision-making.",
  },
  {
    icon: Lightbulb,
    title: "Training",
    description: "Our experience has taught us that the success of a Business Intelligence project largely depends on our ability to train users and make them fully independent in using the solution",
  },
  {
    icon: Database,
    title: "PowerBI Solutions",
    description: "Microsoft Power BI is much more than a traditional BI tool; it is integrated with Office tools and cloud services. We design dynamic dashboards and intelligent reports that pull your data out of hiding and place insights directly into the hands of decision-makers.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">
          Services
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-16">
          What we do.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 border border-border rounded-2xl hover:border-primary/50 hover:glow-accent transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <service.icon className="w-8 h-8 text-[hsl(27_95%_53%)] mb-6" />
              <h3 className="font-display text-2xl mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
