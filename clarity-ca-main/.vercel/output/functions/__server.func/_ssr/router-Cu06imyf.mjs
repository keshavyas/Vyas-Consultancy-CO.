import { n as __toESM } from "../_runtime.mjs";
import { _ as require_react, g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as __exportAll } from "./server-BzU5_70-.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cu06imyf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CcFoTHad.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "CA Deepak Vyas | Chartered Accountant in Indore" },
			{
				name: "description",
				content: "Professional taxation, GST, accounting, compliance and financial advisory services in Indore, Madhya Pradesh."
			},
			{
				name: "author",
				content: "CA Deepak Vyas"
			},
			{
				name: "theme-color",
				content: "#FAFAF8"
			},
			{
				property: "og:site_name",
				content: "Vyas Consultancy Services"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "light",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var file_0000000088988208865bbe267def90ec_default = "/assets/file_0000000088988208865bbe267def90ec-BcXBYMo5.png";
/**
* Single source of truth for all professional details, services, FAQs and navigation.
* Update values here — components read from this file only.
*/
var professional = {
	name: "CA Deepak Vyas",
	title: "Chartered Accountant",
	brand: "Vyas Consultancy & Co.",
	city: "Indore",
	state: "Madhya Pradesh"
};
var contact = {
	phones: ["9893014143", "7898914143"],
	email: "deepakvyas272@gmail.com",
	whatsapp: "919893014143",
	whatsappMessage: "Hello, I would like to discuss a professional requirement.",
	office: {
		lines: [
			"504 Vikram Tower",
			"Sapna Sangeeta",
			"Indore, Madhya Pradesh, India"
		],
		query: "504 Vikram Tower, Sapna Sangeeta, Indore, Madhya Pradesh"
	}
};
var primaryPhone = contact.phones[0];
var telHref = (phone) => `tel:+91${phone}`;
var mailHref = `mailto:${contact.email}`;
var whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`;
var mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.office.query)}`;
/**
* Professional portrait.
* The photo is served from Lovable Assets CDN. To update it, replace the
* asset pointer at `src/assets/deepak-vyas.png.asset.json`.
*/
var portraitSrc = file_0000000088988208865bbe267def90ec_default;
var nav = [
	{
		label: "Home",
		id: "home"
	},
	{
		label: "Services",
		id: "services"
	},
	{
		label: "Expertise",
		id: "expertise"
	},
	{
		label: "FAQ",
		id: "faq"
	},
	{
		label: "Contact",
		id: "contact"
	}
];
var services = [
	{
		title: "Income Tax & Taxation",
		description: "Tax return filing, taxation assistance and related professional support.",
		icon: "FileText"
	},
	{
		title: "GST Services",
		description: "GST registration, return filing and compliance-related assistance.",
		icon: "Receipt"
	},
	{
		title: "Accounting & Bookkeeping",
		description: "Accurate accounting, bookkeeping and financial record management.",
		icon: "BookOpen"
	},
	{
		title: "Tax Planning & Advisory",
		description: "Professional guidance for understanding and planning taxation matters.",
		icon: "Compass"
	},
	{
		title: "Audit & Assurance",
		description: "Audit and assurance support, subject to applicable professional scope and requirements.",
		icon: "ShieldCheck"
	},
	{
		title: "TDS & Compliance",
		description: "TDS-related documentation, filing and compliance assistance.",
		icon: "ClipboardCheck"
	},
	{
		title: "Financial Statements",
		description: "Preparation and support relating to financial statements and financial reporting.",
		icon: "Landmark"
	},
	{
		title: "Business & Financial Advisory",
		description: "Practical financial guidance for businesses and professionals.",
		icon: "Briefcase"
	}
];
var serviceOptions = [...services.map((s) => s.title), "Other"];
var approach = [
	{
		step: "01",
		title: "Understand",
		text: "Understand the client's requirement and financial situation."
	},
	{
		step: "02",
		title: "Review",
		text: "Review the relevant information, records and documentation."
	},
	{
		step: "03",
		title: "Advise",
		text: "Provide clear and practical professional guidance."
	},
	{
		step: "04",
		title: "Support",
		text: "Assist with the relevant financial or compliance process."
	}
];
var audiences = [
	{
		title: "Individuals",
		text: "Personal taxation and financial documentation."
	},
	{
		title: "Salaried Professionals",
		text: "Return filing and salary-related tax matters."
	},
	{
		title: "Freelancers & Consultants",
		text: "Income reporting and compliance support."
	},
	{
		title: "Entrepreneurs",
		text: "Guidance while setting up and running a venture."
	},
	{
		title: "Startups",
		text: "Registrations, records and early-stage compliance."
	},
	{
		title: "Small & Medium Businesses",
		text: "Accounting, GST and routine compliance."
	},
	{
		title: "Established Businesses",
		text: "Reporting, review and advisory support."
	},
	{
		title: "Professionals",
		text: "Practice-related accounting and taxation matters."
	}
];
var principles = [
	{
		title: "Clarity",
		text: "Complex financial matters explained simply."
	},
	{
		title: "Accuracy",
		text: "Careful attention to records and documentation."
	},
	{
		title: "Confidentiality",
		text: "Professional handling of client information."
	},
	{
		title: "Practical Guidance",
		text: "Straightforward advice focused on the client's requirement."
	}
];
var faqs = [
	{
		q: "What services are available?",
		a: "Income tax and taxation, GST, accounting and bookkeeping, TDS and compliance, financial statements, audit and assurance support, and general business and financial advisory."
	},
	{
		q: "Can individuals get taxation assistance?",
		a: "Yes. Individuals and salaried professionals can get help with income tax return filing, documentation and general taxation questions."
	},
	{
		q: "Do you provide GST-related services?",
		a: "Yes. This includes GST registration, periodic return filing and assistance with routine GST compliance requirements."
	},
	{
		q: "Can businesses get accounting support?",
		a: "Yes. Businesses can get help with bookkeeping, maintaining financial records, preparing financial statements and related reporting."
	},
	{
		q: "How can I discuss my requirement?",
		a: "You can call or send a message using the contact details below, or share your requirement through the consultation form and it will be reviewed."
	},
	{
		q: "Where is the office located?",
		a: "504 Vikram Tower, Sapna Sangeeta, Indore, Madhya Pradesh. Directions are available through the map link in the contact section."
	}
];
var $$splitComponentImporter = () => import("./routes-Z64Vsy-B.mjs");
var title = "CA Deepak Vyas | Chartered Accountant in Indore";
var description = "Professional taxation, GST, accounting, compliance and financial advisory services in Indore, Madhya Pradesh.";
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Accountant",
				name: professional.name,
				description,
				jobTitle: professional.title,
				telephone: contact.phones.map((p) => `+91${p}`),
				email: contact.email,
				address: {
					"@type": "PostalAddress",
					streetAddress: "504 Vikram Tower, Sapna Sangeeta",
					addressLocality: "Indore",
					addressRegion: "Madhya Pradesh",
					addressCountry: "IN"
				},
				areaServed: "Indore, Madhya Pradesh"
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { faqs as a, nav as c, principles as d, professional as f, whatsappHref as g, telHref as h, contact as i, portraitSrc as l, services as m, approach as n, mailHref as o, serviceOptions as p, audiences as r, mapsHref as s, router_exports as t, primaryPhone as u };
