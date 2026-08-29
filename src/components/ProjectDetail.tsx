import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const project = {
  title: "Automatic Noise Monitoring System",
  subtitle: "ECE Project · Hardware + Code",
  description:
    "An ECE-focused real-time environmental noise monitoring system built with Arduino Uno, ESP32, a sound sensor, display, and LED indicator.",
  bullets: [
    "Developed an ECE-focused real-time environmental noise monitoring system using Arduino Uno, ESP32, a sound sensor, display, and LED indicator.",
    "Monitors surrounding sound levels continuously and presents measured noise information visually through a display/graph for clear real-time observation.",
    "Uses the sound sensor and controller hardware to capture environmental sound levels and provide immediate visual feedback on the measured condition.",
    "Activates a visual LED alert when the noise level becomes too high, helping users quickly identify excessive environmental noise.",
  ],
  workflow:
    "Captures environmental sound levels, presents the measured information visually, and gives an immediate LED indication when the noise level becomes too high.",
  components: [
    "Arduino Uno",
    "ESP32",
    "Sound Sensor",
    "Display",
    "LED Indicator",
    "Real-Time Noise Monitoring",
  ],
};

export function ProjectDetail({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 ${className}`}
      >
        Explore Project <ArrowUpRight className="h-4 w-4" aria-hidden />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto rounded-3xl">
          <DialogHeader className="text-left">
            <span className="mono-label">// project details</span>
            <DialogTitle className="display text-3xl italic sm:text-4xl">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-sm">
              {project.subtitle}
            </DialogDescription>
          </DialogHeader>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <section className="mt-2">
            <h3 className="mono-label border-b border-border pb-2">Highlights</h3>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="mono-label border-b border-border pb-2">Project Workflow</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {project.workflow}
            </p>
          </section>

          <section>
            <h3 className="mono-label border-b border-border pb-2">Technology / Components</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.components.map((component) => (
                <span
                  key={component}
                  className="rounded-full bg-secondary px-3.5 py-1.5 font-mono text-xs"
                >
                  {component}
                </span>
              ))}
            </div>
          </section>
        </DialogContent>
      </Dialog>
    </>
  );
}
