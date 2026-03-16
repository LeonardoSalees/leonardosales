"use client"

import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { TrendingUp, Globe, MousePointerClick, ExternalLink, CheckCircle2 } from "lucide-react"

// Animações centralizadas
const animations: Record<string, Variants> = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  },
  image: {
    hidden: { opacity: 0, scale: 0.98 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
  }
}

const ResultCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div
    variants={animations.item}
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-xl mb-6">
      <Icon size={24} />
    </div>
    <h3 className="font-bold text-lg mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
)

const CaseStudy = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={animations.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <motion.span 
            variants={animations.item}
            className="text-blue-600 font-semibold tracking-wider uppercase text-sm"
          >
            Estudo de Caso
          </motion.span>
          <motion.h2
            variants={animations.item}
            className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 text-slate-900 tracking-tight"
          >
            Sucesso com a Engetech Portas
          </motion.h2>
          <motion.p
            variants={animations.item}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Transformamos a presença digital da Engetech, unindo um 
            <span className="text-slate-900 font-medium"> design de alta conversão </span> 
            com estratégias precisas de tráfego pago.
          </motion.p>
        </div>

        {/* MAIN CASE CARD */}
        <motion.div
          variants={animations.image}
          className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100 mb-12"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Branding Side */}
            <div className="lg:w-1/3 bg-slate-900 p-12 flex flex-col justify-center items-center text-center">
              <div className="w-24 h-24 bg-white rounded-2xl p-4 mb-6 flex items-center justify-center shadow-lg">
                <Image
                  src="/logo-engetech.png"
                  alt="Engetech Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Engetech Portas</h3>
              <p className="text-slate-400 text-sm mb-6">Líder em Portas Automáticas</p>
              <a
                href="https://engetechportas.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full transition-all text-sm font-medium"
              >
                Ver site ao vivo
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Banner Side */}
            <div className="lg:w-2/3 p-4 bg-slate-100/50">
                <motion.div whileHover={{ scale: 1.01 }} className="relative rounded-xl overflow-hidden shadow-2xl border border-white">
                    <Image
                    src="/engetechbanner.png"
                    alt="Interface do Site"
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover"
                    />
                </motion.div>
            </div>
          </div>
        </motion.div>

        {/* RESULTS GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          <ResultCard 
            icon={Globe}
            title="Design Estratégico"
            description="Site otimizado para mobile e focado em experiência do usuário (UX), projetado para converter visitantes em leads qualificados."
          />
          <ResultCard 
            icon={MousePointerClick}
            title="Google Ads"
            description="Campanhas segmentadas por intenção de compra, garantindo que a Engetech apareça para quem realmente quer comprar."
          />
          <ResultCard 
            icon={TrendingUp}
            title="ROI Mensurável"
            description="Aumento significativo no volume de orçamentos diários vindos diretamente do canal digital."
          />
        </div>

        <motion.p 
          variants={animations.item}
          className="text-center text-slate-400 text-xs mt-12 uppercase tracking-widest"
        >
          Tecnologias: Next.js • Tailwind CSS • Google Ads • UI/UX Design
        </motion.p>
      </motion.div>
    </section>
  )
}

export default CaseStudy