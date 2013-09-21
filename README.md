angular server
==============

Angular server is a basic scaffolding for an angularjs application with a restful server.

When you start angularserver it starts two web servers.

* The first, on port 3000 is an express service that returns index.html for all get requests. This is required for client-side routing.

* The second, on port 3001, is an instance of [resourceserver](https://github.com/liammclennan/resourceserver). By default it is an in-memory resource oriented json server. 

Angularserver also include [resourceclient](https://github.com/liammclennan/resourceclient) which is a resource-oriented json client designed to work with resourceserver. 

The initial index.html file shows how angular works with the web server, resource server and resourceclient.

Usage
-----

    node index.js

Then open http://localhost:3000 in your browser.

