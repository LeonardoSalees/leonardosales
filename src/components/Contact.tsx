import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/leonardo-sales-da-silva-0a47a01a3/",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      href: "https://github.com/LeonardoSalees",
      icon: <FaGithub />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/leo_salees/",
      icon: <FaInstagram />,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Título da Seção */}
      <h3 className="text-4xl font-bold text-white mb-16 flex items-center gap-2">
        Entre em contato comigo<span className="text-brand-cyan">.</span>
        <div className="h-[1px] w-20 bg-white/10 ml-4"></div>
      </h3>

      <div className="flex flex-col items-center text-center space-y-12">
        {/* Chamada Principal */}
        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            VAMOS TRABALHAR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue">
              JUNTOS{" "}
            </span>
          </h2>
          <p className="text-white/50 text-lg md:text-xl max-w-lg mx-auto italic">
            Atualmente disponível para novos projetos e colaborações incríveis.
          </p>
        </div>

        {/* E-mail Gigante (Estilo Minimalista) */}
        <a
          href="mailto:seuemail@exemplo.com"
          className="group text-2xl md:text-4xl font-light text-white/80 hover:text-white transition-all flex items-center gap-4 border-b border-white/10 pb-2"
        >
          leonardosales.silva12@gmail.com
          <FaArrowRight className="text-brand-cyan group-hover:translate-x-2 transition-transform" />
        </a>

        {/* Redes Sociais */}
        <div className="flex gap-8 pt-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white/30 hover:text-brand-cyan transition-all hover:-translate-y-1"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright / Footer Note */}
        <footer className="pt-20 text-white/20 text-sm font-mono">
          <p>© {new Date().getFullYear()} — feito com Next.js & Tailwind</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
