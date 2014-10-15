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
Since we don't have the asset pipeline we're going to compile the assets using a tool called Gulp. Gulp is a build tool that does many things. I like to think of it like `rake`.

Gulp was installed from package.json so all you need to do is type

    $ gulp

### Bower
Bower is also like `Gemfile` but focusing on assets.

    bower install angular

## Confirm

Open index.html and if you see **1+1 = 2** then all should we working!
