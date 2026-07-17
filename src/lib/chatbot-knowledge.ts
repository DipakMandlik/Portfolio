import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { education, academicJourney } from "@/data/education";
import { certifications } from "@/data/certifications";
import { awards } from "@/data/awards";
import { traits, orbitalNodes, journeyMilestones } from "@/data/about";

// Deliberately does NOT import src/data/journey.ts — that file contains
// placeholder/fictional content (e.g. a "Pune" location) that contradicts the
// real data above (education.ts / profile.ts place Dipak in Sangamner / Navi
// Mumbai). about.ts's journeyMilestones is the accurate life-story timeline.

function section(title: string, body: string): string {
  return `## ${title}\n${body.trim()}\n`;
}

function buildProfileSection(): string {
  const knownEmail =
    profile.email && !profile.email.includes("dipakmandlik.dev")
      ? profile.email
      : "not publicly listed here";
  const knownGithub =
    profile.github && profile.github !== "https://github.com/"
      ? profile.github
      : "not publicly listed here";

  return section(
    "Profile",
    [
      `Name: ${profile.name}`,
      `Headline: ${profile.headline}`,
      `Summary: ${profile.subline}`,
      `Bio: ${profile.bio}`,
      `Location: ${profile.location}`,
      `Years of experience: ${profile.yearsExperience}`,
      `Focus areas: ${profile.focus}`,
      `Tagline: ${profile.tagline}`,
      `LinkedIn: ${profile.linkedin}`,
      `Email: ${knownEmail}`,
      `GitHub: ${knownGithub}`,
    ].join("\n"),
  );
}

function buildExperienceSection(): string {
  return section(
    "Experience",
    experience
      .map((role) =>
        [
          `${role.title} at ${role.company} (${role.dates}${role.location ? `, ${role.location}` : ""})`,
          role.description,
          `Achievements: ${role.achievements.join("; ")}`,
          `Impact: ${role.impact}`,
        ].join("\n"),
      )
      .join("\n\n"),
  );
}

function buildProjectsSection(): string {
  return section(
    "Projects",
    projects
      .map((p) =>
        [
          `${p.title} — ${p.role}`,
          p.description,
          `Stack: ${p.stack.map((s) => s.name).join(", ")}`,
          p.live ? `Live: ${p.live}` : null,
          p.repo ? `Repo: ${p.repo}` : null,
        ]
          .filter(Boolean)
          .join("\n"),
      )
      .join("\n\n"),
  );
}

function buildEducationSection(): string {
  const milestones = education
    .map((e) =>
      [
        `${e.title}${e.subtitle ? ` (${e.subtitle})` : ""} — ${e.institution}${e.subInstitution ? `, ${e.subInstitution}` : ""} (${e.dates})`,
        `Result: ${e.achievementValue.toFixed(e.achievementDecimals)}${e.achievementSuffix}`,
        e.supportingText,
      ].join("\n"),
    )
    .join("\n\n");
  const progression = academicJourney
    .map((a) => `${a.label}: ${a.value.toFixed(a.decimals)}${a.suffix}`)
    .join(", ");
  return section("Education", `${milestones}\n\nAcademic progression: ${progression}`);
}

function buildCertificationsSection(): string {
  return section(
    "Certifications",
    certifications
      .map((c) => `${c.title} — ${c.issuer} (${c.category}). ${c.description}`)
      .join("\n"),
  );
}

function buildAwardsSection(): string {
  return section(
    "Awards and recognition",
    awards
      .map((a) =>
        [`${a.year}: ${a.title} — ${a.detail}`, a.story ?? null].filter(Boolean).join("\n"),
      )
      .join("\n\n"),
  );
}

function buildAboutSection(): string {
  const traitsText = traits.map((t) => `${t.title}: ${t.body}`).join("\n");
  const focusAreas = orbitalNodes.map((n) => `${n.title}: ${n.body}`).join("\n");
  const timeline = journeyMilestones
    .map((m) => `${m.year} (${m.tag}) — ${m.title}: ${m.body}`)
    .join("\n");
  return section(
    "About Dipak",
    `Traits:\n${traitsText}\n\nFocus areas:\n${focusAreas}\n\nLife/career timeline:\n${timeline}`,
  );
}

export const KNOWLEDGE_BASE: string = [
  buildProfileSection(),
  buildExperienceSection(),
  buildProjectsSection(),
  buildEducationSection(),
  buildCertificationsSection(),
  buildAwardsSection(),
  buildAboutSection(),
].join("\n");
