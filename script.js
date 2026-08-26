/* ==========================================================================
   IMAGE SLOTS
   ----------------------------------------------------------------------
   Drop your image files into images/projects/, images/site/ or
   images/cocurricular/ using the exact filenames referenced below.
   Until a file exists at that path, the page shows a "+ label" placeholder
   automatically (see imgSlot() and the .ph-slot CSS rules) — nothing breaks
   if an image is missing, so you can add them incrementally.
   ========================================================================== */

function imgSlot(src, alt, extraClass){
  return `<div class="${extraClass||''} ph-slot">` +
    `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.classList.add('ph-broken')">` +
    `<span class="ph-fallback lbl">+ ${alt}</span></div>`;
}

/* ---------------- Project data ---------------- */
const projects = [
  {
    id:"coolride", tags:["data","sustain","fullstack"], cat:"Sustainability",
    date:"2025 – 2026", context:"YDCT · SL2 × Meta", award:"1st Place · Youth Development for Climate Tech",
    title:"CoolRide — Designing for climate-aware mobility",
    impact:"A navigation system that lets cyclists choose between the fastest route and the coolest one.",
    stat:"34%", statCaption:"improvement in route comfort",
    body:[
      "Singapore's heat makes cycling unpleasant at exactly the times people need it most. CoolRide treats thermal comfort as a first-class routing constraint: using shade-aware geospatial analysis, it generates and compares route options by heat exposure, not just distance.",
      "I designed and built the system end to end — the geospatial analysis, an interactive web app, and a Llama-powered Telegram chatbot deployed on Hugging Face, with Supabase handling real-time route queries."
    ],
    role:"System design, geospatial analysis, full-stack build and deployment",
    result:"34% route comfort improvement; awarded 1st place among all teams",
    tech:"Python · OSMnx · GeoPandas · Gemini · Hugging Face Spaces · Render · Telegram Bot API",
    images:["Route comparison screenshot","Award photo"],
    links:[
      {t:"Web app ↗",u:"https://thermal-optimizers-coolride-engine.hf.space/"},
      {t:"Telegram bot ↗",u:"https://t.me/coolride_bot"},
      {t:"GitHub ↗",u:"https://github.com/arishya7/Cool_Route_prototype.git"},
      {t:"Presentation ↗",u:"https://www.canva.com/design/DAG8zNFJ5Bc/JY-JbZnh5yR6hQkbWCoxpA/edit?utm_content=DAG8zNFJ5Bc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"}
    ]
  },
  {
    id:"aumovio", tags:["ai"], cat:"AI & Automation",
    date:"May 2026 – Present", context:"Internship · Code private",
    title:"Aumovio — Automating requirements engineering",
    impact:"Replacing manual requirement re-entry with AI-assisted pipelines that preserve traceability.",
    stat:"34+", statCaption:"vehicle modules automated",
    body:[
      "Automotive requirements live in large, tightly controlled systems where manual updates are slow and error-prone. As a System Requirements Engineer intern, I own end-to-end automation of requirement extraction, verification and change control across 34+ vehicle modules, each with hundreds of parameters.",
      "I led the design of a Compare-and-Update pipeline that syncs verified requirement changes into IBM DOORS Next Generation without manual re-entry, coordinating with requirements engineers across Singapore and India — and built a test suite and rule set from scratch where no prior coverage framework existed."
    ],
    role:"Automation design, AI-assisted tooling, verification framework",
    result:"Eliminated manual re-entry for hundreds of requirement updates; closed an untested edge-case gap",
    tech:"Python · Agentic AI · IBM DOORS DNG",
    images:["Sanitized workflow diagram (check with company)"],
    links:[]
  },
  {
    id:"databusters", tags:["data","ai"], cat:"Data",
    date:"Feb – Apr 2026", context:"Computational Data Science",
    title:"DataBusters — Predicting bus wait times from live city data",
    impact:"Combining five live transport datasets with contextual feature engineering to make predictions people can trust.",
    stat:"72%", statCaption:"reduction in prediction error (MAE 1.26 min)",
    body:[
      "Bus arrival predictions fail when they ignore what's happening on the road. I engineered contextual features from five live LTA DataMall endpoints — traffic incidents, speed bands, road works, faulty traffic lights — and fed them into a LightGBM model, cutting prediction error by 72%.",
      "The work ships as the Singapore Bus Intelligence Dashboard: an interactive four-tab platform visualising predictions, sentiment and reliability metrics across all 559 bus services."
    ],
    role:"Feature engineering, model development, dashboard build",
    result:"MAE reduced to 1.26 minutes across 559 services",
    tech:"Python · LightGBM · LTA DataMall APIs · Streamlit",
    images:["Dashboard screenshot","Model results chart"],
    links:[{t:"Dashboard ↗",u:"#"},{t:"Report ↗",u:"#"}]
  },
  {
    id:"caretech", tags:["ai","design","research"], cat:"Design & Hardware",
    date:"Feb 2026 – Present", context:"Capstone",
    title:"CareTech — A wearable knee device for elderly rehabilitation",
    impact:"Grounding a medical device in real clinical workflows, then making its sensor data trustworthy.",
    stat:"120+", statCaption:"stakeholders interviewed across CGH, SGH and care centres",
    body:[
      "Rehabilitation tracking only helps if clinicians trust the data and patients actually wear the device. I led user research across CGH, SGH and elderly care centres — 120+ interviews with patients, caregivers and clinicians — which directly shaped the device design and its place in clinical workflows.",
      "On the technical side, I built an ML-based calibration pipeline that corrects sensor drift, improving the accuracy of the movement-tracking data used for rehabilitation monitoring."
    ],
    role:"User research lead, ML calibration pipeline",
    result:"Research-backed device design; improved movement-tracking accuracy",
    tech:"ML calibration · Wearable sensors · Clinical user research",
    images:["Presentation slide","Device concept"],
    links:[{t:"Presentation ↗",u:"#"}]
  },
  {
    id:"signify", tags:["ai","fullstack","design"], cat:"AI & ML",
    date:"2025", context:"Mobile app", award:"3rd Place · Singtel IS & Programming Award",
    title:"Signify — Real-time computer vision for sign language learning",
    impact:"A camera as your coach: instant feedback on hand gestures, gamified to keep learners coming back.",
    stat:"80–90%", statCaption:"sign recognition accuracy (custom YOLOv5)",
    body:[
      "Signify uses a custom YOLOv5 model — trained on 10,000+ hand-sign images — to give learners real-time feedback on their gestures.",
      "Firestore powers instant data updates behind a dynamic leaderboard, a randomised vocabulary bank and personalised learning tips."
    ],
    role:"Model training, Android development, UI/UX",
    result:"80–90% recognition accuracy; 3rd place, Singtel award",
    tech:"YOLOv5 · Android Studio · Java · Firestore",
    images:["App poster","Award photo"],
    links:[{t:"App demo ↗",u:"#"},{t:"UI board ↗",u:"https://app.visily.ai/projects/d75c8db4-dc78-4877-8b9f-d70817b7d9c1/boards/1656082"}]
  },
  {
    id:"urop", tags:["ai","research"], cat:"Research",
    date:"UROP", context:"Research",
    title:"Evaluating explainability in reasoning models",
    impact:"When AI gives mental-health support, can we trust how it explains itself?",
    stat:"7", statCaption:"model families benchmarked",
    body:[
      "Mental-health support is a domain where transparency, consistency and safety are non-negotiable. This research evaluates how reasoning-capable LLMs — Claude, GPT, Llama, Qwen, Grok, Gemini and DeepSeek — express their thought processes in support scenarios, and whether those explanations are suitable for everyday use.",
      "I built the evaluation framework, scoring models across technical accuracy, factual consistency, coherence, tone and empathy."
    ],
    role:"Evaluation framework design, benchmarking, analysis",
    result:"Cross-model benchmark across 9 quality dimensions",
    tech:"Python · Prompt engineering · LLM evaluation",
    images:["Evaluation matrix screenshot"],
    links:[{t:"Evaluation sheet ↗",u:"#"}]
  },
  {
    id:"sociallistening", tags:["data","ai","fullstack"], cat:"Data",
    date:"Aug 2025 – Jan 2026", context:"Mummy's Market",
    title:"Social Listening Dashboard — Turning online chatter into signal",
    impact:"An analytics platform that aggregates conversation across sources and turns it into sentiment, keyword and reliability signals marketing teams can act on.",
    stat:"70%", statCaption:"cut in manual QA effort via Gemini-powered validation",
    body:[
      "The Social Listening Dashboard aggregates unstructured content from multiple online sources and turns it into structured signals — sentiment, keywords and topic reliability — for marketing and strategy teams to act on.",
      "I built the pipeline end to end: ingesting and cleaning raw data with Python and DuckDB, extracting keywords with KeyBERT, scoring sentiment with a dedicated model and the Gemini API, and serving results through a FastAPI backend behind a four-tab dashboard."
    ],
    role:"Pipeline design, backend build, dashboard build",
    result:"Live four-tab dashboard; Gemini-powered validation cut manual QA effort by 70%",
    tech:"JavaScript · Tailwind CSS · Python · DuckDB · KeyBERT · Gemini API · FastAPI · Pandas · Fly.io · S3",
    images:["Dashboard screenshot","Sentiment chart"],
    links:[]
  },
  {
    id:"influencerdash", tags:["data","fullstack"], cat:"Data",
    date:"Aug 2025 – Jan 2026", context:"Mummy's Market",
    title:"Influencer Dashboard — One interface for discovery and outreach",
    impact:"Consolidating influencer data from multiple platforms into a single structured interface for discovery, evaluation and outreach.",
    stat:"500+", statCaption:"online sources consolidated",
    body:[
      "Influencer data lives scattered across platforms, which makes discovery and evaluation slow. The Influencer Dashboard consolidates data scraped from multiple social platforms and public sources into one structured interface, so marketing and partnerships teams can discover, evaluate and reach out to influencers without piecing data together by hand.",
      "I built the scraping and enrichment pipeline with Playwright, Beautiful Soup, AgentQL and Apify, served it through a FastAPI backend backed by MySQL, and packaged the system with Docker for deployment."
    ],
    role:"Scraping pipeline, backend build, deployment",
    result:"Live dashboard consolidating influencer data across platforms for the marketing team",
    tech:"Streamlit · Python · FastAPI · MySQL · Docker · Playwright · Beautiful Soup · AgentQL · Apify",
    images:["Dashboard screenshot","Influencer profile view"],
    links:[]
  },
  {
    id:"aquaponics", tags:["ai","design","sustain"], cat:"Sustainability",
    date:"2025", context:"Personal project",
    title:"Aquaponics Monitoring — Computer vision for water quality",
    impact:"An automated monitoring system that reads nitrate and nitrite levels from water colour, replacing manual test strips.",
    stat:"—", statCaption:"automated water-quality monitoring",
    body:[
      "Manual water testing is slow and easy to skip, which makes it a weak link in sustainable aquaponics systems. I built an automated system that uses computer vision to detect and classify nitrate and nitrite levels — the indicators most critical to fish and plant health — from RGB/HSV colour analysis instead of manual test strips.",
      "The system runs on an ESP32 with OpenCV-based image processing, replacing manual test-strip reading with continuous, automated monitoring."
    ],
    role:"System design, embedded build, computer vision pipeline",
    result:"Working automated water-quality monitoring system",
    tech:"ESP32 · Arduino IDE · OpenCV · RGB/HSV Analysis",
    images:["System photo"],
    links:[]
  },
  {
    id:"hotel", tags:["fullstack"], cat:"Full-Stack",
    date:"May – Aug 2025", context:"Academic project",
    title:"Hotel Booking System — Architecture-first full-stack build",
    impact:"A booking platform integrated with Ascenda APIs, modeled before it was built.",
    stat:"10+", statCaption:"UML diagrams before a line of app code",
    body:[
      "Modeled the business logic with 10+ UML diagrams before building a React + Node.js/Express application, integrated with the Ascenda API, for booking management, authentication and data handling — built with a team of 8 and validated through unit, integration and system testing."
    ],
    role:"System architecture, full-stack development, testing",
    result:"Reliable end-to-end booking workflows, tested at unit, integration and system level",
    tech:"React · Node.js · Express · SQL · Ascenda API · REST APIs · UML",
    images:["App screenshot","Architecture diagram"],
    links:[
      {t:"Presentation ↗",u:"https://www.canva.com/design/DAGv3n0gUm4/X02pQJujENSV5RXZrWwR-g/view?utm_content=DAGv3n0gUm4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h46661a483d"},
      {t:"Demo video ↗",u:"https://youtu.be/QTGqpzzO-40"}
    ]
  },
  {
    id:"qube", tags:["design"], cat:"Design & Hardware",
    date:"2024", context:"Prototype",
    title:"Qube — An interactive cube for classroom curiosity",
    impact:"Students answer each other's questions; correct answers grow a hologram tree.",
    stat:"4", statCaption:"interactive screens for group learning",
    body:[
      "Qube lets students submit questions through a web app and collaborate on answering them across four interactive screens. Correct answers grow a tree-shaped hologram — a small visual reward that makes peer learning feel like a shared game."
    ],
    role:"Prototype build, pitching, UI/UX",
    result:"Working physical prototype, pitched end to end",
    tech:"Bubble.io · Prototyping · Pitching · Video Editing · UI/UX",
    images:["Prototype photo"],
    links:[
      {t:"Pitch video ↗",u:"https://youtu.be/OdO8izkvzos"},
      {t:"Web app ↗",u:"http://qube-17632.bubbleapps.io/version-test/"}
    ]
  },
  {
    id:"foodsec", tags:["data"], cat:"Data",
    date:"2024", context:"Academic project",
    title:"Modelling food security across Africa",
    impact:"A regression model — and an interactive website — that let anyone test what drives food insecurity.",
    stat:"54", statCaption:"countries analysed across 10 years of data",
    body:[
      "Food insecurity is driven by dozens of interacting socioeconomic factors, which is hard to reason about from a spreadsheet alone. I examined indicators across 54 African countries over a 10-year period and built a multi-linear regression model in Python and Excel to predict food security outcomes.",
      "To make the model usable beyond the report, I built a website with Bootstrap that lets anyone calculate a food insecurity index themselves by adjusting the key variables."
    ],
    role:"Data analysis, regression modelling, website build",
    result:"54-country, 10-year regression model, deployed as an interactive calculator",
    tech:"Python · Excel · Bootstrap · W3Schools · UI/UX",
    images:["Findings chart"],
    links:[{t:"Report ↗",u:"#"}]
  }
];

/* ---------------- Cards ---------------- */
const cardsEl = document.getElementById('cards');
projects.forEach(p=>{
  const btn = document.createElement('button');
  btn.className = 'card';
  btn.dataset.tags = p.tags.join(' ');
  btn.innerHTML = `
    ${imgSlot(`images/projects/${p.id}-thumb.jpg`, `Add ${p.title.split(' — ')[0]} image`, 'thumb')}
    <div class="inner">
      <span class="cat lbl">${p.cat}</span>
      <h3>${p.title.split(' — ')[0]}</h3>
      <span class="impact-line">${p.impact}</span>
      <span class="cardfoot"><span>${p.date}</span><span class="open">Open →</span></span>
    </div>`;
  btn.addEventListener('click',()=>{ location.hash = '#/project/'+p.id; });
  cardsEl.appendChild(btn);
});

/* ---------------- Filters ---------------- */
document.querySelectorAll('.chip').forEach(chip=>{
  chip.addEventListener('click',()=>{
    document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    const f = chip.dataset.filter;
    document.querySelectorAll('.card').forEach(c=>{
      c.classList.toggle('hidden', f!=='all' && !c.dataset.tags.split(' ').includes(f));
    });
  });
});

/* ---------------- Project detail render ---------------- */
function renderProject(p){
  const gallery = p.images.map((label,i)=>
    imgSlot(`images/projects/${p.id}-${i+1}.jpg`, label, 'gallery-item')
  ).join('');
  const links = p.links.map(l=>`<a class="btn" href="${l.u}" target="_blank" rel="noopener">${l.t}</a>`).join('');
  document.getElementById('projectContent').innerHTML = `
    <div class="proj-head">
      <div class="meta"><span class="cat">${p.cat}</span><span>${p.date}</span><span>${p.context||''}</span></div>
      <h1>${p.title}</h1>
      <p class="impact">${p.impact}</p>
      ${p.award?`<span class="proj-award">${p.award}</span>`:''}
    </div>
    <div class="proj-grid">
      <div class="proj-desc">${p.body.map(t=>`<p>${t}</p>`).join('')}</div>
      <aside class="proj-side">
        <div class="side-row"><div class="k">Key result</div><div class="statv">${p.stat}</div><div class="v">${p.statCaption}</div></div>
        <div class="side-row"><div class="k">Role</div><div class="v">${p.role}</div></div>
        <div class="side-row"><div class="k">Result</div><div class="v">${p.result}</div></div>
        <div class="side-row"><div class="k">Built with</div><div class="v">${p.tech}</div></div>
      </aside>
    </div>
    <div class="gallery">${gallery}</div>
    ${links?`<div class="proj-links">${links}</div>`:''}`;
}

/* ---------------- Router ---------------- */
const views = {
  work:'view-work', about:'view-about', experience:'view-experience',
  cocurricular:'view-cocurricular', awards:'view-awards', project:'view-project'
};
function route(){
  const hash = location.hash || '#/work';
  let name = 'work', projId = null;
  const m = hash.match(/^#\/(\w+)(?:\/(.+))?/);
  if(m){ name = m[1]; projId = m[2] || null; }
  if(hash === '#contactfooter'){ document.getElementById('contactfooter').scrollIntoView(); return; }
  if(!views[name]) name = 'work';
  if(name==='project'){
    const p = projects.find(x=>x.id===projId);
    if(!p){ location.hash='#/work'; return; }
    renderProject(p);
  }
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById(views[name]).classList.add('active');
  document.querySelectorAll('nav .links a').forEach(a=>{
    a.classList.toggle('active', a.dataset.nav===name || (name==='project' && a.dataset.nav==='work'));
  });
  window.scrollTo({top:0});
}
window.addEventListener('hashchange',route);
route();
