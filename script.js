const translations = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    availability: 'Available for internships and entry-level roles',
    title: 'Information Systems Graduate',
    intro: 'I design practical digital solutions, improve user experiences, and build systems that are reliable, efficient, and easy to use.',
    cta_projects: 'View Projects',
    cta_contact: 'Contact Me',
    cta_cv: 'Download CV',
    about: 'About',
    about_title: 'About me',
    bio_text: 'I am a motivated Information Systems graduate with a strong foundation in web development, database design, and problem solving. I enjoy turning business needs into user-friendly digital products that improve efficiency and decision-making.',
    stat_projects: 'Projects',
    stat_skills: 'Skills',
    stat_certificates: 'Certificates',
    skills: 'Skills',
    skills_title: 'Core skills',
    featured: 'Featured',
    featured_title: 'Selected work',
    timeline: 'Education & experience',
    timeline_title: 'Academic and practical background',
    certificates: 'Certificates',
    certificates_title: 'Professional certifications',
    footer_nav: 'Navigation',
    footer_connect: 'Connect',
    footer_tag: 'Information Systems graduate',
    projects: 'Projects',
    all_projects: 'Selected projects',
    contact: 'Contact',
    contact_title: "Let's talk",
    contact_subtitle: 'Available for internships, collaboration, and junior IT roles.',
    label_name: 'Name',
    label_email: 'Email',
    label_subject: 'Subject',
    label_message: 'Message',
    send_message: 'Send Message',
    bio_heading: 'Profile',
    bio_detail: 'I am an Information Systems graduate with practical interest in front-end development, database design, and digital process improvement. I enjoy building tools that help students, organizations, and teams work smarter and faster.',
    strengths_heading: 'Strengths',
    strength_1: 'Problem solving and analytical thinking',
    strength_2: 'Responsive web design and accessibility',
    strength_3: 'Database and data management',
    strength_4: 'Clear communication and teamwork',
    education_heading: 'Education',
    experience_heading: 'Experience',
  },
  om: {
    nav_home: 'Garaa',
    nav_about: 'Waa’ee',
    nav_projects: 'Projectootaa',
    nav_contact: 'Qunnamtii',
    availability: 'Internshipii fi hojii jalqabaa for ni jira',
    title: 'Digrii Information Systems',
    intro: 'Furmaataa dinagdee, muuxannoo namaa fooyyessa, fi sirna mijaa’a fi tajaajila salphaa nan qopheessa.',
    cta_projects: 'Projectootaa ilaali',
    cta_contact: 'Na qunnamii',
    cta_cv: 'CV ol kaa’i',
    about: 'Waa’ee',
    about_title: 'Waa’ee ko',
    bio_text: 'Ani digrii Information Systems qabeessa, bakka website, database, fi furmaata saala dandeettii qaba. Guddina hojii fi rakkoowwan namaaf meeshaa tolaa nan qopheessa.',
    stat_projects: 'Projectootaa',
    stat_skills: 'Dandeettii',
    stat_certificates: 'Sawwan',
    skills: 'Dandeettii',
    skills_title: 'Dandeettii ijoo',
    featured: 'Adda baafamoo',
    featured_title: 'Hojii filatame',
    timeline: 'Barnoota & muuxannoo',
    timeline_title: 'Barnoota fi muuxannoo hojii',
    certificates: 'Sawwan',
    certificates_title: 'Sawwan ogeessota',
    footer_nav: 'Marsa',
    footer_connect: 'Qunnamtii',
    footer_tag: 'Digrii Information Systems',
    projects: 'Projectootaa',
    all_projects: 'Projectootaa filataman',
    contact: 'Qunnamtii',
    contact_title: 'Mari’achi',
    contact_subtitle: 'Internship, hirmannaa, fi hojii junior IT akka taatuu danda’a.',
    label_name: 'Maqaa',
    label_email: 'Imeelii',
    label_subject: 'Mata duree',
    label_message: 'Ergaa',
    send_message: 'Ergaa ergi',
    bio_heading: 'Baay’ina',
    bio_detail: 'Ani digrii Information Systems qaba, web, database, fi fooyyessa furmaata tarkaanfii irratti hojjachuu nan jaaladha. Quminnoota barattootaa, dhaabbataa, fi gareewwan ni gargaara.',
    strengths_heading: 'Dandeettii',
    strength_1: 'Rakkina furuu fi yaada qindaa’uu',
    strength_2: 'Web design fi accessibility',
    strength_3: 'Database fi data management',
    strength_4: 'Namoonni waliin marii fi garee hojii',
    education_heading: 'Barnoota',
    experience_heading: 'Muuxannoo',
  }
};

const skillData = [
  { name: 'PHP', category: 'Programming' },
  { name: 'HTML5', category: 'Web Development' },
  { name: 'CSS3', category: 'Web Development' },
  { name: 'JavaScript', category: 'Web Development' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Git', category: 'Tools' },
  { name: 'Networking', category: 'Systems' },
  { name: 'UI/UX', category: 'Design' }
];

const projectData = [
  {
    title: 'Student Management System',
    category: 'Web Platform',
    description: 'A role-based student information solution for schools and academic teams.',
    image: 'project-placeholder.svg'
  },
  {
    title: 'Inventory Dashboard',
    category: 'Business system',
    description: 'A reporting dashboard for stock monitoring, alerts, and operational decisions.',
    image: 'project-placeholder.svg'
  },
  {
    title: 'Portfolio Website',
    category: 'Personal Brand',
    description: 'A responsive portfolio built to showcase experience, skills, and project work.',
    image: 'project-placeholder.svg'
  }
];

const certData = [
  { title: 'Intro to Cybersecurity', issuer: 'Coursera' },
  { title: 'PHP for Beginners', issuer: 'Codecademy' }
];

const timelineData = [
  { title: 'BSc in Information Systems', org: 'Addis Ababa University', period: '2021 – 2025' },
  { title: 'Diploma in Computer Science', org: 'Hawassa Polytechnic', period: '2018 – 2020' },
  { title: 'IT Support Intern', org: 'Local NGO', period: '2024' }
];

function getPreferredLanguage() {
  const saved = localStorage.getItem('portfolio_lang');
  return saved || 'en';
}

function setLanguage(lang) {
  const language = translations[lang] ? lang : 'en';
  document.documentElement.lang = language;
  localStorage.setItem('portfolio_lang', language);
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const text = translations[language][key] || translations.en[key];
    if (text) el.textContent = text;
  });
  const langSwitch = document.getElementById('langSwitch');
  if (langSwitch) langSwitch.value = language;
}

function setTheme(theme) {
  const nextTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', nextTheme);
  localStorage.setItem('portfolio_theme', nextTheme);
  const toggle = document.getElementById('themeToggle');
  if (toggle) toggle.textContent = nextTheme === 'dark' ? '🌙' : '☀️';
}

function renderSkills() {
  const container = document.getElementById('skillGrid');
  if (!container) return;

  container.innerHTML = skillData.map(skill => `
    <article class="skill-card">
      <span class="tag">${skill.category}</span>
      <h4>${skill.name}</h4>
      <p>Focused on practical application in modern digital projects.</p>
    </article>
  `).join('');
}

function renderProjects() {
  const container = document.getElementById('featuredProjects');
  const projectList = document.getElementById('projectGrid');
  if (container) {
    container.innerHTML = projectData.slice(0, 3).map(project => `
      <article class="project-card">
        <div class="thumb" style="background-image:url('${project.image}'); background-size: cover; background-position: center;"></div>
        <div class="project-body">
          <span class="tag">${project.category}</span>
          <h4>${project.title}</h4>
          <p>${project.description}</p>
          <a class="more-link" href="projects.html">View project</a>
        </div>
      </article>
    `).join('');
  }

  if (projectList) {
    projectList.innerHTML = projectData.map(project => `
      <article class="project-card">
        <div class="thumb" style="background-image:url('${project.image}'); background-size: cover; background-position: center;"></div>
        <div class="project-body">
          <span class="tag">${project.category}</span>
          <h4>${project.title}</h4>
          <p>${project.description}</p>
        </div>
      </article>
    `).join('');
  }
}

function renderCertificates() {
  const container = document.getElementById('certList');
  if (!container) return;
  container.innerHTML = certData.map(cert => `
    <article class="cert-card">
      <h4>${cert.title}</h4>
      <p>${cert.issuer}</p>
    </article>
  `).join('');
}

function renderTimeline() {
  const container = document.getElementById('timelineList');
  if (!container) return;
  container.innerHTML = timelineData.map(item => `
    <div class="timeline-item">
      <h4>${item.title}</h4>
      <p>${item.org}</p>
      <small>${item.period}</small>
    </div>
  `).join('');
}

function setupThemeToggle() {
  const savedTheme = localStorage.getItem('portfolio_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  setTheme(initialTheme);

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(current);
    });
  }
}

function setupLanguage() {
  const saved = getPreferredLanguage();
  setLanguage(saved);

  const langSwitch = document.getElementById('langSwitch');
  if (langSwitch) {
    langSwitch.addEventListener('change', (event) => {
      setLanguage(event.target.value);
    });
  }
}

function setupNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (!navToggle || !nav) return;

  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = document.getElementById('formStatus');
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      status.textContent = 'Please complete all required fields.';
      status.className = 'form-status error';
      return;
    }

    const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOK) {
      status.textContent = 'Please enter a valid email address.';
      status.className = 'form-status error';
      return;
    }

    status.textContent = 'Your message has been sent successfully.';
    status.className = 'form-status success';
    form.reset();
  });
}

function setupProjectFilters() {
  const filterContainer = document.getElementById('projectFilters');
  if (!filterContainer) return;

  const categories = ['All', 'Web Platform', 'Business system', 'Personal Brand'];
  filterContainer.innerHTML = `
    <select id="filterSelect">
      ${categories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
    </select>
    <input id="projectSearch" type="search" placeholder="Search projects" />
    <button type="button" id="applyFilter">Filter</button>
  `;

  const projectList = document.getElementById('projectGrid');
  const applyFilter = () => {
    const value = document.getElementById('filterSelect').value;
    const query = document.getElementById('projectSearch').value.trim().toLowerCase();

    const filtered = projectData.filter(project => {
      const matchesCategory = value === 'All' || project.category === value;
      const matchesSearch = !query || project.title.toLowerCase().includes(query) || project.description.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });

    if (projectList) {
      projectList.innerHTML = filtered.map(project => `
        <article class="project-card">
          <div class="thumb" style="background-image:url('${project.image}'); background-size: cover; background-position: center;"></div>
          <div class="project-body">
            <span class="tag">${project.category}</span>
            <h4>${project.title}</h4>
            <p>${project.description}</p>
          </div>
        </article>
      `).join('') || '<div class="card">No projects match your search.</div>';
    }
  };

  document.getElementById('applyFilter').addEventListener('click', applyFilter);
  document.getElementById('projectSearch').addEventListener('input', applyFilter);
  document.getElementById('filterSelect').addEventListener('change', applyFilter);
}

function setupYear() {
  document.querySelectorAll('#year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupYear();
  setupThemeToggle();
  setupLanguage();
  setupNav();
  renderSkills();
  renderProjects();
  renderCertificates();
  renderTimeline();
  setupContactForm();
  setupProjectFilters();
});
