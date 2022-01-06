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
})({"fRxd":[function(require,module,exports) {
window.dom = {
    //新增节点
    create: function create(string) {
        var container = document.createElement('template');
        container.innerHTML = string;
        return container.content.firstChild; //只能用这种方法返回元素
    },

    //新增弟弟
    after: function after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling); //把node2插到node的下一个节点(是一个文本)的前面
    },

    //新增哥哥
    before: function before(node, node2) {
        node.parentNode.insertBefore(node2, node);
    },

    //新增儿子
    append: function append(parent, child) {
        parent.appendChild(child);
    },

    //新增爸爸
    wrap: function wrap(parent, child) {
        dom.before(child, parent);
        dom.append(parent, child);
    },

    //删除节点
    remove: function remove(node) {
        node.parentNode.removeChild(node);
        return node;
    },

    //删除所有子节点
    empty: function empty(node) {
        var childNodes = node.childNodes;

        var arr = [];
        var firstChild = node.firstChild;
        while (firstChild) {
            arr.push(dom.remove(firstChild));
            firstChild = node.firstChild;
        }
        return arr;
    },

    //读写属性
    attr: function attr(node, name, value) {
        if (arguments.length === 3) {
            node.setAttribute(name, value);
        } else if (arguments.length === 2) {
            return node.getAttribute(name);
        }
    },

    //读写文本
    text: function text(node, string) {
        if ('innerText' in node) {
            if (arguments.length === 2) {
                node.innerText = string;
            } else if (arguments.length === 1) {
                return node.innerText;
            }
        } else {
            if (arguments.length === 2) {
                node.textContent = string;
            } else if (arguments.length === 1) {
                return node.textContent;
            }
        }
    },

    //读写HTML内容
    html: function html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string;
        } else if (arguments === 1) {
            return node.innerHTML;
        }
    },

    //读写style内容
    style: function style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value;
        } else if (arguments.length === 2) {
            if (name instanceof Object) {
                for (var key in name) {
                    node.style[key] = name[key];
                }
            } else if (typeof name === 'string') {
                return node.style[name];
            }
        }
    },

    class: {
        //添加className
        add: function add(node, className) {
            node.classList.add(className);
        },

        //删除className
        remove: function remove(node, className) {
            node.classList.remove(className);
        },

        //检查是否拥有className
        has: function has(node, className) {
            return node.classList.contains(className);
        }
    },
    //添加事件
    on: function on(node, eventName, fn) {
        node.addEventListener(eventName, fn);
    },

    //删除事件
    off: function off(node, eventName, fn) {
        node.removeEventListener(eventName, fn);
    },

    //查寻单个元素
    find: function find(selector, scope) {
        return (scope || document).querySelector(selector);
    },

    //查寻多个元素
    findAll: function findAll(selector, scope) {
        return (scope || document).querySelectorAll(selector);
    },

    //查寻父元素
    parent: function parent(node) {
        return node.parentNode;
    },

    //查寻子元素
    children: function children(node) {
        var nodeList = node.childNodes;
        var arr = [];
        for (var i = 0; i < nodeList.length; i++) {
            if (nodeList[i].nodeType === 3) {
                continue;
            } else {
                arr.push(nodeList[i]);
            }
        }
        return arr;
    },

    //查寻所有兄弟元素
    siblings: function siblings(node) {
        return Array.from(node.parentNode.children).filter(function (n) {
            return n !== node;
        });
    },

    //查寻下一个元素
    next: function next(node) {
        var x = node.nextSibling;
        while (x && x.nodeType === 3) {
            x = x.nextSibling;
        }
        return x;
    },

    //查寻上一个元素
    previous: function previous(node) {
        var x = node.previousSibling;
        while (x && x.nodeType === 3) {
            x = x.previousSibling;
        }
        return x;
    },

    //遍历所有元素
    each: function each(nodeList, fn) {
        for (var i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i]);
        }
    },

    //查寻自己是第几个元素
    index: function index(node) {
        var list = dom.children(node.parentNode);
        var i = void 0;
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break;
            }
        }
        return i;
    }
};
},{}]},{},["fRxd"], null)
//# sourceMappingURL=dom.672dbeea.map