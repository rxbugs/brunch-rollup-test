module.exports = {
  // See http://brunch.io for documentation.
  files: {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'},
    templates: {joinTo: 'app.js'}
  },
  plugins: {
    javascript: {
      validate: false
    },
    rollup: {
      moduleName: 'none',
      plugins: [require('rollup-plugin-babel')({
        presets: 'es2015-rollup'
      })]
    }
  }
}
