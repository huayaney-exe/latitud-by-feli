"use client";

import { useState, FormEvent } from "react";
import SectionLabel from "../primitives/SectionLabel";
import Input from "../primitives/Input";
import Select from "../primitives/Select";
import Button from "../primitives/Button";
import LatMark from "../primitives/LatMark";

const COUNTRIES = [
  "Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Costa Rica",
  "Cuba", "Ecuador", "El Salvador", "Guatemala", "Honduras", "México",
  "Nicaragua", "Panamá", "Paraguay", "Perú", "República Dominicana",
  "Uruguay", "Venezuela", "Otro",
].map((c) => ({ value: c, label: c }));

const ROLES = [
  "Product", "Engineering", "Design", "Founder", "Investor", "Other",
].map((r) => ({ value: r, label: r }));

type FormState = "idle" | "submitting" | "success" | "error";

export default function RegistrationSection() {
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("submitting");

    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  };

  return (
    <section id="registro" className="py-[var(--lat-section-py)] px-[var(--lat-section-px)]">
      <SectionLabel>Pre-registro</SectionLabel>

      <div className="max-w-[600px] mx-auto">
        {state === "success" ? (
          <div className="text-center py-16">
            <LatMark size="lg" className="mb-8 block" />
            <p className="font-[family-name:var(--lat-font-display)] text-2xl text-[var(--lat-wh)] mb-3">
              Tu latido está registrado.
            </p>
            <p className="font-light text-sm text-[rgba(245,240,235,0.50)] tracking-[0.05em]">
              Te avisaremos primero.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-[family-name:var(--lat-font-display)] text-[clamp(36px,6vw,72px)] text-[var(--lat-wh)] leading-[0.88] mb-3">
              Sé parte del
            </h2>
            <p className="font-[family-name:var(--lat-font-display)] text-[clamp(36px,6vw,72px)] text-[var(--lat-rd)] leading-[0.88] mb-8">
              primer latido.
            </p>
            <p className="font-light text-sm text-[var(--lat-text-secondary)] leading-relaxed mb-[clamp(2rem,4vh,4rem)]">
              Regístrate para recibir acceso anticipado, actualizaciones
              exclusivas y la invitación oficial antes que nadie.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Input
                name="nombre"
                label="Nombre completo"
                placeholder="Tu nombre"
                required
              />
              <Input
                name="email"
                type="email"
                label="Email"
                placeholder="tu@email.com"
                required
              />
              <Select
                name="pais"
                label="País"
                placeholder="Selecciona tu país"
                options={COUNTRIES}
                required
              />
              <Select
                name="rol"
                label="Rol"
                placeholder="Selecciona tu rol"
                options={ROLES}
                required
              />

              <div className="mt-4">
                <Button
                  type="submit"
                  variant="filled"
                  disabled={state === "submitting"}
                >
                  {state === "submitting" ? "Registrando..." : "Quiero estar ahí →"}
                </Button>
              </div>

              {state === "error" && (
                <p className="text-[var(--lat-rd-text)] text-xs font-light">
                  Hubo un error. Intenta de nuevo.
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </section>
  );
}
