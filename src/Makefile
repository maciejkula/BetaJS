test:
	python ./test/generate_test_data.py
	@./node_modules/.bin/mocha -u tdd

build:

	 @./node_modules/browserify/bin/cmd.js lib/beta.js -o dist/beta.js                                                                                                         
.PHONY: test build
