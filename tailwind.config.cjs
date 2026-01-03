module.exports = {
  darkMode: ['class', '.my-app-dark'],
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: 'var(--text-color-4265-pink)',
          blue: 'var(--text-color-4265-blue)',
          green: 'var(--text-color-4265-green)',
          yellow: 'var(--text-color-4265-yellow)'
        },
        text: {
          primary: 'var(--text-color-primary)'
        }
      },
      boxShadow: {
        'team-yellow': '0 8px 15px rgba(247, 235, 15, 0.5)',
      }
    }
  },
  plugins: []
}
