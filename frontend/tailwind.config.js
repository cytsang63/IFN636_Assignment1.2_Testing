module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        'primary-container': '#3b3b3b',
        secondary: '#5e5e5e',
        tertiary: '#3b3b3b',
        background: '#f9f9f9',
        surface: '#f9f9f9',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f3f3f3',
        'surface-container': '#eeeeee',
        'surface-container-high': '#e8e8e8',
        'surface-container-highest': '#e2e2e2',
        'on-primary': '#e2e2e2',
        'on-surface': '#1a1c1c',
        'on-surface-variant': '#474747',
        'outline-variant': '#c6c6c6',
        error: '#ba1a1a',
      },
      fontFamily: {
        headline: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        label: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.75rem',
        lg: '1rem',
        full: '9999px',
      },
      boxShadow: {
        ambient: '0px 20px 40px rgba(26, 28, 28, 0.06)',
      },
    },
  },
  plugins: [],
};
