fetch("data/projects.json")
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById("projects-container");

    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>

        <div class="badges">
          ${project.services.map(s => `<span class="badge">${s}</span>`).join("")}
        </div>

        <div class="tabs">
          <button onclick="showTab('${project.id}', 'architecture')">Architecture</button>
          <button onclick="showTab('${project.id}', 'summary')">Recommended Summary</button>
        </div>

        <div id="${project.id}-architecture" class="tab-content active">
          <img src="${project.architectureImage}" alt="Architecture diagram">
        </div>

        <div id="${project.id}-summary" class="tab-content">
          <p>${project.summary}</p>
          <img src="${project.summaryImage}" alt="Project summary">
        </div>

        <div class="links">
          <a href="${project.repo}" target="_blank">GitHub</a>
          <a href="${project.demo}" target="_blank">Live Demo</a>
        </div>

        <small>Last updated: ${project.lastUpdated}</small>
      `;

      container.appendChild(card);
    });
  });

function showTab(projectId, tab) {
  document.querySelectorAll(`#${projectId}-architecture, #${projectId}-summary`)
    .forEach(el => el.classList.remove("active"));

  document.getElementById(`${projectId}-${tab}`).classList.add("active");
}
