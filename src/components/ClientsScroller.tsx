const clients = [
  "Client One",
  "Client Two", 
  "Client Three",
  "Client Four",
  "Client Five",
  "Client Six",
  "Client Seven",
  "Client Eight",
];

const ClientsScroller = () => {
  return (
    <section className="py-20 border-y border-border overflow-hidden">
      <div className="flex animate-scroll">
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-12 md:px-16 flex items-center justify-center"
          >
            <div className="w-32 h-16 md:w-40 md:h-20 border border-border rounded-lg flex items-center justify-center text-muted-foreground text-sm font-medium tracking-wide hover:border-muted-foreground/50 transition-colors">
              {client}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsScroller;
