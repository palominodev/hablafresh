"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function ComingSoonModal() {
  const { isOpen, closeModal } = useModal();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xgvqgjdb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl z-[101] overflow-hidden m-4"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-neutral-gray hover:text-neutral-dark transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8 text-center">
              {status === "success" ? (
                <div className="py-8 flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-light-green rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-primary-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-dark mb-2 font-display">
                    ¡Gracias por tu interés!
                  </h3>
                  <p className="text-neutral-gray">
                    ¡Listo! 📩 Ya estás en la lista de espera. Te avisaremos en cuanto estemos listos para ti.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-8 bg-primary-green hover:bg-primary-dark-green text-white font-semibold py-3 px-8 rounded-xl transition-colors"
                  >
                    Entendido
                  </button>
                </div>
              ) : (
                <>
                  <div className="w-48 h-48 mx-auto mb-6">
                    <img
                      src="/mascota-triste-habla-fresh.png"
                      alt="Mascota Triste"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-dark mb-4 font-display">
                    ¡Vaya! Aún no hemos llegado a tu zona 🌍
                  </h3>
                  <p className="text-neutral-gray mb-8">
                    Pero no te preocupes, déjanos tu correo y serás el primero en saber cuando aterricemos. 🚀
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        placeholder="tu@correo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-neutral-light-gray focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-primary-green hover:bg-primary-dark-green text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        "Notificarme cuando esté disponible"
                      )}
                    </button>
                    
                    {status === "error" && (
                      <p className="text-red-500 text-sm">
                        Hubo un error al enviar. Por favor intenta de nuevo.
                      </p>
                    )}
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
