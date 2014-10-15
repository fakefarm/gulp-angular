# Building without Rails

## Installing Node
In this context, we're using node to provide assets for us.

Once you have installed node, you will be able to run 

    npm install

Npm install uses package.json file which is similar to `Gemfile` to install the depenedencies we need.

## Gulp

Gulp is a build tool that does many things. I like to think of it like `rake`. The parts we're interested in is using coffeescript and scss without the asset pipeline. Gulp was installed from package.json so all you need to do is 

** Start gulp **

    $ gulp

## Bower
Bower is also like `Gemfile` but focusing on assets.

    bower install angular
