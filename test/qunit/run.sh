#!/bin/bash
echo Run unit tests in Chrome \(sh test/qunit/run.sh\)
echo \(You may need to run \"npm install gulp-qunit\" before testing.\)
echo
sh test/qunit/run-helper.sh &
node test/qunit/server.js
