"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, CheckCircle } from "lucide-react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
}

const Hero = () => {
  return (
    <section className="relative bg-slate-50 py-16 md:py-20 overflow-hidden">
      
      {/* Background: Monograma LS sutil */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <Image
            alt="logo"
            src="/android-chrome-512x512.png"
            width={200} // Aumentei um pouco para cobrir melhor o fundo
            height={200}
            className="absolute -top-2 -left-3 opacity-[0.04] grayscale select-none" 
            // opacity-[0.04] deixa ela com 4% de visibilidade (bem sutil)
            // grayscale remove as cores originais do ícone para não poluir
          />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-10">
          
          {/* Badge menor */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-5 shadow-sm"
          >
            <TrendingUp size={14} />
            Mais clientes através do Google
          </motion.div>

          {/* Headline reduzida em ~20% */}
          <motion.h1
            variants={item}
            className="text-3xl md:text-5xl lg:text-5xl font-extrabold leading-[1.1] mb-5 text-slate-900 tracking-tight"
          >
            Receba contatos de <span className="text-green-600">clientes</span> <br className="hidden md:block" />
            pelo Google em até 7 dias
          </motion.h1>

          {/* Subheadline mais compacta */}
          <motion.p
            variants={item}
            className="text-base md:text-lg text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed"
          >
            Criamos sua página profissional e estruturamos suas campanhas 
            para gerar orçamentos direto no seu <strong>WhatsApp</strong>.
          </motion.p>

          {/* CTA Ajustado */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
          >
            <motion.a
              href="https://wa.me/5511919267938"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 bg-green-600 text-white px-7 py-3.5 rounded-xl text-base font-bold shadow-lg shadow-green-200 transition-all"
            >
              Quero receber clientes
              <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#como-funciona"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-base font-semibold border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Ver como funciona
            </motion.a>
          </motion.div>

          {/* Social Proof menor */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-500"
          >
            {[
              "Landing page inclusa",
              "Gestão de Google Ads",
              "Foco em Conversão"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                <CheckCircle className="text-green-600" size={14} />
                {text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dashboard Image reduzida */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative max-w-3xl w-full rounded-xl overflow-hidden shadow-2xl shadow-slate-300/50 border border-white">
            <Image
              src="/engetechbanner.png"
              alt="Resultados Google Ads"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Hero