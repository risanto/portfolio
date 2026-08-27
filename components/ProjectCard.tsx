import Image from 'next/image';
import type { Project } from '@/lib/data';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-lg border border-line bg-paper/70 p-5 sm:p-6 transition hover:-translate-y-0.5 hover:shadow-md hover:duration-300">
      {project.image ? (
        <div className="relative -mx-5 -mt-5 mb-4 aspect-video overflow-hidden rounded-t-lg sm:-mx-6 sm:-mt-6">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain transition duration-300 group-hover:scale-105"
          />
        </div>
      ) : null}

      <div className="flex items-start justify-between gap-4">
        <h3 className="font-mono text-lg font-medium text-ink">{project.name}</h3>
        {project.metric ? (
          <span className="shrink-0 rounded bg-diff-add-bg px-2 py-0.5 font-mono text-xs text-diff-add">
            +{project.metric.value} {project.metric.label}
          </span>
        ) : null}
      </div>

      <p className="mt-2 text-ink/90">{project.summary}</p>
      <p className="mt-3 text-sm text-ink-soft">{project.detail}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-line px-2 py-0.5 font-mono text-xs text-ink-soft"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.links?.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-diff-add underline decoration-diff-add/30 underline-offset-4 hover:decoration-diff-add"
          >
            {link.label} →
          </a>
        ))}
      </div>
    </article>
  );
}
