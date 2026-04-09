import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const servicesData = [
  {
    id: "sports-data",
    title: "Sports Data API",
    description:
      "Real-time sports telemetry API delivering instant fixtures, scores, and deep analytics.",
    emoji: "📡",
    tag: "Real-time",
    tagColor: "text-aqua border-aqua/30 bg-aqua/10",
    accentFrom: "#33c2cc",
    accentTo: "#5c33cc",
    plans: [
      {
        name: "BASIC",
        tagline: "Perfect for small projects, personal apps, and testing.",
        features: [
          "Access to limited sports data (selected leagues)",
          "Basic API endpoints",
          "Update frequency: Every 60 seconds",
          "Request limit: 1,000 requests/day",
          "Email support",
        ],
        price: "₹49/month",
        color: "from-mint/20 to-aqua/10",
        accent: "text-mint",
        border: "border-mint/30",
        glow: "shadow-mint/20",
      },
      {
        name: "PRO",
        tagline: "Best for growing apps, startups, and production use.",
        features: [
          "Access to multiple leagues and competitions",
          "Full API access (scores, fixtures, stats)",
          "Update frequency: Every 10–15 seconds",
          "Request limit: 10,000 requests/day",
          "Priority email support",
          "Webhook support for real-time updates",
        ],
        price: "₹149/month",
        color: "from-aqua/20 to-royal/10",
        accent: "text-aqua",
        border: "border-aqua/30",
        glow: "shadow-aqua/20",
        highlighted: true,
      },
      {
        name: "ENTERPRISE",
        tagline: "Designed for high-scale platforms and businesses.",
        features: [
          "Full access to all sports data and endpoints",
          "Real-time updates (instant data feed)",
          "Unlimited API requests",
          "Dedicated server / custom endpoints",
          "SLA uptime guarantee",
          "24/7 priority support",
          "Custom integrations available",
        ],
        price: "Custom pricing",
        color: "from-royal/20 to-lavender/10",
        accent: "text-lavender",
        border: "border-lavender/30",
        glow: "shadow-lavender/20",
      },
    ],
  },
  {
    id: "price-tracker",
    title: "Price Tracker Bot",
    description:
      "Automated alert engine monitoring e-commerce networks for instant price drop notifications.",
    emoji: "🔔",
    tag: "Automated",
    tagColor: "text-coral border-coral/30 bg-coral/10",
    accentFrom: "#ea4884",
    accentTo: "#ca2f8c",
    plans: [
      {
        name: "STANDARD",
        tagline: "Track prices smartly and never miss the right time to buy.",
        features: [
          "Track products from Amazon, Flipkart, and more",
          "Instant Telegram notifications on price drops",
          "Smart alerts based on your target price",
          "Price history visualization",
          "AI-based buy-now or wait suggestions",
          "Track up to 20 items simultaneously",
          "Real-time monitoring",
        ],
        price: "₹49/month",
        color: "from-coral/20 to-fuchsia/10",
        accent: "text-coral",
        border: "border-coral/30",
        glow: "shadow-coral/20",
      },
    ],
  },
  {
    id: "zomato-rescue",
    title: "Zomato Food Rescue",
    description:
      "Infrastructure mapping surplus restaurant food to local shelters, optimising waste reduction.",
    emoji: "🌱",
    tag: "Social Impact",
    tagColor: "text-mint border-mint/30 bg-mint/10",
    accentFrom: "#57db96",
    accentTo: "#33c2cc",
    plans: [
      {
        name: "BASIC",
        tagline: "Ideal for small restaurants, local vendors, and early-stage partners.",
        features: [
          "List surplus food items for rescue",
          "Basic dashboard to manage listings",
          "Manual approval and distribution flow",
          "Limited daily rescue listings",
          "Email support",
          "Helps reduce food waste locally",
        ],
        price: "₹19/month",
        color: "from-mint/20 to-aqua/10",
        accent: "text-mint",
        border: "border-mint/30",
        glow: "shadow-mint/20",
      },
      {
        name: "PRO",
        tagline: "For restaurants and cloud kitchens managing higher food volume.",
        features: [
          "Unlimited food listings and rescue requests",
          "Automated matching with nearby NGOs",
          "Real-time notifications for pickups",
          "Advanced dashboard with analytics",
          "Priority support",
          "Multi-location support",
          "Maximise impact with smart food distribution",
        ],
        price: "₹99/month",
        color: "from-royal/20 to-lavender/10",
        accent: "text-lavender",
        border: "border-lavender/30",
        glow: "shadow-lavender/20",
        highlighted: true,
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const planVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── Service Card ─────────────────────────────────────────── */
function ServiceCard({ service, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
      className="group relative flex flex-col p-8 rounded-2xl 
      border border-white/10 
      bg-white/[0.03] backdrop-blur-xl 
      cursor-pointer overflow-hidden h-full"
      style={{ transition: "box-shadow 0.3s, transform 0.3s", transform: hovered ? "translateY(-4px)" : "translateY(0)" }}
    >
      {/* animated glow on hover */}
      <motion.div
      
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(400px circle at 50% 30%, ${service.accentFrom}14, transparent 70%)`,
          boxShadow: `inset 0 0 0 1px ${service.accentFrom}44`,
        }}
      />

      {/* top accent bar */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] rounded-tl-2xl"
        style={{ background: `linear-gradient(90deg, ${service.accentFrom}, ${service.accentTo})` }}
        initial={{ width: "0%" }}
        animate={{ width: hovered ? "100%" : "35%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* ── Top block ── */}
      <div className="flex items-center justify-between mb-8">
        <div
          className="w-14 h-14 flex items-center justify-center rounded-2xl text-3xl"
          style={{ background: `${service.accentFrom}18`, border: `1px solid ${service.accentFrom}33` }}
        >
          {service.emoji}
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: service.accentFrom }} />
            <span className="relative inline-flex rounded-full h-2 w-2"
              style={{ background: service.accentFrom }} />
          </span>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${service.tagColor}`}>
            {service.tag}
          </span>
        </div>
      </div>

      {/* ── Title & description ── */}
      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight leading-snug">
        {service.title}
      </h3>
      <p className="text-neutral-400 text-sm leading-relaxed mb-8">
        {service.description}
      </p>

      {/* ── Feature preview from first plan ── */}
      <div className="flex-1 mb-8">
        <p className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-4"
          style={{ color: service.accentFrom }}>
          What's included
        </p>
        <ul className="space-y-3">
          {service.plans[0].features.slice(0, 5).map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
              <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                style={{ color: service.accentFrom }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </li>
          ))}
          {service.plans[0].features.length > 5 && (
            <li className="text-xs text-neutral-500 pl-7">
              +{service.plans[0].features.length - 5} more features...
            </li>
          )}
        </ul>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-white/8 mb-6" />

      {/* ── Pricing hint ── */}
      <div className="flex items-end justify-between mb-5">
        <div>
          <p className="text-[11px] text-neutral-500 uppercase tracking-widest mb-1">Starting from</p>
          <p className="text-2xl font-extrabold text-white">{service.plans[0].price}</p>
        </div>
        <span className="text-xs text-neutral-500">
          {service.plans.length} Plan{service.plans.length > 1 ? "s" : ""} available
        </span>
      </div>

      {/* ── CTA button ── */}
      <motion.button
        className="w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 border transition-colors duration-200"
        style={{
          background: hovered ? `${service.accentFrom}22` : "transparent",
          borderColor: `${service.accentFrom}55`,
          color: hovered ? "white" : service.accentFrom,
        }}
        animate={{ x: 0 }}
      >
        View All Plans
        <motion.svg
          className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
          animate={{ x: hovered ? 3 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </motion.svg>
      </motion.button>
    </motion.div>
  );
}

/* ── Plan Card ────────────────────────────────────────────── */
function PlanCard({ plan, idx, accentFrom }) {
  return (
    <motion.div
      variants={planVariants}
      custom={idx}
      initial="hidden"
      animate="visible"
      className={`relative flex flex-col rounded-2xl border ${plan.border} bg-gradient-to-b ${plan.color} p-6 overflow-hidden
        ${plan.highlighted ? "ring-1 ring-white/20 scale-[1.02]" : ""}`}
    >
      {plan.highlighted && (
        <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl"
          style={{ background: `linear-gradient(90deg, transparent, ${accentFrom}, transparent)` }} />
      )}
      {plan.highlighted && (
        <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20">
          POPULAR
        </span>
      )}

      <span className={`text-[11px] font-bold tracking-[0.18em] mb-3 ${plan.accent}`}>{plan.name}</span>
      <div className="text-3xl font-extrabold text-white mb-1">{plan.price}</div>
      <p className="text-sm text-neutral-400 mb-5 pb-5 border-b border-white/10 leading-relaxed">{plan.tagline}</p>

      <ul className="space-y-2.5 flex-1 mb-6">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-300">
            <svg className={`w-4 h-4 mt-0.5 shrink-0 ${plan.accent}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-xl border ${plan.border} bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg`}
        style={{ ['--tw-shadow-color']: accentFrom }}
      >
        under development
      </button>
    </motion.div>
  );
}

/* ── Main Component ───────────────────────────────────────── */
export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="relative c-space section-spacing">
      {/* Header */}
      <div className="flex flex-col gap-3 mb-2">
        <div className="flex items-center gap-3">
          <span className="w-8 h-[2px] rounded bg-aqua" />
          <span className="text-xs font-semibold tracking-[0.2em] text-aqua uppercase">Products</span>
        </div>
        <h2 className="text-heading">SaaS Ecosystem</h2>
        <p className="text-neutral-400 max-w-lg text-sm leading-relaxed">
          Production-ready APIs and automated infrastructure designed for scale,
          reliability, and speed.
        </p>
      </div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-3 gap-5 mt-10 md:min-h-[80vh]"
      >
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onClick={() => setSelectedService(service)}
          />
        ))}
      </motion.div>

      {/* Pricing Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/75 backdrop-blur-lg overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 24 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-2xl border border-white/10 bg-gradient-to-b from-[#1a1c35] to-[#0e1028] shadow-2xl my-auto overflow-hidden"
            >
              {/* top glow strip */}
              <div
                className="absolute top-0 inset-x-0 h-[1px]"
                style={{ background: `linear-gradient(90deg, transparent, ${selectedService.accentFrom}, ${selectedService.accentTo}, transparent)` }}
              />

              {/* ambient background glow */}
              <div
                className="absolute top-0 right-0 w-96 h-64 pointer-events-none rounded-full blur-[100px] opacity-20"
                style={{ background: `radial-gradient(circle, ${selectedService.accentFrom}, transparent 70%)` }}
              />

              {/* Modal header */}
              <div className="relative p-8 border-b border-white/8 flex items-start justify-between gap-4">
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-2xl text-3xl shrink-0"
                    style={{ background: `${selectedService.accentFrom}18`, border: `1px solid ${selectedService.accentFrom}40` }}
                  >
                    {selectedService.emoji}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                          style={{ background: selectedService.accentFrom }} />
                        <span className="relative inline-flex rounded-full h-2 w-2"
                          style={{ background: selectedService.accentFrom }} />
                      </span>
                      <span className="text-xs font-semibold tracking-widest uppercase"
                        style={{ color: selectedService.accentFrom }}>
                        Live Service
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {selectedService.title}
                    </h3>
                    <p className="text-neutral-400 text-sm mt-1">{selectedService.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="shrink-0 p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-neutral-400 hover:text-white"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Plans */}
              <div className="relative p-8">
                <div
                  className="grid gap-5"
                  style={{ gridTemplateColumns: `repeat(auto-fit, minmax(240px, 1fr))` }}
                >
                  {selectedService.plans.map((plan, idx) => (
                    <PlanCard key={idx} plan={plan} idx={idx} accentFrom={selectedService.accentFrom} />
                  ))}
                </div>

                {/* Footer note */}
                <p className="text-center text-xs text-neutral-600 mt-8">
                  All plans include a 7-day free trial · No credit card required
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}