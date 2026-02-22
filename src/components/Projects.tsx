import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Marques Digital",
    description: "Plataforma de marketing digital focada em alta performance e conversão. Desenvolvimento do frontend focado em SEO e Core Web Vitals.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/marquesdigital.png", // Salve a imagem em public/marques-digital.png
    link: "https://marquesdigital.com.br", // Exemplo de link
    github: "#"
  },
  {
    title: "Engetech Portas de Aço",
    description: "Sistema de catálogo e exposição de produtos industriais. Foco em UX para facilitar o pedido de orçamentos e visualização técnica.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/engetech.png", // Salve a imagem em public/engetech.png
    link: "https://engetechportas.vercel.app",
    github: "#"
  },
  {
    title: "D5 Desentupidora",
    description: "Landing Page otimizada para conversão mobile-first e integração com sistemas de atendimento rápido.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/d5desentupidora.png", // Salve a imagem em public/d5-desentupidora.png
    link: "https://d5desentupidora.vercel.app",
    github: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold text-white mb-16 flex items-center gap-2">
        Projetos Recentes<span className="text-brand-cyan">.</span>
        <div className="h-[1px] w-20 bg-white/10 ml-4"></div>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-brand-cyan/30 transition-all duration-500 flex flex-col h-full">
            
            {/* Container da Imagem com Aspect Ratio */}
            <div className="relative h-52 w-full overflow-hidden">
              {/* Overlay Colorido no Hover */}
              <div className="absolute inset-0 bg-brand-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              
              <Image 
                src={project.image}
                alt={`Screenshot do projeto ${project.title}`}
                fill
                className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Conteúdo do Card */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest bg-white/5 text-white/50 px-2 py-1 rounded border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 text-white/40 text-xl shrink-0">
                  <a href={project.link} target="_blank" className="hover:text-white transition-colors flex items-center gap-1" title="Live Demo">Ver<FaExternalLinkAlt /></a>
                </div>
              </div>

              <p className="text-white/50 leading-relaxed italic text-sm mt-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;