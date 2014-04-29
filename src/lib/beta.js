/*
 * A snippet that builds upon gamma.js to provide
 * the probability density function and the log
 * probability density function for the Beta distribution.
 */

var gamma = require('gamma');
var lngamma = gamma.log;

var lnBetaPDF = function(x, a, b) {
    var betaInv = lngamma(a + b) - lngamma(a) - lngamma(b);
    return (betaInv + (a - 1)*Math.log(x) + (b - 1)*Math.log(1 - x));
};

var betaPDF = function(x, a, b) {
    return Math.exp(lnBetaPDF(x, a, b));
};

module.exports.lngamma = lngamma;
module.exports.lnBetaPDF = lnBetaPDF;
module.exports.betaPDF = betaPDF;