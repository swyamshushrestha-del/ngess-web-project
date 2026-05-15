import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";
import { SectionLabel } from "../components/ui/SectionLabel";
import { GlassCard } from "../components/ui/GlassCard";
import { GlassButton } from "../components/ui/GlassButton";
import { GlassInput } from "../components/ui/GlassInput";
import { GlassSelect } from "../components/ui/GlassInput";
import { classOptions, ADMISSION_SUCCESS } from "../data/admission";
import { useTranslation } from "../lib/useTranslation";

const Admission = () => {
  const t = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const class11Selected = ["class-11-science", "class-11-management", "class-11-hm"].includes(selectedClass);
  const admissionClassOptions = [
    { value: "", label: "Select Class" },
    ...classOptions,
  ];

  useEffect(() => {
    document.title = "Admission | New Galaxy English Secondary School";
  }, []);

  if (submitted)
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <GlassCard intensity="strong" className="text-center max-w-md p-12">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
            style={{ backgroundColor: "var(--accent)" }}
          >
            <CheckCircle size={32} className="text-white" />
          </div>
          <h2 className="text-3xl font-serif font-bold mb-3" style={{ color: "var(--text-primary)" }}>{ADMISSION_SUCCESS.title}</h2>
          <p className="text-sm mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {ADMISSION_SUCCESS.message}
          </p>
          <Link to="/">
            <GlassButton variant="secondary">
              ← Return to Home
            </GlassButton>
          </Link>
        </GlassCard>
      </div>
    );

  return (
    <div>
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLabel>{t.admission.hero.tag}</SectionLabel>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-3" style={{ color: "var(--text-primary)" }}>{t.admission.hero.title}</h1>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              {t.admission.hero.subtitle}
            </p>
          </div>

          <GlassCard intensity="mid" className="p-8 lg:p-12">
            <form
              ref={formRef}
              onSubmit={(e) => {
                e.preventDefault();
                const form = formRef.current;
                if (!form || !form.checkValidity()) {
                  form?.reportValidity();
                  return;
                }
                setSubmitted(true);
              }}
              className="space-y-10"
            >
              {/* Student Info */}
              <fieldset className="space-y-5">
                <legend
                  className="text-sm font-bold uppercase tracking-widest pb-3 w-full"
                  style={{ color: "var(--text-secondary)", borderBottom: "1px solid var(--glass-border)" }}
                >
                  Student Information
                </legend>
                <div className="grid md:grid-cols-2 gap-5">
                  <GlassInput label="Full Name" type="text" placeholder="Student's Full Name" required />
                  <GlassInput label="Date of Birth" type="date" required />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <GlassSelect
                    label="Applying for Class"
                    options={admissionClassOptions}
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    required
                  />
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Gender</label>
                    <div
                      className="flex gap-6 p-3.5 rounded-xl"
                      style={{ backgroundColor: "var(--glass-bg)", border: "1px solid var(--glass-border)" }}
                    >
                      {["Male", "Female", "Other"].map((g) => (
                        <label key={g} className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "var(--text-secondary)" }}>
                          <input type="radio" name="gender" style={{ accentColor: "var(--accent)" }} /> {g}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {class11Selected && (
                  <div className="space-y-5 pt-2">
                    <div style={{ height: "1px", background: "var(--glass-border)" }} />
                    <div className="grid md:grid-cols-2 gap-5">
                      <GlassInput
                        label="SEE GPA"
                        type="number"
                        min="0"
                        max="4"
                        step="0.01"
                        placeholder="e.g. 3.85"
                        required
                      />
                      <GlassInput
                        label="Previous SEE Passed School"
                        type="text"
                        placeholder="Name of school"
                        required
                      />
                    </div>
                  </div>
                )}
              </fieldset>

              {/* Parent Info */}
              <fieldset className="space-y-5">
                <legend
                  className="text-sm font-bold uppercase tracking-widest pb-3 w-full"
                  style={{ color: "var(--text-secondary)", borderBottom: "1px solid var(--glass-border)" }}
                >
                  Parent / Guardian Information
                </legend>
                <div className="grid md:grid-cols-2 gap-5">
                  <GlassInput label="Parent / Guardian Name" type="text" placeholder="Full Name" required />
                  <GlassInput label="Contact Number" type="tel" placeholder="+977 98XXXXXXXX" required />
                </div>
              </fieldset>

              <GlassButton variant="accent" size="lg" type="submit" className="w-full">
                Submit Application
              </GlassButton>
            </form>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Admission;
