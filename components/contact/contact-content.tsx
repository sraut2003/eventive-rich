"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  message: string;
}

const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // 🔴 CHANGE THIS NUMBER

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    detail: "+91 XXXXXXXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "hello@eventiverich.com",
    href: "mailto:hello@eventiverich.com",
  },
  {
    icon: MapPin,
    title: "Office",
    detail: "Nagpur, Maharashtra, India",
    href: null,
  },
  { icon: Clock, title: "Hours", detail: "Mon - Sat: 9AM - 7PM", href: null },
];

const eventTypes = [
  "Wedding",
  "Engagement",
  "Corporate Event",
  "Birthday Party",
  "Private Dinner",
  "Other",
];

export function ContactPageContent() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const text = `New Event Inquiry 🎉

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Event Type: ${data.eventType}
Event Date: ${data.eventDate}
Message: ${data.message}`;

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank");

      toast.success("Message sent successfully on WhatsApp 🎉");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* HEADER */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-secondary" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Get in Touch
            </span>
            <h1 className="font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Ready to plan your dream event? Reach out for a free consultation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-16 lg:grid-cols-5">
          {/* LEFT INFO */}
          <div className="lg:col-span-2">
            <FadeIn>
              <h2 className="font-serif text-2xl font-bold">
                Let's Start Planning
              </h2>
              <p className="mt-4 text-muted-foreground">
                Fill the form or contact us directly.
              </p>
            </FadeIn>

            <StaggerContainer className="mt-10 space-y-6">
              {contactInfo.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          {item.detail}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {item.detail}
                        </p>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3">
            <FadeIn>
              <div className="rounded-2xl border bg-card p-8 shadow-sm lg:p-10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <input
                        placeholder="Full Name"
                        className="w-full rounded-xl border p-3"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        placeholder="Email"
                        className="w-full rounded-xl border p-3"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email",
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <input
                      placeholder="Phone Number"
                      className="w-full rounded-xl border p-3"
                      {...register("phone", { required: "Phone is required" })}
                    />

                    <select
                      className="w-full rounded-xl border p-3"
                      {...register("eventType", {
                        required: "Select event type",
                      })}
                    >
                      <option value="">Event Type</option>
                      {eventTypes.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <input
                    type="date"
                    className="w-full rounded-xl border p-3"
                    {...register("eventDate", {
                      required: "Event date required",
                    })}
                  />

                  <textarea
                    rows={5}
                    placeholder="Tell us about your event..."
                    className="w-full rounded-xl border p-3"
                    {...register("message", { required: "Message required" })}
                  />

                  <button
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-white"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
