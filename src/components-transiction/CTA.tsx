"use client"

import { motion, Variants } from "framer-motion"
import { MessageCircle } from "lucide-react"

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const CTA = () => {
  return (
    <section className="bg-green-600 py-24 text-white">

      <motion.div
        className="max-w-4xl mx-auto px-6 text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Comece a receber clientes pelo Google
        </motion.h2>

        <motion.p
          variants={item}
          className="text-lg text-green-100 mb-10 max-w-2xl mx-auto"
        >
          Em poucos dias sua empresa pode começar a aparecer no Google
          quando clientes estiverem procurando pelo seu serviço.
        </motion.p>

        <motion.a
          variants={item}
          href="https://wa.me/5511919267938"
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-white text-green-700 px-10 py-4 rounded-xl text-lg font-semibold shadow-lg"
        >
          <MessageCircle size={22} />
          Falar no WhatsApp
        </motion.a>

        <motion.p
          variants={item}
          className="text-green-200 text-sm mt-6"
        >
          Resposta rápida • Sem compromisso
        </motion.p>

      </motion.div>

    </section>
  )
}

export default CTA