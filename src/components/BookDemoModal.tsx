import React, { useState, useEffect } from "react";
import { X, Check } from "lucide-react";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const projectOptions = [
  "Business Platform / ERP",
  "Education & LMS",
  "AI & Automation",
  "Web Application / SaaS",
  "Other Inquiry",
];

const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<"form" | "success">("form");
  const [selectedProjectType, setSelectedProjectType] = useState<string>(projectOptions[0]);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
    return () => {
      document.body.style.overflow = "initial";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.mobile.trim()) return;
    setStep("success");
  };

  const handleClose = () => {
    setStep("form");
    setForm({ name: "", mobile: "", message: "" });
    setSelectedProjectType(projectOptions[0]);
    onClose();
  };

  const isFormValid = Boolean(form.name.trim() && form.mobile.trim());

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-sans">
      {/* Dark Overlay */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden z-10 border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── SUCCESS STATE ── */}
        {step === "success" ? (
          <div className="p-6 sm:p-8 flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center text-blue">
              <Check className="w-6 h-6 text-blue" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-foreground">
                Thank You, {form.name}
              </h3>
              <p className="text-xs text-foreground/75 leading-relaxed max-w-xs mx-auto">
                Your message has been received. I will reach out to you on{" "}
                <strong className="font-semibold text-foreground">{form.mobile}</strong> within 24 hours.
              </p>
            </div>

            <button
              onClick={handleClose}
              className="mt-2 w-full py-2.5 bg-blue text-white font-medium text-xs rounded-xl hover:bg-blue-600 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (

          /* ── FORM STATE ── */
          <>
            {/* Header */}
            <div className="px-6 py-4 border-b border-border/80 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  Let’s Talk
                </h2>
                <p className="text-xs text-foreground/70 mt-0.5">
                  Fill in your details below to get in touch.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-lg text-foreground/60 hover:text-foreground hover:bg-muted flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
              
              {/* Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground/80">
                  Name <span className="text-blue">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-white text-xs font-normal text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors"
                />
              </div>

              {/* Mobile / WhatsApp */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground/80">
                  Mobile or WhatsApp <span className="text-blue">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-white text-xs font-normal text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors"
                />
              </div>

              {/* Project Type Dropdown */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground/80">
                  Project Type
                </label>
                <select
                  value={selectedProjectType}
                  onChange={(e) => setSelectedProjectType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-border bg-white text-xs font-normal text-foreground focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors cursor-pointer"
                >
                  {projectOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground/80">
                  Message <span className="text-foreground/40 font-normal">(Optional)</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your project or idea..."
                  rows={3}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-white text-xs font-normal text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="w-full py-3 bg-blue hover:bg-blue-600 text-white font-medium text-xs rounded-xl transition-colors cursor-pointer shadow-xs disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Message
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BookDemoModal;
