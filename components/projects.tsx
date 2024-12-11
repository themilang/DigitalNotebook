import Image from 'next/image'
import Link from 'next/link'

import { ProjectMetadata } from '@/lib/projects'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
      {projects.map((project) => (
        <li
          key={project.slug}
          className="relative overflow-hidden rounded-lg border shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <Link href={`/projects/${project.slug}`} className="block group">
            {/* Image Section */}
            <div className="relative h-56 w-full">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title || ''}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-sm"
                />
              )}
              {/* Title and Description Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent p-4 flex flex-col justify-end">
                <h2 className="text-lg font-semibold text-white">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm text-white line-clamp-2">
                  {project.summary}
                </p>
              </div>
              {/* Hover Effect Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <button className="px-4 py-2 bg-white text-black rounded-md shadow hover:bg-gray-200 transition">
                  View Project
                </button>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}