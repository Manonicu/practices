const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        drumKit: resolve(__dirname, 'js/Drum-Kit/index.html'),
        expandingCard: resolve(__dirname, 'js/Expanding-Card/index.html')
      }
    }
  },
  "compilerOptions": {
    "types": ["vite/client"]
  }
}