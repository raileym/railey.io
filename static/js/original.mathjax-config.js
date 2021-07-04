// 
// Plotly does not have this right.
// See https://github.com/plotly/plotly.js/issues/4563
//
window.PlotlyConfig = {MathJaxConfig: 'local'}

// MathJax Configuration
//
// v2 to v3 upgrade notes:
// - The CommonHTML.linebreaks option is not yet implemented (but may be in a future release)
// - The TeX.noUndefined.attributes option is not yet implemented (but may be in a future release)
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: false,
    packages: {'[+]': ['noerrors']}
  },
  loader: {
    load: ['[tex]/noerrors']
  },
  startup: {
    pageReady() {
      return MathJax.startup.defaultPageReady().then(function () {
         TMSG.update_slides();
      });
    }
  }
};
