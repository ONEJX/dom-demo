// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
//const div = dom.create('<div>newDiv</div>')

//dom.after(test,div)

//dom.before(test,dom.create('<div>第一</div>'))

//dom.append(test,div)

//dom.wrap(div,test)

//const x = dom.remove(test)
//console.log(x)

//const x = dom.empty(e1)
//console.log(x)

//dom.attr(test,'title','hi')
//const x = dom.attr(test,'title')
//console.log(x)

//dom.text(test,'你好我是onejx')
//const x = dom.text(test)
//console.log(x)

//dom.html(test,'<p>1111111111</p>')
//const x = dom.html(test)
//console.log(x)

//dom.style(test,{border:'1px solid red',color:'red'})

//dom.class.add(test,'blue')

//dom.class.remove(test,'blue')

//const x = dom.class.has(test,'blue')
//console.log(x)

//const fn = () => {
//    console.log('点击了')
//}
//dom.on(test,'click',fn)

//dom.off(test,'click',fn)

//const x = dom.find('#empty')
//console.log(x)

//const x = dom.findAll('#empty>.red')
//console.log(x)

//const x = dom.parent(dom.find('#e1'))
//console.log(x)

//const x = dom.siblings(dom.find('#e1'))
//console.log(x)

//const x = dom.next(dom.find('#e1'))
//console.log(x)

//const x = dom.find('#empty')
//dom.each(dom.children(x),(n) => dom.style(n,'color','red'))

var x = dom.index(dom.find('#e2'));
console.log(x);
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.47e26c51.map