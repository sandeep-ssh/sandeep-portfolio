const projectContainer = document.getElementById("project-container");
const projectId = new URLSearchParams(window.location.search).get("id");

fetch("data/projects.json")
  .then(res => res.json())
  .then(projects => {
    const p = projects.find(x => x.id === projectId);
    if (!p) {
      projectContainer.innerHTML = "<p>Project not found.</p>";
      return;
    }

    projectContainer.innerHTML = `
      <h1>${p.title}</h1>
      <p><strong>Problem:</strong> ${p.problem}</p>
      <p><strong>Solution:</strong> ${p.solution}</p>
      <p><strong>Impact:</strong> ${p.impact}</p>
      <img src="${p.architectureImage}" alt="${p.title}" loading="lazy">
      <div class="badges">
        ${p.services.map(s => `<span class="badge">${s}</span>`).join("")}
      </div>
      <div class="links">
        <a href="${p.repo}" target="_blank">GitHub</a>
        ${p.demo ? `<a href="${p.demo}" target="_blank">Live Demo</a>` : ""}
      </div>
      <p><small>Last updated: ${p.lastUpdated}</small></p>
      <section class="recommended-summary">
        <h2>Recommended Summary</h2>
        <p>${p.summary}</p>
      </section>
    `;
  });
