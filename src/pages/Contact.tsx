import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Calendar, CheckCircle } from "lucide-react";
import { SCHOOL_INFO } from "../data/site";
import { useTranslation } from "../lib/useTranslation";

const contactItems = [
  { icon: MapPin,   key: "address" as const, detail: SCHOOL_INFO.address },
  { icon: Phone,    key: "phone"   as const, detail: SCHOOL_INFO.phone },
  { icon: Mail,     key: "email"   as const, detail: SCHOOL_INFO.email },
  { icon: Calendar, key: "hours"   as const, detail: SCHOOL_INFO.officeHours },
];

const inputStyle = (hasError: boolean): React.CSSProperties => ({
  width: "100%",
  padding: "12px 16px",
  border: hasError ? "1.5px solid #EF4444" : "1.5px solid #BBF7D0",
  borderRadius: "12px",
  fontSize: "14px",
  color: "#0F172A",
  background: "#FAFFFE",
  outline: "none",
  boxSizing: "border-box",
});

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "6px",
  fontSize: "13px",
  fontWeight: 600,
  color: "#0F172A",
};

const Contact = () => {
  const t = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | New Galaxy English Secondary School";
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim())    e.name    = "Name is required";
    if (!formData.email.trim())   e.email   = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Invalid email format";
    if (!formData.subject.trim()) e.subject = "Subject is required";
    if (!formData.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(errs);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div>
      {/* ── Hero ── */}
      <section
        style={{
          paddingTop: "120px",
          paddingBottom: "64px",
          background: "linear-gradient(135deg, #00864B 0%, #047857 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating dots overlay */}
        {[
          { size: 300, top: "-80px", right: "-60px", opacity: 0.08 },
          { size: 180, bottom: "-40px", left: "5%",  opacity: 0.10 },
          { size: 100, top: "30%",    right: "18%",  opacity: 0.07 },
        ].map((dot, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: dot.size,
              height: dot.size,
              borderRadius: "50%",
              background: "#A7F3D0",
              opacity: dot.opacity,
              top: (dot as any).top,
              bottom: (dot as any).bottom,
              left: (dot as any).left,
              right: (dot as any).right,
              pointerEvents: "none",
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-4" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.15)",
                color: "#FFFFFF",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "999px",
                padding: "6px 18px",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                marginBottom: "20px",
              }}
            >
              {t.contact.hero.tag}
            </span>
            <h1
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                fontFamily: "serif",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            >
              {t.contact.hero.title}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              {t.contact.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section style={{ background: "#FFFFFF", paddingTop: "96px", paddingBottom: "96px" }}>
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">

          {/* Left — Contact Info */}
          <div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0F172A", marginBottom: "32px" }}>
              Reach Us
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {contactItems.map(({ icon: Icon, key, detail }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,134,75,0.10)" }}
                  style={{
                    background: "#FFFFFF",
                    border: "1.5px solid #BBF7D0",
                    borderRadius: "16px",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    cursor: "default",
                    transition: "box-shadow 0.2s ease, transform 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      minWidth: "44px",
                      borderRadius: "10px",
                      background: "#F0FDF4",
                      color: "#00864B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: "#0F172A", marginBottom: "4px", fontSize: "15px" }}>{t.contact.info[key]}</h4>
                    <p style={{ color: "#475569", fontSize: "14px", lineHeight: 1.6 }}>{detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #BBF7D0",
              borderRadius: "24px",
              padding: "40px",
            }}
          >
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginBottom: "20px",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                  fontWeight: 700,
                  background: "#F0FDF4",
                  color: "#00864B",
                  border: "1.5px solid #BBF7D0",
                }}
              >
                <CheckCircle size={18} style={{ flexShrink: 0 }} />
                Your message has been sent successfully!
              </motion.div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Name + Email row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
                <div>
                  <label htmlFor="contact-name" style={labelStyle}>{t.contact.form.name}</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder={t.contact.form.name}
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle(!!errors.name)}
                  />
                  {errors.name && <span style={{ color: "#EF4444", fontSize: "12px" }}>{errors.name}</span>}
                </div>
                <div>
                  <label htmlFor="contact-email" style={labelStyle}>{t.contact.form.email}</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder={t.contact.form.email}
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle(!!errors.email)}
                  />
                  {errors.email && <span style={{ color: "#EF4444", fontSize: "12px" }}>{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="contact-subject" style={labelStyle}>Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Inquiry about Admission"
                  value={formData.subject}
                  onChange={handleChange}
                  style={inputStyle(!!errors.subject)}
                />
                {errors.subject && <span style={{ color: "#EF4444", fontSize: "12px" }}>{errors.subject}</span>}
              </div>

              {/* Message */}
              <div style={{ marginBottom: "28px" }}>
                <label htmlFor="contact-message" style={labelStyle}>{t.contact.form.message}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder={t.contact.form.message}
                  value={formData.message}
                  onChange={handleChange}
                  style={{ ...inputStyle(!!errors.message), resize: "vertical" }}
                />
                {errors.message && <span style={{ color: "#EF4444", fontSize: "12px" }}>{errors.message}</span>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "#00864B",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "15px",
                  fontWeight: 700,
                  cursor: "pointer",
                  letterSpacing: "0.01em",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                {t.contact.form.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── Map ── */}
      <section style={{ height: "440px", width: "100%" }}>
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(SCHOOL_INFO.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${SCHOOL_INFO.name} Location`}
        />
      </section>
    </div>
  );
};

export default Contact;
