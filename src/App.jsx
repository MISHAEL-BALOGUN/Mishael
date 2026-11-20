import React, { useEffect, useState } from 'react';

const projects = [
  {
    icon: '🌐',
    name: 'Zunto Marketplace',
    desc: 'Building a full-scale e-commerce marketplace connecting buyers and sellers with seamless transactions and a modern, conversion-focused UI.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    category: 'E-commerce',
    featured: true,
    link: null
  },
  {
    icon: '🛍️',
    name: 'Lilyshop',
    desc: 'TikTok-style social commerce platform for Nigerian creators, turning scrollable video discovery into seamless in-feed purchases.',
    tags: ['React', 'Social Commerce', 'Video UI', 'Responsive'],
    category: 'Social',
    link: 'https://lilyshops.com'
  },
  {
    icon: '💬',
    name: 'GoChat',
    desc: 'Social networking and chat platform inspired by 2go, featuring chat rooms, private messaging, GC virtual currency, levels, and badges.',
    tags: ['React', 'Real-time Chat', 'Social', 'Community'],
    category: 'Social',
    link: 'https://gochatus.com'
  },
  {
    icon: '🎥',
    name: 'Cenntre',
    desc: 'Monetization infrastructure for the creator economy, helping creators manage and grow live social experiences and audience engagement.',
    tags: ['Creator Economy', 'Live Social', 'Platform', 'Web App'],
    category: 'Social',
    link: 'https://cenntre.com'
  },
  {
    icon: '🛒',
    name: 'UprightMarket',
    desc: 'Nigerian e-commerce marketplace with live-streaming selling, designed to connect merchants and shoppers in real time.',
    tags: ['E-commerce', 'Live Commerce', 'Marketplace', 'Nigeria'],
    category: 'E-commerce',
    link: 'https://uprightmarket.ng'
  },
  {
    icon: '⚽',
    name: 'KitKicks',
    desc: 'Football jerseys and boots store with a product catalog, cart, and checkout flow for fans and players.',
    tags: ['Next.js', 'E-commerce', 'Cart & Checkout', 'Responsive UI'],
    category: 'E-commerce',
    link: 'https://kitkicks1.vercel.app'
  },
  {
    icon: '📊',
    name: 'Edusignal',
    desc: 'AI-powered K-12 district intelligence platform for EdTech sales teams, consolidating data across 15,000+ districts with prospecting, fit scoring, and call-prep tools.',
    tags: ['Next.js', 'AI', 'Data Analytics', 'SaaS'],
    category: 'Web',
    link: 'https://edusignal.vercel.app'
  },
  {
    icon: '💼',
    name: 'Darhmi Wager',
    desc: 'Smart wage calculator (WagePro) for tracking earnings with hourly rates, overtime, bonuses, tax deductions, and saved calculation history.',
    tags: ['React', 'JavaScript', 'Productivity', 'Local Storage'],
    category: 'Web',
    link: 'https://darhmi-wager.vercel.app'
  },
  {
    icon: '📸',
    name: 'Photographer Booking Platform',
    desc: 'Intuitive booking system for photographers with portfolio showcase, scheduling, and payment integration.',
    tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'API Integration'],
    category: 'Web',
    link: null
  },
  {
    icon: '🏦',
    name: 'Online Banking Demo',
    desc: 'Modern banking interface demonstrating secure transactions, account management, and financial analytics.',
    tags: ['React', 'JavaScript', 'CSS3', 'Responsive Design'],
    category: 'Web',
    link: null
  },
  {
    icon: '👗',
    name: 'Fashion Store',
    desc: 'Elegant fashion e-commerce platform with advanced filtering, wishlist features, and smooth checkout experience.',
    tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'UI/UX'],
    category: 'E-commerce',
    link: null
  },
  {
    icon: '🎨',
    name: 'Digital Agency Website',
    desc: 'Professional agency website showcasing services, portfolio, and client testimonials with modern aesthetics.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    category: 'Web',
    link: null
  },
  {
    icon: '🏟️',
    name: 'Online Sports Store',
    desc: 'Dynamic sports equipment store with product catalogs, shopping cart, and seamless user experience.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'E-Commerce'],
    category: 'E-commerce',
    link: null
  }
];

const experiences = [
  {
    period: 'Apr 2025 — Present',
    current: true,
    role: 'Frontend Developer',
    company: 'Makarios Tech · Remote',
    bullets: [
      'Built and shipped product interfaces from design to deployment using React.js and Tailwind CSS',
      'Collaborated with product and backend teams in a remote-first workflow, meeting sprint deadlines consistently',
      'Implemented responsive, accessible UI components following modern web standards',
      'Integrated RESTful APIs to connect frontend views with live data and dynamic content'
    ],
    tag: 'React · Tailwind'
  },
  {
    period: 'Jul 2025 — Present',
    current: true,
    role: 'Frontend Developer',
    company: 'Lilyshop · Remote',
    bullets: [
      'Led frontend development on Lilyshop, a TikTok-style vertical-scroll food ordering app with in-feed ordering',
      'Designed and built the full in-feed product discovery UI, delivering a swipe-native consumer experience',
      'Optimised component render performance for smooth scroll interactions on mobile-first consumers',
      'Worked cross-functionally to translate product vision into shipped, user-facing features'
    ],
    tag: 'React · UX'
  },
  {
    period: 'Prior',
    current: false,
    role: 'Frontend Developer',
    company: 'Inspirem Media Network',
    bullets: [
      'Developed and maintained web interfaces for a media network, ensuring consistent visual standards',
      'Built reusable component libraries that reduced development time across multiple internal properties',
      'Translated brand and design guidelines into pixel-accurate, responsive frontend implementations'
    ],
    tag: 'HTML · CSS · JS'
  }
];

const skills = {
  frontend: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Styled-Components'],
  api: ['REST APIs', 'API Integration', 'Supabase', 'Firebase'],
  tools: ['Git / GitHub', 'Responsive Design', 'Figma', 'Vercel', 'Netlify'],
  design: ['UI/UX Design', 'Product Design', 'Design Systems']
};

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    const cursor = document.getElementById('cursor');

    const handleMouseMove = (e) => {
      if (!cursor) return;
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const handleMouseEnter = () => cursor?.classList.add('expand');
    const handleMouseLeave = () => cursor?.classList.remove('expand');

    document.addEventListener('mousemove', handleMouseMove);

    const interactiveEls = document.querySelectorAll('a, button, .skill-pill, .project-card');
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 60);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up').forEach((el) => obs.observe(el));

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      obs.disconnect();
    };
  }, [showAllProjects]);

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 9);

  return (
    <>
      <div className="cursor" id="cursor"></div>

      <nav>
        <a href="#" className="nav-logo">MB.</a>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="/balogun-mishael-portfolio.docx" className="btn btn-primary" style={{fontSize:'12px', padding:'10px 20px'}} download="balogun-mishael-portfolio.docx">Download CV (DOCX)</a>
      </nav>

      <section className="hero" id="home" style={{paddingTop:'80px', paddingBottom:'0'}}>
        <div className="hero-left fade-up">
          <div className="hero-badge">Available for opportunities</div>
          <h1>
            Frontend<br/>
            <span className="accent-text">Engineer</span><br/>
            &amp; Builder
          </h1>
          <p className="hero-sub">
            I build products people actually use — from TikTok-style food apps to blockchain implementations. Based in Lagos, Nigeria, shipping remotely for the world.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Projects <span>↓</span></a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>
        </div>
        <div className="hero-right fade-up" style={{transitionDelay:'0.15s'}}>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">6<span>+</span></div>
              <div className="label">Live Products</div>
            </div>
            <div className="hero-stat">
              <div className="num">2<span>+</span></div>
              <div className="label">Years Building</div>
            </div>
            <div className="hero-stat">
              <div className="num">3<span>+</span></div>
              <div className="label">Companies</div>
            </div>
            <div className="hero-stat">
              <div className="num">∞</div>
              <div className="label">Lines Shipped</div>
            </div>
          </div>
          <div className="hero-stack-label">Core Stack</div>
          <div className="tech-tags">
            <span className="tech-tag highlight">React.js</span>
            <span className="tech-tag highlight">Tailwind CSS</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">HTML / CSS</span>
            <span className="tech-tag">REST APIs</span>
            <span className="tech-tag">Git / GitHub</span>
            <span className="tech-tag">UI/UX</span>
            <span className="tech-tag">Bootstrap</span>
          </div>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-label">Experience</div>
        <h2>Where I&apos;ve Worked</h2>
        <div className="exp-list">
          {experiences.map((exp, i) => (
            <div className="exp-item fade-up" key={i}>
              <div className="exp-period">{exp.period}</div>
              <div>
                {exp.current && <div className="exp-current">● Current</div>}
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">{exp.company}</div>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
              <span className="exp-tag">{exp.tag}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" style={{background: 'var(--paper)'}}>
        <div className="section-label">Selected Work</div>
        <h2>Things I&apos;ve Built</h2>
        <div className="projects-grid">
          {visibleProjects.map((p, i) => (
            <div className={`project-card ${p.featured ? 'featured' : ''} fade-up`} style={{transitionDelay:`${0.05 + i * 0.04}s`}} key={p.name}>
              <div className="project-icon">{p.icon}</div>
              <div className="project-name">{p.name}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => <span className="project-tag" key={t}>{t}</span>)}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit live site for ${p.name}`}
                >
                  Live site <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          ))}
        </div>
        {projects.length > 9 && (
          <div className="projects-actions fade-up">
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setShowAllProjects((v) => !v)}
              aria-expanded={showAllProjects}
            >
              {showAllProjects ? 'Show less' : `Show more (${projects.length - 9})`}
            </button>
          </div>
        )}
      </section>

      <section id="about" style={{background: 'var(--card-bg)', borderTop: '1px solid var(--line)'}}>
        <div className="section-label">About</div>
        <div className="about-grid">
          <div className="fade-up">
            <h2 style={{marginBottom:'1.5rem'}}>Building at the<br/>intersection of<br/>design &amp; code</h2>
            <p className="about-text">
              I&apos;m <strong>Mishael Balogun Omokaphe</strong>, a frontend developer and product builder based in <strong>Lagos, Nigeria</strong>. I specialise in turning ideas into real, shippable products — from consumer apps to blockchain infrastructure.
            </p>
            <br/>
            <p className="about-text">
              I care deeply about the craft: <strong>clean code, fast interfaces, and experiences that feel good to use.</strong> I&apos;ve worked with early-stage startups in remote-first environments, which means I ship fast, communicate clearly, and take ownership.
            </p>
            <br/>
            <p className="about-text">
              When I&apos;m not building, I&apos;m studying — completing my <strong>B.Sc. Computer Science</strong> at Lagos State University while actively pushing projects to production.
            </p>
            <div className="about-edu" style={{marginTop:'2rem'}}>
              <div className="edu-title">B.Sc. Computer Science</div>
              <div className="edu-sub">Lagos State University (LASU) · Epe Campus · Expected 2026</div>
            </div>
          </div>
          <div className="fade-up" style={{transitionDelay:'0.15s'}}>
            <div className="skill-group">
              <div className="skill-group-label">Frontend</div>
              <div className="skill-pills">
                {skills.frontend.map((s) => <span className="skill-pill" key={s}>{s}</span>)}
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-group-label">APIs &amp; Integration</div>
              <div className="skill-pills">
                {skills.api.map((s) => <span className="skill-pill" key={s}>{s}</span>)}
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-group-label">Tools &amp; Workflow</div>
              <div className="skill-pills">
                {skills.tools.map((s) => <span className="skill-pill" key={s}>{s}</span>)}
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-group-label">Design</div>
              <div className="skill-pills">
                {skills.design.map((s) => <span className="skill-pill" key={s}>{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="fade-up">
            <div className="section-label">Contact</div>
            <h2>Let&apos;s Build<br/>Something<br/>Together</h2>
            <p className="contact-sub">
              Open to frontend engineering roles, freelance contracts, and interesting product collaborations. Remote-first, global-ready.
            </p>
            <div className="contact-links">
              <a href="mailto:balogunmishael7@gmail.com" className="contact-link">
                <div className="contact-icon">✉️</div>
                balogunmishael7@gmail.com
              </a>
              <a href="https://github.com/MISHAEL-BALOGUN" className="contact-link" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon">⌥</div>
                github.com/MISHAEL-BALOGUN
              </a>
              <a href="https://www.linkedin.com/in/mishael-balogun-366274410" className="contact-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <div className="contact-icon">in</div>
                linkedin.com/in/mishael-balogun-366274410
              </a>
            </div>
          </div>
          <div className="contact-right fade-up" style={{transitionDelay:'0.15s'}}>
            <div className="availability-card">
              <div className="availability-status"><span className="availability-dot"></span>Available for Work</div>
              <p className="availability-text">Currently open to full-time remote positions and freelance frontend engineering contracts. Quick to onboard, async-friendly.</p>
            </div>
            <a href="/balogun-mishael-portfolio.docx" className="btn btn-primary" style={{width:'100%', justifyContent:'center', borderRadius:'12px', padding:'18px', fontSize:'14px'}} download="balogun-mishael-portfolio.docx">
              Download Full CV (DOCX)
            </a>
          </div>
        </div>
      </section>

      <footer>
        <span className="footer-copy">© 2025 Mishael Balogun Omokaphe. Built with care in Lagos.</span>
        <a href="#home" className="footer-back-top">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;