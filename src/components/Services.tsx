import { BarChart3, Database, LineChart, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Data Architecture",
    description: "Design and implement robust data infrastructures that scale with your business needs.",
  },
  {
    icon: BarChart3,
    title: "BI Implementation",
    description: "Deploy industry-leading BI tools tailored to your organization's unique requirements.",
  },
  {
    icon: LineChart,
    title: "Analytics & Reporting",
    description: "Create meaningful dashboards and reports that drive informed decision-making.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Consulting",
    description: "Develop data strategies aligned with your business objectives and growth plans.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-12 lg:px-24 bg-card">
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
              className="group p-8 border border-border rounded-lg hover:border-primary/50 hover:glow-accent transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <service.icon className="w-8 h-8 text-primary mb-6" />
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
