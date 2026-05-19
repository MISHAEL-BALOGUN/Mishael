import React, { useEffect } from 'react';

const projects = [
  {
    icon: '🛒',
    name: 'Lilyshop',
    desc: 'TikTok-style food ordering app where users scroll a vertical feed and order meals in-feed — zero friction from discovery to checkout.',
    tags: ['React.js', 'Tailwind CSS', 'REST API', 'Mobile-first'],
    featured: true
  },
  {
    icon: '🎓',
    name: 'SabiPass',
    desc: 'AI-powered education platform for Nigerian students — JAMB, WAEC, Post-UTME prep with an intelligent study assistant.',
    tags: ['React', 'AI Integration', 'Supabase']
  },
  {
    icon: '📸',
    name: 'Photographer Booking Platform',
    desc: 'End-to-end booking platform — full UX design through backend integration, enabling photographers to list, book, and manage sessions.',
    tags: ['React', 'UX Design', 'REST API']
  },
  {
    icon: '🌐',
    name: 'Zunto',
    desc: 'Global marketplace — architecture design and product strategy for a cross-border commerce platform built for scale.',
    tags: ['Product Design', 'Architecture', 'React']
  },
  {
    icon: '⛓️',
    name: 'Balcoin',
    desc: 'Custom Layer-1 Proof-of-Work blockchain — built from first principles, including consensus mechanism, transaction validation, and chain state.',
    tags: ['Blockchain', 'PoW', 'JavaScript']
  },
  {
    icon: '🪙',
    name: '$BINGO',
    desc: 'Solana memecoin with a native Telegram Web App integration — enabling in-chat token interaction and community engagement at launch.',
    tags: ['Solana', 'Telegram TWA', 'Web3']
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
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;
    
    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const handleMouseEnter = () => cursor.classList.add('expand');
    const handleMouseLeave = () => cursor.classList.remove('expand');

    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a, button, .skill-pill, .project-card').forEach(el => {
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
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
        <a href="/cv.html" className="btn btn-primary" style={{fontSize:'12px', padding:'10px 20px'}} target="_blank">Download CV</a>
      </nav>

      <section className="hero" id="home" style={{paddingTop:'80px', paddingBottom:'0'}}>
        <div className="hero-left fade-up">
          <div className="hero-badge">Available for opportunities</div>
          <h1>
            Frontend<br/>
            <span className="accent-text">Engineer</span><br/>
            & Builder
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
        <h2>Where I've Worked</h2>
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
        <h2>Things I've Built</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className={`project-card ${p.featured ? 'featured' : ''} fade-up`} style={{transitionDelay:`${0.1 + i * 0.05}s`}} key={i}>
              <div className="project-icon">{p.icon}</div>
              <div className="project-name">{p.name}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t, j) => <span className="project-tag" key={j}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" style={{background: 'var(--card-bg)', borderTop: '1px solid var(--line)'}}>
        <div className="section-label">About</div>
        <div className="about-grid">
          <div className="fade-up">
            <h2 style={{marginBottom:'1.5rem'}}>Building at the<br/>intersection of<br/>design & code</h2>
            <p className="about-text">
              I'm <strong>Mishael Balogun Omokaphe</strong>, a frontend developer and product builder based in <strong>Lagos, Nigeria</strong>. I specialise in turning ideas into real, shippable products — from consumer apps to blockchain infrastructure.
            </p>
            <br/>
            <p className="about-text">
              I care deeply about the craft: <strong>clean code, fast interfaces, and experiences that feel good to use.</strong> I've worked with early-stage startups in remote-first environments, which means I ship fast, communicate clearly, and take ownership.
            </p>
            <br/>
            <p className="about-text">
              When I'm not building, I'm studying — completing my <strong>B.Sc. Computer Science</strong> at Lagos State University while actively pushing projects to production.
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
                {skills.frontend.map((s, i) => <span className="skill-pill" key={i}>{s}</span>)}
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-group-label">APIs & Integration</div>
              <div className="skill-pills">
                {skills.api.map((s, i) => <span className="skill-pill" key={i}>{s}</span>)}
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-group-label">Tools & Workflow</div>
              <div className="skill-pills">
                {skills.tools.map((s, i) => <span className="skill-pill" key={i}>{s}</span>)}
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-group-label">Design</div>
              <div className="skill-pills">
                {skills.design.map((s, i) => <span className="skill-pill" key={i}>{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="fade-up">
            <div className="section-label">Contact</div>
            <h2>Let's Build<br/>Something<br/>Together</h2>
            <p className="contact-sub">
              Open to frontend engineering roles, freelance contracts, and interesting product collaborations. Remote-first, global-ready.
            </p>
            <div className="contact-links">
              <a href="mailto:mishaelbalogun@gmail.com" className="contact-link">
                <div className="contact-icon">✉️</div>
                mishaelbalogun@gmail.com
              </a>
              <a href="https://github.com/" className="contact-link" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon">⌥</div>
                github.com/mishael
              </a>
              <a href="https://linkedin.com/" className="contact-link" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon">in</div>
                linkedin.com/in/mishael-balogun
              </a>
            </div>
          </div>
          <div className="contact-right fade-up" style={{transitionDelay:'0.15s'}}>
            <div className="availability-card">
              <div className="availability-status"><span className="availability-dot"></span>Available for Work</div>
              <p className="availability-text">Currently open to full-time remote positions and freelance frontend engineering contracts. Quick to onboard, async-friendly.</p>
            </div>
            <a href="/cv.html" className="btn btn-primary" style={{width:'100%', justifyContent:'center', borderRadius:'12px', padding:'18px', fontSize:'14px'}} target="_blank">
              Download Full CV (PDF)
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