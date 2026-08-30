const ctas = [
  { label: 'resume.pdf', command: 'open', href: '/resume.pdf' },
  { label: 'linkedin', command: 'curl', href: 'https://linkedin.com/in/risantomulyo' },
  { label: 'github', command: 'git clone', href: 'https://github.com/risanto' },
];

export default function Hero() {
  return (
    <section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div className="rounded-lg border border-line bg-paper/60 shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-diff-del/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D9B24C]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-diff-add/70" />
          <span className="ml-3 font-mono text-xs text-ink-soft">~/risan — zsh</span>
        </div>

        <div className="px-5 py-6 font-mono text-sm leading-relaxed sm:px-8 sm:py-10 sm:text-base">
          <p className="text-ink-soft">$ whoami</p>
          <p className="mt-1 text-2xl font-medium tracking-tight text-ink sm:text-4xl">
            Risan — Software Developer (iOS & Web)
          </p>
          <p className="mt-1 text-ink-soft">
            branch: <span className="text-diff-add">expanding-into-ios</span>
          </p>

          <p className="mt-6 text-ink-soft">$ cat about.md</p>
          <p className="mt-1 max-w-2xl font-sans text-base leading-relaxed text-ink/90 sm:text-lg">
            I&apos;ve built across the stack over the years — Node/Express APIs, React and Vue
            frontends. I&apos;m currently at Apple Developer Academy adding native iOS to that
            range. I like projects where I own the outcome end to end.
          </p>

          <p className="mt-6 text-ink-soft"># find me</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1.5 rounded border border-line bg-paper px-3 py-1.5 text-sm text-ink-soft transition hover:border-diff-add hover:text-diff-add"
              >
                <span className="text-ink-soft/70 group-hover:text-diff-add/70">$</span>
                <span>{cta.command}</span>
                <span className="text-ink">{cta.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
