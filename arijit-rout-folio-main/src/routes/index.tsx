import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Circle, Cpu, Database, Code2, FileText, Boxes, Award, Instagram, Mail, Github } from "lucide-react";

import { SiteNav } from "@/components/SiteNav";
import { Reveal } from "@/components/Reveal";
import { ResumeButton } from "@/components/ResumeButton";
import { ProjectDetail } from "@/components/ProjectDetail";
import profileImg from "@/assets/arijit-profile.png";
import projectImg from "@/assets/noise-monitor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arijit Rout — B.Tech CSE Student & Aspiring Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Arijit Rout, a second-year B.Tech Computer Science student at Lovely Professional University working with Python, C, web technologies, SQL and IoT projects.",
      },
      { property: "og:title", content: "Arijit Rout — B.Tech CSE Student & Aspiring Software Engineer" },
      {
        property: "og:description",
        content:
          "Student portfolio: programming, web technologies, databases, software engineering documentation and an Arduino/ESP32 noise monitoring project.",
      },
    ],
  }),
  component: Index,
});

const skills = [
  {
    icon: Code2,
    group: "Programming & Development",
    items: ["Python", "C", "HTML", "CSS"],
  },
  { icon: Database, group: "Database", items: ["SQL"] },
  {
    icon: FileText,
    group: "Software Engineering",
    items: ["SRS Documentation", "Requirements Analysis", "Structured Documentation"],
  },
];

const itemLogos: Record<string, string> = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "SRS Documentation": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg",
  "Requirements Analysis": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
  "Structured Documentation": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitbook/gitbook-original.svg",
};

const education = [
  {
    year: "2025 — Present",
    title: "B.Tech — Computer Science & Engineering",
    place: "Lovely Professional University",
    note: "Currently in 2nd year",
    status: "In progress",
  },
  {
    year: "2025",
    title: "Intermediate Education (Class XII)",
    place: "Sai Vidya Mandir",
    note: "Completed intermediate education in 2025",
    status: "Completed",
  },
  {
    year: "2023",
    title: "Secondary School Education (Class X)",
    place: "DAV Public School",
    note: "Completed secondary school education in 2023",
    status: "Completed",
  },
];

const learning = [
  {
    title: "Academic Projects",
    body: "Building small, working systems for coursework — from idea and wiring to code and testing.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    alt: "Academic engineering projects workbench with hardware tools and components",
  },
  {
    title: "Technical Skill Development",
    body: "Practising programming fundamentals in Python and C, and building pages with HTML and CSS.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    alt: "Code editor and programming environment on a workstation screen",
  },
  {
    title: "Software Engineering Documentation",
    body: "Writing SRS documents and structuring requirements before writing a single line of code.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    alt: "Software design specifications, SRS documentation and requirements planning",
  },
  {
    title: "Hardware Experimentation",
    body: "Hands-on work with Arduino Uno, ESP32 and sensors to understand how software meets hardware.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    alt: "Hardware prototyping board with microcontroller and electronic components",
  },
];

const certificates: {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
  alt: string;
  isPdf?: boolean;
}[] = [
  {
    title: "Master Your Leadership Effectiveness",
    issuer: "LinkedIn Learning",
    date: "Oct 2025",
    image: "/portfolio/certificates/linkedin-leadership.png",
    link: "/portfolio/certificates/linkedin-leadership.png",
    alt: "LinkedIn Learning Certificate for Master Your Leadership Effectiveness Skills",
  },
  {
    title: "Computer Programming (150 Hours)",
    issuer: "neo colab",
    date: "May 2026",
    image: "/portfolio/certificates/neo-colab-programming.png",
    link: "/portfolio/certificates/neo-colab-programming.png",
    alt: "neo colab Certificate of Appreciation for Computer Programming",
  },
  {
    title: "Community Development Project",
    issuer: "Times Foundation",
    date: "2026",
    image: "/portfolio/certificates/times-foundation-community.jpg",
    link: "/portfolio/certificates/times-foundation-community.jpg",
    alt: "Times Foundation Certificate of Completion for Community Development Project",
  },
];

const exploring = [
  "Programming",
  "Web Technologies",
  "Software Engineering",
  "Database Systems",
  "Embedded / IoT Projects",
];

const contacts = [
  { label: "Email", value: "routm7937@gmail.com", href: "https://mail.google.com/mail/?view=cm&to=routm7937@gmail.com" },
  { label: "Phone", value: "7061710713", href: "tel:+917061710713" },
  { label: "LinkedIn", value: "Arijit Rout - LinkedIn", href: "https://www.linkedin.com/in/arijit-rout-a104b5380/" },
  { label: "GitHub", value: "Arijit Rout - Github", href: "https://github.com/arijitrout09" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteNav />

      <main>
        {/* HERO */}
        <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 md:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70vh] bg-gradient-to-b from-sand via-background to-background"
          />
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="flex flex-wrap items-center justify-between gap-4">
              <span className="mono-label">// portfolio — 2026</span>
              <span className="group/avail relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-border/50 bg-background/50 px-4 py-2 text-xs font-bold backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/avail:opacity-100" />
                <Circle className="h-2 w-2 fill-accent text-accent transition-colors duration-500 group-hover/avail:fill-green-400 group-hover/avail:text-green-400 group-hover/avail:drop-shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
                <span className="relative z-10 transition-colors duration-500 group-hover/avail:text-green-400 group-hover/avail:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]">Open to learning &amp; opportunities</span>
              </span>
            </Reveal>

            <div className="relative mt-10 md:mt-6">
              {/* editorial serif line — portrait overlaps it on desktop */}
              <Reveal delay={60}>
                <p className="display flex flex-col text-6xl italic leading-[0.9] sm:text-8xl md:flex-row md:items-baseline md:justify-between lg:text-[9rem]">
                  <span>Hello,</span>
                  <span className="self-end md:self-auto">I&apos;m Arijit.</span>
                </p>
              </Reveal>

              {/* portrait */}
              <Reveal
                delay={140}
                className="relative z-10 mx-auto mt-6 w-full max-w-sm md:absolute md:inset-x-0 md:top-8 md:mt-0 md:w-[30%] md:max-w-none"
              >
                <figure className="relative mx-auto aspect-square w-full overflow-hidden rounded-full border-4 border-background shadow-[0_40px_90px_-45px_oklch(0.16_0.008_60/0.55)]">
                  <img
                    src={profileImg}
                    width={1024}
                    height={1024}
                    alt="Professional portrait of Arijit Rout, a second-year B.Tech CSE student at Lovely Professional University"
                    className="h-full w-full object-cover"
                  />
                </figure>
              </Reveal>

              <div className="relative mt-10 grid items-end gap-8 md:mt-16 md:grid-cols-12 md:gap-6">
                <Reveal delay={200} className="md:col-span-5">
                  <h1 className="text-[16vw] leading-[0.82] font-black tracking-tight uppercase sm:text-8xl lg:text-[7rem]">
                    I am
                    <br />
                    Arijit
                  </h1>
                </Reveal>

                <div className="md:col-span-3" aria-hidden />

                <Reveal delay={260} className="md:col-span-4 md:text-right">
                  <p className="ml-auto max-w-xs text-sm leading-relaxed text-muted-foreground">
                    Second-year Computer Science student at Lovely Professional University —
                    programming, software engineering, web technologies and practical projects.
                  </p>
                  <p className="mt-6 text-3xl leading-[0.9] font-black uppercase sm:text-4xl lg:text-5xl">
                    B.Tech CSE
                    <br />
                    Student &amp;
                    <br />
                    Aspiring Software
                    <br />
                    Engineer
                  </p>
                </Reveal>
              </div>

              <Reveal delay={320} className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  View My Work <ArrowUpRight className="h-4 w-4" />
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/_arijit_rout_09/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-foreground/25 bg-background transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E1306C] hover:bg-[#E1306C] hover:text-white hover:shadow-[0_0_15px_rgba(225,48,108,0.5)]"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=routm7937@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-foreground/25 bg-background transition-all duration-300 hover:-translate-y-0.5 hover:border-[#EA4335] hover:bg-[#EA4335] hover:text-white hover:shadow-[0_0_15px_rgba(234,67,53,0.5)]"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/arijitrout09"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-foreground/25 bg-background transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:bg-foreground hover:text-background hover:shadow-[0_0_15px_rgba(150,150,150,0.5)]"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
                <ResumeButton />
              </Reveal>
            </div>

          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-t border-border py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <span className="mono-label">01 / about</span>
              <h2 className="mt-4 max-w-3xl text-4xl leading-[0.95] font-black uppercase sm:text-6xl">
                About Me
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-12 md:grid-cols-12">
              <Reveal delay={60} className="md:col-span-7">
                <p className="display text-3xl leading-tight sm:text-4xl">
                  I&apos;m learning to build software that is careful, documented and actually
                  works.
                </p>
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  I&apos;m Arijit Rout, a second-year B.Tech Computer Science &amp; Engineering
                  student at Lovely Professional University. I completed my secondary education at
                  DAV Public School (2023) and intermediate education at Sai Vidya Mandir (2025).
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Right now I&apos;m developing my skills across programming, databases, web
                  development and software engineering practice — writing requirements as seriously
                  as I write code.
                </p>
              </Reveal>

              <Reveal delay={140} className="md:col-span-5">
                <dl className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                  {[
                    ["Name", "Arijit Rout"],
                    ["Current", "2nd year B.Tech CSE"],
                    ["Institution", "Lovely Professional University"],
                    ["Schooling", "DAV Public School · 2023 & Sai Vidya Mandir · 2025"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-2xl border border-border bg-card p-5">
                      <dt className="mono-label">{k}</dt>
                      <dd className="mt-2 text-base font-semibold">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="border-t border-border py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="mono-label">02 / skills</span>
                <h2 className="mt-4 text-4xl leading-[0.95] font-black uppercase sm:text-6xl">
                  What I Work With
                </h2>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">
                Technologies I use in coursework and personal projects — as a developing student,
                not a specialist.
              </p>
            </Reveal>

            <ul className="mt-12 grid gap-4 md:grid-cols-3">
              {skills.map((s, i) => (
                <Reveal as="li" key={s.group} delay={i * 90}>
                  <div className="group h-full rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent">
                    <s.icon className="h-6 w-6 text-accent" aria-hidden />
                    <h3 className="mt-6 text-xl font-bold">{s.group}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.items.map((it) => (
                        <span
                          key={it}
                          className="group/badge relative flex items-center gap-1.5 overflow-hidden rounded-full border border-border/50 bg-background/30 px-3.5 py-1.5 font-mono text-xs font-semibold backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        >
                          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/badge:opacity-100" />
                          {itemLogos[it] && (
                            <img src={itemLogos[it]} alt={`${it} logo`} className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover/badge:scale-110" />
                          )}
                          <span className="relative z-10 text-foreground transition-colors duration-500 group-hover/badge:text-cyan-400 group-hover/badge:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                            {it}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="border-t border-border py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <span className="mono-label">03 / projects</span>
              <h2 className="mt-4 text-4xl leading-[0.95] font-black uppercase sm:text-6xl">
                Recent Projects
              </h2>
            </Reveal>

            <Reveal delay={80} className="mt-12">
              <article className="group grid overflow-hidden rounded-[2.5rem] border border-border bg-card md:grid-cols-2">
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={projectImg}
                    width={1440}
                    height={1024}
                    loading="lazy"
                    alt="Technical illustration of an ESP32 and Arduino Uno noise monitoring setup with sound sensor, display and LED indicator"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between p-7 sm:p-10">
                  <div>
                    <span className="mono-label">ece project · hardware + code</span>
                    <h3 className="mt-4 text-3xl leading-[0.95] font-black uppercase sm:text-4xl">
                      Automatic Noise
                      <br />
                      Monitoring System
                    </h3>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                      A real-time system that measures environmental sound levels with a sound
                      sensor, visualises the readings as a graph on a display, and triggers an LED
                      alert when noise crosses a set threshold.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {["Arduino Uno", "ESP32", "Sound Sensor", "Display", "LED Indicator", "Real-time Monitoring"].map(
                        (t) => (
                          <span
                            key={t}
                            className="group/tech relative overflow-hidden rounded-full border border-border/40 bg-secondary/30 px-3.5 py-1.5 font-mono text-xs font-semibold backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                          >
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/tech:opacity-100" />
                            <span className="relative z-10 text-foreground transition-colors duration-500 group-hover/tech:text-amber-400 group-hover/tech:drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">
                              {t}
                            </span>
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                  <ProjectDetail className="mt-9" />
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="border-t border-border py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <span className="mono-label">04 / education</span>
              <h2 className="mt-4 text-4xl leading-[0.95] font-black uppercase sm:text-6xl">
                Education
              </h2>
            </Reveal>

            <ol className="mt-12 border-t border-border">
              {education.map((e, i) => (
                <Reveal as="li" key={e.title} delay={i * 100}>
                  <div className="grid gap-3 border-b border-border py-8 md:grid-cols-12 md:items-baseline md:gap-6">
                    <p className="mono-label md:col-span-3">{e.year}</p>
                    <div className="md:col-span-6">
                      <h3 className="text-xl font-bold sm:text-2xl">{e.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{e.place}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{e.note}</p>
                    </div>
                    <p className="md:col-span-3 md:text-right">
                      <span className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 font-mono text-xs">
                        <Circle className="h-2 w-2 fill-accent text-accent" />
                        {e.status}
                      </span>
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* EXPERIENCE & LEARNING */}
        <section className="border-t border-border py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="mono-label">05 / experience</span>
                <h2 className="mt-4 text-4xl leading-[0.95] font-black uppercase sm:text-6xl">
                  Experience &amp; Learning
                </h2>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">
                No formal work experience yet — here is the practical work I&apos;m doing as a
                student instead.
              </p>
            </Reveal>

            <ul className="mt-12 grid gap-6 sm:grid-cols-2">
              {learning.map((l, i) => (
                <Reveal as="li" key={l.title} delay={i * 80}>
                  <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-secondary">
                      <img
                        src={l.image}
                        alt={l.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 rounded-full bg-background/80 backdrop-blur-md p-2 border border-border/50 text-accent">
                        <Boxes className="h-4 w-4" aria-hidden />
                      </div>
                    </div>
                    <div className="mt-5 flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{l.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={120} className="mt-14 rounded-[2rem] border border-border grid-lines p-7 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <Cpu className="h-5 w-5 text-accent" aria-hidden />
                <span className="mono-label">currently exploring</span>
              </div>
              <ul className="mt-6 flex flex-wrap gap-3">
                {exploring.map((e) => (
                  <li
                    key={e}
                    className="group/exp relative overflow-hidden rounded-full border border-border/50 bg-background/50 px-5 py-2.5 text-sm font-semibold backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  >
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/exp:opacity-100" />
                    <span className="relative z-10 text-foreground transition-colors duration-500 group-hover/exp:text-purple-400 group-hover/exp:drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]">
                      {e}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* CERTIFICATES */}
        <section id="certificates" className="border-t border-border py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <span className="mono-label">06 / certificates</span>
              <h2 className="mt-4 text-4xl leading-[0.95] font-black uppercase sm:text-6xl">
                Certifications
              </h2>
            </Reveal>

            <ul className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {certificates.map((c, i) => (
                <Reveal as="li" key={c.title} delay={i * 80}>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-secondary flex items-center justify-center">
                      {!c.isPdf && c.image ? (
                        <img
                          src={c.image}
                          alt={c.alt || c.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-muted-foreground transition-transform duration-700 group-hover:scale-105">
                          <Award className="h-16 w-16 mb-2" />
                          <span className="text-sm font-medium">View PDF Document</span>
                        </div>
                      )}
                      <div className="absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur-md p-2 border border-border/50 text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </div>
                    </div>
                    <div className="mt-5 flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold leading-tight">{c.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.issuer}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="mono-label text-xs">{c.date}</span>
                      </div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-border py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-16 md:grid-cols-2">
              <div>
                <Reveal>
                  <span className="mono-label">07 / contact</span>
                  <h2 className="display mt-4 text-5xl italic leading-[0.95] sm:text-7xl lg:text-8xl">
                    Let&apos;s Connect
                  </h2>
                  <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    Have an opportunity, project idea, or simply want to connect? Feel free to reach
                    out via this form or through my contacts.
                  </p>
                  <div className="mt-8">
                    <ResumeButton />
                  </div>
                </Reveal>

                <ul className="mt-12 border-t border-border">
                  {contacts.map((c, i) => (
                    <Reveal as="li" key={c.label} delay={i * 70}>
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                        className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border py-6 transition-colors hover:bg-secondary/60"
                      >
                        <span className="flex min-w-0 flex-wrap items-baseline gap-x-6 gap-y-1">
                          <span className="mono-label w-24 shrink-0">{c.label}</span>
                          <span className="truncate text-xl font-bold sm:text-2xl">{c.value}</span>
                        </span>
                        <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    </Reveal>
                  ))}
                </ul>
              </div>

              {/* Form Section */}
              <Reveal delay={100} className="md:mt-16">
                <form 
                  action="https://formsubmit.co/routm7937@gmail.com" 
                  method="POST" 
                  className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 sm:p-8"
                >
                  <h3 className="mb-2 text-2xl font-bold">Send a Message</h3>
                  
                  {/* FormSubmit Configuration Fields */}
                  <input type="hidden" name="_subject" value="New Contact from Portfolio!" />
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      required 
                      className="rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      required 
                      className="rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold">Message</label>
                    <textarea 
                      name="message" 
                      id="message" 
                      required 
                      rows={5}
                      className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none"
                      placeholder="How can I help you?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Send Message
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-foreground font-mono text-xs font-black text-background tracking-tighter">
              AR<span className="text-accent text-[6px] leading-none">●</span>
            </span>
            <p className="display min-w-0 truncate text-xl italic">Arijit Rout</p>
          </div>
          <p className="mono-label shrink-0">© 2026 — built &amp; maintained by Arijit</p>
        </div>
      </footer>
    </div>
  );
}
