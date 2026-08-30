import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Github, c as Database, d as Circle, f as Boxes, i as Instagram, l as Cpu, m as ArrowUpRight, n as Menu, o as FileText, p as Award, r as Mail, s as Download, t as X, u as CodeXml } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-uCqCPVRT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		href: "#home",
		label: "Home"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#skills",
		label: "Skills"
	},
	{
		href: "#projects",
		label: "Projects"
	},
	{
		href: "#education",
		label: "Education"
	},
	{
		href: "#certificates",
		label: "Certificates"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function SiteNav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-border bg-background/85 py-3 backdrop-blur-md" : "border-b border-transparent py-6"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Main",
			className: "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 md:flex md:justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#home",
					className: "group flex items-center gap-2.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-foreground font-mono text-xs font-black text-background tracking-tighter transition-transform duration-300 group-hover:scale-105",
						children: ["AR", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent text-[8px] leading-none",
							children: "●"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-8 md:flex",
					children: links.slice(0, 6).map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
						children: l.label
					}) }, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 md:inline-flex",
						children: "Contact Me"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						className: "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border md:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mx-5 mt-3 space-y-1 rounded-3xl border border-border bg-card p-3 md:hidden",
			children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: l.href,
				onClick: () => setOpen(false),
				className: "block rounded-2xl px-4 py-3 text-base font-medium transition-colors hover:bg-secondary",
				children: l.label
			}) }, l.href))
		})]
	});
}
function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setVisible(true);
				io.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -60px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		"data-visible": visible,
		style: { transitionDelay: `${delay}ms` },
		className: `reveal ${className}`,
		children
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var RESUME_URL = {
	version: 1,
	asset_id: "e844e6e6-609a-48f6-b077-23e56908495a",
	project_id: "b86bfe9e-8367-41cf-a43a-bd1c659d9987",
	url: "/Arijit_Rout_CV.pdf",
	r2_key: "a/v1/b86bfe9e-8367-41cf-a43a-bd1c659d9987/e844e6e6-609a-48f6-b077-23e56908495a/Arijit_Rout_CV.pdf",
	original_filename: "Arijit_Rout_CV.pdf",
	size: 81972,
	content_type: "application/pdf",
	created_at: "2026-08-29T13:42:10Z"
}.url;
var resume = {
	name: "Arijit Rout",
	role: "B.Tech CSE Student & Aspiring Software Engineer",
	location: "Lovely Professional University, Phagwara, Punjab",
	contact: "routm7937@gmail.com · +91-7061710713",
	links: "LinkedIn: Arijit Rout · GitHub: Arijit Rout",
	sections: [
		{
			title: "Skills",
			items: [
				{
					heading: "Languages",
					meta: "Python · C · SQL · C++",
					body: ""
				},
				{
					heading: "Technologies",
					meta: "HTML · CSS",
					body: ""
				},
				{
					heading: "Databases / Tools",
					meta: "MySQL · Git · GitHub · Figma",
					body: ""
				},
				{
					heading: "Soft Skills",
					meta: "Fast Learner · Team Work · Time Management",
					body: ""
				}
			]
		},
		{
			title: "Projects",
			items: [{
				heading: "Automatic Noise Monitoring System — ECE Project",
				meta: "Arduino Uno · ESP32 · Sound Sensor · Display · LED Indicator · Oct 2025 — Dec 2026",
				body: "Real-time environmental noise monitoring system that continuously captures surrounding sound levels, presents the measured information visually through a display/graph, and activates a visual LED alert when the noise level becomes too high."
			}]
		},
		{
			title: "Training",
			items: [{
				heading: "C Programming Training — Certificate",
				meta: "iamneo platform · Semester 2 · Jun 2025 — Jul 2025",
				body: "Built a strong foundation in procedural programming: variables, data types, operators, conditionals, loops, functions, arrays, strings, pointers, and structures. Strengthened debugging, algorithmic reasoning, and structured problem-solving through regular coding exercises."
			}]
		},
		{
			title: "Certificates",
			items: [
				{
					heading: "Community Development Project",
					meta: "Times Foundation × Lovely Professional University · 15 Aug 2026",
					body: ""
				},
				{
					heading: "Computer Programming — 150 Hours",
					meta: "iamneo · 21 May 2026",
					body: ""
				},
				{
					heading: "Master Your Leadership Effectiveness Skills",
					meta: "LinkedIn Learning · 31 Oct 2025",
					body: ""
				}
			]
		},
		{
			title: "Education",
			items: [
				{
					heading: "B.Tech — Computer Science & Engineering · CGPA: 8.2",
					meta: "Lovely Professional University, Phagwara, Punjab · Aug 2026 — Present",
					body: ""
				},
				{
					heading: "Higher Secondary Education · 84.4%",
					meta: "Sai Vidya Mandir, Baripada, Odisha · May 2023 — Mar 2025",
					body: ""
				},
				{
					heading: "Secondary Education · 88.8%",
					meta: "DAV Public School, Baharagora, Jharkhand · Jun 2022 — Mar 2023",
					body: ""
				}
			]
		}
	]
};
function ResumeButton({ className = "" }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setOpen(true),
		className: `inline-flex items-center gap-2 rounded-full border border-foreground/25 px-7 py-4 text-sm font-semibold transition-colors duration-300 hover:bg-secondary ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
			className: "h-4 w-4",
			"aria-hidden": true
		}), "Resume / CV"]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[85vh] max-w-2xl overflow-y-auto rounded-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mono-label",
							children: "// resume — preview"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "display text-3xl italic sm:text-4xl",
							children: resume.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
							className: "text-sm",
							children: [
								resume.role,
								" — ",
								resume.location
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm leading-relaxed text-muted-foreground",
					children: [
						resume.contact,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						resume.links
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 space-y-8",
					children: resume.sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mono-label border-b border-border pb-2",
						children: section.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-4",
						children: section.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base font-bold",
								children: item.heading
							}),
							item.meta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-xs text-muted-foreground",
								children: item.meta
							}) : null,
							item.body ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
								children: item.body
							}) : null
						] }, item.heading))
					})] }, section.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: RESUME_URL,
						download: "Arijit_Rout_CV.pdf",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "h-4 w-4",
							"aria-hidden": true
						}), "Download Resume"]
					})
				})
			]
		})
	})] });
}
var project = {
	title: "Automatic Noise Monitoring System",
	subtitle: "ECE Project · Hardware + Code",
	description: "An ECE-focused real-time environmental noise monitoring system built with Arduino Uno, ESP32, a sound sensor, display, and LED indicator.",
	bullets: [
		"Developed an ECE-focused real-time environmental noise monitoring system using Arduino Uno, ESP32, a sound sensor, display, and LED indicator.",
		"Monitors surrounding sound levels continuously and presents measured noise information visually through a display/graph for clear real-time observation.",
		"Uses the sound sensor and controller hardware to capture environmental sound levels and provide immediate visual feedback on the measured condition.",
		"Activates a visual LED alert when the noise level becomes too high, helping users quickly identify excessive environmental noise."
	],
	workflow: "Captures environmental sound levels, presents the measured information visually, and gives an immediate LED indication when the noise level becomes too high.",
	components: [
		"Arduino Uno",
		"ESP32",
		"Sound Sensor",
		"Display",
		"LED Indicator",
		"Real-Time Noise Monitoring"
	]
};
function ProjectDetail({ className = "" }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setOpen(true),
		className: `inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 ${className}`,
		children: ["Explore Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
			className: "h-4 w-4",
			"aria-hidden": true
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[85vh] max-w-2xl overflow-y-auto rounded-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mono-label",
							children: "// project details"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "display text-3xl italic sm:text-4xl",
							children: project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "text-sm",
							children: project.subtitle
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted-foreground",
					children: project.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mono-label border-b border-border pb-2",
						children: "Highlights"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground",
						children: project.bullets.map((bullet) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: bullet }, bullet))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mono-label border-b border-border pb-2",
					children: "Project Workflow"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground",
					children: project.workflow
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mono-label border-b border-border pb-2",
					children: "Technology / Components"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: project.components.map((component) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-secondary px-3.5 py-1.5 font-mono text-xs",
						children: component
					}, component))
				})] })
			]
		})
	})] });
}
var arijit_profile_default = "/assets/arijit-profile-DS0Q7J6g.png";
var noise_monitor_default = "/assets/noise-monitor-Cd_f9Xr2.jpg";
var skills = [
	{
		icon: CodeXml,
		group: "Programming & Development",
		items: [
			"Python",
			"C",
			"HTML",
			"CSS"
		]
	},
	{
		icon: Database,
		group: "Database",
		items: ["SQL"]
	},
	{
		icon: FileText,
		group: "Software Engineering",
		items: [
			"SRS Documentation",
			"Requirements Analysis",
			"Structured Documentation"
		]
	}
];
var itemLogos = {
	Python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
	C: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
	HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
	CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
	SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
	"SRS Documentation": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg",
	"Requirements Analysis": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
	"Structured Documentation": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitbook/gitbook-original.svg"
};
var education = [
	{
		year: "2025 — Present",
		title: "B.Tech — Computer Science & Engineering",
		place: "Lovely Professional University",
		note: "Currently in 2nd year",
		status: "In progress"
	},
	{
		year: "2025",
		title: "Intermediate Education (Class XII)",
		place: "Sai Vidya Mandir",
		note: "Completed intermediate education in 2025",
		status: "Completed"
	},
	{
		year: "2023",
		title: "Secondary School Education (Class X)",
		place: "DAV Public School",
		note: "Completed secondary school education in 2023",
		status: "Completed"
	}
];
var learning = [
	{
		title: "Academic Projects",
		body: "Building small, working systems for coursework — from idea and wiring to code and testing.",
		image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
		alt: "Academic engineering projects workbench with hardware tools and components"
	},
	{
		title: "Technical Skill Development",
		body: "Practising programming fundamentals in Python and C, and building pages with HTML and CSS.",
		image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
		alt: "Code editor and programming environment on a workstation screen"
	},
	{
		title: "Software Engineering Documentation",
		body: "Writing SRS documents and structuring requirements before writing a single line of code.",
		image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
		alt: "Software design specifications, SRS documentation and requirements planning"
	},
	{
		title: "Hardware Experimentation",
		body: "Hands-on work with Arduino Uno, ESP32 and sensors to understand how software meets hardware.",
		image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
		alt: "Hardware prototyping board with microcontroller and electronic components"
	}
];
var certificates = [
	{
		title: "Master Your Leadership Effectiveness",
		issuer: "LinkedIn Learning",
		date: "Oct 2025",
		image: "/certificates/linkedin-leadership.png",
		link: "/certificates/linkedin-leadership.png",
		alt: "LinkedIn Learning Certificate for Master Your Leadership Effectiveness Skills"
	},
	{
		title: "Computer Programming (150 Hours)",
		issuer: "neo colab",
		date: "May 2026",
		image: "/certificates/neo-colab-programming.png",
		link: "/certificates/neo-colab-programming.png",
		alt: "neo colab Certificate of Appreciation for Computer Programming"
	},
	{
		title: "Community Development Project",
		issuer: "Times Foundation",
		date: "2026",
		image: "/certificates/times-foundation-community.jpg",
		link: "/certificates/times-foundation-community.jpg",
		alt: "Times Foundation Certificate of Completion for Community Development Project"
	}
];
var exploring = [
	"Programming",
	"Web Technologies",
	"Software Engineering",
	"Database Systems",
	"Embedded / IoT Projects"
];
var contacts = [
	{
		label: "Email",
		value: "routm7937@gmail.com",
		href: "https://mail.google.com/mail/?view=cm&to=routm7937@gmail.com"
	},
	{
		label: "Phone",
		value: "7061710713",
		href: "tel:+917061710713"
	},
	{
		label: "LinkedIn",
		value: "Arijit Rout - LinkedIn",
		href: "https://www.linkedin.com/in/arijit-rout-a104b5380/"
	},
	{
		label: "GitHub",
		value: "Arijit Rout - Github",
		href: "https://github.com/arijit28580-bot"
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "home",
					className: "relative overflow-hidden pt-32 pb-16 sm:pt-40 md:pb-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70vh] bg-gradient-to-b from-sand via-background to-background"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-5 sm:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "flex flex-wrap items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mono-label",
								children: "// portfolio — 2026"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "group/avail relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-border/50 bg-background/50 px-4 py-2 text-xs font-bold backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/avail:opacity-100" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-accent text-accent transition-colors duration-500 group-hover/avail:fill-green-400 group-hover/avail:text-green-400 group-hover/avail:drop-shadow-[0_0_6px_rgba(74,222,128,0.8)]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative z-10 transition-colors duration-500 group-hover/avail:text-green-400 group-hover/avail:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]",
										children: "Open to learning & opportunities"
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-10 md:mt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: 60,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "display flex flex-col text-6xl italic leading-[0.9] sm:text-8xl md:flex-row md:items-baseline md:justify-between lg:text-[9rem]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hello," }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "self-end md:self-auto",
											children: "I'm Arijit."
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: 140,
									className: "relative z-10 mx-auto mt-6 w-full max-w-sm md:absolute md:inset-x-0 md:top-8 md:mt-0 md:w-[30%] md:max-w-none",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
										className: "relative mx-auto aspect-square w-full overflow-hidden rounded-full border-4 border-background shadow-[0_40px_90px_-45px_oklch(0.16_0.008_60/0.55)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: arijit_profile_default,
											width: 1024,
											height: 1024,
											alt: "Professional portrait of Arijit Rout, a second-year B.Tech CSE student at Lovely Professional University",
											className: "h-full w-full object-cover"
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative mt-10 grid items-end gap-8 md:mt-16 md:grid-cols-12 md:gap-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
											delay: 200,
											className: "md:col-span-5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
												className: "text-[16vw] leading-[0.82] font-black tracking-tight uppercase sm:text-8xl lg:text-[7rem]",
												children: [
													"I am",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"Arijit"
												]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "md:col-span-3",
											"aria-hidden": true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
											delay: 260,
											className: "md:col-span-4 md:text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "ml-auto max-w-xs text-sm leading-relaxed text-muted-foreground",
												children: "Second-year Computer Science student at Lovely Professional University — programming, software engineering, web technologies and practical projects."
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-6 text-3xl leading-[0.9] font-black uppercase sm:text-4xl lg:text-5xl",
												children: [
													"B.Tech CSE",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"Student &",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"Aspiring Software",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"Engineer"
												]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
									delay: 320,
									className: "mt-10 flex flex-wrap gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#projects",
											className: "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5",
											children: ["View My Work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "https://www.instagram.com/_arijit_rout_09/",
													target: "_blank",
													rel: "noreferrer",
													className: "flex h-[52px] w-[52px] items-center justify-center rounded-full border border-foreground/25 bg-background transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E1306C] hover:bg-[#E1306C] hover:text-white hover:shadow-[0_0_15px_rgba(225,48,108,0.5)]",
													"aria-label": "Instagram",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "https://mail.google.com/mail/?view=cm&to=routm7937@gmail.com",
													target: "_blank",
													rel: "noreferrer",
													className: "flex h-[52px] w-[52px] items-center justify-center rounded-full border border-foreground/25 bg-background transition-all duration-300 hover:-translate-y-0.5 hover:border-[#EA4335] hover:bg-[#EA4335] hover:text-white hover:shadow-[0_0_15px_rgba(234,67,53,0.5)]",
													"aria-label": "Email",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "https://github.com/arijit28580-bot",
													target: "_blank",
													rel: "noreferrer",
													className: "flex h-[52px] w-[52px] items-center justify-center rounded-full border border-foreground/25 bg-background transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:bg-foreground hover:text-background hover:shadow-[0_0_15px_rgba(150,150,150,0.5)]",
													"aria-label": "GitHub",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-5 w-5" })
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeButton, {})
									]
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "about",
					className: "border-t border-border py-20 md:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-5 sm:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mono-label",
							children: "01 / about"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 max-w-3xl text-4xl leading-[0.95] font-black uppercase sm:text-6xl",
							children: "About Me"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 grid gap-12 md:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								delay: 60,
								className: "md:col-span-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "display text-3xl leading-tight sm:text-4xl",
										children: "I'm learning to build software that is careful, documented and actually works."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground",
										children: "I'm Arijit Rout, a second-year B.Tech Computer Science & Engineering student at Lovely Professional University. I completed my secondary education at DAV Public School (2023) and intermediate education at Sai Vidya Mandir (2025)."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground",
										children: "Right now I'm developing my skills across programming, databases, web development and software engineering practice — writing requirements as seriously as I write code."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 140,
								className: "md:col-span-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "grid gap-3 sm:grid-cols-2 md:grid-cols-1",
									children: [
										["Name", "Arijit Rout"],
										["Current", "2nd year B.Tech CSE"],
										["Institution", "Lovely Professional University"],
										["Schooling", "DAV Public School · 2023 & Sai Vidya Mandir · 2025"]
									].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-border bg-card p-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "mono-label",
											children: k
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-2 text-base font-semibold",
											children: v
										})]
									}, k))
								})
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "skills",
					className: "border-t border-border py-20 md:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-5 sm:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "flex flex-wrap items-end justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mono-label",
								children: "02 / skills"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-4xl leading-[0.95] font-black uppercase sm:text-6xl",
								children: "What I Work With"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-sm text-sm text-muted-foreground",
								children: "Technologies I use in coursework and personal projects — as a developing student, not a specialist."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-12 grid gap-4 md:grid-cols-3",
							children: skills.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								as: "li",
								delay: i * 90,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group h-full rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
											className: "h-6 w-6 text-accent",
											"aria-hidden": true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-6 text-xl font-bold",
											children: s.group
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-5 flex flex-wrap gap-2",
											children: s.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "group/badge relative flex items-center gap-1.5 overflow-hidden rounded-full border border-border/50 bg-background/30 px-3.5 py-1.5 font-mono text-xs font-semibold backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/badge:opacity-100" }),
													itemLogos[it] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: itemLogos[it],
														alt: `${it} logo`,
														className: "relative z-10 h-4 w-4 transition-transform duration-500 group-hover/badge:scale-110"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "relative z-10 text-foreground transition-colors duration-500 group-hover/badge:text-cyan-400 group-hover/badge:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]",
														children: it
													})
												]
											}, it))
										})
									]
								})
							}, s.group))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "projects",
					className: "border-t border-border py-20 md:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-5 sm:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mono-label",
							children: "03 / projects"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-4xl leading-[0.95] font-black uppercase sm:text-6xl",
							children: "Recent Projects"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 80,
							className: "mt-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "group grid overflow-hidden rounded-[2.5rem] border border-border bg-card md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden bg-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: noise_monitor_default,
										width: 1440,
										height: 1024,
										loading: "lazy",
										alt: "Technical illustration of an ESP32 and Arduino Uno noise monitoring setup with sound sensor, display and LED indicator",
										className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col justify-between p-7 sm:p-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mono-label",
											children: "ece project · hardware + code"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "mt-4 text-3xl leading-[0.95] font-black uppercase sm:text-4xl",
											children: [
												"Automatic Noise",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"Monitoring System"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-5 text-sm leading-relaxed text-muted-foreground",
											children: "A real-time system that measures environmental sound levels with a sound sensor, visualises the readings as a graph on a display, and triggers an LED alert when noise crosses a set threshold."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-6 flex flex-wrap gap-2",
											children: [
												"Arduino Uno",
												"ESP32",
												"Sound Sensor",
												"Display",
												"LED Indicator",
												"Real-time Monitoring"
											].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "group/tech relative overflow-hidden rounded-full border border-border/40 bg-secondary/30 px-3.5 py-1.5 font-mono text-xs font-semibold backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/tech:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "relative z-10 text-foreground transition-colors duration-500 group-hover/tech:text-amber-400 group-hover/tech:drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]",
													children: t
												})]
											}, t))
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectDetail, { className: "mt-9" })]
								})]
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "education",
					className: "border-t border-border py-20 md:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-5 sm:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mono-label",
							children: "04 / education"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-4xl leading-[0.95] font-black uppercase sm:text-6xl",
							children: "Education"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-12 border-t border-border",
							children: education.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								as: "li",
								delay: i * 100,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3 border-b border-border py-8 md:grid-cols-12 md:items-baseline md:gap-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mono-label md:col-span-3",
											children: e.year
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "md:col-span-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-xl font-bold sm:text-2xl",
													children: e.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm text-muted-foreground",
													children: e.place
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm text-muted-foreground",
													children: e.note
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "md:col-span-3 md:text-right",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 font-mono text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-accent text-accent" }), e.status]
											})
										})
									]
								})
							}, e.title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-border py-20 md:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-5 sm:px-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								className: "flex flex-wrap items-end justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mono-label",
									children: "05 / experience"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 text-4xl leading-[0.95] font-black uppercase sm:text-6xl",
									children: "Experience & Learning"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-sm text-sm text-muted-foreground",
									children: "No formal work experience yet — here is the practical work I'm doing as a student instead."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-12 grid gap-6 sm:grid-cols-2",
								children: learning.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									as: "li",
									delay: i * 80,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-secondary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: l.image,
												alt: l.alt,
												loading: "lazy",
												className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute top-3 left-3 rounded-full bg-background/80 backdrop-blur-md p-2 border border-border/50 text-accent",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boxes, {
													className: "h-4 w-4",
													"aria-hidden": true
												})
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-5 flex flex-1 flex-col justify-between",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-xl font-bold",
												children: l.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm leading-relaxed text-muted-foreground",
												children: l.body
											})] })
										})]
									})
								}, l.title))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								delay: 120,
								className: "mt-14 rounded-[2rem] border border-border grid-lines p-7 sm:p-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, {
										className: "h-5 w-5 text-accent",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mono-label",
										children: "currently exploring"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 flex flex-wrap gap-3",
									children: exploring.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "group/exp relative overflow-hidden rounded-full border border-border/50 bg-background/50 px-5 py-2.5 text-sm font-semibold backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/exp:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative z-10 text-foreground transition-colors duration-500 group-hover/exp:text-purple-400 group-hover/exp:drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]",
											children: e
										})]
									}, e))
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "certificates",
					className: "border-t border-border py-20 md:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-5 sm:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mono-label",
							children: "06 / certificates"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-4xl leading-[0.95] font-black uppercase sm:text-6xl",
							children: "Certifications"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3",
							children: certificates.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								as: "li",
								delay: i * 80,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: c.link,
									target: "_blank",
									rel: "noreferrer",
									className: "group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-secondary flex items-center justify-center",
										children: [!c.isPdf && c.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: c.image,
											alt: c.alt || c.title,
											loading: "lazy",
											className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col items-center justify-center text-muted-foreground transition-transform duration-700 group-hover:scale-105",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-16 w-16 mb-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-medium",
												children: "View PDF Document"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur-md p-2 border border-border/50 text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
												className: "h-4 w-4",
												"aria-hidden": true
											})
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex flex-1 flex-col justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg font-bold leading-tight",
											children: c.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-muted-foreground",
											children: c.issuer
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4 flex items-center justify-between",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mono-label text-xs",
												children: c.date
											})
										})]
									})]
								})
							}, c.title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "contact",
					className: "border-t border-border py-20 md:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-7xl px-5 sm:px-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-16 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mono-label",
									children: "07 / contact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "display mt-4 text-5xl italic leading-[0.95] sm:text-7xl lg:text-8xl",
									children: "Let's Connect"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground",
									children: "Have an opportunity, project idea, or simply want to connect? Feel free to reach out via this form or through my contacts."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeButton, {})
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-12 border-t border-border",
								children: contacts.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									as: "li",
									delay: i * 70,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: c.href,
										target: c.href.startsWith("http") ? "_blank" : void 0,
										rel: c.href.startsWith("http") ? "noreferrer" : void 0,
										className: "group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border py-6 transition-colors hover:bg-secondary/60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex min-w-0 flex-wrap items-baseline gap-x-6 gap-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mono-label w-24 shrink-0",
												children: c.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate text-xl font-bold sm:text-2xl",
												children: c.value
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" })]
									})
								}, c.label))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 100,
								className: "md:mt-16",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									action: "https://formsubmit.co/routm7937@gmail.com",
									method: "POST",
									className: "flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 sm:p-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mb-2 text-2xl font-bold",
											children: "Send a Message"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "hidden",
											name: "_subject",
											value: "New Contact from Portfolio!"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "hidden",
											name: "_captcha",
											value: "false"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "name",
												className: "text-sm font-semibold",
												children: "Name"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												name: "name",
												id: "name",
												required: true,
												className: "rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none",
												placeholder: "Your name"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "email",
												className: "text-sm font-semibold",
												children: "Email"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "email",
												name: "email",
												id: "email",
												required: true,
												className: "rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none",
												placeholder: "your.email@example.com"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "message",
												className: "text-sm font-semibold",
												children: "Message"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												name: "message",
												id: "message",
												required: true,
												rows: 5,
												className: "resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none",
												placeholder: "How can I help you?"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											className: "mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5",
											children: "Send Message"
										})
									]
								})
							})]
						})
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-foreground font-mono text-xs font-black text-background tracking-tighter",
							children: ["AR", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent text-[6px] leading-none",
								children: "●"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display min-w-0 truncate text-xl italic",
							children: "Arijit Rout"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mono-label shrink-0",
						children: "© 2026 — built & maintained by Arijit"
					})]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
