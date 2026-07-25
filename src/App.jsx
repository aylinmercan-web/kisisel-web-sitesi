import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useTheme } from './context/ThemeContext'

function App() {
  const { isDark } = useTheme()

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Contact />
      </main>
      <ToastContainer position="bottom-right" theme={isDark ? 'dark' : 'light'} autoClose={3000} />
    </div>
  )
}

export default App
