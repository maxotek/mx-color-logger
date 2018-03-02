var clc = require("cli-color");

var mapping = {
    debug: clc.blue,
    log: clc.white,
    warn: clc.yellow,
    error: clc.red
};

module.exports = {
    init: function () {
        ["debug", "log", "warn", "error"].forEach(function (method) {
            var existingMethod = console[method];
            var oldMethod = existingMethod ? existingMethod.bind(console) : null;

            console[method] = function () {
                var colorer = mapping[method];
                var msg = arguments[0];

                if (oldMethod) {
                    oldMethod.apply(
                        console,
                        [colorer(msg)]
                    );
                }
                else {
                    console.log(colorer(msg));
                }
            };
        });
    }
}