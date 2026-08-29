import { useState } from "react";
import { Download, FileText } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import resumeAsset from "@/assets/arijit-resume.pdf.asset.json";

export const RESUME_URL = resumeAsset.url;

const resume = {
  name: "Arijit Rout",
  role: "B.Tech CSE Student & Aspiring Software Engineer",
  location: "Lovely Professional University, Phagwara, Punjab",
  contact: "routm7937@gmail.com · +91-7061710713",
  links: "LinkedIn: Arijit Rout · GitHub: Arijit Rout",
  sections: [
    {
      title: "Skills",
      items: [
        { heading: "Languages", meta: "Python · C · SQL · C++", body: "" },
        { heading: "Technologies", meta: "HTML · CSS", body: "" },
        { heading: "Databases / Tools", meta: "MySQL · Git · GitHub · Figma", body: "" },
        {
          heading: "Soft Skills",
          meta: "Fast Learner · Team Work · Time Management",
          body: "",
        },
      ],
    },
    {
      title: "Projects",
      items: [
        {
          heading: "Automatic Noise Monitoring System — ECE Project",
          meta: "Arduino Uno · ESP32 · Sound Sensor · Display · LED Indicator · Oct 2025 — Dec 2026",
          body: "Real-time environmental noise monitoring system that continuously captures surrounding sound levels, presents the measured information visually through a display/graph, and activates a visual LED alert when the noise level becomes too high.",
        },
      ],
    },
    {
      title: "Training",
      items: [
        {
          heading: "C Programming Training — Certificate",
          meta: "iamneo platform · Semester 2 · Jun 2025 — Jul 2025",
          body: "Built a strong foundation in procedural programming: variables, data types, operators, conditionals, loops, functions, arrays, strings, pointers, and structures. Strengthened debugging, algorithmic reasoning, and structured problem-solving through regular coding exercises.",
        },
      ],
    },
    {
      title: "Certificates",
      items: [
        {
          heading: "Community Development Project",
          meta: "Times Foundation × Lovely Professional University · 15 Aug 2026",
          body: "",
        },
        {
          heading: "Computer Programming — 150 Hours",
          meta: "iamneo · 21 May 2026",
          body: "",
        },
        {
          heading: "Master Your Leadership Effectiveness Skills",
          meta: "LinkedIn Learning · 31 Oct 2025",
          body: "",
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          heading: "B.Tech — Computer Science & Engineering · CGPA: 8.2",
          meta: "Lovely Professional University, Phagwara, Punjab · Aug 2026 — Present",
          body: "",
        },
        {
          heading: "Higher Secondary Education · 84.4%",
          meta: "Sai Vidya Mandir, Baripada, Odisha · May 2023 — Mar 2025",
          body: "",
        },
        {
          heading: "Secondary Education · 88.8%",
          meta: "DAV Public School, Baharagora, Jharkhand · Jun 2022 — Mar 2023",
          body: "",
        },
      ],
    },
  ],
};

export function ResumeButton({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex items-center gap-2 rounded-full border border-foreground/25 px-7 py-4 text-sm font-semibold transition-colors duration-300 hover:bg-secondary ${className}`}
      >
        <FileText className="h-4 w-4" aria-hidden />
        Resume / CV
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto rounded-3xl">
          <DialogHeader className="text-left">
            <span className="mono-label">// resume — preview</span>
            <DialogTitle className="display text-3xl italic sm:text-4xl">
              {resume.name}
            </DialogTitle>
            <DialogDescription className="text-sm">
              {resume.role} — {resume.location}
            </DialogDescription>
          </DialogHeader>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {resume.contact}
            <br />
            {resume.links}
          </p>

          <div className="mt-2 space-y-8">
            {resume.sections.map((section) => (
              <section key={section.title}>
                <h3 className="mono-label border-b border-border pb-2">{section.title}</h3>
                <ul className="mt-4 space-y-4">
                  {section.items.map((item) => (
                    <li key={item.heading}>
                      <p className="text-base font-bold">{item.heading}</p>
                      {item.meta ? (
                        <p className="mt-0.5 text-xs text-muted-foreground">{item.meta}</p>
                      ) : null}
                      {item.body ? (
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {item.body}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-6">
            <a
              href={RESUME_URL}
              download="Arijit_Rout_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download Resume
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
