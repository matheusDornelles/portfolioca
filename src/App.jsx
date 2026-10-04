import './App.css'

const projects = [
  {
    tag: 'Research',
    title: 'Territoria Fraud Detection',
    description:
      'Research prototype for multi-indicator location integrity validation in mobile systems.',
    link: 'https://github.com/matheusDornelles/Territoria-Fraud-Detection',
  },
  {
    tag: 'Website',
    title: "Anna's Makeup Page",
    description:
      'Beauty brand landing page with a clean, polished layout and modern storefront aesthetic.',
    link: 'https://annasmakeuppage.vercel.app/',
  },
  {
    tag: 'Website',
    title: 'Recife Glass',
    description:
      'Glass shop website for selling and installing glass, windows, and related products for residential and commercial needs.',
    link: 'https://recifeglass.vercel.app/',
  },
]

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/matheus-dornelles-02942791/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.38a1.56 1.56 0 0 1 .01 3.12ZM5.5 9.75h2.88v8.75H5.5V9.75Zm4.94 0h2.76v1.2h.04c.38-.72 1.32-1.48 2.72-1.48 2.91 0 3.44 1.91 3.44 4.4v4.63h-2.88v-4.34c0-1.03-.02-2.36-1.44-2.36-1.45 0-1.67 1.13-1.67 2.29v4.41H10.44V9.75Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/matheusdornelless/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.25 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/matheusDornelles',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.02-2.69-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.73 1.02A9.35 9.35 0 0 1 12 6.84c.84 0 1.69.11 2.49.32 1.89-1.29 2.72-1.02 2.72-1.02.54 1.4.2 2.44.1 2.7.64.7 1.02 1.6 1.02 2.69 0 3.84-2.33 4.68-4.56 4.93.36.31.68.92.68 1.86v2.76c0 .26.17.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
]

const currentYear = new Date().getFullYear()

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="container nav">
          <a href="#home" className="brand">
            MATHEUS DORNELLES
          </a>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero container single-hero">
          <div className="hero-copy centered-hero">
            <h1>Matheus Dornelles</h1>
            <p className="intro hero-tagline">Full stack developer based in Canada, QC</p>

            <div className="hero-actions">
              <a href="#contact" className="button primary">
                Contact me
              </a>
              <a href="#projects" className="button secondary">
                View projects
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section container">
          <div className="section-head">
            <p className="eyebrow">About</p>
            <h2>About me</h2>
          </div>

          <div className="about-copy">
            <p>
              Hi! I&apos;m Matheus. 👋
            </p>
            <p>
              Originally from Brazil and currently living in Canada, I am pursuing a Master&apos;s degree in Computer Science while exploring my passion for software development and cybersecurity.
            </p>
            <p>
              <strong>I love learning how things work and building things that matter.</strong> From developing applications to researching emerging technologies, I enjoy transforming ideas into solutions that can make everyday life easier and more secure.
            </p>
            <p>
              Outside of technology, I value family, continuous learning, and new challenges. Every project is an opportunity to grow, create, and make a positive impact.
            </p>
            <p>
              Feel free to reach out if you&apos;d like to connect or collaborate.
            </p>
          </div>
        </section>

        <section id="projects" className="section container">
          <div className="section-head">
            <p className="eyebrow">Projects</p>
            <h2>Recent work</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                    View project
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section container contact-box">
          <div className="section-head">
            <p className="eyebrow">Contact</p>
            <h2>Let’s connect.</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <p>Email: mdmaia91@gmail.com</p>
              <p>Phone: 819 446 5741</p>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-item"
                    aria-label={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <a href="mailto:mdmaia91@gmail.com" className="button primary">
              Email me
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {currentYear} Matheus Dornelles</span>
        </div>
      </footer>
    </div>
  )
}

export default App
