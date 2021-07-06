import {resolve} from "path"

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        drumKit: resolve(__dirname, 'js/Drum-Kit/index.html'),
        expandingCard: resolve(__dirname, 'js/Expanding-Card/index.html'),
        day01: resolve(__dirname, 'css/Day01/index.html'),
        day02: resolve(__dirname, 'css/Day02/index.html'),
        day03: resolve(__dirname, 'css/Day03/index.html'),
        day05: resolve(__dirname, 'css/Day05/index.html'),
        day12: resolve(__dirname, 'css/Day12/index.html'),
      }
    }
  }
}