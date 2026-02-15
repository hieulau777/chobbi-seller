(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/product/create/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image-plus.js [app-client] (ecmascript) <export default as ImagePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CreateProductPage() {
    _s();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingCategories, setLoadingCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [categoryError, setCategoryError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCategoryOpen, setIsCategoryOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [categoryPath, setCategoryPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedLeaf, setSelectedLeaf] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [attributes, setAttributes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingAttributes, setLoadingAttributes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [attributesError, setAttributesError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openAttributeId, setOpenAttributeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [attributeSelections, setAttributeSelections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [attributeCustomDrafts, setAttributeCustomDrafts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Thông tin bán hàng: phân loại & biến thể
    const [classifications, setClassifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [variationValues, setVariationValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [optionDrafts, setOptionDrafts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [salesInfoErrors, setSalesInfoErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Ảnh cho phân loại đầu tiên: key = tên tùy chọn (VD: "Đỏ")
    const [firstOptionImages, setFirstOptionImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const firstOptionImagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(firstOptionImages);
    firstOptionImagesRef.current = firstOptionImages;
    // Ảnh sản phẩm chính: tối đa 9 ảnh, mỗi ảnh < 10MB
    const [productImages, setProductImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [productImagesDragIndex, setProductImagesDragIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [productImagesError, setProductImagesError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const productImagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(productImages);
    productImagesRef.current = productImages;
    const MAX_PRODUCT_IMAGES = 9;
    const MAX_FILE_SIZE_MB = 10;
    const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
    const handleProductImageUpload = (e)=>{
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
                if (item.previewUrl) URL.revokeObjectURL(item.previewUrl);
            });
            return kept;
        });
        e.target.value = "";
    };
    const removeProductImage = (index)=>{
        setProductImages((prev)=>{
            const item = prev[index];
            if (item?.previewUrl) URL.revokeObjectURL(item.previewUrl);
            return prev.filter((_, i)=>i !== index);
        });
    };
    const reorderProductImages = (fromIndex, toIndex)=>{
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
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateProductPage.useEffect": ()=>{
            return ({
                "CreateProductPage.useEffect": ()=>{
                    productImagesRef.current.forEach({
                        "CreateProductPage.useEffect": ({ previewUrl })=>URL.revokeObjectURL(previewUrl)
                    }["CreateProductPage.useEffect"]);
                }
            })["CreateProductPage.useEffect"];
        }
    }["CreateProductPage.useEffect"], []);
    const classificationsWithOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateProductPage.useMemo[classificationsWithOptions]": ()=>classifications.filter({
                "CreateProductPage.useMemo[classificationsWithOptions]": (c)=>c.options.length > 0
            }["CreateProductPage.useMemo[classificationsWithOptions]"])
    }["CreateProductPage.useMemo[classificationsWithOptions]"], [
        classifications
    ]);
    // Cartesian product: [[a,b],[c,d]] -> [[a,c],[a,d],[b,c],[b,d]]
    const cartesianProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateProductPage.useMemo[cartesianProduct]": ()=>{
            const f = {
                "CreateProductPage.useMemo[cartesianProduct].f": (acc, curr)=>{
                    if (curr.length === 0) return acc;
                    if (acc.length === 0) return curr.map({
                        "CreateProductPage.useMemo[cartesianProduct].f": (x)=>[
                                x
                            ]
                    }["CreateProductPage.useMemo[cartesianProduct].f"]);
                    const result = [];
                    for (const a of acc){
                        for (const c of curr){
                            result.push([
                                ...a,
                                c
                            ]);
                        }
                    }
                    return result;
                }
            }["CreateProductPage.useMemo[cartesianProduct].f"];
            const optionArrays = classificationsWithOptions.map({
                "CreateProductPage.useMemo[cartesianProduct].optionArrays": (c)=>c.options
            }["CreateProductPage.useMemo[cartesianProduct].optionArrays"]);
            return optionArrays.reduce(f, []);
        }
    }["CreateProductPage.useMemo[cartesianProduct]"], [
        classificationsWithOptions
    ]);
    // Key cho mỗi tổ hợp: "Đỏ|S" để map với variationValues
    const variationRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateProductPage.useMemo[variationRows]": ()=>{
            if (cartesianProduct.length === 0) return [
                null
            ]; // 1 hàng mặc định
            return cartesianProduct.map({
                "CreateProductPage.useMemo[variationRows]": (combo)=>({
                        key: combo.join("|"),
                        labels: combo
                    })
            }["CreateProductPage.useMemo[variationRows]"]);
        }
    }["CreateProductPage.useMemo[variationRows]"], [
        cartesianProduct
    ]);
    // Gom cột phân loại đầu tiên: tính rowSpan cho mỗi nhóm
    const firstColSpanInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateProductPage.useMemo[firstColSpanInfo]": ()=>{
            if (classificationsWithOptions.length === 0 || variationRows.length === 0) return null;
            const firstCls = classificationsWithOptions[0];
            const restSize = classificationsWithOptions.slice(1).reduce({
                "CreateProductPage.useMemo[firstColSpanInfo]": (acc, c)=>acc * c.options.length
            }["CreateProductPage.useMemo[firstColSpanInfo]"], 1) || 1;
            return {
                options: firstCls.options,
                rowSpan: restSize
            };
        }
    }["CreateProductPage.useMemo[firstColSpanInfo]"], [
        classificationsWithOptions,
        variationRows
    ]);
    const handleFirstOptionImageUpload = (option, e)=>{
        const file = e.target.files?.[0];
        if (!file || !file.type.startsWith("image/")) return;
        setFirstOptionImages((prev)=>{
            const old = prev[option];
            if (old?.previewUrl) URL.revokeObjectURL(old.previewUrl);
            return {
                ...prev,
                [option]: {
                    file,
                    previewUrl: URL.createObjectURL(file)
                }
            };
        });
        e.target.value = "";
    };
    const removeFirstOptionImage = (option)=>{
        setFirstOptionImages((prev)=>{
            const old = prev[option];
            if (old?.previewUrl) URL.revokeObjectURL(old.previewUrl);
            const next = {
                ...prev
            };
            delete next[option];
            return next;
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateProductPage.useEffect": ()=>{
            return ({
                "CreateProductPage.useEffect": ()=>{
                    Object.values(firstOptionImagesRef.current).forEach({
                        "CreateProductPage.useEffect": ({ previewUrl })=>URL.revokeObjectURL(previewUrl)
                    }["CreateProductPage.useEffect"]);
                }
            })["CreateProductPage.useEffect"];
        }
    }["CreateProductPage.useEffect"], []);
    const addClassification = ()=>{
        if (classifications.length >= 2) return;
        setClassifications((prev)=>[
                ...prev,
                {
                    id: `cls-${Date.now()}`,
                    name: "",
                    options: []
                }
            ]);
    };
    const removeClassification = (id)=>{
        setClassifications((prev)=>prev.filter((c)=>c.id !== id));
        setOptionDrafts((prev)=>{
            const next = {
                ...prev
            };
            delete next[id];
            return next;
        });
    };
    const updateClassificationName = (id, name)=>{
        setClassifications((prev)=>prev.map((c)=>c.id === id ? {
                    ...c,
                    name
                } : c));
    };
    const addOption = (clsId, option)=>{
        const trimmed = option.trim();
        if (!trimmed) return;
        const cls = classifications.find((c)=>c.id === clsId);
        if (!cls) return;
        if (cls.options.includes(trimmed)) return; // trùng tùy chọn
        setClassifications((prev)=>prev.map((c)=>c.id === clsId ? {
                    ...c,
                    options: [
                        ...c.options,
                        trimmed
                    ]
                } : c));
        setOptionDrafts((prev)=>({
                ...prev,
                [clsId]: ""
            }));
    };
    const removeOption = (clsId, option)=>{
        setClassifications((prev)=>prev.map((c)=>c.id === clsId ? {
                    ...c,
                    options: c.options.filter((o)=>o !== option)
                } : c));
    };
    const updateVariationValue = (key, field, value)=>{
        setVariationValues((prev)=>{
            const cur = prev[key] ?? {
                price: "",
                stock: ""
            };
            return {
                ...prev,
                [key]: {
                    ...cur,
                    [field]: value
                }
            };
        });
    };
    const validateSalesInfo = ()=>{
        const errs = [];
        const names = classifications.map((c)=>c.name.trim()).filter(Boolean);
        if (names.length > 0 && new Set(names).size !== names.length) {
            errs.push("Không được trùng tên phân loại.");
        }
        classifications.forEach((c)=>{
            if (c.options.length !== new Set(c.options).size) {
                errs.push(`Phân loại "${c.name || "Chưa đặt tên"}" có tùy chọn trùng.`);
            }
        });
        let missingPrice = false;
        let missingStock = false;
        let invalidPrice = false;
        let invalidStock = false;
        variationRows.forEach((row)=>{
            const key = row === null ? "__default__" : row.key;
            const v = variationValues[key] ?? {
                price: "",
                stock: ""
            };
            if (!v.price.trim()) missingPrice = true;
            if (!v.stock.trim()) missingStock = true;
            if (v.price.trim() && (Number(v.price) < 0 || isNaN(Number(v.price)))) {
                invalidPrice = true;
            }
            if (v.stock.trim() && (Number(v.stock) < 0 || isNaN(Number(v.stock)))) {
                invalidStock = true;
            }
        });
        if (missingPrice) errs.push("Giá là bắt buộc cho tất cả biến thể.");
        if (missingStock) errs.push("Kho hàng là bắt buộc cho tất cả biến thể.");
        if (invalidPrice) errs.push("Giá phải là số không âm.");
        if (invalidStock) errs.push("Kho hàng phải là số không âm.");
        setSalesInfoErrors(errs);
        return errs.length === 0;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateProductPage.useEffect": ()=>{
            const loadCategoryTree = {
                "CreateProductPage.useEffect.loadCategoryTree": async ()=>{
                    try {
                        setLoadingCategories(true);
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/category/tree");
                        const serverCategories = res.data ?? [];
                        // Mock thêm một ngành hàng 6 cấp để test UI nhiều cột.
                        const deepMock = {
                            id: 999_000,
                            name: "Ngành 6 cấp (mock)",
                            children: [
                                {
                                    id: 999_001,
                                    name: "Cấp 2",
                                    children: [
                                        {
                                            id: 999_002,
                                            name: "Cấp 3",
                                            children: [
                                                {
                                                    id: 999_003,
                                                    name: "Cấp 4",
                                                    children: [
                                                        {
                                                            id: 999_004,
                                                            name: "Cấp 5",
                                                            children: [
                                                                {
                                                                    id: 999_005,
                                                                    name: "Cấp 6 (leaf)"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        };
                        // Mock thêm nhiều ngành hàng cha để test nhiều cột root.
                        const rootMock1 = {
                            id: 999_010,
                            name: "Điện thoại - Laptop (mock)",
                            children: [
                                {
                                    id: 999_011,
                                    name: "Điện thoại",
                                    children: []
                                },
                                {
                                    id: 999_012,
                                    name: "Laptop",
                                    children: []
                                },
                                {
                                    id: 999_013,
                                    name: "Máy tính bảng",
                                    children: []
                                }
                            ]
                        };
                        const rootMock2 = {
                            id: 999_020,
                            name: "Thời trang (mock)",
                            children: [
                                {
                                    id: 999_021,
                                    name: "Nam",
                                    children: []
                                },
                                {
                                    id: 999_022,
                                    name: "Nữ",
                                    children: []
                                },
                                {
                                    id: 999_023,
                                    name: "Trẻ em",
                                    children: []
                                }
                            ]
                        };
                        const rootMock3 = {
                            id: 999_030,
                            name: "Nhà cửa - Đời sống (mock)",
                            children: [
                                {
                                    id: 999_031,
                                    name: "Phòng khách",
                                    children: []
                                },
                                {
                                    id: 999_032,
                                    name: "Phòng ngủ",
                                    children: []
                                },
                                {
                                    id: 999_033,
                                    name: "Nhà bếp",
                                    children: []
                                }
                            ]
                        };
                        const rootMock4 = {
                            id: 999_040,
                            name: "Mẹ & Bé (mock)",
                            children: [
                                {
                                    id: 999_041,
                                    name: "Sữa bột",
                                    children: []
                                },
                                {
                                    id: 999_042,
                                    name: "Tã bỉm",
                                    children: []
                                },
                                {
                                    id: 999_043,
                                    name: "Xe đẩy",
                                    children: []
                                },
                                {
                                    id: 999_044,
                                    name: "Đồ chơi",
                                    children: []
                                }
                            ]
                        };
                        const rootMock5 = {
                            id: 999_050,
                            name: "Sức khỏe - Làm đẹp (mock)",
                            children: [
                                {
                                    id: 999_051,
                                    name: "Mỹ phẩm",
                                    children: []
                                },
                                {
                                    id: 999_052,
                                    name: "Thực phẩm chức năng",
                                    children: []
                                },
                                {
                                    id: 999_053,
                                    name: "Chăm sóc tóc",
                                    children: []
                                },
                                {
                                    id: 999_054,
                                    name: "Chăm sóc da",
                                    children: []
                                }
                            ]
                        };
                        const rootMock6 = {
                            id: 999_060,
                            name: "Điện tử gia dụng (mock)",
                            children: [
                                {
                                    id: 999_061,
                                    name: "Tivi",
                                    children: []
                                },
                                {
                                    id: 999_062,
                                    name: "Tủ lạnh",
                                    children: []
                                },
                                {
                                    id: 999_063,
                                    name: "Máy giặt",
                                    children: []
                                },
                                {
                                    id: 999_064,
                                    name: "Máy lạnh",
                                    children: []
                                }
                            ]
                        };
                        const rootMock7 = {
                            id: 999_070,
                            name: "Thể thao - Dã ngoại (mock)",
                            children: [
                                {
                                    id: 999_071,
                                    name: "Giày thể thao",
                                    children: []
                                },
                                {
                                    id: 999_072,
                                    name: "Dụng cụ tập gym",
                                    children: []
                                },
                                {
                                    id: 999_073,
                                    name: "Camping",
                                    children: []
                                }
                            ]
                        };
                        const rootMock8 = {
                            id: 999_080,
                            name: "Sách - Văn phòng phẩm (mock)",
                            children: [
                                {
                                    id: 999_081,
                                    name: "Sách thiếu nhi",
                                    children: []
                                },
                                {
                                    id: 999_082,
                                    name: "Tiểu thuyết",
                                    children: []
                                },
                                {
                                    id: 999_083,
                                    name: "Bút - Vở",
                                    children: []
                                }
                            ]
                        };
                        const rootMock9 = {
                            id: 999_090,
                            name: "Ô tô - Xe máy (mock)",
                            children: [
                                {
                                    id: 999_091,
                                    name: "Phụ kiện xe máy",
                                    children: []
                                },
                                {
                                    id: 999_092,
                                    name: "Phụ kiện ô tô",
                                    children: []
                                },
                                {
                                    id: 999_093,
                                    name: "Dầu nhớt",
                                    children: []
                                }
                            ]
                        };
                        const rootMock10 = {
                            id: 999_100,
                            name: "Thú cưng (mock)",
                            children: [
                                {
                                    id: 999_101,
                                    name: "Thức ăn chó mèo",
                                    children: []
                                },
                                {
                                    id: 999_102,
                                    name: "Phụ kiện thú cưng",
                                    children: []
                                }
                            ]
                        };
                        const rootMock11 = {
                            id: 999_110,
                            name: "Đồ chơi - Game (mock)",
                            children: [
                                {
                                    id: 999_111,
                                    name: "Đồ chơi trẻ em",
                                    children: []
                                },
                                {
                                    id: 999_112,
                                    name: "Boardgame",
                                    children: []
                                },
                                {
                                    id: 999_113,
                                    name: "Game console",
                                    children: []
                                }
                            ]
                        };
                        const rootMock12 = {
                            id: 999_120,
                            name: "Nhạc cụ (mock)",
                            children: [
                                {
                                    id: 999_121,
                                    name: "Guitar",
                                    children: []
                                },
                                {
                                    id: 999_122,
                                    name: "Piano",
                                    children: []
                                },
                                {
                                    id: 999_123,
                                    name: "Trống",
                                    children: []
                                }
                            ]
                        };
                        setCategories([
                            ...serverCategories,
                            deepMock,
                            rootMock1,
                            rootMock2,
                            rootMock3,
                            rootMock4,
                            rootMock5,
                            rootMock6,
                            rootMock7,
                            rootMock8,
                            rootMock9,
                            rootMock10,
                            rootMock11,
                            rootMock12
                        ]);
                        setCategoryError(null);
                    } catch (error) {
                        console.error("Failed to load category tree", error);
                        setCategoryError("Không tải được cây danh mục. Vui lòng thử lại sau.");
                    } finally{
                        setLoadingCategories(false);
                    }
                }
            }["CreateProductPage.useEffect.loadCategoryTree"];
            loadCategoryTree();
        }
    }["CreateProductPage.useEffect"], []);
    const handleCategoryClick = (levelIndex, node)=>{
        const nextPath = [
            ...categoryPath.slice(0, levelIndex),
            node
        ];
        setCategoryPath(nextPath);
        if (!node.children || node.children.length === 0) {
            setSelectedLeaf(node);
        } else {
            setSelectedLeaf(null);
        }
    };
    const handleCloseCategoryPopup = ()=>{
        setIsCategoryOpen(false);
    };
    const handleOpenCategoryPopup = ()=>{
        setIsCategoryOpen(true);
    };
    const handleSubmitCategorySelection = async ()=>{
        if (!selectedLeaf) return;
        setIsCategoryOpen(false);
        try {
            setLoadingAttributes(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/category/${selectedLeaf.id}/attributes`);
            setAttributes(res.data ?? []);
            setAttributesError(null);
        } catch (error) {
            console.error("Failed to load category attributes", error);
            setAttributes([]);
            setAttributesError("Không tải được thuộc tính cho ngành hàng đã chọn. Vui lòng thử lại sau.");
        } finally{
            setLoadingAttributes(false);
        }
    };
    const buildCategoryColumns = ()=>{
        const cols = [];
        if (categories.length > 0) {
            cols.push(categories);
        }
        categoryPath.forEach((node)=>{
            if (node.children && node.children.length > 0) {
                cols.push(node.children);
            }
        });
        return cols;
    };
    const selectedPathLabel = selectedLeaf && categoryPath.length > 0 ? categoryPath.map((n)=>n.name).join(" / ") : "";
    const [submitLoading, setSubmitLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateSalesInfo()) return;
        const form = e.currentTarget;
        const productName = form.elements.namedItem("productName")?.value?.trim();
        const productDescription = form.elements.namedItem("productDescription")?.value?.trim() ?? "";
        if (!productName) {
            setSubmitError("Vui lòng nhập tên sản phẩm.");
            return;
        }
        if (!selectedLeaf) {
            setSubmitError("Vui lòng chọn ngành hàng.");
            return;
        }
        if (productImages.length === 0) {
            setSubmitError("Vui lòng thêm ít nhất 1 ảnh sản phẩm.");
            return;
        }
        setSubmitError(null);
        setSubmitLoading(true);
        try {
            const shopId = 1; // TODO: lấy từ context/auth khi có
            const ts = Date.now();
            const productImageNames = productImages.map((item, i)=>{
                const ext = item.file.name.split(".").pop() || "jpg";
                return `p${i + 1}_${ts}_${i}.${ext}`;
            });
            const images = productImageNames.map((name, i)=>({
                    name,
                    sort: i + 1
                }));
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
                productId: null,
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
                filesToRename.push({
                    file: item.file,
                    newName: productImageNames[i]
                });
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
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/product/create", formData);
            alert("Tạo sản phẩm thành công!");
            form.reset();
            setProductImages([]);
            setVariationValues({});
            setAttributeSelections({});
            setClassifications([]);
            setFirstOptionImages({});
        } catch (err) {
            const msg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(err) && err.response?.data ? String(err.response.data) : err instanceof Error ? err.message : "Không thể tạo sản phẩm. Vui lòng thử lại.";
            setSubmitError(msg);
        } finally{
            setSubmitLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto flex min-h-screen flex-col gap-4 px-4 py-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-semibold tracking-tight text-[var(--foreground)]",
                        children: "Thêm sản phẩm mới"
                    }, void 0, false, {
                        fileName: "[project]/src/app/product/create/page.tsx",
                        lineNumber: 737,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-[var(--muted-foreground)]",
                        children: "Form demo tham khảo từ server/catalog. Sau này sẽ gắn với API thật."
                    }, void 0, false, {
                        fileName: "[project]/src/app/product/create/page.tsx",
                        lineNumber: 740,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/product/create/page.tsx",
                lineNumber: 736,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "rounded-xl border border-[var(--border)] bg-white p-4 shadow-sm sm:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "space-y-5",
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)] mb-2",
                                                children: "Ảnh sản phẩm"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                lineNumber: 750,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-[var(--muted-foreground)]",
                                                children: [
                                                    "Đã upload ",
                                                    productImages.length,
                                                    "/",
                                                    MAX_PRODUCT_IMAGES,
                                                    " ảnh."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                lineNumber: 753,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 749,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            productImages.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    draggable: true,
                                                    onDragStart: ()=>setProductImagesDragIndex(index),
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
                                                            reorderProductImages(productImagesDragIndex, index);
                                                        }
                                                    },
                                                    onDragEnd: ()=>setProductImagesDragIndex(null),
                                                    className: `group relative aspect-square w-20 flex-shrink-0 cursor-grab overflow-hidden rounded-lg border border-[var(--border)] bg-white shadow-sm transition-all active:cursor-grabbing sm:w-24 ${productImagesDragIndex === index ? "opacity-60" : ""}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: item.previewUrl,
                                                            alt: `Ảnh ${index + 1}`,
                                                            className: "h-full w-full object-cover",
                                                            draggable: false
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/product/create/page.tsx",
                                                            lineNumber: 784,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute left-1 top-1 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white",
                                                            children: index + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/product/create/page.tsx",
                                                            lineNumber: 790,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>removeProductImage(index),
                                                            className: "absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-red-600",
                                                            "aria-label": `Xóa ảnh ${index + 1}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                className: "size-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                                lineNumber: 799,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/product/create/page.tsx",
                                                            lineNumber: 793,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, item.previewUrl, true, {
                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                    lineNumber: 761,
                                                    columnNumber: 17
                                                }, this)),
                                            productImages.length < MAX_PRODUCT_IMAGES && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex aspect-square w-20 flex-shrink-0 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-[var(--border)] bg-white transition-colors hover:border-[var(--primary)]/50 hover:bg-[var(--muted)]/10 sm:w-24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__["ImagePlus"], {
                                                        className: "size-6 text-[var(--muted-foreground)] sm:size-8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                        lineNumber: 805,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-[var(--muted-foreground)]",
                                                        children: "Thêm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                        lineNumber: 806,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        accept: "image/*",
                                                        multiple: true,
                                                        className: "hidden",
                                                        onChange: handleProductImageUpload
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                        lineNumber: 807,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                lineNumber: 804,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 759,
                                        columnNumber: 13
                                    }, this),
                                    productImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)] mt-3",
                                                children: "Thumbnail"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                lineNumber: 821,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-block overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: productImages[0].previewUrl,
                                                    alt: "Thumbnail",
                                                    className: "h-20 w-20 object-cover sm:h-24 sm:w-24"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                    lineNumber: 825,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                lineNumber: 824,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 820,
                                        columnNumber: 15
                                    }, this),
                                    productImagesError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-red-600",
                                        children: productImagesError
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 834,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/product/create/page.tsx",
                                lineNumber: 748,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]",
                                        children: "Tên sản phẩm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 840,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "productName",
                                        type: "text",
                                        className: "w-full rounded-md border border-[var(--input)] px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]",
                                        placeholder: "VD: Áo thun Zara form rộng",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 843,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/product/create/page.tsx",
                                lineNumber: 839,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]",
                                        children: "Ngành hàng"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 854,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleOpenCategoryPopup,
                                        className: "flex w-full items-center justify-between rounded-md border border-[var(--input)] bg-white px-3 py-2 text-sm shadow-sm transition hover:bg-[var(--muted)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                    className: "size-4 text-[var(--muted-foreground)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                    lineNumber: 863,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: selectedLeaf ? "truncate text-[var(--foreground)]" : "truncate text-[var(--muted-foreground)]",
                                                    children: selectedLeaf ? selectedPathLabel : "Chọn ngành hàng"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                    lineNumber: 864,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/product/create/page.tsx",
                                            lineNumber: 862,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 857,
                                        columnNumber: 13
                                    }, this),
                                    loadingCategories && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[10px] text-[var(--muted-foreground)]",
                                        children: "Đang tải cây ngành hàng..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 876,
                                        columnNumber: 15
                                    }, this),
                                    !loadingCategories && categoryError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[10px] text-red-600",
                                        children: categoryError
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 881,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/product/create/page.tsx",
                                lineNumber: 853,
                                columnNumber: 11
                            }, this),
                            loadingAttributes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[var(--muted-foreground)]",
                                children: "Đang tải thuộc tính ngành hàng..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/product/create/page.tsx",
                                lineNumber: 887,
                                columnNumber: 13
                            }, this),
                            !loadingAttributes && attributesError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-red-600",
                                children: attributesError
                            }, void 0, false, {
                                fileName: "[project]/src/app/product/create/page.tsx",
                                lineNumber: 892,
                                columnNumber: 13
                            }, this),
                            !loadingAttributes && !attributesError && attributes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "space-y-3 rounded-lg border border-[var(--border)] bg-[var(--muted)]/20 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-sm font-semibold text-[var(--foreground)]",
                                        children: "Thuộc tính ngành hàng"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 896,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-3 md:grid-cols-2",
                                        children: attributes.map((attr)=>{
                                            const selectedIds = attributeSelections[attr.id] ?? [];
                                            const selectedLabels = attr.values && attr.values.length > 0 && selectedIds.length ? attr.values.filter((v)=>selectedIds.includes(v.id)).map((v)=>v.value).join(", ") : "";
                                            const isDropdownOpen = openAttributeId === attr.id;
                                            const handleToggleDropdown = ()=>{
                                                if (!attr.values || attr.values.length === 0) return;
                                                setOpenAttributeId((prev)=>prev === attr.id ? null : attr.id);
                                            };
                                            const handleSelectValue = (valueId)=>{
                                                setAttributeSelections((prev)=>{
                                                    const current = prev[attr.id] ?? [];
                                                    if (attr.isMultipleAllow) {
                                                        const exists = current.includes(valueId);
                                                        const next = exists ? current.filter((id)=>id !== valueId) : [
                                                            ...current,
                                                            valueId
                                                        ];
                                                        return {
                                                            ...prev,
                                                            [attr.id]: next
                                                        };
                                                    }
                                                    // single select
                                                    return {
                                                        ...prev,
                                                        [attr.id]: [
                                                            valueId
                                                        ]
                                                    };
                                                });
                                                if (!attr.isMultipleAllow) {
                                                    setOpenAttributeId(null);
                                                }
                                            };
                                            const handleClearSelection = ()=>{
                                                setAttributeSelections((prev)=>({
                                                        ...prev,
                                                        [attr.id]: []
                                                    }));
                                                setOpenAttributeId(null);
                                            };
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]",
                                                        children: [
                                                            attr.name,
                                                            attr.isRequired && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-600",
                                                                children: " *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                                lineNumber: 947,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                        lineNumber: 944,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        readOnly: !!(attr.values && attr.values.length > 0),
                                                                        className: "w-full rounded-md border border-[var(--input)] px-3 py-2 text-sm shadow-sm transition-colors duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[var(--ring)] hover:border-[var(--primary)]/60 hover:bg-[var(--muted)]/40 cursor-pointer",
                                                                        placeholder: attr.values && attr.values.length > 0 ? "Chọn giá trị" : "Nhập giá trị thuộc tính",
                                                                        value: attr.values && attr.values.length > 0 ? selectedLabels : "",
                                                                        onClick: handleToggleDropdown,
                                                                        onChange: ()=>{}
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                                        lineNumber: 953,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    attr.values && attr.values.length > 0 && selectedIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: handleClearSelection,
                                                                        className: "absolute right-2 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full text-sm text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)] cursor-pointer",
                                                                        "aria-label": `Xóa chọn ${attr.name}`,
                                                                        children: "×"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                                        lineNumber: 973,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                                lineNumber: 952,
                                                                columnNumber: 25
                                                            }, this),
                                                            isDropdownOpen && attr.values && attr.values.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1 max-h-48 w-full overflow-y-auto rounded-md border border-[var(--border)] bg-white text-xs shadow-lg transition-opacity duration-150 ease-out",
                                                                children: [
                                                                    attr.values.map((v)=>{
                                                                        const active = selectedIds.includes(v.id);
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>handleSelectValue(v.id),
                                                                            className: `flex w-full items-center justify-between px-3 py-1.5 text-left transition-colors duration-150 ease-out cursor-pointer ${active ? "bg-[var(--primary)]/10 text-[var(--primary)]" : "text-[var(--foreground)] hover:bg-[var(--muted)]/60"}`,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "truncate",
                                                                                children: v.value
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                                                lineNumber: 998,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, v.id, false, {
                                                                            fileName: "[project]/src/app/product/create/page.tsx",
                                                                            lineNumber: 988,
                                                                            columnNumber: 33
                                                                        }, this);
                                                                    }),
                                                                    attr.isCustomAllow && attr.isMultipleAllow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-1 border-t border-[var(--border)] bg-[var(--muted)]/20 px-2 py-2",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    className: "flex-1 rounded-md border border-[var(--input)] px-2 py-1 text-[11px] shadow-sm focus:outline-none focus:ring-1 focus:ring-[var(--ring)]",
                                                                                    placeholder: "Nhập custom value",
                                                                                    value: attributeCustomDrafts[attr.id] ?? "",
                                                                                    onChange: (e)=>setAttributeCustomDrafts((prev)=>({
                                                                                                ...prev,
                                                                                                [attr.id]: e.target.value
                                                                                            }))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                                                    lineNumber: 1005,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    className: "rounded-full bg-[var(--primary)] px-2 py-1 text-[11px] font-semibold text-white shadow-sm hover:bg-[var(--primary)]/90 cursor-pointer",
                                                                                    onClick: ()=>{
                                                                                        const draft = (attributeCustomDrafts[attr.id] ?? "").trim();
                                                                                        if (!draft) return;
                                                                                        const tempId = -Date.now();
                                                                                        const newVal = {
                                                                                            id: tempId,
                                                                                            value: draft
                                                                                        };
                                                                                        setAttributes((prev)=>prev.map((a)=>a.id === attr.id ? {
                                                                                                    ...a,
                                                                                                    values: [
                                                                                                        ...a.values ?? [],
                                                                                                        newVal
                                                                                                    ]
                                                                                                } : a));
                                                                                        setAttributeSelections((prev)=>{
                                                                                            const current = prev[attr.id] ?? [];
                                                                                            return {
                                                                                                ...prev,
                                                                                                [attr.id]: [
                                                                                                    ...current,
                                                                                                    tempId
                                                                                                ]
                                                                                            };
                                                                                        });
                                                                                        setAttributeCustomDrafts((prev)=>({
                                                                                                ...prev,
                                                                                                [attr.id]: ""
                                                                                            }));
                                                                                    },
                                                                                    children: "Thêm"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                                                    lineNumber: 1017,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/product/create/page.tsx",
                                                                            lineNumber: 1004,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                                        lineNumber: 1003,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                                lineNumber: 984,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                        lineNumber: 951,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, attr.id, true, {
                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                lineNumber: 943,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 899,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/product/create/page.tsx",
                                lineNumber: 895,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]",
                                        children: "Mô tả"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 1068,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        name: "productDescription",
                                        className: "min-h-[100px] w-full rounded-md border border-[var(--input)] px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]",
                                        placeholder: "Mô tả chi tiết sản phẩm..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 1071,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/product/create/page.tsx",
                                lineNumber: 1067,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "space-y-5 rounded-xl border border-[var(--border)] bg-gradient-to-b from-[var(--muted)]/5 to-transparent p-5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-base font-semibold text-[var(--foreground)]",
                                                children: "Thông tin bán hàng"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                lineNumber: 1081,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-[var(--muted-foreground)]",
                                                children: "Thêm tối đa 2 nhóm phân loại (VD: Màu sắc, Kích thước). Mỗi tổ hợp sẽ có Giá và Kho hàng riêng."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                lineNumber: 1084,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 1080,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            classifications.map((cls)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-xl border border-[var(--border)] bg-white p-4 shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-3 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    className: "flex-1 rounded-lg border border-[var(--input)] px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30",
                                                                    placeholder: "Tên phân loại (VD: Màu sắc)",
                                                                    value: cls.name,
                                                                    onChange: (e)=>updateClassificationName(cls.id, e.target.value)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                                    lineNumber: 1098,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>removeClassification(cls.id),
                                                                    className: "rounded-full p-1.5 text-[var(--muted-foreground)] hover:bg-red-100 hover:text-red-600",
                                                                    "aria-label": "Xóa phân loại",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                        className: "size-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                                        lineNumber: 1113,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                                    lineNumber: 1107,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/product/create/page.tsx",
                                                            lineNumber: 1097,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-1.5",
                                                            children: [
                                                                cls.options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-flex items-center gap-1 rounded-full bg-[var(--primary)]/10 px-2.5 py-1 text-xs font-medium text-[var(--primary)]",
                                                                        children: [
                                                                            opt,
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>removeOption(cls.id, opt),
                                                                                className: "rounded-full hover:bg-[var(--primary)]/20",
                                                                                "aria-label": `Xóa ${opt}`,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                    className: "size-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                                                    lineNumber: 1129,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                                                lineNumber: 1123,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, opt, true, {
                                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                                        lineNumber: 1118,
                                                                        columnNumber: 23
                                                                    }, this)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inline-flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            className: "w-24 rounded-lg border border-[var(--input)] px-2.5 py-1.5 text-xs shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30",
                                                                            placeholder: "Thêm tùy chọn",
                                                                            value: optionDrafts[cls.id] ?? "",
                                                                            onChange: (e)=>setOptionDrafts((prev)=>({
                                                                                        ...prev,
                                                                                        [cls.id]: e.target.value
                                                                                    })),
                                                                            onKeyDown: (e)=>{
                                                                                if (e.key === "Enter") {
                                                                                    e.preventDefault();
                                                                                    addOption(cls.id, (optionDrafts[cls.id] ?? "").trim());
                                                                                }
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/product/create/page.tsx",
                                                                            lineNumber: 1134,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>addOption(cls.id, (optionDrafts[cls.id] ?? "").trim()),
                                                                            className: "rounded-lg bg-[var(--primary)] px-2.5 py-1.5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-[var(--primary)]/90",
                                                                            children: "Thêm"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/product/create/page.tsx",
                                                                            lineNumber: 1152,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                                    lineNumber: 1133,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/product/create/page.tsx",
                                                            lineNumber: 1116,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, cls.id, true, {
                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                    lineNumber: 1093,
                                                    columnNumber: 17
                                                }, this)),
                                            classifications.length < 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: addClassification,
                                                className: "flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[var(--border)] bg-white px-4 py-3 text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:border-[var(--primary)]/60 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "size-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                        lineNumber: 1171,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Thêm phân loại hàng"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                lineNumber: 1166,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 1091,
                                        columnNumber: 13
                                    }, this),
                                    classificationsWithOptions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 rounded-xl border border-[var(--border)] bg-white p-4 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]",
                                                        children: [
                                                            "Giá ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                                lineNumber: 1182,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                        lineNumber: 1181,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: 0,
                                                        step: 1000,
                                                        className: "w-full rounded-lg border border-[var(--input)] bg-white px-3 py-2.5 text-sm shadow-sm transition-colors placeholder:text-[var(--muted-foreground)]/70 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20",
                                                        placeholder: "VD: 100000",
                                                        value: variationValues["__default__"]?.price ?? "",
                                                        onChange: (e)=>updateVariationValue("__default__", "price", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                        lineNumber: 1184,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                lineNumber: 1180,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]",
                                                        children: [
                                                            "Kho hàng ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                                lineNumber: 1198,
                                                                columnNumber: 30
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                        lineNumber: 1197,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: 0,
                                                        className: "w-full rounded-lg border border-[var(--input)] bg-white px-3 py-2.5 text-sm shadow-sm transition-colors placeholder:text-[var(--muted-foreground)]/70 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20",
                                                        placeholder: "VD: 10",
                                                        value: variationValues["__default__"]?.stock ?? "",
                                                        onChange: (e)=>updateVariationValue("__default__", "stock", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                        lineNumber: 1200,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                lineNumber: 1196,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 1179,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto rounded-xl border border-[var(--border)] bg-white shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full min-w-[360px] text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-b border-[var(--border)] bg-[var(--muted)]/30",
                                                        children: [
                                                            classificationsWithOptions.map((cls)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]",
                                                                    children: cls.name || "Phân loại"
                                                                }, cls.id, false, {
                                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                                    lineNumber: 1218,
                                                                    columnNumber: 23
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]",
                                                                children: [
                                                                    "Giá ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                                        lineNumber: 1226,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                                lineNumber: 1225,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]",
                                                                children: [
                                                                    "Kho hàng ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                                        lineNumber: 1229,
                                                                        columnNumber: 32
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                                lineNumber: 1228,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                        lineNumber: 1216,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                    lineNumber: 1215,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: variationRows.map((row, idx)=>{
                                                        const key = row === null ? "__default__" : row.key;
                                                        const v = variationValues[key] ?? {
                                                            price: "",
                                                            stock: ""
                                                        };
                                                        const isFirstRowOfGroup = firstColSpanInfo && row !== null && idx % firstColSpanInfo.rowSpan === 0;
                                                        const firstOption = firstColSpanInfo && row !== null && firstColSpanInfo.options[Math.floor(idx / firstColSpanInfo.rowSpan)];
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-b border-[var(--border)]/50 last:border-b-0 transition-colors hover:bg-[var(--muted)]/20",
                                                            children: [
                                                                classificationsWithOptions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        firstColSpanInfo && isFirstRowOfGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            rowSpan: firstColSpanInfo.rowSpan,
                                                                            className: "align-top px-4 py-3",
                                                                            children: firstOption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex flex-col gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-medium",
                                                                                        children: firstOption
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                                                        lineNumber: 1264,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col gap-1",
                                                                                        children: firstOptionImages[firstOption] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "relative inline-flex w-fit",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                    src: firstOptionImages[firstOption].previewUrl,
                                                                                                    alt: firstOption,
                                                                                                    className: "h-14 w-14 rounded-lg border border-[var(--border)] object-cover shadow-sm"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                                                                    lineNumber: 1270,
                                                                                                    columnNumber: 43
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                    type: "button",
                                                                                                    onClick: ()=>removeFirstOptionImage(firstOption),
                                                                                                    className: "absolute -right-1 -top-1 rounded-full bg-red-500 p-0.5 text-white hover:bg-red-600 transition-colors",
                                                                                                    "aria-label": `Xóa ảnh ${firstOption}`,
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                                        className: "size-3"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                                                                        lineNumber: 1286,
                                                                                                        columnNumber: 45
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                                                                    lineNumber: 1278,
                                                                                                    columnNumber: 43
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/product/create/page.tsx",
                                                                                            lineNumber: 1269,
                                                                                            columnNumber: 41
                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-dashed border-[var(--border)] bg-[var(--muted)]/30 px-2.5 py-2 text-xs text-[var(--muted-foreground)] hover:border-[var(--primary)]/50 hover:bg-[var(--muted)]/50 transition-colors",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__["ImagePlus"], {
                                                                                                    className: "size-4"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                                                                    lineNumber: 1291,
                                                                                                    columnNumber: 43
                                                                                                }, this),
                                                                                                "Thêm ảnh",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                    type: "file",
                                                                                                    accept: "image/*",
                                                                                                    className: "hidden",
                                                                                                    onChange: (e)=>handleFirstOptionImageUpload(firstOption, e)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                                                                    lineNumber: 1293,
                                                                                                    columnNumber: 43
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/product/create/page.tsx",
                                                                                            lineNumber: 1290,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                                                        lineNumber: 1267,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                                                lineNumber: 1263,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/product/create/page.tsx",
                                                                            lineNumber: 1258,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        classificationsWithOptions.slice(1).map((cls, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-4 py-3",
                                                                                children: row && row.labels[i + 1]
                                                                            }, cls.id, false, {
                                                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                                                lineNumber: 1314,
                                                                                columnNumber: 33
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        min: 0,
                                                                        step: 1000,
                                                                        className: "w-full max-w-[140px] rounded-lg border border-[var(--input)] bg-white px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-[var(--muted-foreground)]/70 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20",
                                                                        placeholder: "VD: 100000",
                                                                        value: v.price,
                                                                        onChange: (e)=>updateVariationValue(key, "price", e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                                        lineNumber: 1321,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                                    lineNumber: 1320,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        min: 0,
                                                                        className: "w-full max-w-[100px] rounded-lg border border-[var(--input)] bg-white px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-[var(--muted-foreground)]/70 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20",
                                                                        placeholder: "VD: 10",
                                                                        value: v.stock,
                                                                        onChange: (e)=>updateVariationValue(key, "stock", e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                                        lineNumber: 1334,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                                    lineNumber: 1333,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, key, true, {
                                                            fileName: "[project]/src/app/product/create/page.tsx",
                                                            lineNumber: 1251,
                                                            columnNumber: 23
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                    lineNumber: 1233,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/product/create/page.tsx",
                                            lineNumber: 1214,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 1213,
                                        columnNumber: 13
                                    }, this),
                                    salesInfoErrors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-red-200 bg-red-50/80 p-3 text-xs text-red-700",
                                        children: salesInfoErrors.map((err, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "leading-relaxed",
                                                children: err
                                            }, i, false, {
                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                lineNumber: 1355,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 1353,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/product/create/page.tsx",
                                lineNumber: 1079,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 pt-2",
                                children: [
                                    submitError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-600",
                                        children: submitError
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 1363,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: submitLoading,
                                        className: "inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--primary)]/90 disabled:cursor-not-allowed disabled:opacity-70",
                                        children: submitLoading ? "Đang lưu..." : "Lưu sản phẩm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 1365,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/product/create/page.tsx",
                                lineNumber: 1361,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/product/create/page.tsx",
                        lineNumber: 746,
                        columnNumber: 9
                    }, this),
                    isCategoryOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-40 flex items-center justify-center bg-black/30 px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-[440px] w-full max-w-2xl flex-col rounded-xl bg-white p-4 shadow-xl sm:p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-shrink-0 items-center justify-between gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-semibold text-[var(--foreground)]",
                                                    children: "Chọn ngành hàng"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                    lineNumber: 1379,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-[13px] text-[var(--muted-foreground)]",
                                                    children: "Chọn lần lượt từ danh mục cha đến khi tới ngành hàng chi tiết (leaf)."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                    lineNumber: 1382,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/product/create/page.tsx",
                                            lineNumber: 1378,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleCloseCategoryPopup,
                                            className: "rounded-full border border-[var(--border)] bg-white px-3 py-1 text-xs font-medium text-[var(--muted-foreground)] hover:bg-[var(--muted)]",
                                            children: "Đóng"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/product/create/page.tsx",
                                            lineNumber: 1387,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/product/create/page.tsx",
                                    lineNumber: 1377,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex-1 overflow-hidden",
                                    children: loadingCategories ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[var(--muted-foreground)]",
                                        children: "Đang tải cây ngành hàng..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 1398,
                                        columnNumber: 19
                                    }, this) : categoryError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-600",
                                        children: categoryError
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 1402,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full w-full max-w-full gap-3 overflow-x-auto",
                                        children: buildCategoryColumns().map((col, levelIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex min-w-[170px] max-w-[190px] flex-col rounded-lg border border-[var(--border)] bg-[var(--muted)]/20 p-2 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]",
                                                        children: levelIndex === 0 ? "Ngành hàng cha" : `Cấp ${levelIndex + 1}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                        lineNumber: 1410,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-h-0 h-[320px] space-y-1 overflow-y-auto pr-1",
                                                        children: [
                                                            col.map((node)=>{
                                                                const isActive = categoryPath[levelIndex]?.id === node.id;
                                                                const isLeaf = !node.children || node.children.length === 0;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleCategoryClick(levelIndex, node),
                                                                    className: `flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left transition-colors ${isActive ? "bg-[var(--primary)]/10 text-[var(--primary)]" : "text-[var(--foreground)] hover:bg-[var(--muted)]"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: levelIndex === 0 ? "truncate font-semibold" : "truncate",
                                                                            children: node.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/product/create/page.tsx",
                                                                            lineNumber: 1434,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        isLeaf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "ml-1 text-[10px] text-[var(--muted-foreground)]",
                                                                            children: "leaf"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/product/create/page.tsx",
                                                                            lineNumber: 1444,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, node.id, true, {
                                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                                    lineNumber: 1422,
                                                                    columnNumber: 31
                                                                }, this);
                                                            }),
                                                            col.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "px-1 py-1 text-[10px] text-[var(--muted-foreground)]",
                                                                children: "Không có dữ liệu."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                                lineNumber: 1452,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/product/create/page.tsx",
                                                        lineNumber: 1415,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, levelIndex, true, {
                                                fileName: "[project]/src/app/product/create/page.tsx",
                                                lineNumber: 1406,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/product/create/page.tsx",
                                        lineNumber: 1404,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/product/create/page.tsx",
                                    lineNumber: 1396,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex flex-shrink-0 items-center justify-between gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "truncate text-[11px] text-[var(--muted-foreground)]",
                                            children: selectedLeaf ? `Đã chọn: ${selectedPathLabel}` : "Chưa chọn ngành hàng."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/product/create/page.tsx",
                                            lineNumber: 1464,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleCloseCategoryPopup,
                                                    className: "rounded-full border border-[var(--border)] bg-white px-4 py-1.5 text-xs font-medium text-[var(--muted-foreground)] hover:bg-[var(--muted)]",
                                                    children: "Hủy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                    lineNumber: 1470,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    disabled: !selectedLeaf,
                                                    onClick: handleSubmitCategorySelection,
                                                    className: "rounded-full bg-[var(--primary)] px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition enabled:hover:bg-[var(--primary)]/90 disabled:cursor-not-allowed disabled:bg-[var(--muted)] disabled:text-[var(--muted-foreground)]",
                                                    children: "Chọn ngành hàng"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/product/create/page.tsx",
                                                    lineNumber: 1477,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/product/create/page.tsx",
                                            lineNumber: 1469,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/product/create/page.tsx",
                                    lineNumber: 1463,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/product/create/page.tsx",
                            lineNumber: 1376,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/product/create/page.tsx",
                        lineNumber: 1375,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/product/create/page.tsx",
                lineNumber: 745,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/product/create/page.tsx",
        lineNumber: 735,
        columnNumber: 5
    }, this);
}
_s(CreateProductPage, "/Zpee9fpn2+0DipH5IR4AyxRcz8=");
_c = CreateProductPage;
var _c;
__turbopack_context__.k.register(_c, "CreateProductPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_product_create_page_tsx_36f8bad3._.js.map