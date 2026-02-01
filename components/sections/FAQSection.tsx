"use client";

import SectionLabel from "../primitives/SectionLabel";
import Accordion from "../primitives/Accordion";

const FAQS = [
  {
    q: "¿Este evento es solo para empresas grandes o también para startups y PYMEs?",
    a: "LATIDO está diseñado para empresas de todos los tamaños. Tenemos contenido relevante tanto para startups que inician su journey de IA como para empresas establecidas que buscan escalar sus implementaciones.",
  },
  {
    q: "¿Las sesiones serán en español o inglés?",
    a: "El idioma principal es español. Para speakers internacionales, ofrecemos traducción simultánea. Todos los materiales están disponibles en español e inglés. El 90% del contenido será en español.",
  },
  {
    q: "¿Puedo asistir virtualmente o solo es presencial?",
    a: "LATIDO es exclusivamente presencial para maximizar el valor del networking y las conexiones cara a cara. Todos los asistentes reciben acceso a las grabaciones de las sesiones principales durante 60 días después del evento.",
  },
  {
    q: "¿Necesito conocimientos técnicos avanzados?",
    a: "No necesitas ser experto técnico. LATIDO está diseñado para líderes de negocio, gerentes, emprendedores y profesionales técnicos por igual. El contenido abarca desde fundamentos estratégicos hasta implementación técnica, con tracks adaptados a diferentes perfiles.",
  },
  {
    q: "¿Ofrecen descuentos para equipos o grupos?",
    a: "Sí, ofrecemos descuentos grupales para 3+ personas de la misma empresa. Contacta a nuestro equipo para obtener un código de descuento personalizado.",
  },
  {
    q: "¿Dónde se realiza el evento?",
    a: "El evento se realiza en Lima, Perú. La ubicación exacta será anunciada próximamente. Estamos en negociaciones con hoteles cercanos para ofrecer tarifas preferenciales a los asistentes.",
  },
  {
    q: "¿Entregarán certificado de asistencia?",
    a: "Sí, todos los asistentes reciben un certificado digital de asistencia al finalizar el evento, que incluye las horas de capacitación y los temas cubiertos.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-[var(--lat-section-py)] px-[var(--lat-section-px)]">
      <SectionLabel>Preguntas frecuentes</SectionLabel>

      <div className="max-w-[900px] mx-auto">
        {FAQS.map((faq, i) => (
          <Accordion key={i} title={faq.q}>
            {faq.a}
          </Accordion>
        ))}
      </div>
    </section>
  );
}
