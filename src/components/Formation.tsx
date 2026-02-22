import { FaReact, FaJs, FaNodeJs, FaDatabase, FaCode } from "react-icons/fa";
import { SiTypescript, SiCss3 } from "react-icons/si";

const formations = [
  {
    title: "Desenvolvedor Full Stack Júnior",
    institution: "Senac São Paulo (Programa Transforme-se)",
    duration: "2023",
    icon: <FaCode className="text-brand-cyan" />,
    color: "bg-brand-cyan/10",
    details: "Focado em lógica de programação e trabalho em equipe."
  },
  {
    title: "Especialista em React & TypeScript",
    institution: "Digital Innovation One (DIO)",
    duration: "2022",
    icon: <FaReact className="text-[#61DAFB]" />,
    color: "bg-[#61DAFB]/10",
    details: "Domínio em Hooks, States, Effects e integração com TypeScript."
  },
  {
    title: "Desenvolvimento de Software & Algoritmos",
    institution: "Digital Innovation One (DIO)",
    duration: "2021 - 2022",
    icon: <SiTypescript className="text-[#3178C6]" />,
    color: "bg-[#3178C6]/10",
    details: "Foco em Estrutura de Dados, Programação Assíncrona e OOP."
  },
  {
    title: "Técnico em Administração",
    institution: "ETEC - Escola Técnica Estadual de SP",
    duration: "2016 - 2017",
    icon: <FaDatabase className="text-zinc-400" />,
    color: "bg-zinc-400/10",
    details: "Base em logística, marketing e processos administrativos."
  },
];

const Formation = () => {
  return (
    <section id="formation" className="py-24 px-6 max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold text-white mb-16 flex items-center gap-2">
        Minhas Formações<span className="text-brand-cyan">.</span>
        <div className="h-[1px] w-20 bg-white/10 ml-4"></div>
      </h3>

      <div className="space-y-6">
        {formations.map((item, index) => (
          <div 
            key={index}
            className="flex flex-col md:flex-row md:items-center justify-between p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
          >
            <div className="flex items-start gap-6">
              <div className={`w-14 h-14 shrink-0 rounded-xl flex items-center justify-center text-2xl ${item.color}`}>
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                <p className="text-brand-cyan text-sm mb-2">{item.institution}</p>
                <p className="text-white/40 text-sm max-w-md italic">{item.details}</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-xs font-mono text-white/30 border border-white/10 px-4 py-2 rounded-full">
                {item.duration}
              </span>
            </div>
          </div>
        ))}

        {/* Badge para os +30 certificados extras */}
        <div className="mt-8 p-6 border border-dashed border-white/10 rounded-2xl text-center">
          <p className="text-white/50 text-sm">
            E mais de <span className="text-brand-cyan font-bold">30 certificações adicionais</span> pela DIO em 
            <span className="text-white"> Clean Code, Scrum, Java, C# </span> e <span className="text-white">Arquitetura de Sistemas.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Formation;