import { setup } from 'twind'

setup({
  preflight: {
    '@import': `url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap')`,
  },
  darkMode: "class",
  // darkMode: "media",
  theme: {
    fontFamily: {
      sans: 'Manrope, sans-serif',
    },
    animation: {
      'ver-scroll': 'marqueeTop 5s linear infinite',
    },
    keyframes: {
      marqueeTop: {
        '0%': { top: '0' },
        '100%': { top: '-100%' },
      }
    },
    fontSize: {
      '11': '11px',
      '13': '13px',
      '17': '17px',
      '19': '19px',
      '21': '21px',
      '15': '15px',
      '23': '23px',
      '33': '33px',
      '47': '47px',
      '53': '53px',
      '93': '93px',
    },
    colors: {
      'white': '#fff',
      'light-white': '#F4F3F3',
      'snow-white': '#A0A6AB',
      'primary': '#333333',
      'secondary': '#727F8B',
      'light-gray': '#EBEDEF',
      'light-blue': '#01C4F0',
      'medium-gray': '#F2F1F3',
      'blue': '#0E87D7',
      'sidebar-gray': '#F9FAFB',
      'green': '#146C13',
      'light-green': '#E2F6E2',
      'dark': '#121213',
      'dark-gray': '#1D2F44',
      'gray': '#1C2023',
      'navy-blue': '#071B32',
      'sea-green': '#19E2E2',
      'pink': '#D15390'
    },
    boxShadow: {
      nav: '0px 4px 10px rgba(0, 0, 0, 0.05)',
      card: '0px 4px 15px rgba(0, 0, 0, 0.07)',
      'rec-card': '0px 5px 5px rgba(7, 27, 50, 0.1)'
    },
    outline: {
      'light-gray': ['1px solid #EBEDEF'],
      'none': ['0px !important'],
    },
    borderRadius: {
      'none': '100px',
      'lg': '12px',
      'xl': '20px',
      'xxl': '30px',
      '46': '46px',
    },
    borderColor: {
      'snow-white': '#303234',
      'light-gray': '#EBEDEF',
      'blue-gray': '#122B48',
      'light-blue': '#01C4F0',
      'blue': '#0E87D7',
      'green': '#44BA76',
    }
  }
})
