#!/bin/bash

# A small script to "compile" all the work for the website
cd ${0%/*}/pages # Go to this directory
sass bulma/bulma.sass --style compressed > css/bulma.min.css # Sass -> CSS
cd ..
/usr/bin/ruby app.rb # Serve it