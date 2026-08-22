import { useState } from "react";
import { Download, FileText } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/**
 * EDITABLE PLACEHOLDER — replace with the real résumé file URL
 * (e.g. "/arijit-rout-resume.pdf" or a Google Drive / Dropbox link).
 */
export const RESUME_URL = "#resume-placeholder";
const RESUME_IS_PLACEHOLDER = RESUME_URL.startsWith("#");

const resume = {
  name: "Arijit Rout",
  role: "B.Tech CSE Student & Aspiring Software Engineer",
  location: "Lovely Professional University, Punjab, India",
  summary:
    "Second-year Computer Science and Engineering student building practical skills in programming, web technologies, databases and software engineering documentation.",
  sections: [
    {
      title: "Education",
      items: [
        {
          heading: "B.Tech — Computer Science & Engineering",
          meta: "Lovely Professional University · 2025 — Present",
          body: "Currently in 2nd year.",
        },
        {
          heading: "Intermediate / School Education",
          meta: "DAV Public School · Completed 2025",
          body: "Completed intermediate education in 2025.",
        },
      ],
    },
    {
      title: "Projects",
      items: [
        {
          heading: "Automatic Noise Monitoring System",
          meta: "Arduino Uno · ESP32 · Sound sensor · Display · LED indicator",
          body: "Monitors environmental sound levels in real time, visualises the readings on a display/graph and triggers an LED alert when noise crosses a set threshold.",
        },
      ],
    },
    {
      title: "Skills",
      items: [
        {
          heading: "Programming & Development",
          meta: "Python · C · HTML · CSS",
          body: "",
        },
        { heading: "Database", meta: "SQL", body: "" },
        {
          heading: "Software Engineering",
          meta: "SRS documentation · Requirements analysis · Structured documentation",
          body: "",
        },
      ],
    },
    {
      title: "Experience & Learning",
      items: [
        {
          heading: "Academic projects and self-directed learning",
          meta: "No formal work experience yet",
          body: "Hands-on experimentation with hardware and programming, writing software requirement specifications, and continuous learning as a CSE student.",
        },
      ],
    },
    {
      title: "Contact",
      items: [
        {
          heading: "[Your Email] · [Your Phone]",
          meta: "[LinkedIn Profile] · [GitHub Profile]",
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

          <p className="text-sm leading-relaxed text-muted-foreground">{resume.summary}</p>

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
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download Resume
            </a>
            {RESUME_IS_PLACEHOLDER ? (
              <span className="mono-label">link placeholder — add resume file URL</span>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
