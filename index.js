var through = require('through'),
    Haml = require('haml');

module.exports = function(file) {
    if (!/\.haml|\.hamlc/.test(file)) return through();

    var source = "";
    return through(function(chunk) {
        source += chunk.toString();
    }, function() {
        compiled = "module.exports = " + Haml(source).toString();
        this.queue(compiled);
        this.queue(null);
    });
};
