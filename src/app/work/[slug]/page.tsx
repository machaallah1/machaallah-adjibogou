import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { CaseStudyContent } from "./case-study-content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    return {
      title: project
        ? `${project.title} — Machaallah ADJIBOGOU`
        : "Projet non trouvé",
      description: project?.description,
    };
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return <CaseStudyContent project={project} next={next} />;
}
