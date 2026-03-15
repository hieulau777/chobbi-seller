"use client";

/** Bọc nội dung không cho chỉnh: mờ sẵn, hover thì cursor tròn đỏ (not-allowed), không icon giữa màn hình */
export function DisabledOverlay({
  children,
  active,
  className = "",
}: {
  children: React.ReactNode;
  active: boolean;
  className?: string;
}) {
  if (!active) return <>{children}</>;
  return (
    <div className={`relative rounded-xl ${className}`}>
      <div className="pointer-events-none select-none opacity-60">{children}</div>
      <div className="absolute inset-0 cursor-not-allowed rounded-xl" aria-hidden />
    </div>
  );
}
