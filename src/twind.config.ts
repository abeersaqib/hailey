import { setup } from 'twind'
const colors = require('tailwindcss/colors')

setup({
  darkMode: "class",
  // darkMode: "media",
  theme: {
    fontSize: {
      '11': '11px',
      '13': '13px',
      '15': '15px',
      '23': '23px',
    },
    colors: {
      'white': '#fff',
      'snow-white': '#A0A6AB',
      'primary': '#333333',
      'secondary': '#727F8B',
      'light-gray': '#EBEDEF',
      'light-blue': '#01C4F0',
      'blue': '#0E87D7',
      'sidebar-gray': '#F9FAFB',
      'green': '#146C13',
      'light-green': '#E2F6E2',
      'dark': '#121213',
      'gray': '#1C2023'
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
      'snow-white': '#303234',
      'light-gray': '#EBEDEF',
      'light-blue': '#01C4F0',
      'blue': '#0E87D7',
      'green': '#44BA76',
    }
  }
})
