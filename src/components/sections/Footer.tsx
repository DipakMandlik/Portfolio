import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-base">
      <div className="container-x flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-ink-soft">{profile.location}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft">
          <a href={`mailto:${profile.email}`} className="hover:text-ink">Email</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-ink">GitHub</a>
          <a href="#top" className="inline-flex items-center gap-1.5 hover:text-ink">
            Back to top
            <ArrowUp className="size-3.5" />
          </a>
        </nav>
      </div>
      <div className="container-x pb-8">
        <p className="text-xs text-ink-soft">
          © {new Date().getFullYear()} {profile.name}. Built with care.
        </p>
      </div>
    </footer>
  );
}
