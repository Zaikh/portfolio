
/* Initial hero reveal */
window.addEventListener("load", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    el.classList.add("show");
  });

  document.querySelectorAll(".stagger").forEach((btn, i) => {
    setTimeout(() => {
      btn.style.opacity = "1";
      btn.style.transform = "translateY(0)";
      btn.style.transition = "0.6s ease";
    }, 700 + i * 180);
  });
});

/* Scroll animations */
const animatedEls = document.querySelectorAll(
  ".reveal-left, .reveal-right, .reveal-up, .reveal-zoom"
);


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-active");

      if (entry.target.classList.contains("skill-card")) {
        const index = [...entry.target.parentElement.children].indexOf(entry.target);
        entry.target.style.transitionDelay = `${index * 0.15}s`;
      }
    }
  });
}, { threshold: 0.25 });

animatedEls.forEach(el => observer.observe(el));

/* Show navbar after HERO */
const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");

const heroObserver = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) {
      navbar.classList.add("show");
    } else {
      navbar.classList.remove("show");
    }
  },
  { threshold: 0.1 }
);

heroObserver.observe(hero);

  //  LIVE AGE COUNTER
  const birthDate = new Date("2006-05-11T00:00:00"); 

  const ageEl = document.getElementById("age");

  function updateAge() {
    const now = new Date();
    const diff = now - birthDate;

    const years = diff / (1000 * 60 * 60 * 24 * 365.2422);
    ageEl.textContent = years.toFixed(9);
  }

  updateAge();
  setInterval(updateAge, 50);

  /* Cursor Glow + Mouse Blob */
const cursorGlow = document.querySelector(".cursor-glow");
const mouseBlob = document.querySelector(".mouse-blob");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let blobX = mouseX;
let blobY = mouseY;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursorGlow.style.left = mouseX + "px";
  cursorGlow.style.top = mouseY + "px";
});

function animateBlob() {
  blobX += (mouseX - blobX) * 0.08;
  blobY += (mouseY - blobY) * 0.08;

  mouseBlob.style.transform =
    `translate(${blobX - 210}px, ${blobY - 210}px)`;

  requestAnimationFrame(animateBlob);
}

animateBlob();

/* Mobile Menu Toggle */
  function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.menu-toggle').classList.toggle('active');
  }
