let async = require("async");

async.parallel([
        function (callback) {
            console.log("one");
            callback();
        },
        function (callback) {
            console.log("two");
            callback();
        }

    ],

    function (err, result) {
        console.log("finished");
    }
);