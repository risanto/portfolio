import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import ExperienceLog from '@/components/ExperienceLog';
import SocialLinks from '@/components/SocialLinks';
import { projects, log } from '@/lib/data';

function SectionHeading({ command, title }: { command: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="font-mono text-xs text-ink-soft">$ {command}</p>
      <h2 className="mt-1 font-mono text-xl sm:text-2xl font-medium text-ink">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6">
      <Hero />

      <section id="projects" className="py-10 sm:py-14">
        <SectionHeading command="ls ./projects" title="Selected projects" />
        <div className="space-y-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="experience" className="py-10 sm:py-14">
        <SectionHeading command="git log --oneline" title="Experience" />
        <ExperienceLog entries={log} />
      </section>

      <footer id="contact" className="border-t border-line py-10 sm:py-14 mb-6">
        <p className="font-mono text-xs text-ink-soft">$ echo $CONTACT</p>
        <p className="mt-1 max-w-xl text-lg text-ink">
          Open to conversations about full stack or iOS roles. Reach out below.
        </p>
        <div className="mt-5">
          <SocialLinks />
        </div>
      </footer>
    </main>
  );
}
