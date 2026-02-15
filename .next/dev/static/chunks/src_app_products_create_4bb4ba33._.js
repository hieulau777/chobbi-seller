(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/products/create/utils/buildCategoryColumns.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildCategoryColumns",
    ()=>buildCategoryColumns
]);
function buildCategoryColumns(categories, categoryPath) {
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
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/products/create/utils/mockCategoryTree.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMockCategoryRoots",
    ()=>getMockCategoryRoots
]);
function getMockCategoryRoots() {
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
    const rootMocks = [
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        }
    ];
    return [
        deepMock,
        ...rootMocks
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/products/create/hooks/useCategoryTree.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCategoryTree",
    ()=>useCategoryTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$utils$2f$buildCategoryColumns$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/create/utils/buildCategoryColumns.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$utils$2f$mockCategoryTree$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/create/utils/mockCategoryTree.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useCategoryTree() {
    _s();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingCategories, setLoadingCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [categoryError, setCategoryError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCategoryOpen, setIsCategoryOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [categoryPath, setCategoryPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedLeaf, setSelectedLeaf] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCategoryTree.useEffect": ()=>{
            const loadCategoryTree = {
                "useCategoryTree.useEffect.loadCategoryTree": async ()=>{
                    try {
                        setLoadingCategories(true);
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/category/tree");
                        const serverCategories = res.data ?? [];
                        const mocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$utils$2f$mockCategoryTree$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMockCategoryRoots"])();
                        setCategories([
                            ...serverCategories,
                            ...mocks
                        ]);
                        setCategoryError(null);
                    } catch (error) {
                        console.error("Failed to load category tree", error);
                        setCategoryError("Không tải được cây danh mục. Vui lòng thử lại sau.");
                    } finally{
                        setLoadingCategories(false);
                    }
                }
            }["useCategoryTree.useEffect.loadCategoryTree"];
            loadCategoryTree();
        }
    }["useCategoryTree.useEffect"], []);
    const categoryColumns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCategoryTree.useMemo[categoryColumns]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$utils$2f$buildCategoryColumns$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCategoryColumns"])(categories, categoryPath)
    }["useCategoryTree.useMemo[categoryColumns]"], [
        categories,
        categoryPath
    ]);
    const selectedPathLabel = selectedLeaf && categoryPath.length > 0 ? categoryPath.map((n)=>n.name).join(" / ") : "";
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
    const openCategoryPopup = ()=>setIsCategoryOpen(true);
    const closeCategoryPopup = ()=>setIsCategoryOpen(false);
    return {
        categories,
        loadingCategories,
        categoryError,
        isCategoryOpen,
        categoryPath,
        selectedLeaf,
        categoryColumns,
        selectedPathLabel,
        handleCategoryClick,
        openCategoryPopup,
        closeCategoryPopup
    };
}
_s(useCategoryTree, "rTAR89K7h6jDw0yu1rxt3xWO9og=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/products/create/hooks/useAttributes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAttributes",
    ()=>useAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useAttributes() {
    _s();
    const [attributes, setAttributes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingAttributes, setLoadingAttributes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [attributesError, setAttributesError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openAttributeId, setOpenAttributeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [attributeSelections, setAttributeSelections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [attributeCustomDrafts, setAttributeCustomDrafts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const loadAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAttributes.useCallback[loadAttributes]": async (categoryId)=>{
            try {
                setLoadingAttributes(true);
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/category/${categoryId}/attributes`);
                setAttributes(res.data ?? []);
                setAttributesError(null);
            } catch (error) {
                console.error("Failed to load category attributes", error);
                setAttributes([]);
                setAttributesError("Không tải được thuộc tính cho ngành hàng đã chọn. Vui lòng thử lại sau.");
            } finally{
                setLoadingAttributes(false);
            }
        }
    }["useAttributes.useCallback[loadAttributes]"], []);
    const addCustomAttributeValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAttributes.useCallback[addCustomAttributeValue]": (attrId, draft, tempId)=>{
            const newVal = {
                id: tempId,
                value: draft
            };
            setAttributes({
                "useAttributes.useCallback[addCustomAttributeValue]": (prev)=>prev.map({
                        "useAttributes.useCallback[addCustomAttributeValue]": (a)=>a.id === attrId ? {
                                ...a,
                                values: [
                                    ...a.values ?? [],
                                    newVal
                                ]
                            } : a
                    }["useAttributes.useCallback[addCustomAttributeValue]"])
            }["useAttributes.useCallback[addCustomAttributeValue]"]);
            setAttributeSelections({
                "useAttributes.useCallback[addCustomAttributeValue]": (prev)=>{
                    const current = prev[attrId] ?? [];
                    return {
                        ...prev,
                        [attrId]: [
                            ...current,
                            tempId
                        ]
                    };
                }
            }["useAttributes.useCallback[addCustomAttributeValue]"]);
            setAttributeCustomDrafts({
                "useAttributes.useCallback[addCustomAttributeValue]": (prev)=>({
                        ...prev,
                        [attrId]: ""
                    })
            }["useAttributes.useCallback[addCustomAttributeValue]"]);
        }
    }["useAttributes.useCallback[addCustomAttributeValue]"], []);
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
_s(useAttributes, "TMp2YJin7C6oFrdTjktPAJzTHOA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/products/create/utils/generateCartesianProduct.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Cartesian product: [[a,b],[c,d]] -> [[a,c],[a,d],[b,c],[b,d]]
 */ __turbopack_context__.s([
    "generateCartesianProduct",
    ()=>generateCartesianProduct
]);
function generateCartesianProduct(optionArrays) {
    const f = (acc, curr)=>{
        if (curr.length === 0) return acc;
        if (acc.length === 0) return curr.map((x)=>[
                x
            ]);
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
    };
    return optionArrays.reduce(f, []);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/products/create/utils/validateSalesInfo.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateSalesInfo",
    ()=>validateSalesInfo
]);
function validateSalesInfo(classifications, variationRows, variationValues) {
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
    return {
        valid: errs.length === 0,
        errors: errs
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/products/create/hooks/useSalesInfo.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSalesInfo",
    ()=>useSalesInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$utils$2f$generateCartesianProduct$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/create/utils/generateCartesianProduct.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$utils$2f$validateSalesInfo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/create/utils/validateSalesInfo.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function useSalesInfo() {
    _s();
    const [classifications, setClassifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [variationValues, setVariationValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [optionDrafts, setOptionDrafts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [salesInfoErrors, setSalesInfoErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [firstOptionImages, setFirstOptionImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const firstOptionImagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(firstOptionImages);
    firstOptionImagesRef.current = firstOptionImages;
    const classificationsWithOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSalesInfo.useMemo[classificationsWithOptions]": ()=>classifications.filter({
                "useSalesInfo.useMemo[classificationsWithOptions]": (c)=>c.options.length > 0
            }["useSalesInfo.useMemo[classificationsWithOptions]"])
    }["useSalesInfo.useMemo[classificationsWithOptions]"], [
        classifications
    ]);
    const cartesianProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSalesInfo.useMemo[cartesianProduct]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$utils$2f$generateCartesianProduct$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateCartesianProduct"])(classificationsWithOptions.map({
                "useSalesInfo.useMemo[cartesianProduct]": (c)=>c.options
            }["useSalesInfo.useMemo[cartesianProduct]"]))
    }["useSalesInfo.useMemo[cartesianProduct]"], [
        classificationsWithOptions
    ]);
    const variationRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSalesInfo.useMemo[variationRows]": ()=>{
            if (cartesianProduct.length === 0) return [
                null
            ];
            return cartesianProduct.map({
                "useSalesInfo.useMemo[variationRows]": (combo)=>({
                        key: combo.join("|"),
                        labels: combo
                    })
            }["useSalesInfo.useMemo[variationRows]"]);
        }
    }["useSalesInfo.useMemo[variationRows]"], [
        cartesianProduct
    ]);
    const firstColSpanInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSalesInfo.useMemo[firstColSpanInfo]": ()=>{
            if (classificationsWithOptions.length === 0 || variationRows.length === 0) return null;
            const firstCls = classificationsWithOptions[0];
            const restSize = classificationsWithOptions.slice(1).reduce({
                "useSalesInfo.useMemo[firstColSpanInfo]": (acc, c)=>acc * c.options.length
            }["useSalesInfo.useMemo[firstColSpanInfo]"], 1) || 1;
            return {
                options: firstCls.options,
                rowSpan: restSize
            };
        }
    }["useSalesInfo.useMemo[firstColSpanInfo]"], [
        classificationsWithOptions,
        variationRows
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSalesInfo.useEffect": ()=>{
            return ({
                "useSalesInfo.useEffect": ()=>{
                    Object.values(firstOptionImagesRef.current).forEach({
                        "useSalesInfo.useEffect": ({ previewUrl })=>URL.revokeObjectURL(previewUrl)
                    }["useSalesInfo.useEffect"]);
                }
            })["useSalesInfo.useEffect"];
        }
    }["useSalesInfo.useEffect"], []);
    const addClassification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSalesInfo.useCallback[addClassification]": ()=>{
            if (classifications.length >= 2) return;
            setClassifications({
                "useSalesInfo.useCallback[addClassification]": (prev)=>[
                        ...prev,
                        {
                            id: `cls-${Date.now()}`,
                            name: "",
                            options: []
                        }
                    ]
            }["useSalesInfo.useCallback[addClassification]"]);
        }
    }["useSalesInfo.useCallback[addClassification]"], [
        classifications.length
    ]);
    const removeClassification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSalesInfo.useCallback[removeClassification]": (id)=>{
            setClassifications({
                "useSalesInfo.useCallback[removeClassification]": (prev)=>prev.filter({
                        "useSalesInfo.useCallback[removeClassification]": (c)=>c.id !== id
                    }["useSalesInfo.useCallback[removeClassification]"])
            }["useSalesInfo.useCallback[removeClassification]"]);
            setOptionDrafts({
                "useSalesInfo.useCallback[removeClassification]": (prev)=>{
                    const next = {
                        ...prev
                    };
                    delete next[id];
                    return next;
                }
            }["useSalesInfo.useCallback[removeClassification]"]);
        }
    }["useSalesInfo.useCallback[removeClassification]"], []);
    const updateClassificationName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSalesInfo.useCallback[updateClassificationName]": (id, name)=>{
            setClassifications({
                "useSalesInfo.useCallback[updateClassificationName]": (prev)=>prev.map({
                        "useSalesInfo.useCallback[updateClassificationName]": (c)=>c.id === id ? {
                                ...c,
                                name
                            } : c
                    }["useSalesInfo.useCallback[updateClassificationName]"])
            }["useSalesInfo.useCallback[updateClassificationName]"]);
        }
    }["useSalesInfo.useCallback[updateClassificationName]"], []);
    const addOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSalesInfo.useCallback[addOption]": (clsId, option)=>{
            const trimmed = option.trim();
            if (!trimmed) return;
            const cls = classifications.find({
                "useSalesInfo.useCallback[addOption].cls": (c)=>c.id === clsId
            }["useSalesInfo.useCallback[addOption].cls"]);
            if (!cls || cls.options.includes(trimmed)) return;
            setClassifications({
                "useSalesInfo.useCallback[addOption]": (prev)=>prev.map({
                        "useSalesInfo.useCallback[addOption]": (c)=>c.id === clsId ? {
                                ...c,
                                options: [
                                    ...c.options,
                                    trimmed
                                ]
                            } : c
                    }["useSalesInfo.useCallback[addOption]"])
            }["useSalesInfo.useCallback[addOption]"]);
            setOptionDrafts({
                "useSalesInfo.useCallback[addOption]": (prev)=>({
                        ...prev,
                        [clsId]: ""
                    })
            }["useSalesInfo.useCallback[addOption]"]);
        }
    }["useSalesInfo.useCallback[addOption]"], [
        classifications
    ]);
    const removeOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSalesInfo.useCallback[removeOption]": (clsId, option)=>{
            setClassifications({
                "useSalesInfo.useCallback[removeOption]": (prev)=>prev.map({
                        "useSalesInfo.useCallback[removeOption]": (c)=>c.id === clsId ? {
                                ...c,
                                options: c.options.filter({
                                    "useSalesInfo.useCallback[removeOption]": (o)=>o !== option
                                }["useSalesInfo.useCallback[removeOption]"])
                            } : c
                    }["useSalesInfo.useCallback[removeOption]"])
            }["useSalesInfo.useCallback[removeOption]"]);
        }
    }["useSalesInfo.useCallback[removeOption]"], []);
    const updateVariationValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSalesInfo.useCallback[updateVariationValue]": (key, field, value)=>{
            setVariationValues({
                "useSalesInfo.useCallback[updateVariationValue]": (prev)=>{
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
                }
            }["useSalesInfo.useCallback[updateVariationValue]"]);
        }
    }["useSalesInfo.useCallback[updateVariationValue]"], []);
    const validate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSalesInfo.useCallback[validate]": ()=>{
            const { valid, errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$utils$2f$validateSalesInfo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSalesInfo"])(classifications, variationRows, variationValues);
            setSalesInfoErrors(errors);
            return valid;
        }
    }["useSalesInfo.useCallback[validate]"], [
        classifications,
        variationRows,
        variationValues
    ]);
    const handleFirstOptionImageUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSalesInfo.useCallback[handleFirstOptionImageUpload]": (option, e)=>{
            const file = e.target.files?.[0];
            if (!file || !file.type.startsWith("image/")) return;
            setFirstOptionImages({
                "useSalesInfo.useCallback[handleFirstOptionImageUpload]": (prev)=>{
                    const old = prev[option];
                    if (old?.previewUrl) URL.revokeObjectURL(old.previewUrl);
                    return {
                        ...prev,
                        [option]: {
                            file,
                            previewUrl: URL.createObjectURL(file)
                        }
                    };
                }
            }["useSalesInfo.useCallback[handleFirstOptionImageUpload]"]);
            e.target.value = "";
        }
    }["useSalesInfo.useCallback[handleFirstOptionImageUpload]"], []);
    const removeFirstOptionImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSalesInfo.useCallback[removeFirstOptionImage]": (option)=>{
            setFirstOptionImages({
                "useSalesInfo.useCallback[removeFirstOptionImage]": (prev)=>{
                    const old = prev[option];
                    if (old?.previewUrl) URL.revokeObjectURL(old.previewUrl);
                    const next = {
                        ...prev
                    };
                    delete next[option];
                    return next;
                }
            }["useSalesInfo.useCallback[removeFirstOptionImage]"]);
        }
    }["useSalesInfo.useCallback[removeFirstOptionImage]"], []);
    const resetAfterSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSalesInfo.useCallback[resetAfterSubmit]": ()=>{
            setVariationValues({});
            setClassifications([]);
            setFirstOptionImages({});
        }
    }["useSalesInfo.useCallback[resetAfterSubmit]"], []);
    return {
        classifications,
        setClassifications,
        variationValues,
        setVariationValues,
        optionDrafts,
        setOptionDrafts,
        salesInfoErrors,
        classificationsWithOptions,
        variationRows,
        firstColSpanInfo,
        firstOptionImages,
        addClassification,
        removeClassification,
        updateClassificationName,
        addOption,
        removeOption,
        updateVariationValue,
        validate,
        handleFirstOptionImageUpload,
        removeFirstOptionImage,
        resetAfterSubmit
    };
}
_s(useSalesInfo, "baJS4RrBcHxiHbTCv+36uRp2uYY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/products/create/hooks/useImageUpload.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useImageUpload",
    ()=>useImageUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const MAX_PRODUCT_IMAGES = 9;
const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
function useImageUpload() {
    _s();
    const [productImages, setProductImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [productImagesDragIndex, setProductImagesDragIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [productImagesError, setProductImagesError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const productImagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(productImages);
    productImagesRef.current = productImages;
    const handleProductImageUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useImageUpload.useCallback[handleProductImageUpload]": (e)=>{
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
            setProductImages({
                "useImageUpload.useCallback[handleProductImageUpload]": (prev)=>{
                    const combined = [
                        ...prev,
                        ...toAdd
                    ];
                    if (combined.length <= MAX_PRODUCT_IMAGES) return combined;
                    const kept = combined.slice(0, MAX_PRODUCT_IMAGES);
                    combined.slice(MAX_PRODUCT_IMAGES).forEach({
                        "useImageUpload.useCallback[handleProductImageUpload]": (item)=>{
                            if (item.previewUrl) URL.revokeObjectURL(item.previewUrl);
                        }
                    }["useImageUpload.useCallback[handleProductImageUpload]"]);
                    return kept;
                }
            }["useImageUpload.useCallback[handleProductImageUpload]"]);
            e.target.value = "";
        }
    }["useImageUpload.useCallback[handleProductImageUpload]"], []);
    const removeProductImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useImageUpload.useCallback[removeProductImage]": (index)=>{
            setProductImages({
                "useImageUpload.useCallback[removeProductImage]": (prev)=>{
                    const item = prev[index];
                    if (item?.previewUrl) URL.revokeObjectURL(item.previewUrl);
                    return prev.filter({
                        "useImageUpload.useCallback[removeProductImage]": (_, i)=>i !== index
                    }["useImageUpload.useCallback[removeProductImage]"]);
                }
            }["useImageUpload.useCallback[removeProductImage]"]);
        }
    }["useImageUpload.useCallback[removeProductImage]"], []);
    const reorderProductImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useImageUpload.useCallback[reorderProductImages]": (fromIndex, toIndex)=>{
            if (fromIndex === toIndex) return;
            setProductImages({
                "useImageUpload.useCallback[reorderProductImages]": (prev)=>{
                    const arr = [
                        ...prev
                    ];
                    const [removed] = arr.splice(fromIndex, 1);
                    arr.splice(toIndex, 0, removed);
                    return arr;
                }
            }["useImageUpload.useCallback[reorderProductImages]"]);
            setProductImagesDragIndex(null);
        }
    }["useImageUpload.useCallback[reorderProductImages]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useImageUpload.useEffect": ()=>{
            return ({
                "useImageUpload.useEffect": ()=>{
                    productImagesRef.current.forEach({
                        "useImageUpload.useEffect": ({ previewUrl })=>URL.revokeObjectURL(previewUrl)
                    }["useImageUpload.useEffect"]);
                }
            })["useImageUpload.useEffect"];
        }
    }["useImageUpload.useEffect"], []);
    const clearProductImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useImageUpload.useCallback[clearProductImages]": ()=>setProductImages([])
    }["useImageUpload.useCallback[clearProductImages]"], []);
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
_s(useImageUpload, "zR8Yq8M89brE/xSbpZ49Qzbiqe8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/products/create/utils/prepareFormData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prepareFormData",
    ()=>prepareFormData
]);
function prepareFormData(params) {
    const { shopId, productName, productDescription, selectedLeaf, productImages, attributes, attributeSelections, classificationsWithOptions, variationRows, variationValues, firstOptionImages } = params;
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
    return formData;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/products/create/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './components/ProductImagesUploader'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/CategorySelector'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/AttributesSelector'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/SalesInfoSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$hooks$2f$useCategoryTree$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/create/hooks/useCategoryTree.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$hooks$2f$useAttributes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/create/hooks/useAttributes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$hooks$2f$useSalesInfo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/create/hooks/useSalesInfo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$hooks$2f$useImageUpload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/create/hooks/useImageUpload.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$utils$2f$prepareFormData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/create/utils/prepareFormData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function CreateProductPage() {
    _s();
    const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$hooks$2f$useCategoryTree$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategoryTree"])();
    const attributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$hooks$2f$useAttributes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAttributes"])();
    const salesInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$hooks$2f$useSalesInfo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalesInfo"])();
    const imageUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$hooks$2f$useImageUpload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImageUpload"])();
    const [submitLoading, setSubmitLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!salesInfo.validate()) return;
        const form = e.currentTarget;
        const productName = form.elements.namedItem("productName")?.value?.trim();
        const productDescription = form.elements.namedItem("productDescription")?.value?.trim() ?? "";
        if (!productName) {
            setSubmitError("Vui lòng nhập tên sản phẩm.");
            return;
        }
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
            const shopId = 1; // TODO: lấy từ context/auth khi có
            const formData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$utils$2f$prepareFormData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareFormData"])({
                shopId,
                productName,
                productDescription,
                selectedLeaf: category.selectedLeaf,
                productImages: imageUpload.productImages,
                attributes: attributes.attributes,
                attributeSelections: attributes.attributeSelections,
                classificationsWithOptions: salesInfo.classificationsWithOptions,
                variationRows: salesInfo.variationRows,
                variationValues: salesInfo.variationValues,
                firstOptionImages: salesInfo.firstOptionImages
            });
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/product/create", formData);
            alert("Tạo sản phẩm thành công!");
            form.reset();
            imageUpload.clearProductImages();
            salesInfo.resetAfterSubmit();
            attributes.setAttributeSelections({});
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-semibold tracking-tight text-[var(--foreground)]",
                    children: "Thêm sản phẩm mới"
                }, void 0, false, {
                    fileName: "[project]/src/app/products/create/page.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/products/create/page.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "rounded-xl border border-[var(--border)] bg-white p-4 shadow-sm sm:p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "space-y-5",
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductImagesUploader, {
                            productImages: imageUpload.productImages,
                            productImagesError: imageUpload.productImagesError,
                            productImagesDragIndex: imageUpload.productImagesDragIndex,
                            maxProductImages: imageUpload.MAX_PRODUCT_IMAGES,
                            onUpload: imageUpload.handleProductImageUpload,
                            onRemove: imageUpload.removeProductImage,
                            onReorder: imageUpload.reorderProductImages,
                            onDragIndexChange: imageUpload.setProductImagesDragIndex
                        }, void 0, false, {
                            fileName: "[project]/src/app/products/create/page.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]",
                                    children: "Tên sản phẩm"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/products/create/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    name: "productName",
                                    type: "text",
                                    className: "w-full rounded-md border border-[var(--input)] px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]",
                                    placeholder: "VD: Áo thun Zara form rộng",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/products/create/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/products/create/page.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategorySelector, {
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
                            fileName: "[project]/src/app/products/create/page.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AttributesSelector, {
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
                            fileName: "[project]/src/app/products/create/page.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]",
                                    children: "Mô tả"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/products/create/page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    name: "productDescription",
                                    className: "min-h-[100px] w-full rounded-md border border-[var(--input)] px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]",
                                    placeholder: "Mô tả chi tiết sản phẩm..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/products/create/page.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/products/create/page.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SalesInfoSection, {
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
                            fileName: "[project]/src/app/products/create/page.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 pt-2",
                            children: [
                                submitError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-600",
                                    children: submitError
                                }, void 0, false, {
                                    fileName: "[project]/src/app/products/create/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: submitLoading,
                                    className: "inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--primary)]/90 disabled:cursor-not-allowed disabled:opacity-70",
                                    children: submitLoading ? "Đang lưu..." : "Lưu sản phẩm"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/products/create/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/products/create/page.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/products/create/page.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/products/create/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/products/create/page.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_s(CreateProductPage, "ci4t19oqX3PJ06Cf3JVr0ttuhi8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$hooks$2f$useCategoryTree$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategoryTree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$hooks$2f$useAttributes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAttributes"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$hooks$2f$useSalesInfo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalesInfo"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$create$2f$hooks$2f$useImageUpload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImageUpload"]
    ];
});
_c = CreateProductPage;
var _c;
__turbopack_context__.k.register(_c, "CreateProductPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_products_create_4bb4ba33._.js.map