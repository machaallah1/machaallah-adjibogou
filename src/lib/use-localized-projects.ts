import { useMemo } from "react";
import { projects, type Project } from "./projects";
import { projectsEn } from "./projects-en";
import { useLanguage, type Locale } from "./i18n";

/**
 * Returns the projects array with translated fields based on the current locale.
 * FR data is the source of truth; EN overrides are merged on top.
 */
function localizeProject(project: Project, locale: Locale): Project {
  if (locale === "fr") return project;

  const overrides = projectsEn[project.slug];
  if (!overrides) return project;

  return {
    ...project,
    ...overrides,
    // Preserve non-translatable fields
    slug: project.slug,
    thumbnail: project.thumbnail,
    gallery: project.gallery,
    tools: project.tools,
    tags: project.tags,
    year: project.year,
    url: project.url,
    // Merge metrics: use EN if available, else keep FR
    metrics: overrides.metrics ?? project.metrics,
    // Merge sections: use EN if available, else keep FR
    sections: overrides.sections ?? project.sections,
  };
}

/**
 * Hook that returns localized projects based on the current language.
 */
export function useLocalizedProjects(): Project[] {
  const { locale } = useLanguage();
  return useMemo(
    () => projects.map((p) => localizeProject(p, locale)),
    [locale]
  );
}

/**
 * Hook that returns a single localized project by slug.
 */
export function useLocalizedProject(slug: string): Project | undefined {
  const localizedProjects = useLocalizedProjects();
  return useMemo(
    () => localizedProjects.find((p) => p.slug === slug),
    [localizedProjects, slug]
  );
}
