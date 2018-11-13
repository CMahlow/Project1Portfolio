# Quiz - Angular Module

Starter code for [Udacity](https://www.udacity.com)'s [Front End Frameworks course](https://www.udacity.com/course/front-end-frameworks--ud894).

## Required Software

* [Git](https://git-scm.com/)
* [Node/NPM](https://nodejs.org/en/)
* [Bower](http://bower.io/)
* [Grunt](http://gruntjs.com/)

## Getting Set Up

* clone this repo
* `cd` into the newly cloned project
* install NPM dependencies via `npm install`
* install Bower dependencies via `bower install`

## View the app

* on the terminal, run `grunt serve`

## Steps for the Quiz
1. Create legoBricks.js file under Script folder
2. Add code in the index <script scr="scripts/legoBrickes.js"></script>
3. create empty array angular.module(legoBricks',[]); in legoBrickes.js file
4. Add as dependency in app.js file without generator
 * Angular
 .module('newModuleQuizApp',[legoBricks]);
