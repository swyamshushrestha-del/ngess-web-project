// ─── Admission Form Options ───────────────────────────────────────────────────

export const classOptions = [
  { value: "nursery",              label: "Nursery" },
  { value: "lkg",                  label: "LKG" },
  { value: "ukg",                  label: "UKG" },
  ...Array.from({ length: 10 }, (_, i) => ({
    value: `class-${i + 1}`,
    label: `Class ${i + 1}`,
  })),
  { value: "class-11-science",     label: "Class 11 (Science)" },
  { value: "class-11-management",  label: "Class 11 (Management)" },
  { value: "class-11-hm",          label: "Class 11 (HM & Tourism)" },
];

export const ADMISSION_SUCCESS = {
  title: "Application Received!",
  message:
    "Thank you for choosing New Galaxy. Our admissions team will review your application and contact you within 24 hours.",
};
