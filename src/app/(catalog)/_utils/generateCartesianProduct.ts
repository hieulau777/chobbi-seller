/**
 * Tạo tích Đề-các của các mảng option.
 * VD: [["Đỏ","Xanh"], ["S","M"]] -> [["Đỏ","S"],["Đỏ","M"],["Xanh","S"],["Xanh","M"]]
 */
export function generateCartesianProduct(optionArrays: string[][]): string[][] {
  if (optionArrays.length === 0) return [];
  if (optionArrays.length === 1) return optionArrays[0].map((o) => [o]);

  const [first, ...rest] = optionArrays;
  const restProduct = generateCartesianProduct(rest);
  const result: string[][] = [];
  for (const opt of first) {
    for (const row of restProduct) {
      result.push([opt, ...row]);
    }
  }
  return result;
}
