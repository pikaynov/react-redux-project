module.exports = {
  plugins: [
    ['import', {
      libraryName: 'lodash',
      "libraryDirectory": "",
      "camel2DashComponentName": false
    }]
  ],
  presets:[
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript",
  ],
}