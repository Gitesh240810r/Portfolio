//Typed.JS 
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (!loader) return;

  loader.classList.add("is-hidden");
  setTimeout(() => loader.remove(), 2500);
});

const typed = new Typed('#typed', {
    strings : ["Student", "Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 100, 
    loop: true
  });

const progresslist = document.getElementById('progresslist');

const skills = [
    { name: 'HTML & CSS', progress: 99 },
    { name: 'JavaScript', progress: 70 },
    { name: 'Python', progress: 80 },
    { name: 'Vector Illustrations', progress: 75 },
    { name: 'Graphic Design', progress: 80 },
]

for (let skill of skills) {
    const skillElement = document.createElement('div');
    skillElement.classList.add('skill');
    skillElement.innerHTML = `
        <div class="flex justify-between px-3 font-semibold"> 
            <h2>${skill.name}</h2>
            <h2>${skill.progress}%</h2>
        </div>
        <div class="bg-slate-900 h-[15px] rounded-full">
            <div class="bg-blue-800 h-[15px] rounded-full w-[${skill.progress}%]"></div>
        </div>
    `;
    progresslist.appendChild(skillElement);
}

const interests = [
    "Web Dev & Full Stack",
    "AI & Computing",
    "Illustrations",
    "Architecture",
    "3D Modeling",
    "Photography",
    "Metal albums",
    "Anime",
    "Innovating",
    "Reading",
    "Aquascaping",
    "Gaming",
]
const interestslist = document.getElementById('interestslist');
for (let interest of interests) {
    interestslist.innerHTML += `<li class="bg-slate-900 rounded px-4 py-2 ">${interest}</li>`;
}

interestslist.innerHTML += interestslist.innerHTML;

const services = [
  {
    name: "Web Development",
    icon: "fa-solid fa-code",
    accent: "text-blue-300",
    text: "Building responsive and modern websites using HTML, CSS, and JavaScript. I enjoy bringing digital ideas to life and ensuring great user experiences."
  },
  {
    name: "UI/UX Design",
    icon: "fa-solid fa-palette",
    accent: "text-violet-300",
    text: "Crafting visually appealing layouts and seamless user flows. I pay careful attention to both aesthetics and usability in my designs."
  },
  {
    name: "Vector Illustrations",
    icon: "fa-solid fa-pen-nib",
    accent: "text-cyan-300",
    text: "Designing high-quality vector graphics and illustrations for web and print, combining creativity with technical skill."
  },
  {
    name: "Graphic Design",
    icon: "fa-solid fa-paintbrush",
    accent: "text-fuchsia-300",
    text: "Producing visually engaging graphics for branding, social media, and digital projects. I focus on clear communication through design."
  }
];

const serviceOutput = document.getElementById("serviceOutput");

for (let service of services){
  // Create a container div for each service with icon, title, and text
  const card = document.createElement('div');
  card.className = "rounded-2xl border border-white/10 bg-slate-800/85 p-6 min-w-[300px] h-full m-auto";

  card.innerHTML = `
    <div class="flex h-full flex-col">
      <div class="flex items-center">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/70 border border-white/10">
          <i class="${service.icon} text-lg ${service.accent}"></i>
        </div>
      </div>
      <div class="mt-6 flex-1">
        <div class="mb-3">
          <h2 class="text-xl font-semibold tracking-tight text-ink">${service.name}</h2>
        </div>
        <p class="text-sm leading-7 text-ink-secondary">${service.text}</p>
      </div>
    </div>
  `;

  // Append card to output
  serviceOutput.appendChild(card);
}

const projects = [
  {
    name: "Xpenses",
    description: "A personal expense tracker built to log spending, organize categories, and make day-to-day money habits easier to understand.",
    tools: [
      { name: "HTML5", icon: "fa-brands fa-html5 text-orange-600" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt text-blue-500" },
      { name: "JavaScript", icon: "fa-brands fa-js-square text-yellow-400" },
      { name: "Local Storage", icon: "fa-solid fa-hard-drive text-slate-300" },
      { name: "Charts", icon: "fa-solid fa-chart-pie text-pink-400" },
      { name: "Firebase", icon: "devicon-firebase-plain colored" }
  
    ],  
    link: "https://gitesh240810r.github.io/Xpenses/",
    image: "assets/projects/Xpenses.png"
  },
  {
    name: "CookStation",
    description: "A recipe-focused web project with a clean interface for browsing meals, exploring cooking ideas, and presenting food content in a more engaging way.",
    tools: [
      { name: "HTML5", icon: "fa-brands fa-html5 text-orange-600" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt text-blue-500" },
      { name: "JavaScript", icon: "fa-brands fa-js-square text-yellow-400" },
      { name: "Firebase", icon: "devicon-firebase-plain colored" }
      
    ],  
    link: "https://gitesh240810r.github.io/CookStation/",
    image: "assets/projects/Cookstation.png"
  },
  {
    name: "Vector Illustrations",
    description: "A collection of vector-based artwork focused on clean shapes, bold composition, and illustration work suited for digital use and visual storytelling.",
    tools: [
      { name: "Inkscape", icon: "devicon-inkscape-plain " },
    ],  
    link: "illustrations.html",
    image: "https://icons8.com/blog/wp-content/uploads/2023/10/lunacy_screenshot-1024x583.webp"
  },
  
];

const projContainer = document.getElementById("projContainer");
for (let project of projects){
    const card = document.createElement("div");
    card.classList = " bg-slate-800 p-3 rounded-xl max-w-[500px] h-full m-auto "
    let toolsHtml = "";

    for (let tool of project.tools) {
      toolsHtml += `
        <span class="inline-flex items-center gap-2 bg-slate-900/60 border border-white/10 rounded-full px-3 py-1">
          <i class="${tool.icon}" aria-hidden="true"></i>
          <span class="text-sm text-ink-secondary">${tool.name}</span>
        </span>
      `;
    }

    card.innerHTML = `
            <a href="${project.link}" target="_blank" rel="noreferrer">
            <img src="${project.image}" alt="${project.name}" class="object-cover w-full h-56 bg-slate-700"/>
            </a>
            <div class="p-5 flex flex-col flex-1">
                <h3 class="text-xl font-bold mb-2 text-ink">${project.name}</h3>
                <p class="text-ink-muted mb-3 flex-1">${project.description}</p>
            <div class="flex flex-wrap gap-2 text-lg mt-auto">
            ${toolsHtml}
            </div>
            </div>
            </a>
        `
    projContainer.appendChild(card);

    VanillaTilt.init(card, {
        max: 5,
        speed: 300,
        glare: true,
        "max-glare": 0.25,
    });
}


