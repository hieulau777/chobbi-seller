import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { SellerShell } from "../../components/SellerShell";
import { RequireSellerAuth } from "../../components/RequireSellerAuth";

export default async function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <RequireSellerAuth />
      <SellerShell>{children}</SellerShell>
    </>
  );
}
