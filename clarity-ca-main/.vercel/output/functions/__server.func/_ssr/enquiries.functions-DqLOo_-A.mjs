import { r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-BzU5_70-2.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/enquiries.functions-DqLOo_-A.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
var submitEnquiry_createServerFn_handler = createServerRpc({
	id: "90802dada3e3abd94910b2d206a0941c3619e873fd29fa0ef5c768796ebe7044",
	name: "submitEnquiry",
	filename: "src/lib/enquiries.functions.ts"
}, (opts) => submitEnquiry.__executeServer(opts));
var submitEnquiry = createServerFn({ method: "POST" }).inputValidator((data) => enquirySchema.parse(data)).handler(submitEnquiry_createServerFn_handler, async ({ data }) => {
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const { error } = await supabaseAdmin.from("enquiries").insert({
		name: data.name,
		phone: data.phone,
		email: data.email,
		service: data.service,
		message: data.message
	});
	if (error) {
		console.error("Failed to store enquiry", error);
		throw new Error("Could not save your enquiry. Please try again or call directly.");
	}
	return { ok: true };
});
//#endregion
export { submitEnquiry_createServerFn_handler };
