
const screens = document.querySelectorAll(".screen");

function showScreen(id) {
  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Stage 1: Start the surprise
function startSurprise() {
  showScreen("cake");
}

// Stage 2: Blow out the candle
function blowCandle() {
  const flame = document.getElementById("flame");
  const button = document.getElementById("blowButton");

  flame.classList.add("out");
  button.textContent = "Your wish is on its way! 💗";
  button.disabled = true;

  setTimeout(() => {
    showScreen("birthday");
    celebrate();
  }, 1800);
}

// Stage 3: Floating hearts
function celebrate() {
  const hearts = document.getElementById("hearts");
  const symbols = ["💗", "💕", "❤️", "💖", "✨", "🌸"];

  for (let i = 0; i < 35; i++) {
    setTimeout(() => {
      const heart = document.createElement("span");

      heart.className = "heart";
      heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = (18 + Math.random() * 24) + "px";
      heart.style.animationDuration = (3 + Math.random() * 4) + "s";

      hearts.appendChild(heart);

      heart.addEventListener("animationend", () => {
        heart.remove();
      });
    }, i * 100);
  }
}

// Stage 4: Show the flower gift
function showFlowers() {
  showScreen("gift");
  celebrate();
}

// Replay the surprise
function restartSurprise() {
  document.getElementById("flame").classList.remove("out");

  const button = document.getElementById("blowButton");
  button.textContent = "Blow the Candle! 💨";
  button.disabled = false;

  showScreen("question");
}

// Gentle floating hearts in the background
setInterval(() => {
  const hearts = document.getElementById("hearts");
  const heart = document.createElement("span");

  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "💕" : "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (14 + Math.random() * 15) + "px";
  heart.style.animationDuration = (5 + Math.random() * 4) + "s";

  hearts.appendChild(heart);

  heart.addEventListener("animationend", () => heart.remove());
}, 900);