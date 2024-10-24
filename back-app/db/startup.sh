#!/bin/sh

# Set the correct database path
DB_PATH="/usr/src/app/network.db"

# Always initialize the database
echo "Initializing the database..."

# Run initialization and seeding scripts
node initDb.js && node seed.js  # Modify these commands if needed

# Keep the container running
tail -f /dev/null