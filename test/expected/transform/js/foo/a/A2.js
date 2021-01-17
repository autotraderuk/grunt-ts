"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A1 = require("./A1");
var A2 = /** @class */ (function (_super) {
    __extends(A2, _super);
    function A2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    A2.prototype.a2 = function () { return this.a1() + "a2"; };
    return A2;
}(A1));
module.exports = A2;
//# sourceMappingURL=A2.js.map