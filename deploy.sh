echo "Copying files to droplet..."

rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR root@$SERVER_URL:/var/www

echo "Copying files to droplet: OK"

echo "Restarting server..."

ssh root@$SERVER_URL "pm2 kill; cd /var/www/ttr; pm2 start index.js"

echo "Restarting server: OK"

