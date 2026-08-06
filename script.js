
/* =========================================================================
   EDIT YOUR DATA HERE
   Add a new job to EXPERIENCE or a new project to PROJECTS and the page
   updates automatically — no need to touch the HTML/CSS above.
   ========================================================================= */

const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "Puthur Infotech pvt. ltd.(Nuclear Power Corporation of India Limited, Mumbai) ",
    branch: "main",
    period: "02/2026 — Present",
    current: true,
    commits: [
      "Designed, built, and maintained <b>scalable web applications</b> using C#, ASP.NET, VB, ColdFusion.",
      "<b>Server Health Monitoring:</b> Check CPU, memory, disk space, and network load to prevent app crashes and downtime",
      "Identify and fix slow-running queries, missing indexes, and high latency issues."
    ]
  },
  {
    role: "Software Developer",
    company: "Alpha Plus Technology, Mumbai",
    branch: "Previous",
    period: "07/2023 — 02/2026",
    current: false,
    commits: [
      "Designed, built, and maintained <b>scalable web applications</b> using C#, ASP.NET, ASP.NET Core, MVC, and Angular.",
      "Implemented new features while resolving bugs, performance issues, and <b>security vulnerabilities</b>, applying OWASP best practices.",
      "Created an end-to-end <b>banking risk dashboard</b> using .NET and JavaScript, enabling risk data ingestion and visualization through interactive bar charts.",
      "Built an <b>AI-powered help guide chatbot</b> using LLMs and Retrieval-Augmented Generation (RAG) in Python, integrated with an ASP.NET application via REST APIs."
    ]
  },
  // ---- Add your next role by copying the block below and filling it in ----
  // {
  //   role: "Software Developer",
  //   company: "Company Name, City",
  //   branch: "feature/next-role",
  //   period: "MM/YYYY — MM/YYYY",
  //   current: false,
  //   commits: [
  //     "First achievement or responsibility.",
  //     "Second achievement or responsibility.",
  //     "Third achievement or responsibility."
  //   ]
  // },
];

const PROJECTS = [
  {
    name: "Fire Detection System",
    icon: "CV",
    desc: "Real-time fire detection using image classification with CNNs, trained on fire image datasets and capable of detecting fire from live video streams without physical sensors. Published at ICARD 2023.",
    tags: ["Python", "CNN", "Computer Vision", "Research Paper"],
    github: "", // e.g. "https://github.com/kunalbagde01/fire-detection"
    demo: ""
  },
  {
    name: "Zara Sales Prediction",
    icon: "ML",
    desc: "ML model to predict sales volume from structured business data — data cleaning, feature engineering, and comparison of Linear Regression, Decision Tree, and Random Forest regressors for real-time prediction.",
    tags: ["Python", "Regression", "scikit-learn", "Pandas"],
    github: "", // e.g. "https://github.com/kunalbagde01/zara-sales-prediction"
    demo: ""
  },
  // ---- Add future projects by copying the block below ----
  // {
  //   name: "Project Name",
  //   icon: "AI",
  //   desc: "Short description of what it does and how you built it.",
  //   tags: ["Tag1", "Tag2", "Tag3"],
  //   github: "https://github.com/kunalbagde01/your-repo",
  //   demo: ""
  // },
];

/* ========================================================================= */

function renderExperience(){
  const list = document.getElementById('logList');
  list.innerHTML = EXPERIENCE.map(job => `
    <div class="log-entry ${job.current ? 'current' : ''}">
      <div class="log-dot"></div>
      <div class="log-meta">
        <span class="branch">⎇ ${job.branch}</span>
        <span>${job.period}</span>
        ${job.current ? '<span class="badge">CURRENT</span>' : ''}
      </div>
      <div class="log-role">${job.role}</div>
      <div class="log-company">${job.company}</div>
      <ul class="log-commits">
        ${job.commits.map(c => `<li>${c}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderProjects(){
  const grid = document.getElementById('projGrid');
  grid.innerHTML = PROJECTS.map(p => `
    <div class="proj-card">
      <div class="proj-top">
        <div class="proj-icon">${p.icon}</div>
        <div class="proj-links">
          <a href="${p.github || '#'}" target="_blank" rel="noopener" class="${p.github ? '' : 'disabled'}">↗ code</a>
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">↗ demo</a>` : ''}
        </div>
      </div>
      <div class="proj-name">${p.name}</div>
      <div class="proj-desc">${p.desc}</div>
      <div class="proj-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

renderExperience();
renderProjects();

/* Mobile nav toggle */
document.getElementById('navtoggle').addEventListener('click', () => {
  document.getElementById('navlinks').classList.toggle('open');
});
document.querySelectorAll('.navlinks a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('navlinks').classList.remove('open'));
});

/* Terminal typing intro */
const termBody = document.getElementById('termBody');
const linesToType = [
  { type: 'out', text: 'Kunal Bagde — Software Developer' },
  { type: 'cmd', text: 'cat focus.txt' },
  { type: 'out', text: 'C# · ASP.NET Core · Angular · MS SQL Server' },
  { type: 'cmd', text: 'python ai_ml_status.py' },
  { type: 'out', text: 'RAG chatbots, CNNs, predictive models — learning daily.' },
];

function typeLine(el, text, speed, cb){
  let i = 0;
  const span = document.createElement('span');
  el.appendChild(span);
  const iv = setInterval(() => {
    span.textContent += text[i];
    i++;
    if(i >= text.length){ clearInterval(iv); cb && cb(); }
  }, speed);
}

function runTerminal(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce){
    linesToType.forEach(line => {
      const div = document.createElement('div');
      div.className = line.type === 'cmd' ? 'term-line' : 'term-out';
      div.innerHTML = line.type === 'cmd'
        ? `<span class="prompt">kunal@dev</span>:<span class="path">~</span>$ ${line.text}`
        : line.text;
      termBody.appendChild(div);
    });
    return;
  }

  let idx = 0;
  function next(){
    if(idx >= linesToType.length){
      const cursorLine = document.createElement('div');
      cursorLine.className = 'term-line';
      cursorLine.innerHTML = `<span class="prompt">kunal@dev</span>:<span class="path">~</span>$ <span class="cursor"></span>`;
      termBody.appendChild(cursorLine);
      return;
    }
    const line = linesToType[idx];
    const div = document.createElement('div');
    div.className = line.type === 'cmd' ? 'term-line' : 'term-out';
    if(line.type === 'cmd'){
      div.innerHTML = `<span class="prompt">kunal@dev</span>:<span class="path">~</span>$ `;
    }
    termBody.appendChild(div);
    typeLine(div, line.text, line.type === 'cmd' ? 38 : 14, () => {
      idx++;
      setTimeout(next, line.type === 'cmd' ? 260 : 420);
    });
  }
  next();
}
runTerminal();

/* Reveal on scroll */
const revealTargets = document.querySelectorAll('.log-entry, .proj-card, .edu-card');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

window.addEventListener('load', () => {
  revealTargets.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    io.observe(el);
  });
});
