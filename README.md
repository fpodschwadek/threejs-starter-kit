# three.js Starter Kit

This is a simple starter kit, including a basic HTML page and a modified version of the [Creating a scene](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene) example from the three.js docs. From here, you can build things with three.js and figure out how it works.

The starter kit is meant to run via [Docker](https://docs.docker.com/) on a minimal server installation. There's no bells and whistles, no backend code, and no database.

In order to start up the kit, you need to have Docker locally installed and running. Then execute the following command on the CLI from the `htdocs` folder of your local repository clone:

```
docker run -dit --name threejs_starter_kit -p 80:80 -v "$PWD":/usr/local/apache2/htdocs/ httpd:2.4-alpine
```

When executing the command for the first time, it might take little longer because the Docker image for the server installation needs to be downloaded first.

Have fun!