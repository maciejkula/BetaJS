# Beta.js

Provides a very simple implementation of the probability density function for the Beta distribution in JavaScript by building on the `gamma` package (https://github.com/substack/gamma.js).

Numerical accuracy is very roughly tested against `scipy` implementations.

# Installation
Clone the repo and run
```shell
cd beta.js/src && npm install
```
To run tests, execute
```shell
cd beta.js/src && make test
```
(you must have Python and `scipy` installed).
