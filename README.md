#To run this project
1. clone repo
2. ```npm install```
3. npm run watch
4. open browser to ```localhost:4004```

If the above does NOT work you may need to globally install
watchify, browserify, and http-server

```npm install -g watchify browserify http-server```

#Code overview
##public/index.html
Contains the basic html for the page which includes some basic HTML provided by the client's application and the scripts for our plugin, the client's version of angular, and their application.

##public/plugin.js
This is the compiled source code for our plugin which bundles our application logic and version of angular.

##public/client-app.js
This is the client's app built in the "typical" way which uses the global angular variable defined by fetching the latest angular from the CDN.

##index.js
This is the entry point for our plugin's code which imports our version of angular and any modules/controllers/etc we may want to use.

##TestController.js
This is an example controller our plugin uses showing how to import external files via browserify and use them with our plugin's version of angular.
