/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-bright": "#f7faf5",
        "tertiary-container": "#32322e",
        "on-secondary-fixed-variant": "#3f4c00",
        "on-primary-fixed-variant": "#204f3c",
        "surface-container-high": "#e6e9e4",
        "primary-fixed-dim": "#a0d1b8",
        "surface-variant": "#e0e3df",
        "primary": "#002316",
        "tertiary-fixed-dim": "#c9c6c0",
        "on-background": "#191c1a",
        "on-primary": "#ffffff",
        "surface-container": "#ecefea",
        "secondary": "#556500",
        "background": "#f7faf5",
        "on-tertiary-fixed-variant": "#474742",
        "tertiary": "#1d1d19",
        "outline": "#717973",
        "on-tertiary-fixed": "#1c1c18",
        "on-surface": "#191c1a",
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "inverse-on-surface": "#eff2ed",
        "on-error-container": "#93000a",
        "outline-variant": "#c0c9c2",
        "surface-container-highest": "#e0e3df",
        "inverse-surface": "#2d312e",
        "on-secondary-fixed": "#181e00",
        "tertiary-fixed": "#e5e2db",
        "primary-fixed": "#bbeed3",
        "secondary-fixed-dim": "#b5d31f",
        "on-secondary-container": "#596a00",
        "surface-container-low": "#f1f4f0",
        "inverse-primary": "#a0d1b8",
        "primary-container": "#063a28",
        "surface-tint": "#396752",
        "surface-dim": "#d8dbd6",
        "surface": "#f7faf5",
        "secondary-fixed": "#d1f040",
        "on-primary-container": "#75a58d",
        "on-primary-fixed": "#002114",
        "on-secondary": "#ffffff",
        "on-surface-variant": "#414944",
        "secondary-container": "#ceed3d",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#9c9a94",
        "error-container": "#ffdad6",
        "surface-container-lowest": "#ffffff"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "base": "8px",
        "xs": "4px",
        "md": "24px",
        "sm": "12px",
        "lg": "48px",
        "gutter": "24px",
        "margin": "32px",
        "xl": "80px"
      },
      fontFamily: {
        "headline-xl": ["Epilogue", "sans-serif"],
        "body-md": ["Be Vietnam Pro", "sans-serif"],
        "body-lg": ["Be Vietnam Pro", "sans-serif"],
        "headline-lg": ["Epilogue", "sans-serif"],
        "headline-md": ["Epilogue", "sans-serif"],
        "label-sm": ["Be Vietnam Pro", "sans-serif"]
      },
      fontSize: {
        "headline-xl": ["48px", { "lineHeight": "1.1", "fontWeight": "700" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "headline-lg": ["32px", { "lineHeight": "1.2", "fontWeight": "600" }],
        "headline-md": ["24px", { "lineHeight": "1.3", "fontWeight": "600" }],
        "label-sm": ["14px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}

