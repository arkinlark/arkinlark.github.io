#!/usr/bin/bash
cd /var/www/app/
git stash
git pull origin main
npm i
git stash pop
