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
  phone: string;
  profession: string;
};

export default function WebinarPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [webinar, setWebinar] = useState<WebinarData | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [form, setForm] = useState<FormState>({ name: "", phone: "", profession: "" });
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

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-3">
          <p style={{ fontFamily: "var(--font-outfit)", fontSize: "18px", color: "rgba(255,255,255,0.5)" }}>
            This webinar is no longer available.
          </p>
        </div>
      </div>
    );
  }

  if (!webinar) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin"
            style={{ borderColor: "rgba(105,74,255,0.5)", borderTopColor: "transparent" }} />
          <p style={{ fontFamily: "var(--font-outfit)", fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>
            Loading…
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row">

      {/* ══ LEFT — Banner image ══ */}
      <div className="relative lg:sticky lg:top-0 lg:h-screen lg:w-[55%] w-full shrink-0 lg:overflow-hidden">

        {/* Mobile: full image, natural proportions */}
        {webinar.bannerUrl && (
          <Image
            src={webinar.bannerUrl}
            alt={webinar.title}
            width={1200}
            height={1200}
            className="lg:hidden w-full h-auto"
            priority
            unoptimized
          />
        )}

        {/* Desktop: fill the sticky column */}
        <div className="hidden lg:block w-full h-full relative">
          {webinar.bannerUrl && (
            <Image
              src={webinar.bannerUrl}
              alt={webinar.title}
              fill
              className="object-cover object-center"
              priority
              unoptimized
            />
          )}
          {/* HACA badge on image */}
          <div className="absolute top-6 left-6 z-10">
            <Image
              src="/photos/common/haca logo.svg"
              alt="HACA"
              width={80}
              height={28}
              className="brightness-0 invert opacity-90"
            />
          </div>
        </div>
      </div>

      {/* ══ RIGHT — Registration form ══ */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-5 py-10 lg:py-16 lg:px-12 xl:px-16">
        <div className="w-full max-w-[420px] mx-auto lg:mx-0 flex flex-col gap-8">

          {/* Logo — mobile only */}
          <div className="flex lg:hidden justify-center">
            <Image
              src="/photos/common/haca logo.svg"
              alt="HACA"
              width={72}
              height={26}
              className="brightness-0 invert opacity-80"
            />
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-2">
            <div
              className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full mb-1"
              style={{
                background: "rgba(105,74,255,0.12)",
                border: "1px solid rgba(105,74,255,0.25)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#694AFF" }}
              />
              <span style={{ fontFamily: "var(--font-outfit)", fontSize: "11px", fontWeight: 500, color: "#A78BFA", letterSpacing: "0.06em" }}>
                FREE WEBINAR
              </span>
            </div>
            <h1 style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "clamp(22px,3.5vw,30px)", lineHeight: "1.2", color: "#FFFFFF" }}>
              Reserve Your Spot
            </h1>
            <p style={{ fontFamily: "var(--font-outfit)", fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: "1.6" }}>
              Fill in your details below to secure your seat and get instant WhatsApp access.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <FormField
              label="Full Name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
            />
            <FormField
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={handleChange}
            />
            <FormField
              label="Current Profession"
              name="profession"
              type="text"
              placeholder="e.g. Student, Designer, Freelancer"
              value={form.profession}
              onChange={handleChange}
            />

            {error && (
              <div
                className="rounded-xl px-4 py-3 text-sm"
                style={{
                  fontFamily: "var(--font-outfit)",
                  background: "rgba(255,86,0,0.08)",
                  border: "1px solid rgba(255,86,0,0.2)",
                  color: "#FF8A60",
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="relative w-full rounded-xl py-4 text-white font-semibold overflow-hidden transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "15px",
                background: submitting ? "#1ea952" : "#25D366",
                boxShadow: submitting ? "none" : "0 6px 32px rgba(37,211,102,0.35)",
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {submitting ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin inline-block" />
                    Joining…
                  </>
                ) : (
                  <>
                    Join via WhatsApp
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {["100% Free", "Live Session", "Certificate"].map((badge) => (
              <div key={badge} className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5.5" stroke="rgba(105,74,255,0.5)" />
                  <path d="M3.5 6l1.8 1.8L8.5 4.5" stroke="#694AFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontFamily: "var(--font-outfit)", fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.04em",
          color: "rgba(255,255,255,0.45)",
          textTransform: "uppercase",
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
        required
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none transition-all duration-200"
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: "14px",
          background: focused ? "rgba(105,74,255,0.07)" : "rgba(255,255,255,0.04)",
          border: focused ? "1px solid rgba(105,74,255,0.5)" : "1px solid rgba(255,255,255,0.08)",
          boxShadow: focused ? "0 0 0 3px rgba(105,74,255,0.08)" : "none",
        }}
      />
    </div>
  );
}
