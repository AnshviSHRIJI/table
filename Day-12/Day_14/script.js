// script.js
// All behaviour lives here — no onclick or oninput in the HTML.
// Three jobs:
//   1. Update card name, role, bio in real time via input event + textContent
//   2. Update char counter and flag it red near the limit
//   3. Re-theme the card by writing --card-accent on the card element via setProperty

const BIO_MAX       = 200;
const WARN_AT       = 160;   // counter turns red from here

// Accent colour definitions — named CSS colours, no hex
const ACCENTS = {
  indigo:  { main: "mediumpurple",  dim: "rgba(147,112,219,0.18)", glow: "rgba(147,112,219,0.35)" },
  emerald: { main: "mediumseagreen",dim: "rgba(60,179,113,0.18)",  glow: "rgba(60,179,113,0.35)"  },
  rose:    { main: "palevioletred", dim: "rgba(219,112,147,0.18)", glow: "rgba(219,112,147,0.35)" },
  amber:   { main: "goldenrod",     dim: "rgba(218,165,32,0.18)",  glow: "rgba(218,165,32,0.35)"  },
};

// Form inputs
const nameInput    = document.getElementById("full-name");
const roleInput    = document.getElementById("role");
const bioInput     = document.getElementById("bio");
const accentSelect = document.getElementById("accent-color");

// Card targets
const card          = document.getElementById("profile-card");
const cardName      = document.getElementById("card-name");
const cardRole      = document.getElementById("card-role");
const cardBio       = document.getElementById("card-bio");
const avatarEl      = document.getElementById("card-avatar");
const avatarInitials= document.getElementById("avatar-initials");
const charCounter   = document.getElementById("char-counter");

// Background blobs — also re-colour with the accent
const blob1 = document.querySelector(".blob-1");
const blob2 = document.querySelector(".blob-2");

// --- Helpers ---

function buildInitials(raw) {
  const name = raw.trim();
  if (!name) return "?";
  const words = name.split(/\s+/);
  if (words.length === 1) return words[0][0].toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

function applyAccent(key) {
  const a = ACCENTS[key] || ACCENTS.indigo;

  // Set tokens on the card element — card heading, border, button all react
  card.style.setProperty("--card-accent",     a.main);
  card.style.setProperty("--card-accent-dim",  a.dim);
  card.style.setProperty("--card-accent-glow", a.glow);

  // Editor pill and page blobs also pick up the accent via CSS vars on :root
  document.documentElement.style.setProperty("--card-accent",     a.main);
  document.documentElement.style.setProperty("--card-accent-dim",  a.dim);
  document.documentElement.style.setProperty("--card-accent-glow", a.glow);
}

// --- Event listeners ---

// 1a. Name → card heading + avatar initials
nameInput.addEventListener("input", function () {
  cardName.textContent      = this.value.trim() || "Your Name";
  avatarInitials.textContent = buildInitials(this.value);
});

// 1b. Role → card role line
roleInput.addEventListener("input", function () {
  cardRole.textContent = this.value.trim() || "Your Role";
});

// 1c. Bio → card bio + char counter (using textContent, never innerHTML)
bioInput.addEventListener("input", function () {
  const len = this.value.length;

  cardBio.textContent = this.value || "Your bio will appear here as you type.";

  charCounter.textContent = len + " / " + BIO_MAX;

  // Toggle the near-limit class so CSS turns the counter red
  charCounter.classList.toggle("near-limit", len >= WARN_AT);
});

// 2. Accent dropdown → re-theme the whole card at once
accentSelect.addEventListener("change", function () {
  applyAccent(this.value);
});

// --- Init on load ---
applyAccent(accentSelect.value);