module.exports = api => { console.log(api.env()); return {
  "presets": [
    "@babel/preset-typescript",
    "@babel/preset-env"
  ],
  "plugins": [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
}};
