/**
 * Centralized Theme Configuration
 * Single source of truth for colors, spacing, and component styles
 */

export const THEME = {
  // Color palette
  colors: {
    primary: {
      50: "#f3e8ff",
      100: "#e9d5ff",
      200: "#d8b4fe",
      300: "#c084fc",
      400: "#a855f7",
      500: "#9333ea",
      600: "#7e22ce",
      700: "#6b21a8",
      800: "#581c87",
      900: "#3f0f5c",
    },
    neutral: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
    bg: {
      light: "#ffffff",
      "light-alt": "#f9fafb",
      dark: "#0f172a",
      "dark-alt": "#1f2937",
    },
  },

  // Typography
  typography: {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  // Spacing scale
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
  },

  // Border radius
  borderRadius: {
    none: "0",
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },

  // Shadow
  shadow: {
    none: "none",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  },

  // Transitions
  transition: {
    base: "all 0.2s ease-in-out",
    lg: "all 0.3s ease-in-out",
  },

  // Z-index scale
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
};

// Component variant mapping
export const BUTTON_VARIANTS = {
  primary:
    "bg-primary-600 dark:bg-primary-600 text-white hover:bg-primary-700 dark:hover:bg-primary-700 shadow-sm",
  secondary:
    "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-700",
  ghost:
    "bg-transparent text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800",
  danger: "bg-red-600 text-white hover:bg-red-700 shadow-sm",
};

export const BUTTON_SIZES = {
  sm: "px-3 py-1.5 text-sm gap-2",
  md: "px-4 py-2.5 text-base gap-2",
  lg: "px-6 py-3 text-lg gap-3",
};

export default THEME;
