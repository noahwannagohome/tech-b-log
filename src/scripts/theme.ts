const THEME_KEY = "theme";
const LIGHT = "light";
const DARK = "dark";

function getPreferredTheme(): string {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? DARK
    : LIGHT;
}

// Reuse the value already set by the inline FOUC-prevention script if available.
let themeValue: string =
  (window as unknown as { __theme?: { value: string } }).__theme?.value ??
  getPreferredTheme();

function persist(): void {
  localStorage.setItem(THEME_KEY, themeValue);
  reflect();
}

// Article illustrations have authored dark variants, rather than a color filter.
// Only this explicit asset set is swapped; photos and other images keep their colors.
const themeIllustrations = new Set([
  "llm-agent-cycle", "llm-service-architecture", "llm-tool-bridge",
  "llm-stream-benchmark", "llm-operating-metrics", "llm-service-flow",
]);

function reflectIllustrations(): void {
  for (const image of document.querySelectorAll<HTMLImageElement>("img")) {
    const source = image.getAttribute("src");
    if (!source) continue;
    const match = source.match(/^(.*\/images\/)(llm-[a-z-]+?)(-dark)?\.svg$/);
    if (!match || !themeIllustrations.has(match[2])) continue;
    const next = `${match[1]}${match[2]}${themeValue === DARK ? "-dark" : ""}.svg`;
    if (source !== next) image.setAttribute("src", next);
  }
}

function reflect(): void {
  reflectIllustrations();
  const root = document.firstElementChild;
  root?.setAttribute("data-theme", themeValue);
  root?.classList.toggle("dark", themeValue === DARK);
  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);

  // Fill <meta name="theme-color"> with the computed background colour so
  // Android's browser chrome matches the page background.
  const bg = window.getComputedStyle(document.body).backgroundColor;
  document
    .querySelector("meta[name='theme-color']")
    ?.setAttribute("content", bg);
}

function setup(): void {
  reflect();
  document.querySelector("#theme-btn")?.addEventListener("click", () => {
    themeValue = themeValue === LIGHT ? DARK : LIGHT;
    persist();
  });
}

setup();

// Re-run after View Transitions navigation.
document.addEventListener("astro:after-swap", setup);

// Carry the theme-color value across View Transitions to prevent the
// Android navigation bar from flashing during page transitions.
document.addEventListener("astro:before-swap", event => {
  const color = document
    .querySelector("meta[name='theme-color']")
    ?.getAttribute("content");
  if (color) {
    (event as { newDocument: Document }).newDocument
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", color);
  }
});

// Sync with OS-level dark/light preference changes.
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches }) => {
    themeValue = matches ? DARK : LIGHT;
    persist();
  });
