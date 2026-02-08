import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { Building2, Target, FolderOpen, Users, Monitor, Rocket, Code, BriefcaseBusiness, CheckCircle2 } from "lucide-react";

const roadmap = [
  { num: 1, title: "Fundamentos", desc: "HTML, CSS, JavaScript básico. Aprenderás a construir páginas web desde cero.", duration: "Mes 1" },
  { num: 2, title: "Desarrollo Web", desc: "React, APIs, bases de datos. Construirás aplicaciones interactivas completas.", duration: "Meses 2-3" },
  { num: 3, title: "Proyectos reales", desc: "Portafolio con 2-3 proyectos profesionales que puedas mostrar a empleadores.", duration: "Meses 3-4" },
  { num: 4, title: "Búsqueda laboral", desc: "CV, LinkedIn, entrevistas técnicas. Te preparo para conseguir tu primer empleo.", duration: "Meses 5-6" },
];

const highlights = [
  { icon: Target, title: "Enfoque en empleabilidad", desc: "Aprendes exactamente lo que las empresas piden en las entrevistas. Nada de relleno, todo práctico y orientado al mercado laboral real." },
  { icon: FolderOpen, title: "Portafolio desde el día 1", desc: "Cada ejercicio es un paso más hacia tu portafolio profesional. Al terminar, tendrás proyectos reales que demuestran tus habilidades." },
  { icon: Users, title: "Mentoría de carrera", desc: "No solo te enseño a programar. Te ayudo a preparar tu CV, optimizar tu LinkedIn y practicar entrevistas técnicas." },
  { icon: Code, title: "Tecnologías demandadas", desc: "HTML, CSS, JavaScript, React, Node.js, Git. Las herramientas que el mercado busca activamente." },
  { icon: Rocket, title: "Sin requisitos previos", desc: "No necesitás experiencia previa en programación. Empezamos desde cero, a tu ritmo, con acompañamiento constante." },
  { icon: BriefcaseBusiness, title: "Orientación al mercado uruguayo", desc: "Conozco el mercado IT local. Te guío sobre qué empresas contratan juniors y cómo aplicar." },
];

const CarreraPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-soft px-4 py-1.5">
                <Building2 className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Para reconversión laboral</span>
              </div>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
                Inicia tu carrera en tecnología <span className="text-accent">con un plan claro</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Acompañamiento estructurado para adultos que quieren entrar al mundo IT. Sin requisitos previos, con foco en resultados y empleabilidad.
              </p>
              <a href="#contacto" className="mt-8 inline-flex rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90">
                Agendar llamada gratuita
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Tu camino hacia el primer empleo IT</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Un plan estructurado de 4-6 meses con dedicación de 10-15 horas semanales.
            </p>
          </ScrollReveal>

          <div className="mx-auto mt-14 max-w-2xl">
            {roadmap.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">{s.num}</div>
                    {i < roadmap.length - 1 && <div className="w-0.5 flex-1 bg-accent/30" />}
                  </div>
                  <div className="pb-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">{s.duration}</span>
                    <h4 className="mt-1 text-lg font-semibold text-primary">{s.title}</h4>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué conmigo */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-extrabold sm:text-4xl">¿Por qué hacer tu reconversión conmigo?</h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <ScrollReveal key={h.title} delay={i * 0.1}>
                <div className="h-full rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent-soft">
                    <h.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary">{h.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Para quién */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-xl border border-accent-border bg-card p-8">
              <h3 className="text-center text-2xl font-bold">¿Es para vos?</h3>
              <div className="mt-6 space-y-3">
                {[
                  "Querés cambiar de carrera y entrar al mundo IT",
                  "No tenés experiencia previa en programación",
                  "Buscás un acompañamiento personalizado, no un curso masivo",
                  "Querés un plan claro con foco en conseguir trabajo",
                  "Sos adulto y necesitás horarios flexibles",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg bg-accent-soft px-4 py-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </main>
    <Footer />
  </div>
);

export default CarreraPage;
