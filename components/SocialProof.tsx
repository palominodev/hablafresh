"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const stats = [
  { value: "80%", label: "Mejora en confianza" },
  { value: "10k+", label: "Usuarios activos" },
  { value: "50k+", label: "Conversaciones simuladas" },
];

const testimonials = [
  {
    name: "Sofía R.",
    role: "Estudiante Universitaria",
    content:
      "Siempre me ponía nerviosa al hablar en clase. Habla Fresh me ayudó a practicar y ahora participo sin miedo.",
    avatar: "S",
    color: "bg-accent-purple",
  },
  {
    name: "Mateo L.",
    role: "Primer Empleo",
    content:
      "Las simulaciones de entrevistas son increíbles. Conseguí mi primer trabajo gracias a la práctica que tuve aquí.",
    avatar: "M",
    color: "bg-accent-pink",
  },
  {
    name: "Valentina C.",
    role: "Freelancer",
    content:
      "Me encanta el feedback instantáneo. Es como tener un coach personal disponible las 24 horas.",
    avatar: "V",
    color: "bg-secondary-blue",
  },
];

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-20 bg-primary-light-green/30">
      <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-green mb-2 font-display">
                {stat.value}
              </div>
              <div className="text-neutral-gray font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4 font-display">
            Lo que dicen nuestros usuarios
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-light-gray"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-secondary-yellow text-secondary-yellow"
                  />
                ))}
              </div>
              <p className="text-neutral-dark mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-neutral-dark">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-neutral-gray">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
