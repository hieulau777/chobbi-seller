module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/category/tree/route.ts [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// import { NextResponse } from "next/server";
// import axios from "axios";
// export type CategoryNode = {
//   id: number;
//   name: string;
//   children?: CategoryNode[];
// };
// export async function GET() {
//   try {
//     const baseUrl =
//       process.env.CATALOG_BASE_URL ??
//       process.env.BACKEND_BASE_URL ??
//       "http://localhost:8080";
//     const res = await axios.get<CategoryNode[]>(
//       `${baseUrl}/category/tree`,
//       {
//         validateStatus: () => true,
//       },
//     );
//     if (res.status < 200 || res.status >= 300 || !Array.isArray(res.data)) {
//       console.error(
//         "Error calling catalog /category/tree:",
//         res.status,
//         res.statusText,
//       );
//       return NextResponse.json<CategoryNode[]>([], { status: 200 });
//     }
//     return NextResponse.json<CategoryNode[]>(res.data ?? []);
//   } catch (error) {
//     console.error("Failed to proxy category tree to catalog", error);
//     return NextResponse.json<CategoryNode[]>([], { status: 200 });
//   }
// }
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__965d5b3b._.js.map