/*
 * A snippet that builds upon gamma.js to provide
 * the probability density function and the log
 * probability density function for the Beta distribution.
 */

var gamma = require('gamma');
var lngamma = gamma.log;

var BetaDistribution = function (alpha, beta) {

    if (alpha <= 1 || beta <= 1) {
	throw "Alpha and beta must be greater than 1";
    };

    this.alpha = alpha;
    this.beta = beta;

    this.betaInverse = (lngamma(this.alpha + this.beta)
			- lngamma(this.alpha)
			- lngamma(this.beta));

    this.mode = ((this.alpha - 1)
		 / (this.alpha + this.beta - 2));
};

BetaDistribution.prototype.lpdf = function(x) {
    return (this.betaInverse
	    + (this.alpha - 1) * Math.log(x)
	    + (this.beta - 1) * Math.log(1 - x));
};

BetaDistribution.prototype.pdf = function(x) {
    return Math.exp(this.lpdf(x));
};

/*
 * An extremely rudimentary rejection sampler
 * for unimodal Beta distributions
 */
BetaDistribution.prototype.rv = function () {
    while (true) {
	var x = Math.random();
	var u = Math.random();

	var pdf = this.pdf(x);

	if (u < pdf/this.mode) {
	    return x;
	};
    };
};

BetaDistribution.prototype.rvs = function(n) {
    var rvs = [];

    for (var i=0; i < n; i++) {
	rvs.push(this.rv());
    };

    return rvs;
};


var beta = function(alpha, beta) {
  return new BetaDistribution(alpha, beta);  
};

    
module.exports.lngamma = lngamma;
module.exports.beta = beta;