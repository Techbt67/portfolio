// ===== SCROLL REVEAL ANIMATION =====
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
});

// ===== CONTACT FORM (FAKE SUBMIT) =====
function handleContactSubmit(e) {
  e.preventDefault();

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  // Simulate sending...
  status.innerText = "Sending...";
  status.style.color = "#8b5cf6";

  setTimeout(() => {
    form.reset();
    status.innerText = "✅ Message Sent Successfully!";
    status.style.color = "#00ffff";

    setTimeout(() => {
      status.innerText = "";
    }, 3000);
  }, 1500);

  return false;
}

// ===== SMOOTH NAVIGATION (Optional Scroll Offset for Fixed Header) =====
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    const headerOffset = 70;
    const elementPosition = target.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});
