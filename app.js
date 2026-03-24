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
    text: "Building responsive and modern websites using HTML, CSS, and JavaScript. I enjoy bringing digital ideas to life and ensuring great user experiences."
  },
  {
    name: "UI/UX Design",
    icon: "fa-solid fa-palette",
    text: "Crafting visually appealing layouts and seamless user flows. I pay careful attention to both aesthetics and usability in my designs."
  },
  {
    name: "Vector Illustrations",
    icon: "fa-solid fa-pen-nib",
    text: "Designing high-quality vector graphics and illustrations for web and print, combining creativity with technical skill."
  },
  {
    name: "Graphic Design",
    icon: "fa-solid fa-paintbrush",
    text: "Producing visually engaging graphics for branding, social media, and digital projects. I focus on clear communication through design."
  }
];

const serviceOutput = document.getElementById("serviceOutput");

for (let service of services){
  // Create a container div for each service with icon, title, and text
  const card = document.createElement('div');
  card.classList = "bg-slate-800 p-5 flex flex-col items-center min-w-[300px] h-full  m-auto "

  card.innerHTML = `
    <i class="${service.icon} text-4xl mb-4 text-indigo-400"></i>
    <h2 class="text-xl font-bold mb-2 text-ink">${service.name}</h2>
    <p class="text-ink-muted text-base text-center">${service.text}</p>
  `;

  // Append card to output
  serviceOutput.appendChild(card);
}

const projects = [
  {
    name: "Expense Tracker",
    description: "A web application that lets users track their daily expenses, set budgets, and analyze spending patterns with visualizations.",
    tools: [
      { name: "HTML5", icon: "fa-brands fa-html5 text-orange-600" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt text-blue-500" },
      { name: "JavaScript", icon: "fa-brands fa-js-square text-yellow-400" },
      { name: "Chart.js", icon: "fa-solid fa-chart-pie text-pink-400" }
    ],
    image: "assets/expense-tracker.png"
  },
  {
    name: "Personal Blog",
    description: "A responsive, modern blog platform with support for markdown, dark mode, and easy content editing for developers.",
    tools: [
      { name: "HTML5", icon: "fa-brands fa-html5 text-orange-600" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt text-blue-500" },
      { name: "JavaScript", icon: "fa-brands fa-js-square text-yellow-400" },
      { name: "Netlify", icon: "fa-solid fa-cloud-arrow-up text-green-400" }
    ],
    image: "assets/personal-blog.png"
  },
  {
    name: "3D Blender Model",
    description: "A portfolio piece featuring a complex 3D model built and rendered using Blender, showcasing modeling and texturing skills.",
    tools: [
      { name: "Blender", icon: "fa-brands fa-blender text-orange-500" },
      { name: "Photoshop", icon: "fa-solid fa-paintbrush text-blue-300" }
    ],
    image: "assets/3d-model.png"
  }
];

const projContainer = document.getElementById("projContainer");
for (let project of projects){
    const card = document.createElement("div");
    card.classList = " bg-slate-800 p-3 rounded-xl max-w-[500px] m-auto "
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
            <img src="${project.image}" alt="${project.name}" class="object-cover w-full h-48 bg-slate-700"/>
            <div class="p-5 flex flex-col flex-1">
                <h3 class="text-xl font-bold mb-2 text-ink">${project.name}</h3>
                <p class="text-ink-muted mb-3 flex-1">${project.description}</p>
            <div class="flex flex-wrap gap-2 text-lg mt-auto">
            ${toolsHtml}
            </div>
            </div>
        `
    projContainer.appendChild(card);

    VanillaTilt.init(card, {
        max: 5,
        speed: 300,
        glare: true,
        "max-glare": 0.25,
    });
}


