"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Shield, Trophy } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-light-green/30 -z-10 rounded-bl-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-yellow/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-light-green text-primary-dark-green px-4 py-2 rounded-full font-semibold text-sm mb-6">
              <span className="w-2 h-2 bg-primary-green rounded-full animate-pulse" />
              Entrenamiento social con IA
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-dark leading-tight mb-6 font-display">
              Domina tus <span className="text-primary-green">habilidades sociales</span> sin miedo al rechazo
            </h1>
            <p className="text-lg text-neutral-gray mb-8 leading-relaxed max-w-lg">
              Un espacio seguro donde practicar conversaciones reales, recibir feedback instantáneo y ganar confianza a tu propio ritmo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-green hover:bg-primary-dark-green text-white font-semibold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                Empezar ahora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white border-2 border-neutral-light-gray hover:border-primary-green text-neutral-dark hover:text-primary-green font-semibold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
                Ver demo
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm font-medium text-neutral-gray">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary-green" />
                <span>Espacio seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-secondary-blue" />
                <span>Feedback IA</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-secondary-yellow" />
                <span>Gamificado</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative z-10 max-w-md mx-auto lg:ml-auto transform hover:scale-105 transition-transform duration-500">
               <img
                src="/mascota-habla-fresh.png"
                alt="Mascota Habla Fresh"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>

            {/* Decorative Elements behind mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary-green/20 to-secondary-blue/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
