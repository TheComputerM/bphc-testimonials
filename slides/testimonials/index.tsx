import type {
  DesignSystem,
  Page,
  SlideMeta,
  SlideTransition,
} from "@open-slide/core";
import { useSlidePageNumber } from "@open-slide/core";
import testimonials from "./assets/data.json";

export const design: DesignSystem = {
  palette: { bg: "#f5ecd9", text: "#3b2a2a", accent: "#d49aa3" },
  fonts: {
    display: "'Playfair Display', Georgia, 'Times New Roman', serif",
    body: "'Lora', Georgia, 'Times New Roman', serif",
  },
  typeScale: { hero: 168, body: 36 },
  radius: 0,
};

// Extra palette tokens not covered by DesignSystem
const muted = "#8a7a6d";
const paperLine = "#e3d6bd";

const fill = { width: "100%", height: "100%" } as const;

// ─── Shared components (from yearbook-pastel theme) ───────────────────────

const Title = ({ children }: { children: React.ReactNode }) => (
  <h1
    style={{
      fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
      fontSize: 168,
      fontWeight: 800,
      fontStyle: "italic",
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
      margin: 0,
      color: "#3b2a2a",
    }}
  >
    {children}
  </h1>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontFamily: "'Lora', Georgia, serif",
      fontSize: 26,
      letterSpacing: "0.22em",
      textTransform: "uppercase" as const,
      color: "#d49aa3",
    }}
  >
    {children}
  </div>
);

const QuoteAuthor = ({ name, email }: { name: string; email: string }) => (
  <div style={{ marginTop: 32 }}>
    <div
      style={{
        width: 64,
        height: 2,
        background: paperLine,
        marginBottom: 24,
      }}
    />
    <div
      style={{
        fontFamily: "'Lora', Georgia, serif",
        fontSize: 36,
        fontStyle: "normal",
        fontWeight: 600,
        color: "#3b2a2a",
        letterSpacing: "0.01em",
      }}
    >
      {name}
    </div>
    <div
      style={{
        fontFamily: "'Lora', Georgia, serif",
        fontSize: 26,
        color: muted,
        marginTop: 8,
        letterSpacing: "0.04em",
      }}
    >
      {email}
    </div>
  </div>
);

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: "absolute",
        left: 140,
        right: 140,
        bottom: 64,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        fontFamily: "'Lora', Georgia, serif",
        fontSize: 24,
        letterSpacing: "0.12em",
        textTransform: "uppercase" as const,
        color: muted,
      }}
    >
      <span style={{ color: "#d49aa3" }}>
        {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </div>
  );
};

// ─── Transitions (yearbook-pastel: subtle, 280 ms settle on cover, 200 ms rise elsewhere) ───

const EASE_OUT = "cubic-bezier(0, 0, 0.2, 1)";
const EASE_IN = "cubic-bezier(0.4, 0, 1, 1)";

export const transition: SlideTransition = {
  duration: 200,
  exit: {
    duration: 140,
    easing: EASE_IN,
    keyframes: [
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0, transform: "translateY(-4px)" },
    ],
  },
  enter: {
    duration: 200,
    delay: 80,
    easing: EASE_OUT,
    keyframes: [
      { opacity: 0, transform: "translateY(6px)" },
      { opacity: 1, transform: "translateY(0)" },
    ],
  },
};

// ─── Pages ────────────────────────────────────────────────────────────────

/**
 * Page 1 — Cover
 */
const Cover: Page = () => (
  <div
    style={{
      ...fill,
      background: "var(--osd-bg)",
      color: "var(--osd-text)",
      padding: "140px 140px 120px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
    }}
  >
    {/* Hairline rule at top */}
    <div
      style={{
        position: "absolute",
        top: 64,
        left: 140,
        right: 140,
        height: 2,
        background: paperLine,
      }}
    />

    <Eyebrow>Testimonials · BPHC '26</Eyebrow>
    <div style={{ marginTop: 28 }}>
      <Title>
        For Mudit Somani
        
        {''}
      </Title>
    </div>

    <p
      style={{
        fontFamily: "'Lora', Georgia, serif",
        fontSize: 36,
        lineHeight: 1.65,
        color: muted,
        maxWidth: 960,
        marginTop: 40,
        marginBottom: 0,
      }}
    >A small unaltered collection of words from close friends, in no particular order.</p>

    <Footer />
  </div>
);

Cover.transition = {
  duration: 280,
  exit: {
    duration: 160,
    easing: EASE_IN,
    keyframes: [
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0, transform: "translateY(-6px)" },
    ],
  },
  enter: {
    duration: 280,
    delay: 100,
    easing: EASE_OUT,
    keyframes: [
      { opacity: 0, transform: "translateY(12px)", filter: "blur(4px)" },
      { opacity: 1, transform: "translateY(0)", filter: "blur(0)" },
    ],
  },
};

// ─── Quote page component ─────────────────────────────────────────────────
// One instance per testimonial. Duplicate with different props for each quote.

const QuotePage = ({
  quote,
  name,
  email,
}: {
  quote: string;
  name: string;
  email: string;
}): JSX.Element => (
  <div
    style={{
      ...fill,
      background: "var(--osd-bg)",
      color: "var(--osd-text)",
      padding: "120px 180px 80px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
    }}
  >
    {/* Hanging quotation mark */}
    <div
      style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: 160,
        fontWeight: 900,
        lineHeight: 0.7,
        color: "#d49aa3",
        opacity: 0.35,
        userSelect: "none",
      }}
    >
      &ldquo;
    </div>

    <blockquote
      style={{
        fontFamily: "'Lora', Georgia, serif",
        fontSize: 40,
        fontStyle: "italic",
        lineHeight: 1.55,
        color: "#3b2a2a",
        margin: 0,
        maxWidth: 1400,
      }}
    >
      {quote}
    </blockquote>

    <QuoteAuthor name={name} email={email} />

    <Footer />
  </div>
);

const Quotes: Page[] = testimonials.map((t) => () => (
  <QuotePage quote={t.comment} name={t.name} email={t.email} />
));

// ─── Exports ──────────────────────────────────────────────────────────────

export const meta: SlideMeta = {
  title: "Testimonials",
  theme: "yearbook-pastel",
  createdAt: "2026-05-27T11:49:23.666Z",
};

export default [Cover, ...Quotes] satisfies Page[];
