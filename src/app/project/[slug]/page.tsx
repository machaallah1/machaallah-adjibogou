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
        : "Project not found",
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

  // Pass slug to client component — localization happens there
  return <CaseStudyContent slug={slug} />;
}
