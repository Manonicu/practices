import {resolve} from "path"
import viteImagemin from 'vite-plugin-imagemin';

module.exports = {
  plugins:[
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      webp: {
        quality: 75,
      },
      mozjpeg: {
        quality: 65,
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            removeViewBox: false,
          },
          {
            removeEmptyAttrs: false,
          },
        ],
      },
    }),
  ],
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