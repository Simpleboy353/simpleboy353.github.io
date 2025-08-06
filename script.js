// Typing Effect
const roles = [
  "Computer Programming Student",
  "Full-Stack Developer",
  "Java & Python Enthusiast",
  "Discord Bot Developer"
];
let i = 0;
let j = 0;
let currentRole = '';
let isDeleting = false;

function type() {
  const typingElement = document.getElementById('typing');
  currentRole = roles[i];
  typingElement.textContent = currentRole.substring(0, j);

  if (!isDeleting && j < currentRole.length) {
    j++;
    setTimeout(type, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      i = (i + 1) % roles.length;
    }
    setTimeout(type, 1000);
  }
}
type();

// Fade-in on Scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
