"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameClient = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ClientBootStrap = require("./socket/ClientBootStrap");

var _TestHandler = require("./handler/TestHandler");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameClient = exports.GameClient = function () {
    function GameClient(url) {
        _classCallCheck(this, GameClient);

        this.url = url;
    }

    _createClass(GameClient, [{
        key: "connect",
        value: function connect() {
            var bootstrap = new _ClientBootStrap.ClientBootStrap().handler(function (handlerChain) {
                handlerChain.addLast(new _TestHandler.TestHandler());
            });
            var channel = bootstrap.bind(this.url);
        }
    }]);

    return GameClient;
}();

new GameClient("ws://localhost:4010/ws").connect();
