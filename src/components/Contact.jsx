import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useLanguage } from '../context/LanguageContext'
import { MailIcon, GithubIcon, LinkedinIcon } from './icons'

const initialForm = { name: '', email: '', message: '' }

const WEB3FORMS_ACCESS_KEY = '4fe494f3-ee4f-4783-adfc-674b153e2764'

export default function Contact() {
  const { t, language } = useLanguage()
  const { contact } = t

  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await axios.post('https://api.web3forms.com/submit', {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: form.name,
        email: form.email,
        message: form.message,
      })

      if (response.data.success) {
        toast.success(contact.success)
        setStatus('success')
        setForm(initialForm)
      } else {
        throw new Error('Web3Forms isteği başarısız oldu')
      }
    } catch (error) {
      console.error('Mesaj gönderilemedi:', error)
      toast.error(contact.error)
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 2000)
    }
  }

  return (
    <section id="contact" className="bg-gray-50 dark:bg-surface-card">
      <div className="container-px py-16 md:py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-ink dark:text-white mb-8 max-w-md">
            {contact.title}
          </h2>

          <div className="flex items-center gap-2 text-primary font-medium mb-6">
            <MailIcon />
            <a href={`mailto:${contact.email}`} className="hover:underline">
              {contact.email}
            </a>
          </div>

          <div className="flex items-center gap-5 text-sm text-ink dark:text-gray-200">
            <a href="#" className="hover:text-primary transition-colors">{contact.blog}</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <GithubIcon className="h-4 w-4" /> {contact.github}
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <LinkedinIcon className="h-4 w-4" /> {contact.linkedin}
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" aria-label={contact.title}>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder={contact.namePlaceholder}
            className="w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark px-4 py-2.5 text-sm text-ink dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder={contact.emailPlaceholder}
            className="w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark px-4 py-2.5 text-sm text-ink dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder={contact.messagePlaceholder}
            className="w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark px-4 py-2.5 text-sm text-ink dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button type="submit" disabled={status === 'loading'} className="btn-primary w-full sm:w-auto">
            {status === 'loading' ? contact.sending : contact.submit}
          </button>
        </form>
      </div>

      <div className="container-px py-6 border-t border-gray-200 dark:border-gray-700 text-xs text-muted dark:text-gray-500 flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} Aylin Mercan — {t.footer.rights}</span>
        <span>{language === 'tr' ? 'React ile geliştirildi' : 'Built with React'}</span>
      </div>
    </section>
  )
}
