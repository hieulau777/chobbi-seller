"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ShopRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/shop/info");
  }, [router]);

  return (
    <div className="flex min-h-[200px] items-center justify-center p-4">
      <p className="text-sm text-[var(--muted-foreground)]">Đang chuyển đến hồ sơ shop...</p>
    </div>
  );
}
