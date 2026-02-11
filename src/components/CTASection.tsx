import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import CalendlyModal from "@/components/CalendlyModal";

const CTASection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="contacto" className="section-padding bg-primary" aria-labelledby="cta-heading">
      <div className="container-narrow text-center">
        <ScrollReveal>
          <h2 id="cta-heading" className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            ¿Listo para dar el primer paso?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Agendá una llamada gratuita de 30 minutos. Sin compromiso, sin presión. Solo una conversación para entender tu situación y ver cómo puedo ayudarte.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="mt-8 inline-flex rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Agendar llamada gratuita
          </button>
        </ScrollReveal>
      </div>
      <CalendlyModal open={open} onOpenChange={setOpen} />
    </section>
  );
};

export default CTASection;