import Image from "next/image";
import Link from "next/link";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 pt-20">
      {/* Lado Esquerdo: O Quadrado Visual */}
      <div className="relative group">
        <div className="w-64 h-64 md:w-80 md:h-80 border-2 border-white/10 rounded-xl flex items-center justify-center relative bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:border-brand-cyan/50 overflow-visible">
          {/* Container da Imagem com cantos arredondados */}
          <div className="w-full h-full overflow-hidden rounded-xl relative">
            <Image
              src="/perfil.jpeg" // Coloque sua imagem na pasta /public
              alt="Sua Foto"
              fill // Faz a imagem preencher o container pai
              className="object-cover hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              priority // Carrega a imagem com prioridade (LCP)
            />
          </div>

          {/* Elemento flutuante </>. */}
          <div className="absolute -bottom-6 -right-4 bg-brand-dark border border-white/10 px-4 py-2 rounded-lg shadow-2xl z-20">
            <span className="text-4xl md:text-5xl font-mono font-bold text-brand-cyan animate-pulse">
              {`</>`}
            </span>
          </div>

          {/* Brilho atrás */}
          <div className="absolute inset-0 bg-brand-cyan/10 blur-[80px] rounded-full -z-10 group-hover:bg-brand-cyan/20 transition-colors" />
        </div>
      </div>
      {/* Lado Direito: Texto e Tech Stack */}
      <div className="max-w-2xl text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-medium text-white/80 mb-2">
          Seja bem-vindo, Eu sou{" "}
          <span className="text-brand-cyan font-bold">Leonardo.</span>
        </h2>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] italic">
          FULL STACK <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-purple-500">
            ENGINEER
          </span>
        </h1>

        <p className="mt-6 text-white/50 max-w-lg text-lg leading-relaxed">
          Especialista em arquitetar soluções de ponta a ponta, unindo
          interfaces de alta performance à infraestruturas robustas e
          escaláveis.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-10">
          <Link
            aria-label="Ir para pagina de serviços"
            href="/servicos"
            className="px-8 py-4 bg-brand-cyan text-brand-dark font-black rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,255,0.3)] text-center"
          >
            CONTRATAR SOLUÇÃO ELITE
          </Link>
          <a
            aria-label="Ir para portifolio"
            href="#projects"
            className="px-8 py-4 border border-white/10 text-white rounded-full hover:bg-white/5 transition-colors text-center"
          >
            Ver Portfólio
          </a>
        </div>

        {/* Tech Stack Icons - Evoluído para Full Stack */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-10 text-3xl text-white/30">
          {/* Frontend Group */}
          <div className="flex gap-4 border-r border-white/10 pr-6">
            <FaReact
              className="hover:text-[#61DAFB] transition-all duration-300 cursor-help hover:scale-110"
              title="React.js"
            />
            <SiNextdotjs
              className="hover:text-white transition-all duration-300 cursor-help hover:scale-110"
              title="Next.js 15"
            />
            <SiTailwindcss
              className="hover:text-[#06B6D4] transition-all duration-300 cursor-help hover:scale-110"
              title="Tailwind CSS"
            />
          </div>

          {/* Backend & Data Group */}
          <div className="flex gap-4">
            <FaNodeJs
              className="hover:text-[#339933] transition-all duration-300 cursor-help hover:scale-110"
              title="Node.js"
            />
            <SiTypescript
              className="hover:text-[#3178C6] transition-all duration-300 cursor-help hover:scale-110"
              title="TypeScript"
            />
            <SiPostgresql
              className="hover:text-[#4169E1] transition-all duration-300 cursor-help hover:scale-110"
              title="PostgreSQL"
            />
            <FaDocker
              className="hover:text-[#2496ED] transition-all duration-300 cursor-help hover:scale-110"
              title="Docker"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
