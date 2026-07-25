import { useLanguage } from '../context/LanguageContext'

export default function Skills() {
  const { t } = useLanguage()
  const { skills } = t

  return (
    <section id="skills" className="container-px py-16">
      <h2 className="section-title">{skills.title}</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.items.map((skill) => (
          <article key={skill.id}>
            <h3 className="text-lg font-semibold text-primary mb-2">{skill.name}</h3>
            <p className="text-sm text-muted dark:text-gray-400 leading-relaxed">{skill.description}</p>
          </article>
        ))}
      </div>

      <div className="divider mt-16" />
    </section>
  )
}
