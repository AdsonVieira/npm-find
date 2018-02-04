#! /usr/bin/env node
'use strict';

var program = require( 'commander' );
var pkg = require( './package.json' )
var find = require( './lib/find-pkg' );

program.version(pkg.version, '-v, --version')

program.arguments( '<pkg>' ).action( find );

program.parse( process.argv )


