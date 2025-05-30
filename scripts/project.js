document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const contactData = {
        name,
        email,
        message,
      };

      localStorage.setItem("contactSubmission", JSON.stringify(contactData));

      alert(`Thanks for reaching out, ${name}! We'll get back to you soon.`);
      form.reset();
    });
  }

  // DOM interaction, conditional, array, template literals
  const tips = [
    "Take a short walk today.",
    "Try 4-4-4 breathing: Inhale, hold, exhale each for 4 seconds.",
    "Write 3 things you're grateful for.",
    "Drink a glass of water and stretch."
  ];

  const randomTip = () => {
    const index = Math.floor(Math.random() * tips.length);
    return tips[index];
  };

  const tipSection = document.createElement("section");
  tipSection.innerHTML = `<h2>Daily Tip</h2><p>${randomTip()}</p>`;
  document.querySelector("main")?.appendChild(tipSection);
});
