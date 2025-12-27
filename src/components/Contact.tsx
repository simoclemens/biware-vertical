import { ArrowUpRight } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">
              Contact
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-8">
              Let's work
              <br />
              together.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Ready to transform your data into strategic advantage? Get in touch with our team.
            </p>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <a href="mailto:hello@biware.io" className="group flex items-center justify-between py-6 border-b border-border hover:border-primary transition-colors">
              <span className="text-2xl md:text-3xl font-display">info@biware.it</span>
              <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
            <a href="tel:+1234567890" className="group flex items-center justify-between py-6 border-b border-border hover:border-primary transition-colors">+39 0112341<span className="text-2xl md:text-3xl font-display">+
+</span>
              <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;