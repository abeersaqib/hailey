import { setup } from 'twind'
const colors = require('tailwindcss/colors')

setup({
  darkMode: "class",
  theme: {
    colors: {
      'white': '#fff',
      'primary': '#333333',
      'secondary': '#727F8B',
      'light-gray': '#EBEDEF',
      'blue': '#0E87D7',
      'sidebar-gray': '#F9FAFB',
      'green': '#146C13',
      'light-green': '#E2F6E2',
    },
    boxShadow: {
      nav: '0px 4px 10px rgba(0, 0, 0, 0.05)',
      card: '0px 4px 15px rgba(0, 0, 0, 0.07)'
    },
    outline: {
      'light-gray': ['1px solid #EBEDEF'],
      'none': ['0px'],
    },
    borderRadius: {
      'none': '100px',
      'lg': '12px',
    },
    borderColor: {
      'light-gray': '#EBEDEF',
      'blue': '#0E87D7',
      'light-blue': '#01C4F0',
    }
  }
})
