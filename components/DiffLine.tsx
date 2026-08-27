export function DiffLine({
  kind,
  children,
}: {
  kind: "add" | "del";
  children: React.ReactNode;
}) {
  const isAdd = kind === "add";
  return (
    <div
      className={`flex items-baseline gap-2 rounded px-2 py-1 font-mono text-sm ${
        isAdd ? "bg-diff-add-bg text-diff-add" : "bg-diff-del-bg text-diff-del"
      }`}
    >
      <span className="select-none">{isAdd ? "+" : "-"}</span>
      <span className="text-ink">{children}</span>
    </div>
  );
}
