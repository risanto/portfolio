export default function Hero() {
  return (
    <section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div className="rounded-lg border border-line bg-paper/60 shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-diff-del/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D9B24C]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-diff-add/70" />
          <span className="ml-3 font-mono text-xs text-ink-soft">
            ~/risan — zsh
          </span>
        </div>

        <div className="px-5 py-6 sm:px-8 sm:py-10 font-mono text-sm sm:text-base leading-relaxed">
          <p className="text-ink-soft">$ whoami</p>
          <p className="mt-1 text-2xl sm:text-4xl font-medium tracking-tight text-ink">
            Risan — Full Stack Developer
          </p>
          <p className="mt-1 text-ink-soft">
            branch:{" "}
            <span className="text-diff-add">expanding-into-ios</span>
          </p>

          <p className="mt-6 text-ink-soft">$ cat about.md</p>
          <p className="mt-1 max-w-2xl text-ink/90 font-sans text-base sm:text-lg leading-relaxed">
            I build for the web across the stack, from Node APIs to
            React/Next.js interfaces, and I&apos;m currently at Apple
            Developer Academy adding native iOS to that range. I like
            projects where I own the outcome end to end.
          </p>
        </div>
      </div>
    </section>
  );
}
