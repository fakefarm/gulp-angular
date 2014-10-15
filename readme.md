# Building without Rails

Rails has more than we need to develop a frontend application.
In order to have the benefits of scss and coffeescript we need to go a different route. We're going to use some tools that come from the Node universe.

## Setup
### Step 1: Install Node
Make sure you have node [installed](http://nodejs.org/).


### Step 2: Get dependencies

CD to the root directory and run

    npm install

Npm install refers to the package.json file which is similar to `Gemfile` that lists the depenedencies we need.

### Step 3: Compile assets
Since we don't have the asset pipeline we're going to compile the assets using a tool called [Gulp](http://gulpjs.com/). Gulp is a build tool that does many things. I like to think of it like `rake`.

Gulp was installed from package.json. If you open `src/index.html` you will see the page works, but the assets haven't been ported over yet.

To port assets over, type;

    $ gulp

_TODO - add live reload._

### Bower
[Bower](http://bower.io/) is also like `Gemfile` for frontend assets. We're going to use it to add AngularJs

    bower install angular

## Confirm

Open index.html and if you see **1+1 = 2** then all should we working!
