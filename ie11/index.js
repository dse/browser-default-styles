/**
 * Array.from() polyfill
 */
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
    Array.from = (function () {
        var toStr = Object.prototype.toString;
        var isCallable = function (fn) {
            return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
        };
        var toInteger = function (value) {
            var number = Number(value);
            if (isNaN(number)) { return 0; }
            if (number === 0 || !isFinite(number)) { return number; }
            return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function (value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
        };
        return function from(arrayLike/*, mapFn, thisArg */) {
            var C = this;
            var items = Object(arrayLike);
            if (arrayLike == null) {
                throw new TypeError('Array.from requires an array-like object - not null or undefined');
            }
            var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
            var T;
            if (typeof mapFn !== 'undefined') {
                if (!isCallable(mapFn)) {
                    throw new TypeError('Array.from: when provided, the second argument must be a function');
                }
                if (arguments.length > 2) {
                    T = arguments[2];
                }
            }
            var len = toLength(items.length);
            var A = isCallable(C) ? Object(new C(len)) : new Array(len);
            var k = 0;
            var kValue;
            while (k < len) {
                kValue = items[k];
                if (mapFn) {
                    A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                } else {
                    A[k] = kValue;
                }
                k += 1;
            }
            A.length = len;
            return A;
        };
    }());
}

/**
 * Array.flat() polyfill
 * Adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#reduce_concat_isArray_recursivity
 */
if (!Array.prototype.flat) {
    Array.prototype.flat = function(depth) {
        'use strict';
        if (depth === undefined) {
            depth = 1;
        }
        var flatten = function (arr, depth) {
            if (depth < 1) {
                return arr.slice();
            }
            return arr.reduce(function (acc, val) {
                return acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val);
            }, []);
        };
        return flatten(this, depth);
    };
}

function getCssCode() {
    var parent = document.getElementById('elements');
    if (parent == null) return;

    var elementSelectorList = [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'dl',
        'dt',
        'dd',
        'ul',
        'ol',
        'li',
        'dir',
        'menu',
        'listing',
        'pre',
        'xmp',
        'blockquote',
        'figure',
        'hr',
    ];
    var nestedElementSelectorList = [
        'ul ul',
        'ul ol',
        'ol ul',
        'ol ol',
    ];
    var elementLists = {
    };
    var nestedElementLists = {
    };

    // for excluding from non-nested selectors
    var nestedElements = Array.from(
        parent.querySelectorAll(nestedElementSelectorList.join(', '))
    );

    elementSelectorList.forEach(function (selector) {
        elementLists[selector] = Array.from(parent.querySelectorAll(selector)).filter(
            notInNestedElements
        );
    });
    nestedElementSelectorList.forEach(function (selector) {
        nestedElementLists[selector] = Array.from(parent.querySelectorAll(selector));
    });

    var nestedElementCount = nestedElementSelectorList.reduce(
        function (accumulator, next) {
            return accumulator + nestedElementLists[next].length;
        },
        0
    );
    var elementCount = elementSelectorList.reduce(
        function (accumulator, next) {
            return accumulator + elementLists[next].length;
        },
        0
    );
    console.log(elementCount);
    console.log(nestedElementCount);

    var cssCode = "";

    elementSelectorList.forEach(appendCssCodeForSelector);
    nestedElementSelectorList.forEach(appendCssCodeForSelector);

    return cssCode;

    function notInNestedElements(element) {
        return !isIn(element, nestedElements);
    }

    function appendCssCodeForSelector(selector) {
        var list = elementLists[selector];
        if (list == null) nestedElementLists[selector];
        if (list == null) return;

        var element = list[1];
        if (element == null) return;

        cssCode += selector + " {\n";

        var styles = window.getComputedStyle(element);
        if (styles != null) {
            styles = computedStyleToObject(styles);
            appendCssCodeForStyleObject(styles);
        }

        var styles2 = element.style;
        if (styles2 != null) {
            styles2 = computedStyleToObject(styles2);
            appendCssCodeForStyleObject(styles2, 'B');
        }

        cssCode += "}\n";
    }

    function appendCssCodeForStyleObject(styles, sectionName) {
        var styleNames = Object.keys(styles);
        var outputtedSectionHeading = false;
        styleNames.sort(function (a, b) { return a.localeCompare(b); });
        styleNames.forEach(function (styleName) {
            if (!/margin|padding/i.test(styleName)) return;
            var value = styles[styleName];
            if (value === '0px') return;
            if (!outputtedSectionHeading && sectionName != null) {
                cssCode += "    /* " + sectionName + " */\n";
                outputtedSectionHeading = true;
            }
            cssCode += "    " + styleName + ": " + value + ";\n";
        });
    }
}

function isIn(needle, haystack) {
    for (var i = 0; i < haystack.length; i += 1) {
        if (needle === haystack[i]) return true;
    }
    return false;
}

function computedStyleToObject(cs) {
    if (cs == null) return null;
    var result = {};
    for (var i = 0; i < cs.length; i += 1) {
        var name = cs[i];
        var value = cs.getPropertyValue(name);
        result[name] = value;
    }
    return result;
}

function elementStyleToObject(es) {
    if (es == null) return null;
    var result = {};
    for (var prop in es) {
        if (Object.hasOwnProperty(es, prop)) {
            result[prop] = es.prop;
        }
    }
    return result;
}
