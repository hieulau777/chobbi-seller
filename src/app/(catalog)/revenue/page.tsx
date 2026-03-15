export default function RevenuePage() {
  return (
    <div className="px-4 py-4 space-y-4">
      <p className="text-sm font-medium text-[var(--muted-foreground)]">
        Chobbi đang phát triển ạ ❤️
      </p>

      {/* Demo charts only – dữ liệu mock để trang đỡ trống */}
      <section className="grid gap-4 md:grid-cols-2">
        {/* Doanh thu theo ngày (bar chart fake) */}
        <div className="rounded-lg border border-[var(--border)] bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-[var(--foreground)]">
              Doanh thu 7 ngày gần đây
            </h2>
            <span className="text-[10px] uppercase tracking-wide text-[var(--muted-foreground)]">
              Demo
            </span>
          </div>
          <div className="flex h-40 items-end gap-2 rounded-md bg-[var(--muted)]/40 p-3">
            {[40, 80, 55, 90, 60, 100, 75].map((h, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center justify-end gap-1">
                <div
                  className="w-5 rounded-full bg-[var(--primary)]/80 shadow-sm"
                  style={{ height: `${h}%` }}
                />
                <span className="text-[10px] text-[var(--muted-foreground)]">
                  T{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Đơn hàng theo trạng thái (stacked bar fake) */}
        <div className="rounded-lg border border-[var(--border)] bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-[var(--foreground)]">
              Đơn hàng theo trạng thái
            </h2>
            <span className="text-[10px] uppercase tracking-wide text-[var(--muted-foreground)]">
              Demo
            </span>
          </div>
          <div className="space-y-2">
            {[
              { label: "Hoàn tất", value: 60, color: "bg-emerald-500" },
              { label: "Đang giao", value: 25, color: "bg-amber-500" },
              { label: "Đã hủy", value: 15, color: "bg-red-500" },
            ].map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[var(--muted)]/40">
                  <div
                    className={`h-2 rounded-full ${item.color}`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bảng nhỏ demo top sản phẩm */}
      <section className="rounded-lg border border-[var(--border)] bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-[var(--foreground)]">
            Top sản phẩm (demo)
          </h2>
          <span className="text-[10px] uppercase tracking-wide text-[var(--muted-foreground)]">
            Demo
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--muted)]/40 text-[var(--muted-foreground)]">
                <th className="px-3 py-2 text-left font-medium">Sản phẩm</th>
                <th className="px-3 py-2 text-right font-medium">Đơn hàng</th>
                <th className="px-3 py-2 text-right font-medium">Doanh thu</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Sản phẩm A", orders: 120, revenue: "12.000.000₫" },
                { name: "Sản phẩm B", orders: 80, revenue: "8.500.000₫" },
                { name: "Sản phẩm C", orders: 45, revenue: "4.200.000₫" },
              ].map((row) => (
                <tr
                  key={row.name}
                  className="border-b border-[var(--border)]/60 last:border-0 hover:bg-[var(--muted)]/20"
                >
                  <td className="px-3 py-2 text-[var(--foreground)]">{row.name}</td>
                  <td className="px-3 py-2 text-right text-[var(--foreground)]">
                    {row.orders}
                  </td>
                  <td className="px-3 py-2 text-right text-[var(--foreground)]">
                    {row.revenue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

