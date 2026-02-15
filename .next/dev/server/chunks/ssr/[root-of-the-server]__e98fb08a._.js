module.exports = [
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductImagesUploader",
    ()=>ProductImagesUploader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image-plus.js [app-ssr] (ecmascript) <export default as ImagePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
"use client";
;
;
function ProductImagesUploader({ productImages, productImagesError, productImagesDragIndex, maxProductImages, onUpload, onRemove, onReorder, onDragIndexChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]",
                        children: "Ảnh sản phẩm"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-[var(--muted-foreground)]",
                        children: [
                            "Đã upload ",
                            productImages.length,
                            "/",
                            maxProductImages,
                            " ảnh."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: [
                    productImages.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            draggable: true,
                            onDragStart: ()=>onDragIndexChange(index),
                            onDragOver: (e)=>{
                                e.preventDefault();
                                e.currentTarget.classList.add("ring-2", "ring-[var(--primary)]");
                            },
                            onDragLeave: (e)=>{
                                e.currentTarget.classList.remove("ring-2", "ring-[var(--primary)]");
                            },
                            onDrop: (e)=>{
                                e.preventDefault();
                                e.currentTarget.classList.remove("ring-2", "ring-[var(--primary)]");
                                if (productImagesDragIndex !== null) {
                                    onReorder(productImagesDragIndex, index);
                                }
                            },
                            onDragEnd: ()=>onDragIndexChange(null),
                            className: `group relative aspect-square w-20 flex-shrink-0 cursor-grab overflow-hidden rounded-lg border border-[var(--border)] bg-white shadow-sm transition-all active:cursor-grabbing sm:w-24 ${productImagesDragIndex === index ? "opacity-60" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.previewUrl,
                                    alt: `Ảnh ${index + 1}`,
                                    className: "h-full w-full object-cover",
                                    draggable: false
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute left-1 top-1 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white",
                                    children: index + 1
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onRemove(index),
                                    className: "absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-red-600",
                                    "aria-label": `Xóa ảnh ${index + 1}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "size-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, item.existingId ?? item.previewUrl, true, {
                            fileName: "[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)),
                    productImages.length < maxProductImages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex aspect-square w-20 flex-shrink-0 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-[var(--border)] bg-white transition-colors hover:border-[var(--primary)]/50 hover:bg-[var(--muted)]/10 sm:w-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__["ImagePlus"], {
                                className: "size-6 text-[var(--muted-foreground)] sm:size-8"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-[var(--muted-foreground)]",
                                children: "Thêm"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: "image/*",
                                multiple: true,
                                className: "hidden",
                                onChange: onUpload
                            }, void 0, false, {
                                fileName: "[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            productImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-col gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]",
                        children: "Thumbnail"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: productImages[0].previewUrl,
                            alt: "Thumbnail",
                            className: "h-20 w-20 object-cover sm:h-24 sm:w-24"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx",
                lineNumber: 106,
                columnNumber: 9
            }, this),
            productImagesError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-red-600",
                children: productImagesError
            }, void 0, false, {
                fileName: "[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(catalog)/_components/CategorySelector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategorySelector",
    ()=>CategorySelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-ssr] (ecmascript) <export default as Pencil>");
"use client";
;
;
function CategorySelector({ selectedLeaf, selectedPathLabel, loadingCategories, categoryError, isCategoryOpen, categoryColumns, categoryPath, onOpenPopup, onClosePopup, onCategoryClick, onConfirmSelection }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]",
                        children: "Ngành hàng"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onOpenPopup,
                        className: "flex w-full items-center justify-between rounded-md border border-[var(--input)] bg-white px-3 py-2 text-sm shadow-sm transition hover:bg-[var(--muted)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                    className: "size-4 text-[var(--muted-foreground)]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: selectedLeaf ? "truncate text-[var(--foreground)]" : "truncate text-[var(--muted-foreground)]",
                                    children: selectedLeaf ? selectedPathLabel : "Chọn ngành hàng"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    loadingCategories && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-[10px] text-[var(--muted-foreground)]",
                        children: "Đang tải cây ngành hàng..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    !loadingCategories && categoryError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-[10px] text-red-600",
                        children: categoryError
                    }, void 0, false, {
                        fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            isCategoryOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40 flex items-center justify-center bg-black/30 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-[440px] w-full max-w-2xl flex-col rounded-xl bg-white p-4 shadow-xl sm:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-shrink-0 items-center justify-between gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold text-[var(--foreground)]",
                                            children: "Chọn ngành hàng"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[13px] text-[var(--muted-foreground)]",
                                            children: "Chọn lần lượt từ danh mục cha đến khi tới ngành hàng chi tiết (leaf)."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClosePopup,
                                    className: "rounded-full border border-[var(--border)] bg-white px-3 py-1 text-xs font-medium text-[var(--muted-foreground)] hover:bg-[var(--muted)]",
                                    children: "Đóng"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex-1 overflow-hidden",
                            children: loadingCategories ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-[var(--muted-foreground)]",
                                children: "Đang tải cây ngành hàng..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                                lineNumber: 91,
                                columnNumber: 17
                            }, this) : categoryError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-red-600",
                                children: categoryError
                            }, void 0, false, {
                                fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                                lineNumber: 95,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full w-full max-w-full gap-3 overflow-x-auto",
                                children: categoryColumns.map((col, levelIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex min-w-[170px] max-w-[190px] flex-col rounded-lg border border-[var(--border)] bg-[var(--muted)]/20 p-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]",
                                                children: levelIndex === 0 ? "Ngành hàng cha" : `Cấp ${levelIndex + 1}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                                                lineNumber: 103,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-[320px] min-h-0 space-y-1 overflow-y-auto pr-1",
                                                children: [
                                                    col.map((node)=>{
                                                        const isActive = categoryPath[levelIndex]?.id === node.id;
                                                        const isLeaf = !node.children || node.children.length === 0;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>onCategoryClick(levelIndex, node),
                                                            className: `flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left transition-colors ${isActive ? "bg-[var(--primary)]/10 text-[var(--primary)]" : "text-[var(--foreground)] hover:bg-[var(--muted)]"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: levelIndex === 0 ? "truncate font-semibold" : "truncate",
                                                                    children: node.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                                                                    lineNumber: 127,
                                                                    columnNumber: 31
                                                                }, this),
                                                                isLeaf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "ml-1 text-[10px] text-[var(--muted-foreground)]",
                                                                    children: "leaf"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                                                                    lineNumber: 137,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, node.id, true, {
                                                            fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 29
                                                        }, this);
                                                    }),
                                                    col.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "px-1 py-1 text-[10px] text-[var(--muted-foreground)]",
                                                        children: "Không có dữ liệu."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                                                lineNumber: 108,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, levelIndex, true, {
                                        fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                                        lineNumber: 99,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                                lineNumber: 97,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex flex-shrink-0 items-center justify-between gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "truncate text-[11px] text-[var(--muted-foreground)]",
                                    children: selectedLeaf ? `Đã chọn: ${selectedPathLabel}` : "Chưa chọn ngành hàng."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onClosePopup,
                                            className: "rounded-full border border-[var(--border)] bg-white px-4 py-1.5 text-xs font-medium text-[var(--muted-foreground)] hover:bg-[var(--muted)]",
                                            children: "Hủy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: !selectedLeaf,
                                            onClick: onConfirmSelection,
                                            className: "rounded-full bg-[var(--primary)] px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition enabled:hover:bg-[var(--primary)]/90 disabled:cursor-not-allowed disabled:bg-[var(--muted)] disabled:text-[var(--muted-foreground)]",
                                            children: "Chọn ngành hàng"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                            lineNumber: 156,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(catalog)/_components/CategorySelector.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/(catalog)/_components/AttributesSelector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttributesSelector",
    ()=>AttributesSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function AttributesSelector({ attributes, loadingAttributes, attributesError, openAttributeId, attributeSelections, attributeCustomDrafts, onToggleDropdown, onSelectValue, onClearSelection, onCustomDraftChange, onAddCustomValue }) {
    if (loadingAttributes) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-[var(--muted-foreground)]",
            children: "Đang tải thuộc tính ngành hàng..."
        }, void 0, false, {
            fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this);
    }
    if (attributesError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-600",
            children: attributesError
        }, void 0, false, {
            fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
            lineNumber: 40,
            columnNumber: 12
        }, this);
    }
    if (attributes.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-3 rounded-lg border border-[var(--border)] bg-[var(--muted)]/20 p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-sm font-semibold text-[var(--foreground)]",
                children: "Thuộc tính ngành hàng"
            }, void 0, false, {
                fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 md:grid-cols-2",
                children: attributes.map((attr)=>{
                    const selectedIds = attributeSelections[attr.id] ?? [];
                    const isDateType = attr.type === "DATE";
                    const dateValueRaw = isDateType && selectedIds.length > 0 && attr.values ? attr.values.find((v)=>selectedIds.includes(v.id))?.value ?? "" : "";
                    const dateValue = dateValueRaw && dateValueRaw.length >= 10 ? dateValueRaw.slice(0, 10) : dateValueRaw;
                    const selectedLabels = !isDateType && attr.values && attr.values.length > 0 && selectedIds.length ? attr.values.filter((v)=>selectedIds.includes(v.id)).map((v)=>v.value).join(", ") : "";
                    const isDropdownOpen = openAttributeId === attr.id;
                    const handleToggleDropdown = ()=>{
                        if (!attr.values || attr.values.length === 0) return;
                        onToggleDropdown(attr.id);
                    };
                    const handleSelectValue = (valueId)=>{
                        onSelectValue(attr.id, valueId, attr.isMultipleAllow);
                    };
                    const handleDateChange = (e)=>{
                        const v = e.target.value;
                        onClearSelection(attr.id);
                        if (v) onAddCustomValue(attr.id, v);
                    };
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]",
                                children: [
                                    attr.name,
                                    attr.isRequired && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-600",
                                        children: " *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
                                        lineNumber: 94,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: isDateType ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: dateValue,
                                            onChange: handleDateChange,
                                            max: "9999-12-31",
                                            className: "w-full rounded-md border border-[var(--input)] px-3 py-2 text-sm shadow-sm transition-colors duration-200 ease-out hover:border-[var(--primary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]",
                                            "aria-label": attr.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
                                            lineNumber: 101,
                                            columnNumber: 21
                                        }, this),
                                        dateValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onClearSelection(attr.id),
                                            className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]",
                                            "aria-label": `Xóa chọn ${attr.name}`,
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
                                            lineNumber: 110,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
                                    lineNumber: 100,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    readOnly: !!(attr.values && attr.values.length > 0),
                                                    className: "w-full cursor-pointer rounded-md border border-[var(--input)] px-3 py-2 text-sm shadow-sm transition-colors duration-200 ease-out hover:border-[var(--primary)]/60 hover:bg-[var(--muted)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]",
                                                    placeholder: attr.values && attr.values.length > 0 ? "Chọn giá trị" : "Nhập giá trị thuộc tính",
                                                    value: attr.values && attr.values.length > 0 ? selectedLabels : "",
                                                    onClick: handleToggleDropdown,
                                                    onChange: ()=>{}
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 23
                                                }, this),
                                                attr.values && attr.values.length > 0 && selectedIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>onClearSelection(attr.id),
                                                    className: "absolute right-2 top-1/2 flex h-5 w-5 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-sm text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]",
                                                    "aria-label": `Xóa chọn ${attr.name}`,
                                                    children: "×"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
                                            lineNumber: 122,
                                            columnNumber: 21
                                        }, this),
                                        isDropdownOpen && attr.values && attr.values.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 max-h-48 w-full overflow-y-auto rounded-md border border-[var(--border)] bg-white text-xs shadow-lg transition-opacity duration-150 ease-out",
                                            children: [
                                                attr.values.map((v)=>{
                                                    const active = selectedIds.includes(v.id);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>handleSelectValue(v.id),
                                                        className: `flex w-full cursor-pointer items-center justify-between px-3 py-1.5 text-left transition-colors duration-150 ease-out ${active ? "bg-[var(--primary)]/10 text-[var(--primary)]" : "text-[var(--foreground)] hover:bg-[var(--muted)]/60"}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate",
                                                            children: v.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, v.id, false, {
                                                        fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 29
                                                    }, this);
                                                }),
                                                attr.isCustomAllow && attr.isMultipleAllow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 border-t border-[var(--border)] bg-[var(--muted)]/20 px-2 py-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                className: "flex-1 rounded-md border border-[var(--input)] px-2 py-1 text-[11px] shadow-sm focus:outline-none focus:ring-1 focus:ring-[var(--ring)]",
                                                                placeholder: "Nhập custom value",
                                                                value: attributeCustomDrafts[attr.id] ?? "",
                                                                onChange: (e)=>onCustomDraftChange(attr.id, e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "cursor-pointer rounded-full bg-[var(--primary)] px-2 py-1 text-[11px] font-semibold text-white shadow-sm hover:bg-[var(--primary)]/90",
                                                                onClick: ()=>{
                                                                    const draft = (attributeCustomDrafts[attr.id] ?? "").trim();
                                                                    if (draft) onAddCustomValue(attr.id, draft);
                                                                },
                                                                children: "Thêm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
                                            lineNumber: 154,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this)
                        ]
                    }, attr.id, true, {
                        fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
                        lineNumber: 90,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(catalog)/_components/AttributesSelector.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(catalog)/_components/SalesInfoSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SalesInfoSection",
    ()=>SalesInfoSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image-plus.js [app-ssr] (ecmascript) <export default as ImagePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
"use client";
;
;
function SalesInfoSection({ classifications, classificationsWithOptions, variationRows, firstColSpanInfo, variationValues, optionDrafts, firstOptionImages, salesInfoErrors, onAddClassification, onRemoveClassification, onUpdateClassificationName, onAddOption, onRemoveOption, onOptionDraftChange, onUpdateVariationValue, onFirstOptionImageUpload, onRemoveFirstOptionImage }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-5 rounded-xl border border-[var(--border)] bg-gradient-to-b from-[var(--muted)]/5 to-transparent p-5 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base font-semibold text-[var(--foreground)]",
                        children: "Thông tin bán hàng"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-[var(--muted-foreground)]",
                        children: "Thêm tối đa 2 nhóm phân loại (VD: Màu sắc, Kích thước). Mỗi tổ hợp sẽ có Giá và Kho hàng riêng."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    classifications.map((cls)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-[var(--border)] bg-white p-4 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "flex-1 rounded-lg border border-[var(--input)] px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30",
                                            placeholder: "Tên phân loại (VD: Màu sắc)",
                                            value: cls.name,
                                            onChange: (e)=>onUpdateClassificationName(cls.id, e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onRemoveClassification(cls.id),
                                            className: "rounded-full p-1.5 text-[var(--muted-foreground)] hover:bg-red-100 hover:text-red-600",
                                            "aria-label": "Xóa phân loại",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "size-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-1.5",
                                    children: [
                                        cls.options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1 rounded-full bg-[var(--primary)]/10 px-2.5 py-1 text-xs font-medium text-[var(--primary)]",
                                                children: [
                                                    opt,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>onRemoveOption(cls.id, opt),
                                                        className: "rounded-full hover:bg-[var(--primary)]/20",
                                                        "aria-label": `Xóa ${opt}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "size-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, opt, true, {
                                                fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    className: "w-24 rounded-lg border border-[var(--input)] px-2.5 py-1.5 text-xs shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30",
                                                    placeholder: "Thêm tùy chọn",
                                                    value: optionDrafts[cls.id] ?? "",
                                                    onChange: (e)=>onOptionDraftChange(cls.id, e.target.value),
                                                    onKeyDown: (e)=>{
                                                        if (e.key === "Enter") {
                                                            e.preventDefault();
                                                            onAddOption(cls.id, (optionDrafts[cls.id] ?? "").trim());
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>onAddOption(cls.id, (optionDrafts[cls.id] ?? "").trim()),
                                                    className: "rounded-lg bg-[var(--primary)] px-2.5 py-1.5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-[var(--primary)]/90",
                                                    children: "Thêm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, cls.id, true, {
                            fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)),
                    classifications.length < 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onAddClassification,
                        className: "flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[var(--border)] bg-white px-4 py-3 text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:border-[var(--primary)]/60 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            "Thêm phân loại hàng"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            classificationsWithOptions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 rounded-xl border border-[var(--border)] bg-white p-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]",
                                children: [
                                    "Giá ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                        lineNumber: 155,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                min: 0,
                                step: 1000,
                                className: "w-full rounded-lg border border-[var(--input)] bg-white px-3 py-2.5 text-sm shadow-sm transition-colors placeholder:text-[var(--muted-foreground)]/70 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20",
                                placeholder: "VD: 100000",
                                value: variationValues["__default__"]?.price ?? "",
                                onChange: (e)=>onUpdateVariationValue("__default__", "price", e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]",
                                children: [
                                    "Kho hàng ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                        lineNumber: 171,
                                        columnNumber: 24
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                min: 0,
                                className: "w-full rounded-lg border border-[var(--input)] bg-white px-3 py-2.5 text-sm shadow-sm transition-colors placeholder:text-[var(--muted-foreground)]/70 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20",
                                placeholder: "VD: 10",
                                value: variationValues["__default__"]?.stock ?? "",
                                onChange: (e)=>onUpdateVariationValue("__default__", "stock", e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                lineNumber: 152,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto rounded-xl border border-[var(--border)] bg-white shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full min-w-[360px] text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-[var(--border)] bg-[var(--muted)]/30",
                                children: [
                                    classificationsWithOptions.map((cls)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]",
                                            children: cls.name || "Phân loại"
                                        }, cls.id, false, {
                                            fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                            lineNumber: 191,
                                            columnNumber: 19
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]",
                                        children: [
                                            "Giá ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                lineNumber: 199,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                        lineNumber: 198,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]",
                                        children: [
                                            "Kho hàng ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                lineNumber: 202,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                        lineNumber: 201,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                lineNumber: 189,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: variationRows.map((row, idx)=>{
                                const key = row === null ? "__default__" : row.key;
                                const v = variationValues[key] ?? {
                                    price: "",
                                    stock: ""
                                };
                                const isFirstRowOfGroup = firstColSpanInfo && row !== null && idx % firstColSpanInfo.rowSpan === 0;
                                const firstOption = firstColSpanInfo && row !== null && firstColSpanInfo.options[Math.floor(idx / firstColSpanInfo.rowSpan)];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-[var(--border)]/50 last:border-b-0 transition-colors hover:bg-[var(--muted)]/20",
                                    children: [
                                        classificationsWithOptions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                firstColSpanInfo && isFirstRowOfGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    rowSpan: firstColSpanInfo.rowSpan,
                                                    className: "align-top px-4 py-3",
                                                    children: firstOption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: firstOption
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                                lineNumber: 238,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col gap-1",
                                                                children: firstOptionImages[firstOption] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative inline-flex w-fit",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: firstOptionImages[firstOption].previewUrl,
                                                                            alt: firstOption,
                                                                            className: "h-14 w-14 rounded-lg border border-[var(--border)] object-cover shadow-sm"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                                            lineNumber: 244,
                                                                            columnNumber: 39
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>onRemoveFirstOptionImage(firstOption),
                                                                            className: "absolute -right-1 -top-1 rounded-full bg-red-500 p-0.5 text-white transition-colors hover:bg-red-600",
                                                                            "aria-label": `Xóa ảnh ${firstOption}`,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                className: "size-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                                                lineNumber: 260,
                                                                                columnNumber: 41
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                                            lineNumber: 252,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 37
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-dashed border-[var(--border)] bg-[var(--muted)]/30 px-2.5 py-2 text-xs text-[var(--muted-foreground)] transition-colors hover:border-[var(--primary)]/50 hover:bg-[var(--muted)]/50",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__["ImagePlus"], {
                                                                            className: "size-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                                            lineNumber: 265,
                                                                            columnNumber: 39
                                                                        }, this),
                                                                        "Thêm ảnh",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "file",
                                                                            accept: "image/*",
                                                                            className: "hidden",
                                                                            onChange: (e)=>onFirstOptionImageUpload(firstOption, e)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                                            lineNumber: 267,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                                    lineNumber: 264,
                                                                    columnNumber: 37
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 31
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 27
                                                }, this),
                                                classificationsWithOptions.slice(1).map((cls, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3",
                                                        children: row && row.labels[i + 1]
                                                    }, cls.id, false, {
                                                        fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 29
                                                    }, this))
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: 0,
                                                step: 1000,
                                                className: "w-full max-w-[140px] rounded-lg border border-[var(--input)] bg-white px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-[var(--muted-foreground)]/70 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20",
                                                placeholder: "VD: 100000",
                                                value: v.price,
                                                onChange: (e)=>onUpdateVariationValue(key, "price", e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                lineNumber: 295,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                            lineNumber: 294,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: 0,
                                                className: "w-full max-w-[100px] rounded-lg border border-[var(--input)] bg-white px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-[var(--muted-foreground)]/70 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20",
                                                placeholder: "VD: 10",
                                                value: v.stock,
                                                onChange: (e)=>onUpdateVariationValue(key, "stock", e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                                lineNumber: 308,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                            lineNumber: 307,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, key, true, {
                                    fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                                    lineNumber: 225,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                    lineNumber: 187,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, this),
            salesInfoErrors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-red-200 bg-red-50/80 p-3 text-xs text-red-700",
                children: salesInfoErrors.map((err, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "leading-relaxed",
                        children: err
                    }, i, false, {
                        fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                        lineNumber: 329,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
                lineNumber: 327,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(catalog)/_components/SalesInfoSection.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(catalog)/_utils/prepareFormData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prepareFormData",
    ()=>prepareFormData
]);
function prepareFormData(params) {
    const { shopId, productId, productName, productDescription, selectedLeaf, productImages, attributes, attributeSelections, classificationsWithOptions, variationRows, variationValues, firstOptionImages } = params;
    const ts = Date.now();
    const images = productImages.map((item, i)=>{
        const sort = i + 1;
        if (item.existingId != null) {
            return {
                id: item.existingId,
                name: `existing_${item.existingId}`,
                sort
            };
        }
        const ext = item.file?.name?.split(".").pop() || "jpg";
        const name = `p${i + 1}_${ts}_${i}.${ext}`;
        return {
            name,
            sort
        };
    });
    const productImageNames = productImages.map((item, i)=>{
        if (item.existingId != null) return `existing_${item.existingId}`;
        const ext = item.file?.name?.split(".").pop() || "jpg";
        return `p${i + 1}_${ts}_${i}.${ext}`;
    });
    const attributesList = attributes.map((attr)=>{
        const selectedIds = attributeSelections[attr.id] ?? [];
        const valueIds = selectedIds.filter((id)=>id > 0);
        const customValues = selectedIds.filter((id)=>id < 0).map((id)=>attr.values?.find((v)=>v.id === id)?.value).filter((v)=>!!v);
        if (valueIds.length === 0 && customValues.length === 0) return null;
        return {
            id: attr.id,
            valueIds,
            customValues
        };
    }).filter((a)=>a != null);
    let tiers = null;
    let optionImages = null;
    let variations = [];
    if (classificationsWithOptions.length > 0) {
        tiers = classificationsWithOptions.map((cls, tierIndex)=>({
                id: null,
                name: cls.name,
                options: cls.options.map((opt)=>({
                        id: null,
                        name: opt
                    })),
                hasImages: tierIndex === 0
            }));
        if (Object.keys(firstOptionImages).length > 0) {
            optionImages = Object.entries(firstOptionImages).map(([optionName, img], idx)=>{
                const ext = img.file.name.split(".").pop() || "jpg";
                const uniqueName = `opt_${optionName.replace(/\s/g, "_")}_${ts}_${idx}.${ext}`;
                return {
                    tierId: null,
                    tierName: classificationsWithOptions[0].name,
                    optionId: null,
                    optionName,
                    imageName: uniqueName
                };
            });
        }
        variations = variationRows.filter((row)=>row !== null).map((row)=>{
            const key = row.key;
            const v = variationValues[key] ?? {
                price: "",
                stock: ""
            };
            const price = Number(v.price) || 0;
            const stock = Number(v.stock) || 0;
            const optionCombination = classificationsWithOptions.map((cls, i)=>({
                    tierId: null,
                    tierName: cls.name,
                    optionId: null,
                    optionName: row.labels[i]
                }));
            return {
                id: null,
                price,
                stock,
                optionCombination
            };
        });
    } else {
        const v = variationValues["__default__"] ?? {
            price: "",
            stock: ""
        };
        variations = [
            {
                id: null,
                price: Number(v.price) || 0,
                stock: Number(v.stock) || 0,
                optionCombination: []
            }
        ];
    }
    const productRequest = {
        shopId,
        productId: productId ?? null,
        categoryId: selectedLeaf.id,
        name: productName,
        description: productDescription,
        images,
        attributes: attributesList,
        tiers,
        optionImages: optionImages ?? [],
        variations
    };
    const formData = new FormData();
    formData.append("product", new Blob([
        JSON.stringify(productRequest)
    ], {
        type: "application/json"
    }), "product.json");
    const filesToRename = [];
    productImages.forEach((item, i)=>{
        if (item.file) {
            filesToRename.push({
                file: item.file,
                newName: productImageNames[i]
            });
        }
    });
    Object.entries(firstOptionImages).forEach(([optionName, img], idx)=>{
        const ext = img.file.name.split(".").pop() || "jpg";
        const uniqueName = `opt_${optionName.replace(/\s/g, "_")}_${ts}_${idx}.${ext}`;
        filesToRename.push({
            file: img.file,
            newName: uniqueName
        });
    });
    for (const { file, newName } of filesToRename){
        formData.append("media", new File([
            file
        ], newName, {
            type: file.type
        }));
    }
    return formData;
}
}),
"[project]/src/app/(catalog)/_schema/product-form-schema.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultProductFormValues",
    ()=>defaultProductFormValues,
    "productFormSchema",
    ()=>productFormSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
;
const productFormSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    productName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Vui lòng nhập tên sản phẩm"),
    productDescription: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const defaultProductFormValues = {
    productName: "",
    productDescription: ""
};
}),
"[project]/src/app/(catalog)/_components/ProductForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductForm",
    ()=>ProductForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_components$2f$ProductImagesUploader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_components/ProductImagesUploader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_components$2f$CategorySelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_components/CategorySelector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_components$2f$AttributesSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_components/AttributesSelector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_components$2f$SalesInfoSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_components/SalesInfoSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$prepareFormData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_utils/prepareFormData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_schema$2f$product$2d$form$2d$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_schema/product-form-schema.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function ProductForm({ category, attributes, salesInfo, imageUpload, productId, defaultValues = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_schema$2f$product$2d$form$2d$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultProductFormValues"], submitButtonLabel, title, backHref = "/product5", backLabel = "Quay lại danh sách" }) {
    const [submitLoading, setSubmitLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { register, handleSubmit: rhfHandleSubmit, reset, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_schema$2f$product$2d$form$2d$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productFormSchema"]),
        defaultValues: {
            productName: defaultValues.productName ?? "",
            productDescription: defaultValues.productDescription ?? ""
        }
    });
    const handleConfirmCategorySelection = ()=>{
        if (!category.selectedLeaf) return;
        category.closeCategoryPopup();
        attributes.loadAttributes(category.selectedLeaf.id);
    };
    const handleToggleAttributeDropdown = (attrId)=>{
        attributes.setOpenAttributeId((prev)=>prev === attrId ? null : attrId);
    };
    const handleSelectAttributeValue = (attrId, valueId, isMultiple)=>{
        attributes.setAttributeSelections((prev)=>{
            const current = prev[attrId] ?? [];
            if (isMultiple) {
                const exists = current.includes(valueId);
                const next = exists ? current.filter((id)=>id !== valueId) : [
                    ...current,
                    valueId
                ];
                return {
                    ...prev,
                    [attrId]: next
                };
            }
            return {
                ...prev,
                [attrId]: [
                    valueId
                ]
            };
        });
        if (!isMultiple) {
            attributes.setOpenAttributeId(null);
        }
    };
    const handleClearAttributeSelection = (attrId)=>{
        attributes.setAttributeSelections((prev)=>({
                ...prev,
                [attrId]: []
            }));
        attributes.setOpenAttributeId(null);
    };
    const handleAddCustomAttributeValue = (attrId, draft)=>{
        const trimmed = draft.trim();
        if (!trimmed) return;
        const tempId = -Date.now();
        attributes.addCustomAttributeValue(attrId, trimmed, tempId);
    };
    const onSubmit = async (data)=>{
        if (!salesInfo.validate()) return;
        if (!category.selectedLeaf) {
            setSubmitError("Vui lòng chọn ngành hàng.");
            return;
        }
        if (imageUpload.productImages.length === 0) {
            setSubmitError("Vui lòng thêm ít nhất 1 ảnh sản phẩm.");
            return;
        }
        setSubmitError(null);
        setSubmitLoading(true);
        try {
            const shopId = 1;
            const formData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$prepareFormData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareFormData"])({
                shopId,
                productId: productId ?? undefined,
                productName: data.productName.trim(),
                productDescription: (data.productDescription ?? "").trim(),
                selectedLeaf: category.selectedLeaf,
                productImages: imageUpload.productImages,
                attributes: attributes.attributes,
                attributeSelections: attributes.attributeSelections,
                classificationsWithOptions: salesInfo.classificationsWithOptions,
                variationRows: salesInfo.variationRows,
                variationValues: salesInfo.variationValues,
                firstOptionImages: salesInfo.firstOptionImages
            });
            const url = productId ? `/api/product/update` : "/api/product/create";
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(url, formData);
            if (productId) {
                window.location.assign(`/product/edit/${productId}`);
                return;
            } else {
                window.location.assign("/products");
                return;
            }
        } catch (err) {
            const msg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isAxiosError(err) && err.response?.data ? String(err.response.data) : err instanceof Error ? err.message : productId ? "Không thể cập nhật sản phẩm. Vui lòng thử lại." : "Không thể tạo sản phẩm. Vui lòng thử lại.";
            setSubmitError(msg);
        } finally{
            setSubmitLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto flex min-h-screen flex-col gap-4 px-4 py-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-semibold tracking-tight text-[var(--foreground)]",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                            lineNumber: 180,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: backHref,
                        className: "rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--foreground)] shadow-sm transition hover:border-[var(--primary)]/60 hover:bg-[var(--primary)]/5",
                        children: backLabel
                    }, void 0, false, {
                        fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "rounded-xl border border-[var(--border)] bg-white p-4 shadow-sm sm:p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "space-y-5",
                    onSubmit: rhfHandleSubmit(onSubmit),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_components$2f$ProductImagesUploader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductImagesUploader"], {
                            productImages: imageUpload.productImages,
                            productImagesError: imageUpload.productImagesError,
                            productImagesDragIndex: imageUpload.productImagesDragIndex,
                            maxProductImages: imageUpload.MAX_PRODUCT_IMAGES,
                            onUpload: imageUpload.handleProductImageUpload,
                            onRemove: imageUpload.removeProductImage,
                            onReorder: imageUpload.reorderProductImages,
                            onDragIndexChange: imageUpload.setProductImagesDragIndex
                        }, void 0, false, {
                            fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "productName",
                                    className: "block text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]",
                                    children: "Tên sản phẩm"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "productName",
                                    type: "text",
                                    ...register("productName"),
                                    className: "w-full rounded-md border border-[var(--input)] px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]",
                                    placeholder: "VD: Áo thun Zara form rộng"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                errors.productName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-600",
                                    children: errors.productName.message
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_components$2f$CategorySelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CategorySelector"], {
                            selectedLeaf: category.selectedLeaf,
                            selectedPathLabel: category.selectedPathLabel,
                            loadingCategories: category.loadingCategories,
                            categoryError: category.categoryError,
                            isCategoryOpen: category.isCategoryOpen,
                            categoryColumns: category.categoryColumns,
                            categoryPath: category.categoryPath,
                            onOpenPopup: category.openCategoryPopup,
                            onClosePopup: category.closeCategoryPopup,
                            onCategoryClick: category.handleCategoryClick,
                            onConfirmSelection: handleConfirmCategorySelection
                        }, void 0, false, {
                            fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_components$2f$AttributesSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributesSelector"], {
                            attributes: attributes.attributes,
                            loadingAttributes: attributes.loadingAttributes,
                            attributesError: attributes.attributesError,
                            openAttributeId: attributes.openAttributeId,
                            attributeSelections: attributes.attributeSelections,
                            attributeCustomDrafts: attributes.attributeCustomDrafts,
                            onToggleDropdown: handleToggleAttributeDropdown,
                            onSelectValue: handleSelectAttributeValue,
                            onClearSelection: handleClearAttributeSelection,
                            onCustomDraftChange: (attrId, value)=>attributes.setAttributeCustomDrafts((prev)=>({
                                        ...prev,
                                        [attrId]: value
                                    })),
                            onAddCustomValue: handleAddCustomAttributeValue
                        }, void 0, false, {
                            fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "productDescription",
                                    className: "block text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]",
                                    children: "Mô tả"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    id: "productDescription",
                                    ...register("productDescription"),
                                    className: "min-h-[100px] w-full rounded-md border border-[var(--input)] px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]",
                                    placeholder: "Mô tả chi tiết sản phẩm..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this),
                                errors.productDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-600",
                                    children: errors.productDescription.message
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_components$2f$SalesInfoSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SalesInfoSection"], {
                            classifications: salesInfo.classifications,
                            classificationsWithOptions: salesInfo.classificationsWithOptions,
                            variationRows: salesInfo.variationRows,
                            firstColSpanInfo: salesInfo.firstColSpanInfo,
                            variationValues: salesInfo.variationValues,
                            optionDrafts: salesInfo.optionDrafts,
                            firstOptionImages: salesInfo.firstOptionImages,
                            salesInfoErrors: salesInfo.salesInfoErrors,
                            onAddClassification: salesInfo.addClassification,
                            onRemoveClassification: salesInfo.removeClassification,
                            onUpdateClassificationName: salesInfo.updateClassificationName,
                            onAddOption: salesInfo.addOption,
                            onRemoveOption: salesInfo.removeOption,
                            onOptionDraftChange: (clsId, value)=>salesInfo.setOptionDrafts((prev)=>({
                                        ...prev,
                                        [clsId]: value
                                    })),
                            onUpdateVariationValue: salesInfo.updateVariationValue,
                            onFirstOptionImageUpload: salesInfo.handleFirstOptionImageUpload,
                            onRemoveFirstOptionImage: salesInfo.removeFirstOptionImage
                        }, void 0, false, {
                            fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 pt-2",
                            children: [
                                submitError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-600",
                                    children: submitError
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: submitLoading,
                                    className: "inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--primary)]/90 disabled:cursor-not-allowed disabled:opacity-70",
                                    children: submitLoading ? "Đang lưu..." : submitButtonLabel ?? (productId ? "Lưu thay đổi" : "Lưu sản phẩm")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(catalog)/_components/ProductForm.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(catalog)/_utils/buildCategoryColumns.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildCategoryColumns",
    ()=>buildCategoryColumns
]);
function buildCategoryColumns(categories, categoryPath) {
    const columns = [];
    let currentLevel = categories;
    for(let i = 0; i <= categoryPath.length; i++){
        columns.push(currentLevel);
        const selected = categoryPath[i];
        if (!selected || !selected.children?.length) break;
        currentLevel = selected.children;
    }
    return columns;
}
}),
"[project]/src/app/(catalog)/_utils/findCategoryPathById.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findCategoryPathById",
    ()=>findCategoryPathById
]);
function findCategoryPathById(tree, targetId) {
    function search(nodes, path) {
        for (const node of nodes){
            const newPath = [
                ...path,
                node
            ];
            if (node.id === targetId) return newPath;
            if (node.children?.length) {
                const found = search(node.children, newPath);
                if (found) return found;
            }
        }
        return null;
    }
    return search(tree, []);
}
}),
"[project]/src/app/(catalog)/_utils/generateCartesianProduct.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Tạo tích Đề-các của các mảng option.
 * VD: [["Đỏ","Xanh"], ["S","M"]] -> [["Đỏ","S"],["Đỏ","M"],["Xanh","S"],["Xanh","M"]]
 */ __turbopack_context__.s([
    "generateCartesianProduct",
    ()=>generateCartesianProduct
]);
function generateCartesianProduct(optionArrays) {
    if (optionArrays.length === 0) return [];
    if (optionArrays.length === 1) return optionArrays[0].map((o)=>[
            o
        ]);
    const [first, ...rest] = optionArrays;
    const restProduct = generateCartesianProduct(rest);
    const result = [];
    for (const opt of first){
        for (const row of restProduct){
            result.push([
                opt,
                ...row
            ]);
        }
    }
    return result;
}
}),
"[project]/src/app/(catalog)/_utils/validateSalesInfo.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateSalesInfo",
    ()=>validateSalesInfo
]);
function validateSalesInfo(classifications, variationRows, variationValues) {
    const errors = [];
    if (classifications.length === 0) {
        const v = variationValues["__default__"];
        if (!v?.price?.trim()) errors.push("Vui lòng nhập giá.");
        if (!v?.stock?.trim()) errors.push("Vui lòng nhập kho hàng.");
        return {
            valid: errors.length === 0,
            errors
        };
    }
    const hasEmptyName = classifications.some((c)=>!c.name?.trim());
    if (hasEmptyName) errors.push("Tên phân loại không được để trống.");
    const hasEmptyOptions = classifications.some((c)=>!c.options?.length || c.options.every((o)=>!o?.trim()));
    if (hasEmptyOptions) errors.push("Mỗi phân loại cần ít nhất một tùy chọn.");
    for (const row of variationRows){
        if (row === null) continue;
        const v = variationValues[row.key];
        if (!v?.price?.trim()) errors.push(`Thiếu giá cho tổ hợp: ${row.labels.join(" / ")}`);
        if (!v?.stock?.trim()) errors.push(`Thiếu kho hàng cho tổ hợp: ${row.labels.join(" / ")}`);
    }
    return {
        valid: errors.length === 0,
        errors
    };
}
}),
"[project]/src/app/(catalog)/_utils/mapProductToFormData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapProductToFormData",
    ()=>mapProductToFormData
]);
function mapProductToFormData(product) {
    const name = product.productName;
    const description = product.description ?? "";
    const attributeSelections = {};
    for (const sa of product.selectedAttributes ?? []){
        attributeSelections[sa.id] = [
            ...sa.selectedValueIds
        ];
    }
    const classifications = product.tiers?.map((tier)=>({
            id: String(tier.id),
            name: tier.name,
            options: tier.options.map((opt)=>opt.name)
        })) ?? [];
    const tierOrderById = new Map();
    const optionNameByTierAndOptionId = new Map();
    product.tiers?.forEach((tier, tierIndex)=>{
        tierOrderById.set(tier.id, tierIndex);
        tier.options.forEach((opt)=>{
            optionNameByTierAndOptionId.set(`${tier.id}:${opt.id}`, opt.name);
        });
    });
    const variationValues = {};
    for (const variation of product.variations ?? []){
        const comboNames = new Array(product.tiers?.length ?? 0).fill("");
        for (const oc of variation.optionCombination ?? []){
            const tierIndex = tierOrderById.get(oc.tierId);
            if (tierIndex === undefined) continue;
            const optName = optionNameByTierAndOptionId.get(`${oc.tierId}:${oc.optionId}`) ?? "";
            comboNames[tierIndex] = optName;
        }
        const key = comboNames.length > 0 ? comboNames.join("|") : "__default__";
        variationValues[key] = {
            price: String(variation.price ?? 0),
            stock: String(variation.stock ?? 0)
        };
    }
    return {
        name,
        description,
        attributeSelections,
        classifications,
        variationValues,
        selectedCategoryId: product.selectedCategoryId
    };
}
}),
"[project]/src/app/(catalog)/_utils/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$buildCategoryColumns$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_utils/buildCategoryColumns.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$findCategoryPathById$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_utils/findCategoryPathById.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$generateCartesianProduct$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_utils/generateCartesianProduct.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$validateSalesInfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_utils/validateSalesInfo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$mapProductToFormData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_utils/mapProductToFormData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$prepareFormData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_utils/prepareFormData.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/src/app/(catalog)/_hooks/useCategoryTree.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCategoryTree",
    ()=>useCategoryTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_utils/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$buildCategoryColumns$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_utils/buildCategoryColumns.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$findCategoryPathById$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_utils/findCategoryPathById.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function useCategoryTree(initialSelectedCategoryId = null) {
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingCategories, setLoadingCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [categoryError, setCategoryError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [categoryPath, setCategoryPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCategoryOpen, setIsCategoryOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/api/category/tree").then((res)=>setCategories(res.data ?? [])).catch(()=>setCategoryError("Không tải được cây ngành hàng.")).finally(()=>setLoadingCategories(false));
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!initialSelectedCategoryId || categories.length === 0) return;
        const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$findCategoryPathById$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findCategoryPathById"])(categories, initialSelectedCategoryId);
        if (path) setCategoryPath(path);
    }, [
        initialSelectedCategoryId,
        categories
    ]);
    const selectedLeaf = categoryPath.length > 0 ? categoryPath[categoryPath.length - 1] : null;
    const selectedPathLabel = categoryPath.map((n)=>n.name).join(" > ");
    const categoryColumns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$buildCategoryColumns$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildCategoryColumns"])(categories, categoryPath), [
        categories,
        categoryPath
    ]);
    const openCategoryPopup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIsCategoryOpen(true), []);
    const closeCategoryPopup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIsCategoryOpen(false), []);
    const handleCategoryClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((levelIndex, node)=>{
        setCategoryPath((prev)=>{
            const next = prev.slice(0, levelIndex);
            next.push(node);
            return next;
        });
    }, []);
    return {
        selectedLeaf,
        selectedPathLabel,
        loadingCategories,
        categoryError,
        isCategoryOpen,
        categoryColumns,
        categoryPath,
        openCategoryPopup,
        closeCategoryPopup,
        handleCategoryClick
    };
}
}),
"[project]/src/app/(catalog)/_hooks/useAttributes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAttributes",
    ()=>useAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
"use client";
;
;
function useAttributes() {
    const [attributes, setAttributes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingAttributes, setLoadingAttributes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [attributesError, setAttributesError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openAttributeId, setOpenAttributeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [attributeSelections, setAttributeSelections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [attributeCustomDrafts, setAttributeCustomDrafts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const loadAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((categoryId)=>{
        setLoadingAttributes(true);
        setAttributesError(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/category/${categoryId}/attributes`).then((res)=>setAttributes(res.data ?? [])).catch(()=>setAttributesError("Không tải được thuộc tính.")).finally(()=>setLoadingAttributes(false));
    }, []);
    const addCustomAttributeValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((attrId, value, tempId)=>{
        const attr = attributes.find((a)=>a.id === attrId);
        if (!attr) return;
        setAttributes((prev)=>prev.map((a)=>{
                if (a.id !== attrId) return a;
                const values = [
                    ...a.values ?? [],
                    {
                        id: tempId,
                        value
                    }
                ];
                return {
                    ...a,
                    values
                };
            }));
        setAttributeSelections((prev)=>({
                ...prev,
                [attrId]: [
                    ...prev[attrId] ?? [],
                    tempId
                ]
            }));
    }, [
        attributes
    ]);
    return {
        attributes,
        setAttributes,
        loadingAttributes,
        attributesError,
        openAttributeId,
        setOpenAttributeId,
        attributeSelections,
        setAttributeSelections,
        attributeCustomDrafts,
        setAttributeCustomDrafts,
        loadAttributes,
        addCustomAttributeValue
    };
}
}),
"[project]/src/app/(catalog)/_hooks/useSalesInfo.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSalesInfo",
    ()=>useSalesInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_utils/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$generateCartesianProduct$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_utils/generateCartesianProduct.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$validateSalesInfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_utils/validateSalesInfo.ts [app-ssr] (ecmascript)");
"use client";
;
;
const MAX_OPTION_IMAGE_SIZE_MB = 5;
const MAX_OPTION_IMAGE_BYTES = MAX_OPTION_IMAGE_SIZE_MB * 1024 * 1024;
function useSalesInfo() {
    const [classifications, setClassifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [variationValues, setVariationValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [optionDrafts, setOptionDrafts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [firstOptionImages, setFirstOptionImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const classificationsWithOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>classifications.filter((c)=>c.options.length > 0), [
        classifications
    ]);
    const cartesianProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$generateCartesianProduct$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateCartesianProduct"])(classificationsWithOptions.map((c)=>c.options)), [
        classificationsWithOptions
    ]);
    const variationRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (cartesianProduct.length === 0) return [
            null
        ];
        return cartesianProduct.map((labels)=>({
                key: labels.join("|"),
                labels
            }));
    }, [
        cartesianProduct
    ]);
    const firstColSpanInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (classificationsWithOptions.length === 0) return null;
        const firstOptions = classificationsWithOptions[0].options;
        const rowSpan = cartesianProduct.length / firstOptions.length;
        return {
            rowSpan,
            options: firstOptions
        };
    }, [
        classificationsWithOptions,
        cartesianProduct
    ]);
    const [salesInfoErrors, setSalesInfoErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const validate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const { valid, errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$validateSalesInfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateSalesInfo"])(classifications, variationRows, variationValues);
        setSalesInfoErrors(errors);
        return valid;
    }, [
        classifications,
        variationRows,
        variationValues
    ]);
    const addClassification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setClassifications((prev)=>[
                ...prev,
                {
                    id: String(Date.now()),
                    name: "",
                    options: []
                }
            ]);
    }, []);
    const removeClassification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setClassifications((prev)=>prev.filter((c)=>c.id !== id));
        setVariationValues((prev)=>{
            const next = {
                ...prev
            };
            Object.keys(next).forEach((key)=>{
                if (key.startsWith(id)) delete next[key];
            });
            return next;
        });
        setOptionDrafts((prev)=>{
            const next = {
                ...prev
            };
            delete next[id];
            return next;
        });
    }, []);
    const updateClassificationName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id, name)=>{
        setClassifications((prev)=>prev.map((c)=>c.id === id ? {
                    ...c,
                    name
                } : c));
    }, []);
    const addOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((clsId, option)=>{
        const trimmed = option.trim();
        if (!trimmed) return;
        setClassifications((prev)=>prev.map((c)=>{
                if (c.id !== clsId) return c;
                if (c.options.includes(trimmed)) return c;
                return {
                    ...c,
                    options: [
                        ...c.options,
                        trimmed
                    ]
                };
            }));
        setOptionDrafts((prev)=>({
                ...prev,
                [clsId]: ""
            }));
    }, []);
    const removeOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((clsId, option)=>{
        setClassifications((prev)=>prev.map((c)=>{
                if (c.id !== clsId) return c;
                return {
                    ...c,
                    options: c.options.filter((o)=>o !== option)
                };
            }));
        setVariationValues((prev)=>{
            const next = {
                ...prev
            };
            Object.keys(next).forEach((key)=>{
                if (key.includes(option)) delete next[key];
            });
            return next;
        });
        setFirstOptionImages((prev)=>{
            const next = {
                ...prev
            };
            if (next[option]?.previewUrl?.startsWith("blob:")) {
                URL.revokeObjectURL(next[option].previewUrl);
            }
            delete next[option];
            return next;
        });
    }, []);
    const updateVariationValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key, field, value)=>{
        setVariationValues((prev)=>({
                ...prev,
                [key]: {
                    ...prev[key] ?? {
                        price: "",
                        stock: ""
                    },
                    [field]: value
                }
            }));
    }, []);
    const handleFirstOptionImageUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((option, e)=>{
        const file = e.target.files?.[0];
        if (!file?.type.startsWith("image/")) return;
        if (file.size > MAX_OPTION_IMAGE_BYTES) return;
        setFirstOptionImages((prev)=>{
            const old = prev[option];
            if (old?.previewUrl?.startsWith("blob:")) URL.revokeObjectURL(old.previewUrl);
            return {
                ...prev,
                [option]: {
                    file,
                    previewUrl: URL.createObjectURL(file)
                }
            };
        });
        e.target.value = "";
    }, []);
    const removeFirstOptionImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((option)=>{
        setFirstOptionImages((prev)=>{
            const item = prev[option];
            if (item?.previewUrl?.startsWith("blob:")) {
                URL.revokeObjectURL(item.previewUrl);
            }
            const next = {
                ...prev
            };
            delete next[option];
            return next;
        });
    }, []);
    const resetAfterSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setClassifications([]);
        setVariationValues({});
        setOptionDrafts({});
        setSalesInfoErrors([]);
        Object.values(firstOptionImages).forEach((item)=>{
            if (item.previewUrl.startsWith("blob:")) URL.revokeObjectURL(item.previewUrl);
        });
        setFirstOptionImages({});
    }, [
        firstOptionImages
    ]);
    return {
        classifications,
        setClassifications,
        classificationsWithOptions,
        variationRows,
        firstColSpanInfo,
        variationValues,
        setVariationValues,
        optionDrafts,
        setOptionDrafts,
        firstOptionImages,
        salesInfoErrors,
        validate,
        addClassification,
        removeClassification,
        updateClassificationName,
        addOption,
        removeOption,
        updateVariationValue,
        handleFirstOptionImageUpload,
        removeFirstOptionImage,
        resetAfterSubmit
    };
}
}),
"[project]/src/app/(catalog)/_hooks/useImageUpload.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useImageUpload",
    ()=>useImageUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const MAX_PRODUCT_IMAGES = 9;
const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
function isBlobUrl(url) {
    return url.startsWith("blob:");
}
function useImageUpload() {
    const [productImages, setProductImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [productImagesDragIndex, setProductImagesDragIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [productImagesError, setProductImagesError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const productImagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(productImages);
    productImagesRef.current = productImages;
    const handleProductImageUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const files = e.target.files;
        if (!files?.length) return;
        setProductImagesError(null);
        const toAdd = [];
        for(let i = 0; i < files.length; i++){
            const file = files[i];
            if (!file.type.startsWith("image/")) continue;
            if (file.size > MAX_FILE_SIZE_BYTES) {
                setProductImagesError(`Ảnh "${file.name}" vượt quá 10MB.`);
                continue;
            }
            toAdd.push({
                file,
                previewUrl: URL.createObjectURL(file)
            });
        }
        setProductImages((prev)=>{
            const combined = [
                ...prev,
                ...toAdd
            ];
            if (combined.length <= MAX_PRODUCT_IMAGES) return combined;
            const kept = combined.slice(0, MAX_PRODUCT_IMAGES);
            combined.slice(MAX_PRODUCT_IMAGES).forEach((item)=>{
                if (item.file && item.previewUrl && isBlobUrl(item.previewUrl)) {
                    URL.revokeObjectURL(item.previewUrl);
                }
            });
            return kept;
        });
        e.target.value = "";
    }, []);
    const removeProductImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>{
        setProductImages((prev)=>{
            const item = prev[index];
            if (item?.file && item?.previewUrl && isBlobUrl(item.previewUrl)) {
                URL.revokeObjectURL(item.previewUrl);
            }
            return prev.filter((_, i)=>i !== index);
        });
    }, []);
    const reorderProductImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((fromIndex, toIndex)=>{
        if (fromIndex === toIndex) return;
        setProductImages((prev)=>{
            const arr = [
                ...prev
            ];
            const [removed] = arr.splice(fromIndex, 1);
            arr.splice(toIndex, 0, removed);
            return arr;
        });
        setProductImagesDragIndex(null);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            productImagesRef.current.forEach((item)=>{
                if (item.previewUrl && isBlobUrl(item.previewUrl)) {
                    URL.revokeObjectURL(item.previewUrl);
                }
            });
        };
    }, []);
    const clearProductImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setProductImages([]), []);
    return {
        productImages,
        setProductImages,
        productImagesError,
        productImagesDragIndex,
        setProductImagesDragIndex,
        handleProductImageUpload,
        removeProductImage,
        reorderProductImages,
        clearProductImages,
        MAX_PRODUCT_IMAGES
    };
}
}),
"[project]/src/app/(catalog)/_utils/index2.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "capitalizeVariationName",
    ()=>capitalizeVariationName,
    "formatPrice",
    ()=>formatPrice,
    "getImageUrl",
    ()=>getImageUrl
]);
function formatPrice(value) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
    }).format(value);
}
function capitalizeVariationName(name) {
    if (!name || !name.trim()) return "";
    return name.split(" / ").map((part)=>part.trim() ? part.charAt(0).toUpperCase() + part.slice(1) : part).join(" / ");
}
function getImageUrl(img) {
    if (!img || !img.trim()) return "/file.svg";
    if (img.startsWith("http://") || img.startsWith("https://")) return img;
    if (img.startsWith("/api/static/")) return img;
    const path = img.startsWith("/") ? img.slice(1) : img;
    return `/api/static/${path}`;
}
}),
"[project]/src/app/(catalog)/product/edit/[productId]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_components$2f$ProductForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_components/ProductForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_hooks$2f$useCategoryTree$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_hooks/useCategoryTree.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_hooks$2f$useAttributes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_hooks/useAttributes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_hooks$2f$useSalesInfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_hooks/useSalesInfo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_hooks$2f$useImageUpload$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_hooks/useImageUpload.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_utils/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$mapProductToFormData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_utils/mapProductToFormData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$index2$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(catalog)/_utils/index2.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function EditProductPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const productId = Number(params?.productId);
    const [initialFormValues, setInitialFormValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCategoryId, setSelectedCategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingProduct, setLoadingProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_hooks$2f$useCategoryTree$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCategoryTree"])(selectedCategoryId);
    const attributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_hooks$2f$useAttributes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAttributes"])();
    const salesInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_hooks$2f$useSalesInfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSalesInfo"])();
    const imageUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_hooks$2f$useImageUpload$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImageUpload"])();
    const { setAttributes, setAttributeSelections } = attributes;
    const { setClassifications, setVariationValues } = salesInfo;
    const { setProductImages } = imageUpload;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!productId) return;
        const loadProduct = async ()=>{
            try {
                setLoadingProduct(true);
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/product/${productId}`);
                const data = res.data;
                const mapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$mapProductToFormData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapProductToFormData"])(data);
                setInitialFormValues({
                    productName: mapped.name,
                    productDescription: mapped.description ?? ""
                });
                setSelectedCategoryId(mapped.selectedCategoryId);
                setAttributes(data.attributes ?? []);
                setAttributeSelections(mapped.attributeSelections);
                setClassifications(mapped.classifications);
                setVariationValues(mapped.variationValues);
                const sortedImages = [
                    ...data.images ?? []
                ].sort((a, b)=>(a.sort ?? 0) - (b.sort ?? 0));
                setProductImages(sortedImages.map((img)=>({
                        previewUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_utils$2f$index2$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getImageUrl"])(img.url),
                        existingId: img.id
                    })));
                setLoadError(null);
            } catch (error) {
                console.error("Failed to load product", error);
                setLoadError("Không tải được dữ liệu sản phẩm.");
            } finally{
                setLoadingProduct(false);
            }
        };
        loadProduct();
    }, [
        productId,
        setAttributes,
        setAttributeSelections,
        setClassifications,
        setVariationValues,
        setProductImages
    ]);
    if (!productId || loadError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-3 bg-[var(--background)] px-4 py-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-semibold text-[var(--foreground)]",
                    children: loadError ?? "Không tìm thấy sản phẩm"
                }, void 0, false, {
                    fileName: "[project]/src/app/(catalog)/product/edit/[productId]/page.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/product5",
                    className: "text-sm font-medium text-[var(--primary)] underline-offset-4 hover:underline",
                    children: "Quay lại danh sách sản phẩm"
                }, void 0, false, {
                    fileName: "[project]/src/app/(catalog)/product/edit/[productId]/page.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(catalog)/product/edit/[productId]/page.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this);
    }
    if (loadingProduct || !initialFormValues) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-3 bg-[var(--background)] px-4 py-6 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-[var(--muted-foreground)]",
                children: "Đang tải dữ liệu sản phẩm..."
            }, void 0, false, {
                fileName: "[project]/src/app/(catalog)/product/edit/[productId]/page.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(catalog)/product/edit/[productId]/page.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$catalog$292f$_components$2f$ProductForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductForm"], {
        category: category,
        attributes: attributes,
        salesInfo: salesInfo,
        imageUpload: imageUpload,
        productId: productId,
        defaultValues: initialFormValues,
        title: "Chỉnh sửa sản phẩm",
        submitButtonLabel: "Lưu thay đổi",
        backHref: "/product5",
        backLabel: "Quay lại danh sách"
    }, void 0, false, {
        fileName: "[project]/src/app/(catalog)/product/edit/[productId]/page.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e98fb08a._.js.map