"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SellerNotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/guide");
  }, [router]);

  return null;
}

