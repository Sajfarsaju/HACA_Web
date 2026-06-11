"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

type WebinarData = {
  title: string;
  bannerUrl: string | null;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  profession: string;
};

export default function WebinarPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [webinar, setWebinar] = useState<WebinarData | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", profession: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000";
    fetch(`${backendUrl}/api/webinars/${slug}`)
      .then((r) => {
        if (!r.ok) throw new Error("not found");
        return r.json();
      })
      .then(setWebinar)
      .catch(() => setNotFound(true));
  }, [slug]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000";
      const res = await fetch(`${backendUrl}/api/webinars/${slug}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Registration failed");
      window.location.href = data.whatsappLink;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  if (notFound) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: "#0A0A0A" }}>
        <p className="text-white/60 font-outfit text-lg">This webinar is not available.</p>
      </main>
    );
  }

  if (!webinar) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: "#0A0A0A" }}>
        <div className="w-8 h-8 rounded-full border-2 border-[#FF5600] border-t-transparent animate-spin" />
      </main>
    );
  }

  return (
    <main
      className="min-h-screen w-full flex flex-col items-center"
      style={{
        background: "linear-gradient(160deg, #0A0A0A 0%, #0f0a1a 50%, #0A0A0A 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(105,74,255,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[560px] mx-auto px-4 py-10 flex flex-col items-center gap-8">

        {/* Banner Image */}
        {webinar.bannerUrl && (
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl" style={{ boxShadow: "0 0 60px rgba(105,74,255,0.2)" }}>
            <Image
              src={webinar.bannerUrl}
              alt={webinar.title}
              width={560}
              height={560}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}

        {/* Registration Form */}
        <div
          className="w-full rounded-2xl p-6 sm:p-8"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
          }}
        >
          <h2
            className="text-white text-center mb-6"
            style={{ fontFamily: "var(--font-outfit)", fontWeight: 600, fontSize: "clamp(18px,4vw,22px)" }}
          >
            Register for the Webinar
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Field
              label="Full Name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Field
              label="Email Address"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Field
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <Field
              label="Current Profession"
              name="profession"
              type="text"
              placeholder="e.g. Student, Marketing Manager, Freelancer"
              value={form.profession}
              onChange={handleChange}
              required
            />

            {error && (
              <p
                className="text-center text-sm"
                style={{ fontFamily: "var(--font-outfit)", color: "#FF5600" }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-2 rounded-xl py-3.5 font-semibold text-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "16px",
                background: submitting
                  ? "rgba(105,74,255,0.5)"
                  : "linear-gradient(135deg, #FF5600 0%, #694AFF 100%)",
                boxShadow: submitting ? "none" : "0 4px 24px rgba(105,74,255,0.35)",
              }}
            >
              {submitting ? "Joining…" : "Join the Webinar →"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: "13px",
          fontWeight: 500,
          color: "rgba(255,255,255,0.6)",
        }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-all duration-150 focus:ring-2"
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: "14px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
        onFocus={(e) => {
          e.currentTarget.style.border = "1px solid rgba(105,74,255,0.6)";
          e.currentTarget.style.background = "rgba(255,255,255,0.08)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
          e.currentTarget.style.background = "rgba(255,255,255,0.06)";
        }}
      />
    </div>
  );
}
