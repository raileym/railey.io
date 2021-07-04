// Also working from

// 
// Plotly does not have this right.
// See https://github.com/plotly/plotly.js/issues/4563
//
window.PlotlyConfig = {MathJaxConfig: 'local'}

// Also working this from
// https://docs.mathjax.org/en/latest/upgrading/v2.html

// MathJax Configuration
//
// v2 to v3 upgrade notes:
// - The CommonHTML.linebreaks option is not yet implemented (but may be in a future release)
// - The TeX.noUndefined.attributes option is not yet implemented (but may be in a future release)

window.MathJax = {
    loader: {
    //  load: ['[tex]/autoload']
    //  load: ['[tex]/color', '[tex]/cancel', '[tex]/noerrors']
      load: ['[tex]/color', '[tex]/cancel']
    },
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: false,
        packages: {'[+]': ['cancel', 'color']},
        //packages: {'[+]': ['autoload']}, // was ['noerrors'] was ['noerrors', 'cancel', 'color']

        //autoload: {
        //  cancel: ['cancel'],
        //  color: ['color']          // don't autoload the color extension
          //colorv2: ['color'], // do autoload the colorv2 extension
        //}
    },
    startup: {
        //
        //  Mapping of old extension names to new ones
        //
        requireMap: {
            AMSmath: 'ams',
            AMSsymbols: 'ams',
            AMScd: 'amscd',
            HTML: 'html',
            noErrors: 'noerrors',
            noUndefined: 'noundefined'
        },
        ready: function () {
            MathJax.startup.defaultReady();
            MathJax.startup.promise.then(() => {
                TMSG.update_slides();
                //console.log('MathJax initial typesetting complete');
            });
        },
        
//     ready: function () {
//       //
//       //  Replace the require command map with a new one that checks for
//       //    renamed extensions and converts them to the new names.
//       //
//       var CommandMap = MathJax._.input.tex.SymbolMap.CommandMap;
//       var requireMap = MathJax.config.startup.requireMap;
//       var RequireLoad = MathJax._.input.tex.require.RequireConfiguration.RequireLoad;
//       var RequireMethods = {
//         Require: function (parser, name) {
//           var required = parser.GetArgument(name);
//           if (required.match(/[^_a-zA-Z0-9]/) || required === '') {
//             throw new TexError('BadPackageName', 'Argument for %1 is not a valid package name', name);
//           }
//           if (requireMap.hasOwnProperty(required)) {
//             required = requireMap[required];
//           }
//           RequireLoad(parser, required);
//         }
//       };
//       new CommandMap('require', {require: 'Require'}, RequireMethods);
//       //
//       //  Do the usual startup
//       //
//       return MathJax.startup.defaultReady();
//     },

//     pageReady: function() {
//       return MathJax.startup.defaultPageReady().then(function () {
//          TMSG.update_slides();
//       });
//     }

//         pageReady: function() {
//             return MathJax.startup.defaultPageReady().then(function() {
//                 console.log('MathJax initial typesetting complete');
//             });
//         }
    }
};



window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: false
    },
    startup: {
        ready: function () {
            MathJax.startup.defaultReady();
            MathJax.startup.promise.then(() => {
                //TMSG.update_slides();
            });
        },
    }  
};

/*
window.MathJax._ = window.MathJax._ || {};
window.MathJax._.components = window.MathJax._.components || {};
window.MathJax._.components.global = window.MathJax._.components.global || {};
*/

/*
MathJax = {
  startup: {
    //
    //  Mapping of old extension names to new ones
    //
    requireMap: {
      AMSmath: 'ams',
      AMSsymbols: 'ams',
      AMScd: 'amscd',
      HTML: 'html',
      noErrors: 'noerrors',
      noUndefined: 'noundefined'
    },
    ready: function () {
      //
      //  Replace the require command map with a new one that checks for
      //    renamed extensions and converts them to the new names.
      //
      var CommandMap = MathJax._.input.tex.SymbolMap.CommandMap;
      var requireMap = MathJax.config.startup.requireMap;
      var RequireLoad = MathJax._.input.tex.require.RequireConfiguration.RequireLoad;
      var RequireMethods = {
        Require: function (parser, name) {
          var required = parser.GetArgument(name);
          if (required.match(/[^_a-zA-Z0-9]/) || required === '') {
            throw new TexError('BadPackageName', 'Argument for %1 is not a valid package name', name);
          }
          if (requireMap.hasOwnProperty(required)) {
            required = requireMap[required];
          }
          RequireLoad(parser, required);
        }
      };
      new CommandMap('require', {require: 'Require'}, RequireMethods);
      //
      //  Do the usual startup
      //
      return MathJax.startup.defaultReady();
    }
  },
  tex: {
    autoload: {
      color: [],          // don't autoload the color extension
      colorv2: ['color'], // do autoload the colorv2 extension
    }
  }
};
*/

/* window.MathJax = {
  loader: {
    load: ['[tex]/color', '[tex]/cancel', '[tex]/noerrors']
  },
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: false,
    packages: {'[+]': ['noerrors', 'cancel', 'color']}
  },
  startup: {
    pageReady() {
      return MathJax.startup.pageReady().then(function () {
         TMSG.update_slides();
      });
    }
  }
};
*/