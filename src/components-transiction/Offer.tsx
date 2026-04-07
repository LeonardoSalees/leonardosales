"use client"

import { motion, Variants } from "framer-motion"
import { CheckCircle, Rocket, Zap, ShieldCheck } from "lucide-react"

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const item: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const Offer = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-100">
      <motion.div
        className="max-w-5xl mx-auto px-6 text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Título mais agressivo e focado em benefício */}
        <motion.h2 variants={item} className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">
          Transforme o Google no seu melhor vendedor
        </motion.h2>

        <motion.p variants={item} className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          Chega de esperar pelo boca a boca. Colocamos sua empresa na frente de quem está procurando pelo seu serviço <strong>agora</strong>.
        </motion.p>

        <motion.div
          variants={item}
          className="bg-white rounded-3xl shadow-2xl shadow-slate-200 p-10 max-w-3xl mx-auto border border-slate-100"
        >
          {/* Ancoragem de preço */}
          <div className="mb-8">
            <p className="text-slate-400 line-through text-lg">Investimento comum: R$2.500,00+</p>
            <p className="text-slate-500 text-sm italic">(Site + Configuração Profissional)</p>
          </div>

          <motion.ul variants={container} className="space-y-4 text-left mb-10">
            {[
              "Landing page de alta conversão (focada em vendas)",
              "Configuração estratégica no Google Ads",
              "Integração instantânea com WhatsApp",
              "Monitoramento de performance inclusos"
            ].map((text, i) => (
              <motion.li key={i} variants={item} className="flex items-center gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                <span className="text-slate-700 font-medium">{text}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Preço de oferta */}
          <div className="mb-8">
            <p className="text-slate-500 text-sm mb-1 font-semibold uppercase tracking-wider">Investimento único de implementação</p>
            <div className="text-6xl font-black text-slate-900 mb-2">R$1.497,00</div>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              * O valor do tráfego é pago diretamente ao Google (recomendado a partir de R$20/dia)
            </p>
          </div>

          {/* Garantia reescrita para passar autoridade */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8 flex items-center gap-3 text-sm text-blue-800">
            <ShieldCheck className="flex-shrink-0" size={20} />
            <p><strong>Acompanhamento Incluso:</strong> Monitoramos sua campanha nos primeiros 15 dias para garantir que você tenha os melhores resultados.</p>
          </div>

          <motion.a
            href="https://wa.me/5511919267938?text=Quero%20receber%20clientes%20pelo%20Google"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-5 rounded-2xl text-lg font-bold shadow-lg shadow-green-200 transition-all"
          >
            <Rocket size={20} />
            Quero captar clientes hoje
          </motion.a>
          
          <p className="mt-4 text-xs text-slate-400">Poucas vagas para implementação esta semana</p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Offer