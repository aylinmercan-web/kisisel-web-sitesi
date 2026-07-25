import { useLanguage } from '../context/LanguageContext'

export default function Profile() {
  const { t } = useLanguage()
  const { profile } = t

  const infoRows = [
    { label: profile.birthDateLabel, value: profile.birthDate },
    { label: profile.cityLabel, value: profile.city },
    { label: profile.educationLabel, value: profile.education },
    { label: profile.roleLabel, value: profile.role },
  ]

  return (
    <section id="profile" className="container-px py-16">
      <h2 className="section-title">{profile.title}</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">
            {profile.basicInfoTitle}
          </h3>
          <dl className="space-y-3">
            {infoRows.map((row) => (
              <div key={row.label} className="grid grid-cols-2 gap-4 text-sm">
                <dt className="text-muted dark:text-gray-400">{row.label}</dt>
                <dd className="text-ink dark:text-gray-100 font-medium">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">
            {profile.aboutMeTitle}
          </h3>
          <p className="text-sm text-muted dark:text-gray-400 leading-relaxed mb-4">
            {profile.aboutMeParagraph1}
          </p>
          <p className="text-sm text-muted dark:text-gray-400 leading-relaxed">
            {profile.aboutMeParagraph2}
          </p>
        </div>
      </div>

      <div className="divider mt-16" />
    </section>
  )
}
