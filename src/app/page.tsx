"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

import {
  contactActions,
  experiences,
  focusAreas,
  profile,
  stats,
  strengths,
} from "@/data/profile";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const contactIconMap = {
  Email: Mail,
  Phone: Phone,
  Location: MapPin,
} as const;

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(147,51,234,0.18),transparent_45%)]" />
      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 pb-24 pt-24 sm:px-10 lg:px-16"
      >
        <motion.section
          variants={fadeUp}
          className="glass-sheen rounded-[28px] border border-slate-800/60 p-8 sm:p-10"
        >
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-700/70 px-3 py-1 text-xs uppercase tracking-wide text-slate-300">
              <Sparkles size={14} className="text-emerald-300" />
              Available for impactful backend roles
            </span>
            <span className="text-slate-400">{profile.location}</span>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              {profile.title}
            </p>
            <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="max-w-3xl text-lg text-slate-300 sm:text-xl">
              {profile.summary}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white"
            >
              Email me
              <ArrowUpRight size={16} />
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-400/80 hover:text-emerald-200"
            >
              Schedule a call
              <Phone size={16} />
            </a>
            {profile.linkedin && (
              <Link
                href={profile.linkedin}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-blue-400/80 hover:text-blue-200"
              >
                LinkedIn
                <ArrowUpRight size={16} />
              </Link>
            )}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-5 shadow-[0_10px_40px_rgba(2,6,23,0.35)]"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-400">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={fadeUp} className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-emerald-200">
              <Briefcase size={16} />
              Experience
            </span>
            <p className="text-sm text-slate-400">
              Buddy4Study · Jul 2024 – Present
            </p>
          </div>
          <div className="space-y-5">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.role}`}
                variants={fadeUp}
                className="relative rounded-3xl border border-slate-800/70 bg-slate-950/40 p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                      {experience.company}
                    </p>
                    <h3 className="text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                  </div>
                  <span className="rounded-full border border-slate-600/70 px-4 py-1 text-sm text-slate-300">
                    {experience.timeframe}
                  </span>
                </div>
                <p className="mt-4 text-base text-slate-300">
                  {experience.description}
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  {experience.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-3 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-4"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
                      <p className="text-slate-200">{achievement}</p>
                    </li>
                  ))}
                </ul>
                {index === 0 && (
                  <div className="mt-5 inline-flex rounded-full border border-indigo-500/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-indigo-200">
                    Owning production microservices
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          className="grid gap-6 lg:grid-cols-2"
        >
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="glass-sheen rounded-3xl border border-slate-800/70 p-6 sm:p-8"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Focus
              </p>
              <h3 className="mt-2 text-2xl font-semibold">{area.title}</h3>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-slate-700/50 bg-slate-900/50 px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.section>

        <motion.section variants={fadeUp} className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Strengths
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {strengths.map((strength) => (
              <div
                key={strength.label}
                className="rounded-3xl border border-slate-800/60 bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-slate-900/60 p-6"
              >
                <h4 className="text-lg font-semibold text-white">
                  {strength.label}
                </h4>
                <p className="mt-3 text-sm text-slate-300">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          className="glass-sheen rounded-[28px] border border-slate-800/60 p-6 sm:p-10"
        >
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Let&apos;s collaborate
            </p>
            <h3 className="text-3xl font-semibold text-white">
              Building the next chapter of scholarship technology
            </h3>
            <p className="text-base text-slate-300">
              Whether you need a fast MVP, rigorous API migrations, or improved
              developer tooling, I bring the curiosity and ownership to ship it
              with you.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {contactActions.map((action, index) => {
              const Icon =
                contactIconMap[action.label as keyof typeof contactIconMap] ??
                Sparkles;
              const gradients = [
                "from-indigo-500/15 via-transparent to-transparent",
                "from-emerald-500/15 via-transparent to-transparent",
                "from-rose-500/15 via-transparent to-transparent",
              ];
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  target={
                    action.label === "Location" ? "_blank" : undefined
                  }
                  className={clsx(
                    "glow-ring flex flex-col gap-3 rounded-3xl bg-gradient-to-br p-5 text-left transition hover:-translate-y-1",
                    gradients[index % gradients.length],
                  )}
                >
                  <Icon className="text-emerald-200" size={24} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                      {action.label}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      {action.value}
                    </p>
                    <p className="text-sm text-slate-400">{action.helper}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
}
