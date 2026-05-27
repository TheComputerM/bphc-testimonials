import {
  type DesignSystem,
  type Page,
  useSlidePageNumber,
} from "@open-slide/core";

export const design: DesignSystem = {
  palette: {
    bg: "#f5ecd9",
    text: "#3b2a2a",
    accent: "#d49aa3",
  },
  fonts: {
    display: "'Playfair Display', Georgia, 'Times New Roman', serif",
    body: "'Lora', Georgia, 'Times New Roman', serif",
  },
  typeScale: { hero: 168, body: 36 },
  radius: 4,
};

// Extra palette tokens outside the DesignSystem shape.
const muted = "#8a7a6d";
const sage = "#a8b89a";

// ---------- Fixed components (verbatim from themes/yearbook-pastel.md) ----------

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
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "'Lora', Georgia, serif",
        fontSize: 24,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#8a7a6d",
      }}
    >
      <span>Yearbook · Class Notes</span>
      <span style={{ color: "#d49aa3" }}>
        {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </div>
  );
};

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontFamily: "'Lora', Georgia, serif",
      fontSize: 26,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "#d49aa3",
    }}
  >
    {children}
  </div>
);

const Attribution = ({ name, year }: { name: string; year: string }) => (
  <div
    style={{
      fontFamily: "'Lora', Georgia, serif",
      fontSize: 28,
      color: "#8a7a6d",
      marginTop: 40,
      letterSpacing: "0.04em",
    }}
  >
    — <span style={{ color: "#3b2a2a" }}>{name}</span>
    <span style={{ color: sage, marginLeft: 16 }}>'{year}</span>
  </div>
);

// ---------- Shared page chrome ----------

const pageFill = {
  width: "100%",
  height: "100%",
  background: "#f5ecd9",
  color: "#3b2a2a",
  padding: 140,
  position: "relative" as const,
  display: "flex",
  flexDirection: "column" as const,
};

// ---------- Pages ----------

const Cover: Page = () => (
  <div style={{ ...pageFill, justifyContent: "center" }}>
    <Eyebrow>Class of 2018 · Spring</Eyebrow>
    <div style={{ marginTop: 32 }}>
      <Title>
        Notes from
        <br />
        the dorm hall
      </Title>
    </div>
    <p
      style={{
        fontFamily: "'Lora', Georgia, serif",
        fontSize: 36,
        lineHeight: 1.65,
        color: muted,
        maxWidth: 1100,
        marginTop: 40,
      }}
    >
      A small book of things our friends remembered, and a few they wish they
      hadn't.
    </p>
    <Footer />
  </div>
);

const Quote: Page = () => (
  <div style={{ ...pageFill, justifyContent: "center" }}>
    <div
      style={{
        maxWidth: 1400,
      }}
    >
      <p
        style={{
          fontFamily: "'Lora', Georgia, 'Times New Roman', serif",
          fontSize: 44,
          fontStyle: "italic",
          lineHeight: 1.55,
          color: "#3b2a2a",
          margin: 0,
        }}
      >
        &ldquo;She showed up to our 8 a.m. seminar with two coffees, every
        Tuesday, for an entire semester. Never asked, never billed. That's the
        kind of person Maya is — quiet generosity, no fanfare.&rdquo;
      </p>
      <Attribution name="Jordan Avery" year="18" />
    </div>
    <Footer />
  </div>
);

const Closer: Page = () => (
  <div
    style={{ ...pageFill, justifyContent: "center", alignItems: "flex-start" }}
  >
    <Eyebrow>Signed,</Eyebrow>
    <h2
      style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: 120,
        fontWeight: 700,
        fontStyle: "italic",
        margin: "32px 0 0",
        lineHeight: 1.05,
        color: "#3b2a2a",
      }}
    >
      With love,
      <br />
      <span style={{ color: "#d49aa3" }}>your hall.</span>
    </h2>
    <p
      style={{
        fontFamily: "'Lora', Georgia, serif",
        fontSize: 32,
        color: muted,
        marginTop: 48,
        letterSpacing: "0.04em",
      }}
    >
      Compiled in the spring of senior year. Kept on a shelf since.
    </p>
    <Footer />
  </div>
);

export default [Cover, Quote, Closer] satisfies Page[];
