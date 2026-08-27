import type { LogEntry } from "@/lib/data";
import { DiffLine } from "./DiffLine";

export default function ExperienceLog({ entries }: { entries: LogEntry[] }) {
  return (
    <div className="space-y-3">
      {entries.map((entry) => (
        <div
          key={entry.org}
          className="rounded-lg border border-line bg-paper/70 p-5 sm:p-6"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-mono text-base font-medium text-ink">
              {entry.role}{" "}
              <span className="text-ink-soft">@ {entry.org}</span>
            </h3>
            <span className="font-mono text-xs text-ink-soft">
              {entry.range} · {entry.location}
            </span>
          </div>

          <div className="mt-3 space-y-1">
            {entry.diff.map((d, i) => (
              <DiffLine key={i} kind={d.kind}>
                {d.text}
              </DiffLine>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
