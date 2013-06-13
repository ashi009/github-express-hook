Github Express Hook
===================

Create a github web hook to update an express
applications automatically.

How it works
------------

It will listen to port 8001 for http requests,
and then perform `git pull`, `npm install && npm update`,
and `node app.js` to restart the server.

How to use
----------

    node hook.js path...

`path` is the directory where the app.js in.