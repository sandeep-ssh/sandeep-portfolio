document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("cert-timeline");

  if (!timeline) return;

  timeline.innerHTML = `<p class="loading">Loading certifications...</p>`;

  fetch("data/certifications.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load certifications");
      }
      return response.json();
    })
    .then(certs => {
      if (!Array.isArray(certs)) {
        throw new Error("Invalid certifications format");
      }

      certs.sort((a, b) => a.year - b.year);

      const fragment = document.createDocumentFragment();

      certs.forEach(cert => {
        if (!cert.name || !cert.year || !cert.badge) return;

        const item = document.createElement("div");
        item.className = "timeline-item fade-in";

        item.innerHTML = `
          <img src="${cert.badge}"
               alt="${cert.name} badge"
               loading="lazy" />
          <h3>${cert.name}</h3>
          <span>${cert.level} • ${cert.year}</span>
        `;

        fragment.appendChild(item);
      });

      timeline.innerHTML = "";
      timeline.appendChild(fragment);
    })
    .catch(err => {
      console.error(err);
      timeline.innerHTML = `
        <p class="error">
          Unable to load certifications at this time.
        </p>
      `;
    });
});
