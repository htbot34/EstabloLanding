/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Evergreen — the structural / institutional primary
        evergreen: {
          DEFAULT: '#1E5A41',
          dark: '#16432F',
          light: '#2F7A58',
        },
        // Paper / manila — the "document" side of the hand-off
        paper: {
          DEFAULT: '#F5F1E8',
          edge: '#E4DBC7',
          ink: '#1A1A17',
        },
        page: '#FBFAF6', // warm off-white page background
        body: '#262521', // default body text
        muted: '#6B675E', // secondary text
        whatsapp: '#DCF8C6', // muted WhatsApp green for worker bubbles only
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'ui-sans-serif', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(26, 26, 23, 0.05), 0 8px 24px -12px rgba(26, 26, 23, 0.18)',
        sheet: '0 1px 0 rgba(26, 26, 23, 0.04), 0 18px 40px -22px rgba(26, 26, 23, 0.35)',
        phone: '0 2px 4px rgba(26, 26, 23, 0.08), 0 24px 50px -28px rgba(26, 26, 23, 0.4)',
      },
      maxWidth: {
        prose: '62ch',
      },
    },
  },
  plugins: [],
}
