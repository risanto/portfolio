import { social } from '@/lib/data';

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4 font-mono text-sm">
      {social.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith('mailto:') ? undefined : '_blank'}
          rel="noreferrer"
          className="text-ink-soft underline decoration-line underline-offset-4 transition hover:text-diff-add hover:decoration-diff-add"
        >
          {s.label}
        </a>
      ))}
    </div>
  );
}
