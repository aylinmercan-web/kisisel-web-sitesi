import { useLanguage } from '../context/LanguageContext'
import { GithubIcon, LinkedinIcon } from './icons'
import profilFoto from '../assets/profil.jpeg'

export default function Hero() {
  const { t } = useLanguage()
  const { hero } = t

  return (
    <section id="hero" className="container-px py-16 md:py-24">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8 md:gap-10 max-w-4xl mx-auto">
        <div className="max-w-lg">
          <p className="flex items-center gap-3 text-lg font-bold text-primary mb-4">
            <span className="h-px w-8 bg-primary inline-block" />
            {hero.badge}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-ink dark:text-white leading-tight">
            {hero.titleLine1}
            <br />
            {hero.titleLine2}
          </h1>

          <p className="mt-6 max-w-md text-muted dark:text-gray-400">{hero.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-primary">
              {hero.ctaHire}
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn-outline">
              <GithubIcon /> {hero.ctaGithub}
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="btn-outline">
              <LinkedinIcon /> {hero.ctaLinkedin}
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-xs mx-auto md:mx-0">
  <img
    src={profilFoto}
    alt={hero.imageAlt}
   className="w-full aspect-[4/5] object-cover object-[center_15%] rounded-2xl"
    loading="eager"
  />
</div>
      </div>
    </section>
  )
}
