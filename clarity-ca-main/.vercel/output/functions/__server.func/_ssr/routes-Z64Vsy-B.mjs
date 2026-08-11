import { r as __toESM } from "../_runtime.mjs";
import { _ as require_react, a as Trigger2, g as require_jsx_runtime, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { E as isRedirect, g as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as getServerFnById, r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-BzU5_70-2.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { a as faqs, c as nav, d as principles, f as professional, g as whatsappHref, h as telHref, i as contact, l as portraitSrc, m as services, n as approach, o as mailHref, p as serviceOptions, r as audiences, s as mapsHref, u as primaryPhone } from "./router-Cu06imyf.mjs";
import { a as MessageCircle, c as Mail, d as Compass, f as ClipboardCheck, h as BookOpen, i as Phone, l as Landmark, m as Briefcase, n as ShieldCheck, o as Menu, p as ChevronDown, r as Receipt, s as MapPin, t as X, u as FileText } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Z64Vsy-B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Navbar({ onConsult }) {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm transition-shadow duration-200", scrolled && "shadow-nav"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-8 sm:py-3.5 lg:py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "min-w-0",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate font-serif text-[1.0625rem] leading-tight text-foreground sm:text-lg",
						children: professional.brand
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-0.5 hidden text-[0.6875rem] tracking-[0.16em] text-muted-foreground uppercase sm:block",
						children: [
							professional.city,
							", ",
							professional.state
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden shrink-0 items-center gap-7 lg:flex",
					children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${item.id}`,
						className: "text-sm text-muted-foreground transition-colors hover:text-primary",
						children: item.label
					}, item.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onConsult,
						className: "border border-primary px-4 py-2 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground",
						children: "Consultation"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					onClick: () => setOpen((v) => !v),
					className: "grid h-10 w-10 shrink-0 place-items-center border border-border bg-card text-foreground lg:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("grid overflow-hidden border-t border-border bg-background transition-[grid-template-rows] duration-200 lg:hidden", open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "min-h-0 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "px-4 py-2 sm:px-8",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-b border-border last:border-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${item.id}`,
							onClick: () => setOpen(false),
							className: "block py-3.5 text-[0.9375rem] text-foreground",
							children: item.label
						})
					}, item.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-4 pb-5 sm:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setOpen(false);
							onConsult();
						},
						className: "w-full bg-primary px-4 py-3 text-sm text-primary-foreground",
						children: "Consultation"
					})
				})]
			})
		})]
	});
}
/**
* Responsive professional portrait frame.
* Mobile: compact, centred 4:5 card with a small caption underneath.
* Desktop: larger framed portrait with gold accent details.
* Renders a real photo when `portraitSrc` is set in src/data/site.ts,
* otherwise a neutral, clearly-marked placeholder (no invented likeness).
*/
function Portrait() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "relative mx-auto w-[9.875rem] max-w-full sm:w-full sm:max-w-[20rem] lg:ml-auto lg:max-w-[24rem]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "absolute -top-2 -right-2 hidden h-16 w-16 border-t border-r border-gold-soft lg:block"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-surface sm:rounded-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: portraitSrc,
					alt: `${professional.name}, ${professional.title} in ${professional.city}`,
					width: 800,
					height: 1e3,
					loading: "eager",
					className: "h-full w-full object-cover object-[center_25%] grayscale-[20%] transition-all duration-700 ease-out hover:grayscale-0"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-3 text-center sm:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-base leading-snug text-foreground",
					children: professional.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-[0.625rem] tracking-[0.18em] text-muted-foreground uppercase",
					children: professional.title
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "mt-3 hidden h-px w-16 bg-gold lg:block"
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "home",
		className: "border-b border-border bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-20 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_42%] lg:items-center lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:order-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:order-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gold-rule mb-5",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "hidden font-serif text-[1.75rem] leading-[1.15] text-foreground sm:block sm:text-[2.5rem] lg:text-[3rem]",
							children: professional.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden text-[0.8125rem] tracking-[0.18em] text-primary uppercase sm:mt-2 sm:block",
							children: professional.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-serif text-lg leading-snug text-foreground sm:text-2xl",
							children: "Clear financial guidance for confident decisions."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-lg text-[0.9375rem] leading-relaxed text-muted-foreground",
							children: "Providing professional accounting, taxation and financial guidance with a focus on clarity, accuracy and practical client support."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7 sm:gap-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
								children: "Explore Services"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "text-center text-sm text-foreground underline decoration-gold decoration-1 underline-offset-4 transition-colors hover:text-primary",
								children: "Get in Touch →"
							})]
						})
					]
				})]
			})
		})
	});
}
var icons = {
	FileText,
	Receipt,
	BookOpen,
	Compass,
	ShieldCheck,
	ClipboardCheck,
	Landmark,
	Briefcase
};
function Services({ onDiscuss }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "border-b border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gold-rule mb-5",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-[1.75rem] leading-tight text-foreground sm:text-[2.125rem]",
					children: "Professional Services"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground",
					children: "Practical financial and compliance support for individuals, professionals and businesses."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-px sm:mt-10 border border-border bg-border sm:grid-cols-2 lg:grid-cols-4",
					children: services.map((service) => {
						const Icon = icons[service.icon] ?? FileText;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "bg-card p-5 sm:p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-5 w-5 text-primary",
									strokeWidth: 1.5,
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-serif text-lg leading-snug text-foreground",
									children: service.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2.5 text-sm leading-relaxed text-muted-foreground",
									children: service.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => onDiscuss(service.title),
									className: "mt-5 text-[0.8125rem] font-medium text-primary transition-colors hover:text-foreground",
									children: "Discuss Requirement →"
								})
							]
						}, service.title);
					})
				})
			]
		})
	});
}
function Expertise() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "expertise",
		className: "border-b border-border bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gold-rule mb-5",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-[1.75rem] leading-tight text-foreground sm:text-[2.125rem]",
					children: "Professional Approach"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground",
					children: "A straightforward way of working, so you always know what is happening and why."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8",
					children: approach.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-border-strong pt-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-sm text-gold",
								children: step.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1.5 font-serif text-lg text-foreground",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: step.text
							})
						]
					}, step.step))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 sm:mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-[1.5rem] leading-tight text-foreground sm:text-[1.875rem]",
						children: "Who We Serve"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4",
						children: audiences.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card px-5 py-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-base text-foreground",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
								children: item.text
							})]
						}, item.title))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 border-t border-border pt-10 sm:mt-16 sm:pt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-[1.5rem] leading-tight text-foreground sm:text-[1.875rem]",
						children: "What Matters in Professional Financial Guidance"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4",
						children: principles.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block h-px w-8 bg-gold",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-serif text-lg text-foreground",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: item.text
							})
						] }, item.title))
					})]
				})
			]
		})
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function Faq({ onConsult }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "border-b border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gold-rule mb-5",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-[1.75rem] leading-tight text-foreground sm:text-[2.125rem]",
					children: "Frequently Asked Questions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground",
					children: "Simple answers to the questions clients ask most often."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "mt-8 max-w-3xl border-t border-border",
					children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: item.q,
						className: "border-b border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "py-4 text-left font-serif text-base text-foreground hover:no-underline sm:text-lg",
							children: item.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "pb-5 text-sm leading-relaxed text-muted-foreground",
							children: item.a
						})]
					}, item.q))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 border border-border bg-card p-5 sm:mt-14 sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-xl leading-snug text-foreground sm:text-2xl",
							children: "Have a Financial or Tax-Related Requirement?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground",
							children: "Let's discuss your requirement and identify the right professional approach."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onConsult,
								className: "bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
								children: "Request a Consultation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: telHref(primaryPhone),
								className: "border border-border-strong px-6 py-3 text-center text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary",
								children: "Call Now"
							})]
						})
					]
				})
			]
		})
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var enquirySchema = objectType({
	name: stringType().trim().min(2).max(120),
	phone: stringType().trim().min(10).max(20),
	email: stringType().trim().email().max(200),
	service: stringType().trim().min(2).max(160),
	message: stringType().trim().min(5).max(4e3)
});
var submitEnquiry = createServerFn({ method: "POST" }).inputValidator((data) => enquirySchema.parse(data)).handler(createSsrRpc("90802dada3e3abd94910b2d206a0941c3619e873fd29fa0ef5c768796ebe7044"));
var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validate(v) {
	const e = {};
	if (v.name.trim().length < 2) e.name = "Please enter your full name.";
	if (!/^[0-9+\s-]{10,15}$/.test(v.phone.trim())) e.phone = "Please enter a valid phone number.";
	if (!emailRe.test(v.email.trim())) e.email = "Please enter a valid email address.";
	if (!v.service) e.service = "Please select a service.";
	if (v.message.trim().length < 5) e.message = "Please describe your requirement briefly.";
	return e;
}
/**
* Enquiry form. Submissions are stored in the project database through the
* `submitEnquiry` server function.
*/
function EnquiryForm({ defaultService = "", compact = false, submitLabel = "Request a Consultation" }) {
	const [values, setValues] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		service: defaultService,
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [failed, setFailed] = (0, import_react.useState)(null);
	const send = useServerFn(submitEnquiry);
	const uid = (0, import_react.useId)();
	const fid = (name) => `${uid}-${name}`;
	const set = (key) => (e) => {
		setValues((v) => ({
			...v,
			[key]: e.target.value
		}));
		setErrors((prev) => ({
			...prev,
			[key]: void 0
		}));
	};
	const field = "mt-1.5 w-full border border-border-strong bg-card px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";
	const label = "block text-[0.8125rem] font-medium text-foreground";
	const handleSubmit = async (e) => {
		e.preventDefault();
		const found = validate(values);
		setErrors(found);
		if (Object.keys(found).length > 0) return;
		setSubmitting(true);
		setFailed(null);
		try {
			await send({ data: values });
			setSent(true);
			setValues({
				name: "",
				phone: "",
				email: "",
				service: defaultService,
				message: ""
			});
		} catch {
			setFailed("Something went wrong while sending your enquiry. Please try again or call directly.");
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		noValidate: true,
		className: "text-left",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: compact ? "" : "sm:col-span-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: label,
								htmlFor: fid("name"),
								children: "Full Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: fid("name"),
								className: field,
								value: values.name,
								onChange: set("name"),
								autoComplete: "name"
							}),
							errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors.name
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: label,
							htmlFor: fid("phone"),
							children: "Phone Number"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: fid("phone"),
							className: field,
							value: values.phone,
							onChange: set("phone"),
							inputMode: "tel",
							autoComplete: "tel"
						}),
						errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-destructive",
							children: errors.phone
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: compact ? "" : "sm:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: label,
								htmlFor: fid("email"),
								children: "Email Address"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: fid("email"),
								className: field,
								value: values.email,
								onChange: set("email"),
								inputMode: "email",
								autoComplete: "email"
							}),
							errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors.email
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: compact ? "" : "sm:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: label,
								htmlFor: fid("service"),
								children: compact ? "What service are you interested in?" : "Service Required"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: fid("service"),
								className: field,
								value: values.service,
								onChange: set("service"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select a service"
								}), serviceOptions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: s,
									children: s
								}, s))]
							}),
							errors.service && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors.service
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: compact ? "" : "sm:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: label,
								htmlFor: fid("message"),
								children: "Message"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: fid("message"),
								rows: compact ? 3 : 4,
								className: field,
								value: values.message,
								onChange: set("message")
							}),
							errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors.message
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: submitting,
				className: "mt-5 w-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60 sm:w-auto",
				children: submitting ? "Sending…" : submitLabel
			}),
			failed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs leading-relaxed text-destructive",
				children: failed
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs leading-relaxed text-muted-foreground",
				role: "status",
				children: sent ? "Thank you — your enquiry has been received and will be reviewed personally. You will be contacted shortly." : "Your details are submitted securely and reviewed personally."
			})
		]
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "border-b border-border bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gold-rule mb-5",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-[1.75rem] leading-tight text-foreground sm:text-[2.125rem]",
					children: "Let's Talk"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground",
					children: "For taxation, accounting, GST, compliance or business-related financial requirements, get in touch to discuss your needs."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-10 sm:mt-10 lg:grid-cols-2 lg:gap-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "space-y-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
										strokeWidth: 1.5,
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "eyebrow",
											children: "Phone"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1.5 space-y-1",
											children: contact.phones.map((phone) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: telHref(phone),
												className: "block text-[0.9375rem] text-foreground transition-colors hover:text-primary",
												children: phone
											}, phone))
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
										strokeWidth: 1.5,
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "eyebrow",
											children: "Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: mailHref,
												className: "block truncate text-[0.9375rem] text-foreground transition-colors hover:text-primary",
												children: contact.email
											})
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
										strokeWidth: 1.5,
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "eyebrow",
											children: "Office"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1.5 text-[0.9375rem] leading-relaxed text-foreground",
											children: contact.office.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block",
												children: line
											}, line))
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-3 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: telHref(primaryPhone),
									className: "border border-border-strong bg-card px-4 py-3.5 text-center text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary",
									children: "Call Now"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsappHref,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex items-center justify-center gap-2 border border-border-strong bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
										className: "h-4 w-4",
										strokeWidth: 1.5,
										"aria-hidden": true
									}), "WhatsApp"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: mailHref,
									className: "border border-border-strong bg-card px-4 py-3.5 text-center text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary",
									children: "Send Email"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 border border-border bg-surface p-5 sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Location"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-serif text-base leading-snug text-foreground",
									children: "504 Vikram Tower, Sapna Sangeeta, Indore"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm text-muted-foreground",
									children: "Madhya Pradesh, India — visits by prior appointment."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: mapsHref,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "mt-4 inline-block text-[0.8125rem] font-medium text-primary underline decoration-gold decoration-1 underline-offset-4",
									children: "Open in Google Maps →"
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-border bg-card p-5 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-xl text-foreground",
								children: "Request a Consultation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 mb-6 text-sm leading-relaxed text-muted-foreground",
								children: "Share your requirement and it will be reviewed personally."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {})
						]
					})]
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-lg text-foreground",
							children: professional.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: professional.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gold-rule mt-4",
							"aria-hidden": true
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Footer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Navigation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2",
							children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `#${item.id}`,
								className: "text-sm text-muted-foreground transition-colors hover:text-primary",
								children: item.label
							}) }, item.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2",
						children: [contact.phones.map((phone) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: telHref(phone),
							className: "text-sm text-muted-foreground transition-colors hover:text-primary",
							children: phone
						}) }, phone)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: mailHref,
							className: "text-sm break-all text-muted-foreground transition-colors hover:text-primary",
							children: contact.email
						}) })]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Office"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground not-italic",
						children: "504 Vikram Tower, Sapna Sangeeta, Indore, Madhya Pradesh"
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "© 2026. All Rights Reserved."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#faq",
						className: "text-xs text-muted-foreground transition-colors hover:text-primary",
						children: "Privacy Policy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#faq",
						className: "text-xs text-muted-foreground transition-colors hover:text-primary",
						children: "Disclaimer"
					})]
				})]
			})]
		})
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-foreground/20 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
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
function ConsultationDialog({ open, onOpenChange, service }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90vh] max-w-md overflow-y-auto rounded-none border-border bg-card p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
				className: "text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "font-serif text-xl font-medium",
					children: "Request a Consultation"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "text-sm text-muted-foreground",
					children: "Share a few details and your requirement will be reviewed."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {
				defaultService: service ?? "",
				compact: true,
				submitLabel: "Send Enquiry"
			}, service ?? "general")]
		})
	});
}
function Index() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [service, setService] = (0, import_react.useState)(void 0);
	const openConsult = (selected) => {
		setService(selected);
		setOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { onConsult: () => openConsult() }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, { onDiscuss: (s) => openConsult(s) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expertise, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, { onConsult: () => openConsult() }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultationDialog, {
				open,
				onOpenChange: setOpen,
				service
			})
		]
	});
}
//#endregion
export { Index as component };
