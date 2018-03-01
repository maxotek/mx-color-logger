var clc = require("cli-color");

var mapping = {
    debug: clc.blue,
    log: clc.blue,
    warn: clc.yellow,
    error: clc.red
};

module.exports = {
    init: function () {
        ["log", "warn", "error"].forEach(function (method) {
            var oldMethod = console[method].bind(console);
            console[method] = function () {
                oldMethod.apply(
                    console,
                    [mapping[method](arguments[0])]
                );
            };
        });

    }
}