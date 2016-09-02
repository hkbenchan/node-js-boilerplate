#!/bin/bash
echo "Kickstart building scripts, step 1: check if git and npm exists"

if [[ -z `which git` ]]; then
  #statements
  echo "Missing git, exit"
  exit 1
elif [[ -z `which npm` ]]; then
  #statements
  echo "Missing npm, exit"
  exit 2
fi

echo "Done checking"

#### git part



#### npm part

echo "npm part"

npm init

## install dependencies
npm install --save express async request ejs body-parser morgan multer glob
