/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src-tauri/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      animation: {
        text: 'text 5s ease infinite',
        blob: 'blob 10s infinite',
        blobglow: 'blobglow 10s infinite',
        'ping-slow': `ping 3s cubic-bezier(0, 0, 0.2, 1) infinite`,
        'ping-slow2': `ping 4s cubic-bezier(0, 0, 0.2, 1) infinite`,
        'ping-slow3': `ping 5s cubic-bezier(0, 0, 0.2, 1) infinite`,
        'ping-slow4': `ping 6s cubic-bezier(0, 0, 0.2, 1) infinite`,
        'ping-slow5': `ping 7s cubic-bezier(0, 0, 0.2, 1) infinite`,
        first: "moveVertical 400s ease infinite",
        second: "moveInCircle 41s reverse infinite",
        third: "moveInCircle 42s linear infinite",
        fourth: "moveHorizontal 43s ease infinite",
        fifth: "moveInCircle 54s ease infinite",
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        blob: {
          '0%': {
            transform: 'translate(0px,0px) scale(1)',
          }, '33%': {
            transform: 'translate(30px,-50px) scale(1.1)',
          }, '66%': {
            transform: 'translate(-20px,20px) scale(0.9)',
          }, '100%': {
            transform: 'translate(0px,0px) scale(1)',
          },
        },
        blobglow: {
          '0%': {
            transform: 'scale(.8)',
          }, '33%': {
            transform: 'scale(.85)',
          }, '66%': {
            transform: 'scale(.85)',
          }, '100%': {
            transform: 'scale(.8)',
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },

      },
    },
  },
  plugins: [],
}

