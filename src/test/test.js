/*
 * Test accuracy of the log-gamma and Beta PDF
 * functions against the versions built into
 * scipy. Requires scipy to run.
 */

var assert = require("assert");
var fs = require("fs");

var beta = require('../lib/beta');

var readCSV = function(filePath) {

    var data = [];
    var rows = fs.readFileSync(filePath).toString().split('\n');

    for (var i=0; i < rows.length; i++) {
	var stringRow = rows[i].split(',');
	var parsedRow = [];
	for (var j=0; j < stringRow.length; j++) {
	    parsedRow.push(Number(stringRow[j]));
	};
	data.push(parsedRow);
    };

    return data;
};

suite('beta', function() {
	  test('Log-gamma functions should match Scipy values', function() {
		   var data = readCSV("test/gammaln.csv");

		   for (var i=0; i < data.length; i++) {
		       var datum = data[i];
		       var arg = datum[0];
		       var val = datum[1];
		       assert.equal(true, Math.abs(beta.lngamma(arg) - val) < 0.000001);
		   };
	       });

	  test('Beta PDF function should match Scipy values', function() {
		   var data = readCSV("test/betapdf.csv");

		   for (var i=0; i < data.length; i++) {
		       var datum = data[i];

		       var a = datum[0];
		       var b = datum[1];
		       var arg = datum[2];
		       var val = datum[3];
		       var betaDistribution = beta.beta(a, b);
		       assert.equal(true, Math.abs(betaDistribution.pdf(arg) - val) < 0.000001);
		   };
	       });
      });
