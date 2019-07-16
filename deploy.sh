echo "Copying files to droplet..."

rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR root@207.154.227.133:/var/www/ttr

echo "Copying files to droplet: OK"

echo "Restarting server..."

ssh root@207.154.227.133 "pm2 kill; cd /var/www/ttr; pm2 start index.js"

echo "Restarting server: OK"

