var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Company = /** @class */ (function () {
    function Company() {
    }
    Company.prototype.setSeo = function (seoName) {
        this.ceo = seoName;
    };
    return Company;
}());
var Human = /** @class */ (function () {
    function Human(fullname, role) {
        this.fullName = fullname;
        this.role = role;
    }
    return Human;
}());
var Ceo = /** @class */ (function (_super) {
    __extends(Ceo, _super);
    function Ceo(fullName, role) {
        return _super.call(this, fullName, role) || this;
    }
    Ceo.prototype.setDeveloper = function (developerName, role) {
        this.developerName = developerName;
        this.role = role;
    };
    Ceo.prototype.setManager = function (manegerName, role) {
        this.manegerName = manegerName;
        this.role = role;
    };
    Ceo.prototype.steProject = function (projectName) {
        this.projectName = projectName;
    };
    return Ceo;
}(Human));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(fullName, role) {
        return _super.call(this, fullName, role) || this;
    }
    Manager.prototype.setDeveloper = function (fullName, role) {
        this.fullName = fullName;
        this.role = role;
    };
    return Manager;
}(Human));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(fullName, role) {
        return _super.call(this, fullName, role) || this;
    }
    Developer.prototype.writeCode = function () {
        console.log("Coding,".concat(this.role));
    };
    return Developer;
}(Human));
// const developer = new Developer("Armen","JS") 
// developer.writeCode()
