import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

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
          Seja bem-vindo, Eu sou <span className="text-brand-cyan font-bold">Dev.</span>
        </h2>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight italic">
          FRONTEND <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-purple-500">
            DEVELOPER
          </span>
        </h1>

        <p className="mt-6 text-white/50 max-w-md text-lg leading-relaxed">
          Especialista em criar interfaces modernas, performáticas e focadas na
          experiência do usuário.
        </p>

        {/* Tech Stack Icons - Escala de cinza que ganha cor no hover */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8 text-3xl text-white/30">
          <FaHtml5
            className="hover:text-[#E34F26] transition-colors cursor-help"
            title="HTML5"
          />
          <FaCss3Alt
            className="hover:text-[#1572B6] transition-colors cursor-help"
            title="CSS3"
          />
          <FaJs
            className="hover:text-[#F7DF1E] transition-colors cursor-help"
            title="JavaScript"
          />
          <FaReact
            className="hover:text-[#61DAFB] transition-colors cursor-help"
            title="React"
          />
          <SiNextdotjs
            className="hover:text-white transition-colors cursor-help"
            title="Next.js"
          />
          <SiTailwindcss
            className="hover:text-[#06B6D4] transition-colors cursor-help"
            title="Tailwind CSS"
          />
          <FaFigma
            className="hover:text-[#F24E1E] transition-colors cursor-help"
            title="Figma"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
