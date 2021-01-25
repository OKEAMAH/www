const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [],
  theme: {
    screens: {
      md: { raw: "(min-width: 640px)" },
      lg: { raw: "(min-width: 768px)" },
      xl: { raw: "(min-width: 1024px)" },
      "base-landscape": {
        raw: "(max-width: 767px) and (orientation: landscape)",
      },
      "lg-tall": { raw: "(min-width: 768px) and (max-aspect-ratio: 2/1)" },
      touch: { raw: "(hover: none)" },
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
    },
    fontSize: {
      "size--4": ["var(--step--4)", "1.34"],
      "size--3": ["var(--step--3)", "1.34"],
      "size--2": ["var(--step--2)", "1.34"],
      "size--1": ["var(--step--1)", "1.34"],
      "size-0": ["var(--step-0)", "1.34"],
      "size-1": ["var(--step-1)", "1.34"],
      "size-2": ["var(--step-2)", "1.34"],
      "size-display": ["25.56vw", "0.959"],
      "size-lg/display": ["clamp(80px, 6.81vw, 98px)", "0.98"],
      "size-donate": ["clamp(56px, 3.89vw, 72px)", "0.98"],
    },
    fontFamily: {
      display: ["Messer", "san-serif"],
      body: ["Suisse Intl", "sans-serif"],
    },
    colors: {
      "golden-fizz": "#EDFF38",
      "light-gold": "#FAFFC3",
      red: "#C53030",
      black: "#000000",
      "light-black": "#010101",
      white: "#FFFFFF",
      gray: "#6C6C6C",
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {
      borderRadius: { 50: "50%", oval: "70px" },
      borderWidth: { 3: "3px" },
      transitionProperty: {
        width: "width",
        right: "right",
        "margin-left": "margin-left",
        "clip-path": "clip-path",
        "max-width": "max-width",
      },
      inset: {
        full: "100%",
        "1/10": "10%",
        "1/8": "12.5%",
        "1/4": "25%",
        "1/2": "50%",
      },
      minHeight: {
        tall: "50vw",
        "line-2": "2.68em",
        "line-3": "4.02em",
        "line-5": "6.70em",
      },
      maxHeight: { tall: "50vw", "75vh": "75vh" },
      maxWidth: { "75vw": "75vw" },
      boxShadow: {
        "focus-white": "0 0 0 3px rgba(256, 256, 256, 1)",
      },
      height: { 36: "9rem" },
      spacing: {
        margin: "1rem",
        "lg/margin": "1.5rem",
        ymargin: "1rem",
        "lg/ymargin": "1.5rem",
        xmargin: "1rem",
        "lg/xmargin": "2rem",
        "line-1/2": "0.67em",
        "line-1": "1.34em",
        "line-3/2": "2.01em",
        "line-2": "2.68em",
        "line-5/2": "3.35em",
        "line-3": "4.02em",
        "line-5": "6.70em",
        "markdown-sm": "1em",
        "markdown-md": "1.5em",
        "markdown-lg": "3em",
        "bottom-button": "2.5rem",
      },
      gridColumn: {
        "span-margins": "1 / -1",
        "span-columns": "column 1 / margin 2",
        "span-16": "span 16 / span 16",
      },
      gridColumnStart: {
        "margin-1": "margin 1",
        "column-1": "column 1",
        "gutter-1": "gutter 1",
        "column-2": "column 2",
        "gutter-2": "gutter 2",
        "column-3": "column 3",
        "gutter-3": "gutter 3",
        "column-4": "column 4",
        "gutter-4": "gutter 4",
        "column-5": "column 5",
        "gutter-5": "gutter 5",
        "column-6": "column 6",
        "gutter-6": "gutter 6",
        "column-7": "column 7",
        "gutter-7": "gutter 7",
        "column-8": "column 8",
        "gutter-8": "gutter 8",
        "column-9": "column 9",
        "gutter-9": "gutter 9",
        "column-10": "column 10",
        "gutter-10": "gutter 10",
        "column-11": "column 11",
        "gutter-11": "gutter 11",
        "column-12": "column 12",
        "gutter-12": "gutter 12",
        "column-13": "column 13",
        "gutter-13": "gutter 13",
        "column-14": "column 14",
        "gutter-14": "gutter 14",
        "column-15": "column 15",
        "gutter-15": "gutter 15",
        "column-16": "column 16",
        "margin-2": "margin 2",
      },
      gridColumnEnd: {
        last: "-1",
        "margin-1": "margin 1",
        "column-1": "column 1",
        "gutter-1": "gutter 1",
        "column-2": "column 2",
        "gutter-2": "gutter 2",
        "column-3": "column 3",
        "gutter-3": "gutter 3",
        "column-4": "column 4",
        "gutter-4": "gutter 4",
        "column-5": "column 5",
        "gutter-5": "gutter 5",
        "column-6": "column 6",
        "gutter-6": "gutter 6",
        "column-7": "column 7",
        "gutter-7": "gutter 7",
        "column-8": "column 8",
        "gutter-8": "gutter 8",
        "column-9": "column 9",
        "gutter-9": "gutter 9",
        "column-10": "column 10",
        "gutter-10": "gutter 10",
        "column-11": "column 11",
        "gutter-11": "gutter 11",
        "column-12": "column 12",
        "gutter-12": "gutter 12",
        "column-13": "column 13",
        "gutter-13": "gutter 13",
        "column-14": "column 14",
        "gutter-14": "gutter 14",
        "column-15": "column 15",
        "gutter-15": "gutter 15",
        "column-16": "column 16",
        "margin-2": "margin 2",
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
        "auto/auto": "auto auto",
        "layout-4":
          "[margin] 1rem [column] 1fr repeat(3, [gutter] 2rem [column] 1fr) [margin] 1rem",
        "layout-12":
          "[margin] 2rem [column] 1fr repeat(11, [gutter] 2rem [column] 1fr) [margin] 2rem",
        "layout-16":
          "[margin] 2rem [column] 1fr repeat(15, [gutter] 2rem [column] 1fr) [margin] 2rem",
      },
      gridTemplateRows: {
        "auto/auto": "auto auto",
        "auto/1fr": "auto minmax(0, 1fr)",
        "auto/1fr/auto": "auto minmax(0, 1fr) auto",
        "auto/auto/1fr/auto": "auto auto minmax(0, 1fr) auto",
        kiosk: "repeat(4, min-content)",
        footer: "auto minmax(0, 24rem) auto",
      },
    },
  },
  variants: {
    borderWidth: ["responsive", "hover", "focus"],
    extend: {
      display: ["open", "group-hover"],
      visibility: ["group-hover"],
      margin: ["open", "group-hover"],
      width: ["group-hover"],
      maxWidth: ["group-hover"],
    },
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant("open", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.open .${e(`open${separator}${className}`)}`;
        });
      });
    }),
  ],
};
