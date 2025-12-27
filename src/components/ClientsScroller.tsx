import ferrettiLogo from "@/assets/clients/ferretti-group.png";
import jungheinrichLogo from "@/assets/clients/jungheinrich.png";
import bancaSellaLogo from "@/assets/clients/banca-sella.png";
import fileniLogo from "@/assets/clients/fileni.png";
import cedacriLogo from "@/assets/clients/cedacri.png";
import dedaLogo from "@/assets/clients/deda.png";

const clients = [
  { name: "Banca Sella", logo: bancaSellaLogo },
  { name: "Ferretti Group", logo: ferrettiLogo },
  { name: "Jungheinrich", logo: jungheinrichLogo },
  { name: "Fileni", logo: fileniLogo },
  { name: "Cedacri", logo: cedacriLogo },
  { name: "Deda Group", logo: dedaLogo }
];

const ClientsScroller = () => {
  return (
    <section className="py-20 border-y border-border overflow-hidden">
      <div className="flex animate-scroll">
        {[...clients, ...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-12 md:px-16 flex items-center justify-center"
          >
            <div className="group w-40 h-20 md:w-48 md:h-24 bg-white/5 rounded-lg flex items-center justify-center p-4 hover:bg-white/10 transition-colors">
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsScroller;
