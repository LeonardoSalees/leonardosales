"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Zap, BarChart3, Globe, MessageCircle, Check, ChevronDown, 
  Search, Crown, Target, TrendingUp, Sparkles, ShieldCheck, 
  Cpu, MousePointer2, Rocket, Layers, Code2, HeartHandshake,
  ArrowRight, Gem, Terminal, Smartphone, Workflow,
  Layout
} from "lucide-react";

// --- Tipos e Constantes ---
const SERVICES = [
  {
    id: "authority",
    title: "Autoridade Digital High-End",
    subtitle: "Status & Percepção de Valor",
    description: "Interfaces que exalam luxo. Transformamos sua marca em um objeto de desejo, garantindo que o seu preço nunca seja questionado pelo mercado.",
    icon: <Crown className="text-brand-cyan" size={40} />,
    features: ["UI/UX com Psicologia de Consumo", "Design Minimalista Premium", "Micro-interações de Luxo"],
    details: "Estudos comprovam que usuários julgam a credibilidade de uma empresa pelo design em menos de 0.05 segundos. Eu garanto que você vença nesse milésimo."
  },
  {
    id: "conversion",
    title: "Engenharia de Conversão",
    subtitle: "Performance & Lucratividade",
    description: "Sistemas projetados para vender. Do carregamento ultra-rápido ao checkout impecável, eliminamos qualquer fricção entre o cliente e o seu lucro.",
    icon: <Target className="text-brand-cyan" size={40} />,
    features: ["Core Web Vitals 100/100", "Copywriting Persuasivo", "Funis de Vendas Integrados"],
    details: "Cada segundo de atraso custa 7% em conversão. Minha engenharia elimina o lag e maximiza o seu ROI."
  },
  {
    id: "software",
    title: "Sistemas Full Stack Elite",
    subtitle: "Escalabilidade & Poder",
    description: "Aplicações web complexas que resolvem problemas reais. De CRMs personalizados a SaaS escaláveis com segurança bancária.",
    icon: <Cpu className="text-brand-cyan" size={40} />,
    features: ["Arquitetura de Microsserviços", "Bancos de Dados Blindados", "Integrações de API Complexas"],
    details: "Construímos ferramentas que automatizam o seu negócio, permitindo que você escale sem aumentar o seu esforço operacional."
  }
];

const PROCESS_STEPS = [
  { step: "01", title: "Imersão Estratégica", desc: "Reunião de diagnóstico para entender suas metas e o seu público." },
  { step: "02", title: "Arquitetura de Desejo", desc: "Prototipagem focado em experiência do usuário e gatilhos mentais." },
  { step: "03", title: "Engenharia Pura", desc: "Desenvolvimento full stack com o que há de mais moderno no mundo." },
  { step: "04", title: "Otimização de Performance", desc: "Testes de carga, SEO técnico e refinamento de velocidade extrema." },
  { step: "05", title: "Deploy & Lançamento", desc: "Colocamos sua solução no ar com infraestrutura global (Vercel/AWS)." },
  { step: "06", title: "Evolução Contínua", desc: "Suporte e monitoramento para garantir que seu império continue crescendo." }
];

const FAQS = [
  { q: "Por que investir em um site personalizado e não em um pronto?", a: "Sites prontos são lentos e genéricos. Um projeto sob medida é uma arma de vendas otimizada para o SEU negócio, com performance que o Google ama e design que seus concorrentes temem." },
  { q: "Qual o prazo para ver o retorno do investimento?", a: "O ROI começa no dia do lançamento. Com um site mais rápido e profissional, suas taxas de conversão sobem imediatamente, reduzindo seu custo por aquisição (CPA)." },
  { q: "Você trabalha com contratos de manutenção?", a: "Sim. Ofereço planos de evolução contínua para garantir que sua tecnologia nunca fique obsoleta e sua segurança permaneça impenetrável." },
  { q: "Como funciona o processo de pagamento?", a: "Trabalhamos de forma profissional: Contrato jurídico assinado, faturamento via nota fiscal e opções de parcelamento flexíveis." }
];

// --- Componentes Menores ---

const GlowCircle = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse ${className}`} />
);

const FeatureCard = ({ service }: { service: typeof SERVICES[0] }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative p-1 rounded-[35px] bg-gradient-to-b from-white/10 to-transparent hover:from-brand-cyan/40 transition-all duration-700"
  >
    <div className="bg-[#080808] rounded-[34px] p-10 h-full overflow-hidden relative">
      <div className="relative z-10">
        <div className="mb-8 p-5 w-fit rounded-2xl bg-brand-cyan/5 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-black transition-all duration-500">
          {service.icon}
        </div>
        <span className="text-[10px] font-black tracking-[0.3em] text-brand-cyan uppercase mb-2 block">{service.subtitle}</span>
        <h3 className="text-3xl font-bold mb-5 tracking-tight">{service.title}</h3>
        <p className="text-white/40 mb-8 leading-relaxed font-light">{service.description}</p>
        
        <div className="space-y-4 mb-10">
          {service.features.map((f, i) => (
            <div key={i} className="flex items-center gap-3 text-sm font-medium text-white/70">
              <Check size={16} className="text-brand-cyan" /> {f}
            </div>
          ))}
        </div>
        <p className="text-[11px] text-white/20 italic border-t border-white/5 pt-6">{service.details}</p>
      </div>
    </div>
  </motion.div>
);

// --- Componente Principal ---

export default function ServicesPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#030303] text-white overflow-x-hidden selection:bg-brand-cyan selection:text-black">
      
      {/* Efeito de Cursor Follower (Sexy Canvas) */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 opacity-50"
        style={{
          background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 255, 255, 0.05), transparent 80%)`
        }}
      />

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <GlowCircle className="top-[-10%] left-[-5%] w-[600px] h-[600px] bg-brand-cyan" />
        <GlowCircle className="bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/70">Elevando o Padrão Digital</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[120px] font-black leading-[0.8] tracking-tighter italic mb-12"
          >
            NÃO É SÓ UM SITE. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-cyan bg-[length:200%_auto] animate-gradient">
              É PODER.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/40 text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed mb-16"
          >
            Pare de tentar ser notado. Seja impossível de ser ignorado. 
            Projetamos experiências que convertem cliques em <span className="text-white font-bold">lealdade</span> e visitantes em <span className="text-white font-bold">lucro bruto</span>.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <a href="#precos" className="px-12 py-6 bg-brand-cyan text-black font-black uppercase tracking-widest text-sm rounded-full hover:scale-110 transition-all shadow-[0_0_50px_rgba(0,255,255,0.3)]">
              Ver Investimento
            </a>
            <a href="https://wa.me/5511919267938" className="px-12 py-6 border border-white/10 hover:bg-white/5 rounded-full font-black uppercase tracking-widest text-sm transition-all flex items-center gap-3">
              Consultoria Gratuita <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* --- GRID DE SERVIÇOS (CARDS) --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SERVICES.map((service, i) => (
            <FeatureCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* --- SEÇÃO "POR QUE NÓS?" (Sexy Canvas - Inveja/Poder) --- */}
      <section className="py-40 px-6 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black italic mb-8 uppercase">A Diferença entre <br/> existir e dominar.</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="p-4 bg-brand-cyan/10 rounded-2xl h-fit text-brand-cyan"><Zap size={24}/></div>
                <div>
                  <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Velocidade que Humilha</h4>
                  <p className="text-white/40 font-light">Enquanto o site do seu concorrente demora para carregar, o seu já entregou a proposta e fechou o negócio. Performance não é luxo, é respeito pelo tempo do cliente.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="p-4 bg-brand-cyan/10 rounded-2xl h-fit text-brand-cyan"><Smartphone size={24}/></div>
                <div>
                  <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Mobile-First Obsessivo</h4>
                  <p className="text-white/40 font-light">80% das suas vendas começam no celular. Minhas interfaces são esculpidas para o toque, com ergonomia e fluidez que encantam em qualquer tela.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="p-4 bg-brand-cyan/10 rounded-2xl h-fit text-brand-cyan"><ShieldCheck size={24}/></div>
                <div>
                  <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Arquitetura Blindada</h4>
                  <p className="text-white/40 font-light">Segurança de dados e estabilidade. Usamos o ecossistema das maiores tech do mundo para que você nunca precise se preocupar com quedas ou invasões.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-zinc-900 rounded-[50px] border border-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-brand-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="p-12 h-full flex flex-col justify-center">
                   <div className="text-8xl font-black text-brand-cyan/20 mb-4 tracking-tighter">100/100</div>
                   <h3 className="text-4xl font-black italic mb-6">GOOGLE LIGHTHOUSE SCORE.</h3>
                   <p className="text-white/50 text-lg leading-relaxed mb-8 italic italic font-light">
                      Nós entregamos o que as agências comuns fogem. Performance técnica real que o Google recompensa com as primeiras posições.
                   </p>
                   <div className="flex gap-4">
                      <div className="w-12 h-1 bg-brand-cyan" />
                      <div className="w-12 h-1 bg-white/20" />
                      <div className="w-12 h-1 bg-white/20" />
                   </div>
                </div>
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-10 -right-10 p-8 bg-brand-cyan text-black rounded-3xl font-black italic shadow-2xl rotate-3">
                TECNOLOGIA <br/> SEM LIMITES.
             </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO DE PROCESSO (ETAPAS) --- */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">A Jornada do Líder</h2>
          <p className="text-white/30 italic">Um processo metódico para resultados extraordinários.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
          {PROCESS_STEPS.map((p, i) => (
            <div key={i} className="relative border-l border-white/10 pl-8 group">
              <span className="absolute -left-[1px] top-0 w-[2px] h-0 bg-brand-cyan group-hover:h-full transition-all duration-700" />
              <div className="text-brand-cyan font-black text-5xl opacity-20 group-hover:opacity-100 transition-opacity mb-4">{p.step}</div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight uppercase">{p.title}</h4>
              <p className="text-white/40 font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- TABELA DE PREÇOS (ANCORAGEM) --- */}
      <section id="precos" className="py-40 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase mb-6 tracking-tighter">Planos de Domínio</h2>
            <p className="text-white/30 text-lg">O custo de não ter um posicionamento profissional é muito maior.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Plano 01 */}
            <div className="p-10 rounded-[45px] bg-zinc-900/20 border border-white/5 hover:border-white/20 transition-all group">
              <div className="flex justify-between items-start mb-8">
                <Layout size={30} className="text-white/40" />
                <span className="text-[10px] font-black py-1 px-3 border border-white/10 rounded-full text-white/40 uppercase">Essencial</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Business Elite</h3>
              <div className="text-3xl font-black mb-6 italic tracking-tight">Sob Consulta</div>
              <p className="text-white/40 text-sm mb-10 leading-relaxed font-light italic italic">Perfeito para quem deseja sair do anonimato e ser levado a sério.</p>
              <ul className="space-y-4 mb-12">
                {["Landing Page High-End", "Copywriting Estratégico", "Otimização Lighthouse 100", "Integração WhatsApp CRM"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-medium text-white/60"><Check size={14} className="text-brand-cyan" /> {item}</li>
                ))}
              </ul>
              <a href="https://wa.me/5511919267938" className="block w-full text-center py-5 rounded-2xl bg-white/5 border border-white/10 font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-black transition-all">Começar Agora</a>
            </div>

            {/* Plano 02 - DESTAQUE */}
            <div className="p-12 rounded-[50px] bg-[#0a0a0a] border-2 border-brand-cyan scale-110 shadow-[0_0_100px_rgba(0,255,255,0.1)] relative z-10">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-cyan text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">Mais Requisitado</div>
              <div className="flex justify-between items-start mb-8">
                <Rocket size={30} className="text-brand-cyan" />
                <span className="text-[10px] font-black py-1 px-3 bg-brand-cyan/20 rounded-full text-brand-cyan uppercase">Império</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">Escala Digital</h3>
              <div className="text-4xl font-black mb-6 italic tracking-tight text-brand-cyan italic italic">Investimento Estratégico</div>
              <p className="text-white/50 text-sm mb-10 leading-relaxed font-light italic italic">O ecossistema completo para dominar seu nicho e esmagar a concorrência.</p>
              <ul className="space-y-5 mb-12">
                {["Site Institucional Robusto", "Blog & Engine de SEO", "Gestão de Leads Integrada", "Dashboard de Performance", "Suporte Semanal VIP"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-white/80"><Check size={18} className="text-brand-cyan" /> {item}</li>
                ))}
              </ul>
              <a href="https://wa.me/5511919267938" className="block w-full text-center py-6 rounded-2xl bg-brand-cyan text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-white transition-all shadow-2xl">Garantir Vaga na Agenda</a>
            </div>

            {/* Plano 03 */}
            <div className="p-10 rounded-[45px] bg-zinc-900/20 border border-white/5 hover:border-white/20 transition-all group">
              <div className="flex justify-between items-start mb-8">
                <Code2 size={30} className="text-white/40" />
                <span className="text-[10px] font-black py-1 px-3 border border-white/10 rounded-full text-white/40 uppercase">Software</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">SaaS & Custom</h3>
              <div className="text-3xl font-black mb-6 italic tracking-tight italic italic">Projetos Exclusivos</div>
              <p className="text-white/40 text-sm mb-10 leading-relaxed font-light italic italic">Sistemas sob medida para operações complexas que exigem perfeição técnica.</p>
              <ul className="space-y-4 mb-12">
                {["Arquitetura Full Stack", "Banco de Dados Relacional", "Painéis Adm Customizados", "APIs de Terceiros", "Segurança Cibernética"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-medium text-white/60"><Check size={14} className="text-brand-cyan" /> {item}</li>
                ))}
              </ul>
              <a href="https://wa.me/5511919267938" className="block w-full text-center py-5 rounded-2xl bg-white/5 border border-white/10 font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-black transition-all">Solicitar Reunião</a>
            </div>

          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-40 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black italic italic uppercase mb-16 text-center tracking-tighter">PERGUNTAS <br/> DE QUEM PENSA GRANDE.</h2>
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-white/5 overflow-hidden">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full py-8 flex justify-between items-center text-left group"
              >
                <span className={`text-xl font-bold transition-all ${activeFaq === i ? 'text-brand-cyan' : 'text-white/60'}`}>{faq.q}</span>
                <ChevronDown className={`transition-transform duration-500 ${activeFaq === i ? 'rotate-180 text-brand-cyan' : 'text-white/20'}`} />
              </button>
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="pb-8 text-white/40 font-light leading-relaxed text-lg italic italic">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA FINAL (A RECOMPENSA) --- */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-16 md:p-24 rounded-[60px] bg-gradient-to-br from-brand-cyan/20 to-purple-600/5 border border-brand-cyan/20 overflow-hidden text-center">
            
            {/* Background Decorativo CTA */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-cyan/10 blur-[100px] -z-10" />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-8 italic italic tracking-tighter"
            >
              VOCÊ ESTÁ A UM <span className="text-brand-cyan">CLIQUE</span> <br/> DO PRÓXIMO NÍVEL.
            </motion.h2>
            
            <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12 italic italic font-light">
               Não deixe para amanhã a autoridade que você pode ter hoje. Minha agenda é limitada para garantir a perfeição de cada entrega.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
               <a 
                href="https://wa.me/5511919267938"
                className="group relative flex items-center gap-4 bg-brand-cyan text-black font-black px-16 py-7 rounded-full text-sm tracking-[0.2em] hover:scale-105 transition-all shadow-[0_30px_60px_rgba(0,255,255,0.2)]"
              >
                DOMINAR MEU MERCADO AGORA
                <MessageCircle size={20} />
              </a>
            </div>
            
            <div className="mt-16 pt-16 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { label: "Projetos Ativos", val: "3" },
                 { label: "Performance Média", val: "98%" },
                 { label: "Conversão Elevada", val: "4x" },
                 { label: "Satisifação", val: "100%" }
               ].map((stat, i) => (
                 <div key={i}>
                    <div className="text-3xl font-black text-white mb-1">{stat.val}</div>
                    <div className="text-[10px] text-white/30 uppercase tracking-widest font-black">{stat.label}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Simples da Página de Vendas */}
      <footer className="py-20 text-center border-t border-white/5">
         <p className="text-[10px] text-white/20 font-black tracking-[0.5em] uppercase italic italic">
            &copy; {new Date().getFullYear()} Leonardo Sales • Engineering & Design de Alto Padrão
         </p>
      </footer>
    </main>
  );
}