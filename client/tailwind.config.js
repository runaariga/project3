module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'myyellow': {
          100: '#F7BF50',
          200: '#E6B149',
        },
        'mybrown': {
          100: '#76581F',
          200: '#5A4114',
          300: '#4D370F',
        },
      },
      plugins: [
        require('@tailwindcss/forms')
      ],
    }
  }
}
