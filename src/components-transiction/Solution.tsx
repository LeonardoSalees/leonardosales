"use client";

import { motion, Variants } from "framer-motion";
import { Globe, Search, MessageCircle } from "lucide-react";
import Image from "next/image";
import { imageAnimation } from "./Problem";

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
    transition: { duration: 0.6 },
  },
};

const Solution = () => {
  return (
    <section id="como-funciona" className="py-24 bg-white">
      <motion.div
        className="max-w-6xl mx-auto px-6 text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
        >
          Como ajudamos sua empresa a conseguir clientes
        </motion.h2>

        <motion.p
          variants={item}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-14"
        >
          Criamos uma estrutura simples que transforma pesquisas no Google em
          contatos reais no seu WhatsApp.
        </motion.p>

        <motion.div variants={container} className="grid md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <motion.div
            variants={item}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md"
          >
            <motion.div
              className="flex justify-center mb-4 text-green-600"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Globe size={32} />
            </motion.div>

            <h3 className="font-semibold text-xl mb-2 text-gray-900">
              Página profissional
            </h3>

            <p className="text-gray-600 text-sm">
              Criamos uma landing page otimizada para transformar visitantes em
              clientes.
            </p>

            {/* dashboard image */}
            <motion.div
              variants={imageAnimation}
              className="flex justify-center py-15"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/marquesdigital.png"
                  alt="Dashboard de campanhas Google Ads"
                  width={900}
                  height={520}
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={item}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-black p-8 rounded-xl shadow-sm hover:shadow-md"
          >
            <motion.div
              className="flex justify-center mb-4 text-green-600"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Search size={32} />
            </motion.div>

            <h3 className="font-semibold text-xl mb-2 text-gray-100">
              Anúncios no Google
            </h3>

            <p className="text-gray-300 text-sm">
              Sua empresa aparece exatamente quando alguém procura pelo seu
              serviço.
            </p>
            {/* dashboard image */}
            <motion.div
              variants={imageAnimation}
              className="flex justify-center py-15"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/ads-result.png"
                  alt="Dashboard de campanhas Google Ads"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={item}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md"
          >
            <motion.div
              className="flex justify-center mb-4 text-green-600"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <MessageCircle size={32} />
            </motion.div>

            <h3 className="font-semibold text-xl mb-2 text-gray-900">
              Contatos no WhatsApp
            </h3>

            <p className="text-gray-600 text-sm">
              Os clientes entram em contato direto com você para pedir
              orçamento.
            </p>

             {/* dashboard image */}
            <motion.div
              variants={imageAnimation}
              className="flex justify-center py-15"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/whatsapp-banner.png"
                  alt="Dashboard de campanhas Google Ads"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Solution;
