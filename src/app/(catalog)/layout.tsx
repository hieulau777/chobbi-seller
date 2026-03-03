import { SellerShell } from "../../components/SellerShell";

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SellerShell>{children}</SellerShell>;
}
