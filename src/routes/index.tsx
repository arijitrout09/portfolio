import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Circle, Cpu, Database, Code2, Boxes } from "lucide-react";

import { SiteNav } from "@/components/SiteNav";
import { Reveal } from "@/components/Reveal";
import { ResumeButton } from "@/components/ResumeButton";
import { ProjectDetail } from "@/components/ProjectDetail";
import profileImg from "@/assets/arijit-profile.png.asset.json";
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

const education = [
  {
    year: "2025 — Present",
    title: "B.Tech — Computer Science & Engineering",
    place: "Lovely Professional University",
    note: "Currently in 2nd year",
    status: "In progress",
  },
  {
    year: "Completed 2025",
    title: "Intermediate / School Education",
    place: "DAV Public School",
    note: "Completed intermediate education in 2025",
    status: "Completed",
  },
];

const learning = [
  {
    title: "Academic Projects",
    body: "Building small, working systems for coursework — from idea and wiring to code and testing.",
  },
  {
    title: "Technical Skill Development",
    body: "Practising programming fundamentals in Python and C, and building pages with HTML and CSS.",
  },
  {
    title: "Software Engineering Documentation",
    body: "Writing SRS documents and structuring requirements before writing a single line of code.",
  },
  {
    title: "Hardware Experimentation",
    body: "Hands-on work with Arduino Uno, ESP32 and sensors to understand how software meets hardware.",
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
  { label: "LinkedIn", value: "Arijit Rout - LinkedIn", href: "#" },
  { label: "GitHub", value: "Arijit Rout - Github", href: "#" },
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
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium">
                <Circle className="h-2 w-2 fill-accent text-accent" />
                Open to learning &amp; opportunities
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
                    src={profileImg.url}
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
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-7 py-4 text-sm font-semibold transition-colors duration-300 hover:bg-secondary"
                >
                  Get In Touch
                </a>
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
                  student at Lovely Professional University. I studied at DAV Public School and
                  completed my intermediate education in 2025.
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
                    ["Schooling", "DAV Public School · 2025"],
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
                          className="rounded-full border border-border px-3.5 py-1.5 font-mono text-xs transition-colors duration-300 group-hover:bg-secondary"
                        >
                          {it}
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
                            className="rounded-full bg-secondary px-3.5 py-1.5 font-mono text-xs"
                          >
                            {t}
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

            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {learning.map((l, i) => (
                <Reveal as="li" key={l.title} delay={i * 80}>
                  <div className="h-full rounded-3xl border border-border bg-card p-7 transition-transform duration-500 hover:-translate-y-1">
                    <Boxes className="h-5 w-5 text-accent" aria-hidden />
                    <h3 className="mt-5 text-lg font-bold">{l.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
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
                    className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-border py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <span className="mono-label">06 / contact</span>
              <h2 className="display mt-4 text-5xl italic leading-[0.95] sm:text-7xl lg:text-8xl">
                Let&apos;s Connect
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Have an opportunity, project idea, or simply want to connect? Feel free to reach
                out.
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
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
          <p className="display min-w-0 truncate text-xl italic">Arijit Rout</p>
          <p className="mono-label shrink-0">© 2026 — built &amp; maintained by Arijit</p>
        </div>
      </footer>
    </div>
  );
}
