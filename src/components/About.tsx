import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold text-white mb-16 flex items-center gap-2">
        Um pouco sobre mim<span className="text-brand-cyan">.</span>
        <div className="h-[1px] w-20 bg-white/10 ml-4"></div>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        {/* Lado Esquerdo */}
        <div className="md:col-span-5 relative group">
          <div className="aspect-square bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden relative">
            {/* A Imagem Gerada */}
            <Image
              src="/banner.webp" // Coloque a imagem na pasta public
              alt="Leonardo Sales Tech Stack"
              fill
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              priority
            />

            {/* Overlay de gradiente para dar profundidade */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />

            {/* Badge Flutuante */}
            <div className="absolute top-8 -left-6 bg-brand-dark/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl transform -rotate-6 group-hover:rotate-0 transition-all z-10">
              <span className="text-brand-cyan text-xl font-bold italic text-nowrap">
                Full Stack Dev 🚀
              </span>
            </div>

            {/* Nome em marca d'água (opcional, já que a imagem tem muita informação) */}
            <div className="absolute bottom-6 left-6 text-white/20 font-bold italic tracking-tighter text-2xl group-hover:text-brand-cyan/40 transition-colors">
              LEONARDO SALES
            </div>

            {/* Brilho extra no hover */}
            <div className="absolute inset-0 bg-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        </div>

        {/* Lado Direito: Baseado no seu perfil real */}
        <div className="md:col-span-7 space-y-8">
          <p className="text-2xl md:text-3xl text-white/90 leading-snug">
            Sou o{" "}
            <strong className="text-white font-extrabold">
              Leonardo Sales
            </strong>
            , Desenvolvedor Full Stack com foco em criar soluções robustas e
            performáticas.
          </p>

          <div className="space-y-6 text-lg text-white/50 leading-relaxed">
            <p>
              Minha jornada técnica começou com uma base sólida em{" "}
              <span className="text-white">
                Administração e Logística pela ETEC
              </span>
              , o que me deu uma visão organizada e analítica sobre processos —
              algo que hoje aplico diretamente na arquitetura de software.
            </p>

            <p>
              Especialista no ecossistema{" "}
              <span className="text-white">JavaScript/TypeScript</span>, domino
              tecnologias como{" "}
              <span className="text-brand-cyan">Node.js, React e Next.js</span>.
              Com mais de 30 certificações pela DIO, busco constantemente o
              aperfeiçoamento em engenharia de dados, estruturas de dados e
              lógica de programação.
            </p>

            <p>
              Atualmente, foco no desenvolvimento de aplicações escaláveis,
              integrando bancos de dados{" "}
              <span className="text-white">PostgreSQL</span> e aplicando
              metodologias ágeis como <span className="text-white">Scrum</span>{" "}
              para garantir entregas de alta qualidade e eficiência.
            </p>
          </div>

          <div className="pt-4 flex gap-4">
            <a
              href="#projects"
              className="inline-block px-8 py-3 bg-white text-brand-dark font-bold rounded-full hover:bg-brand-cyan transition-colors"
            >
              Ver Projetos
            </a>
            <a
              href="https://www.linkedin.com/in/leonardo-sales-da-silva-0a47a01a3/"
              target="_blank"
              className="inline-block px-8 py-3 border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
