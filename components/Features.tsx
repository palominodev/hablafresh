"use client";

import { motion } from "framer-motion";
import { Bot, MessageSquare, Trophy, Zap } from "lucide-react";

const features = [
  {
    icon: <Bot className="w-8 h-8 text-white" />,
    title: "Simulaciones con IA",
    description:
      "Practica conversaciones realistas con nuestra IA avanzada. Desde pedir un café hasta entrevistas de trabajo.",
    color: "bg-primary-green",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-white" />,
    title: "Feedback Instantáneo",
    description:
      "Recibe consejos en tiempo real sobre tu tono, claridad y empatía para mejorar en cada interacción.",
    color: "bg-secondary-blue",
  },
  {
    icon: <Trophy className="w-8 h-8 text-white" />,
    title: "Gamificación y Retos",
    description:
      "Sube de nivel, completa misiones diarias y compite con amigos mientras mejoras tus habilidades sociales.",
    color: "bg-secondary-yellow",
  },
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "Escenarios Personalizados",
    description:
      "La IA se adapta a tu nivel y crea situaciones específicas para ayudarte a superar tus miedos.",
    color: "bg-secondary-orange",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4 font-display">
            Todo lo que necesitas para <span className="text-primary-green">brillar</span>
          </h2>
          <p className="text-neutral-gray max-w-2xl mx-auto text-lg">
            Nuestra plataforma combina tecnología avanzada con psicología conductual para ofrecerte la mejor experiencia de aprendizaje.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-background rounded-2xl p-6 border border-neutral-light-gray hover:shadow-lg transition-shadow group"
            >
              <div
                className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-gray leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Community/Gamification Highlight */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <img
              src="/dos-mascotas-habla-fresh.png"
              alt="Comunidad Habla Fresh"
              className="w-full max-w-md mx-auto lg:mx-0 drop-shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block bg-secondary-yellow/20 text-secondary-orange font-bold px-4 py-2 rounded-full text-sm mb-4">
              Comunidad Activa
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6 font-display">
              Aprende y diviértete con <span className="text-secondary-blue">amigos</span>
            </h2>
            <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
              No estás solo en este viaje. Únete a miles de jóvenes que están mejorando sus habilidades sociales. Participa en retos grupales, comparte tus logros y gana recompensas exclusivas para tu avatar.
            </p>
            <ul className="space-y-4">
              {[
                "Retos diarios con recompensas",
                "Tablas de clasificación amigables",
                "Eventos comunitarios semanales",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-neutral-dark font-medium">
                  <div className="w-6 h-6 rounded-full bg-primary-green/20 flex items-center justify-center text-primary-green">
                    ✓
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
