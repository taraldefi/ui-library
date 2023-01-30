'use strict';

var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".test-component {\n  font-family: \"inter\", sans-serif;\n  background-color: var(--background);\n  color: black;\n  border: 1px solid var(--tariala-black);\n  padding: 16px;\n  width: 360px;\n  text-align: center;\n}\n\n.test-component .heading {\n  font-size: var(--heading-font-size);\n}";
styleInject(css_248z$1);

var TestComponent = function (_a) {
    var heading = _a.heading, content = _a.content;
    return (React.createElement("div", { "data-testid": "test-component", className: "test-component" },
        React.createElement("h1", { "data-testid": "test-component__heading", className: "heading" }, heading),
        React.createElement("div", { "data-testid": "test-component__content" }, content)));
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var css_248z = ".button--primary {\n  width: -moz-max-content !important;\n  width: max-content !important;\n  display: inline-block;\n  border-radius: 5px;\n  border: none;\n  transition: background 150ms;\n  font-family: \"inter\", sans-serif;\n  color: #ffffff;\n  cursor: pointer;\n}\n.button--primary span {\n  font-weight: 500;\n}\n\n.button--secondary {\n  font-family: \"inter\", sans-serif;\n  display: inline-block;\n  border-radius: 5px;\n  border: #0d8489 solid 1px;\n  transition: background 150ms;\n  background: #ffffff;\n  cursor: pointer;\n  color: #0d8489;\n}\n\n.btn_container {\n  gap: 5px;\n  display: flex;\n  align-items: center;\n}\n\n.button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n\n.button--medium {\n  font-size: 12px;\n  padding: 10px 20px;\n}\n\n.button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}";
styleInject(css_248z);

var Button = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, backgroundColor = _a.backgroundColor, label = _a.label, props = __rest(_a, ["primary", "size", "backgroundColor", "label"]);
    var mode = primary ? "button--primary" : "button--secondary";
    return (React.createElement("button", __assign({ type: "button", className: ["button", "button--".concat(size), mode].join(" "), style: { backgroundColor: backgroundColor } }, props), label));
};

exports.Button = Button;
exports.TestComponent = TestComponent;
//# sourceMappingURL=index.js.map
