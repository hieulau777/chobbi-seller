import type { CategoryNode } from "../_types";

export function findCategoryPathById(
  tree: CategoryNode[],
  targetId: number,
): CategoryNode[] | null {
  function search(nodes: CategoryNode[], path: CategoryNode[]): CategoryNode[] | null {
    for (const node of nodes) {
      const newPath = [...path, node];
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
