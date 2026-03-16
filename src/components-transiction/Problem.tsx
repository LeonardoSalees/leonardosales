"use client";

import { motion, Variants } from "framer-motion";
import { Search, Users, TrendingDown } from "lucide-react";
import Image from "next/image";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const imageAnimation = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.3 }
  }
}

const Problem = () => {
  return (
    <section className="py-24 bg-gray-200">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
        >
          Seus clientes estão procurando no{" "}
          <span className="text-green-600">Google</span>
        </motion.h2>

        <motion.p
          variants={item}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-14"
        >
          Todos os dias pessoas pesquisam serviços no Google. Se sua empresa não
          aparece nas primeiras posições, você está deixando clientes irem
          direto para seus concorrentes.
        </motion.p>

        <motion.div variants={container} className="grid md:grid-cols-3 gap-8">
          {/* card 1 */}
          <motion.div
            variants={item}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-4 text-green-600">
              <Search size={32} />
            </div>

            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              Pessoas pesquisando agora
            </h3>

            <p className="text-gray-600 text-sm">
              Clientes procuram serviços como o seu todos os dias no Google.
            </p>
          </motion.div>

          {/* card 2 */}
          <motion.div
            variants={item}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-4 text-green-600">
              <Users size={32} />
            </div>

            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              Concorrentes aparecendo
            </h3>

            <p className="text-gray-600 text-sm">
              Se você não aparece nas buscas, seus concorrentes recebem esses
              contatos.
            </p>
          </motion.div>

          {/* card 3 */}
          <motion.div
            variants={item}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-4 text-green-600">
              <TrendingDown size={32} />
            </div>

            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              Oportunidades perdidas
            </h3>

            <p className="text-gray-600 text-sm">
              Cada busca que você não aparece pode ser um cliente perdido.
            </p>
          </motion.div>
        </motion.div>
        {/* dashboard image */}
        <motion.div
          variants={imageAnimation}
          className="flex justify-center py-15"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <Image
              src="/googlePesquisa.png"
              alt="Dashboard de campanhas Google Ads"
              width={900}
              height={520}
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Problem;
