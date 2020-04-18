#!/usr/bin/env bash

gulp build
npm pack 
scp sabrinaunddavidheiraten.ch-1.0.0.tgz root@cloudstudios.ch:/web/sabrinaunddavidheiraten.ch/sabrinaunddavidheiraten.ch-1.0.0.tgz
ssh root@cloudstudios.ch "cd /web/sabrinaunddavidheiraten.ch; npm install --global-style ./sabrinaunddavidheiraten.ch-1.0.0.tgz; pm2 restart sabrinaunddavidheirtan.ch"
