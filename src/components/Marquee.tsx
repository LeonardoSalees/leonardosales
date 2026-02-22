const Marquee = () => {
  const techs = ["FULL STACK", "TYPESCRIPT", "NEXT.JS 15", "NODE.JS", "POSTGRESQL", "UI/UX DESIGN", "CLEAN CODE", "SCRUM"];
  return (
    <div className="w-full border-y border-white/10 py-4 overflow-hidden bg-brand-dark flex whitespace-nowrap">
      <div className="flex animate-marquee shrink-0">
        {/* Renderiza duas vezes para o loop infinito */}
        {[...techs, ...techs].map((tech, i) => (
          <span key={i} className="flex items-center text-white/50 font-bold text-sm mx-8">
            <span className="text-brand-cyan mr-8">/</span>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;