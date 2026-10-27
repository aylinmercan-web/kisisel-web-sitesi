import { useLanguage } from '../context/LanguageContext'
import previousProjects from '../data/previousProjects.json'

export default function Projects() {
  const { t, language } = useLanguage()
  const { projects } = t

  return (
    <section id="projects" className="container-px py-16">
      <h2 className="section-title">{projects.title}</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.items.map((project) => (
          <article
            key={project.id}
            className="rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img src={project.image} alt={project.name} className="h-40 w-full object-cover" loading="lazy" />
            <div className="p-5">
              <h3 className="font-semibold text-primary mb-2">{project.name}</h3>
              <p className="text-sm text-muted dark:text-gray-400 leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    lang="en"
                    className="text-[11px] uppercase tracking-wide font-medium rounded-full border border-gray-200 dark:border-gray-700 px-2.5 py-1 text-muted dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm">
                <a href={project.github} target="_blank" rel="noreferrer" className="link-primary font-medium">
                  Github
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="link-primary font-medium">
                  {language === 'tr' ? 'Siteyi Gör' : 'View Site'}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {previousProjects.length > 0 && (
        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted dark:text-gray-400 mb-4">
            {language === 'tr' ? 'Daha Önce Geliştirdiğim Projeler' : 'Previously Built Projects'}
          </h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 text-sm">
            {previousProjects.map((p) => (
              <li key={p.name}>
                <a href={p.url} target="_blank" rel="noreferrer" className="link-primary">
                  {p.name} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="divider mt-16" />
    </section>
  )
}
