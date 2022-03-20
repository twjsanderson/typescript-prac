to create tsconfig.json
run tsc --init

in tsconfig 
rootDir is where tsc should watch for all files as the 'source' of our app
outDir is where the built files in JS should end up

you can run tsc to compile everything to JS in the build file
'tsc'

or run 'tsc -w'

to watch and recompile everytime you change the code in your ts files

with nodemon and concurrently
"scripts": {
    "start:build": "tsx -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },

start runs concurrently and looks for all start scripts with anything after them (Ie. after the colons)

