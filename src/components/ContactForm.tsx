"use client";

import { useState } from "react";
import { useTranslations } from 'next-intl';
import { ArrowUpRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const t = useTranslations('contact.form');
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const templateParams = {
      from_name: formData.get("name") as string,
      from_email: formData.get("email") as string,
      message: formData.get("message") as string,
      to_email: "wahidullah_rahmani@hotmail.com",
    };

    try {
      // EmailJS Configuration
      // You need to:
      // 1. Sign up at https://www.emailjs.com/ (free)
      // 2. Create a service (Gmail/Outlook)
      // 3. Create a template
      // 4. Get your Public Key, Service ID, and Template ID
      // 5. Replace the values below

      const SERVICE_ID = "service_wzreo2h";
      const TEMPLATE_ID = "template_ey696rt";
      const PUBLIC_KEY = "IoYx9XRTYjWN9rzjw";

      // Initialize EmailJS (only needed once, but safe to call multiple times)
      emailjs.init(PUBLIC_KEY);

      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

      if (response.status === 200) {
        setStatus("success");
        (event.target as HTMLFormElement).reset();
      } else {
        setErrorMessage("Failed to send message. Please try again.");
        setStatus("error");
      }
    } catch (error: unknown) {
      console.error("EmailJS Error:", error);
      
      // Type guard for EmailJS error
      const emailjsError = error as { text?: string; status?: number };
      
      // If keys are not set up yet, show helpful message
      if (emailjsError?.text?.includes("Invalid") || emailjsError?.text?.includes("YOUR_")) {
        setErrorMessage(
          "Form is not configured yet. Please set up EmailJS keys. For now, you can email directly using the link below."
        );
      } else {
        setErrorMessage(emailjsError?.text || "Network error. Please try again.");
      }
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4 animate-in fade-in duration-500">
        <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-500 mb-2">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="text-2xl font-bold text-foreground">{t('successTitle')}</h3>
        <p className="text-text-secondary max-w-xs">
          {t('successDescription')}
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setErrorMessage("");
          }}
          className="mt-6 text-sm font-bold text-primary hover:underline transition-colors"
        >
          {t('sendAnother')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 relative">
      {/* Error Message */}
      {status === "error" && (
        <div className="mb-4 p-4 bg-red-500/10 text-red-500 text-sm rounded-lg border border-red-500/20 animate-in slide-in-from-top-2">
          <div className="flex items-start gap-2">
            <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-bold mb-1">{t('errorTitle')}</p>
              <p className="text-xs opacity-90 mb-2">{errorMessage}</p>
              <p className="text-xs opacity-75">
                <a href="mailto:wahidullah_rahmani@hotmail.com?subject=Contact from Portfolio" className="underline font-bold hover:text-red-400">
                  {t('errorFallback')}
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">
          {t('name')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          disabled={status === "submitting"}
          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-text-secondary/50 disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder={t('namePlaceholder')}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">
          {t('email')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          disabled={status === "submitting"}
          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-text-secondary/50 disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder={t('emailPlaceholder')}
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">
          {t('message')}
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          disabled={status === "submitting"}
          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none placeholder:text-text-secondary/50 disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder={t('messagePlaceholder')}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            {t('sending')}
          </>
        ) : (
          <>
            {t('send')}
            <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
};
