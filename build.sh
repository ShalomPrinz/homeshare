#!/bin/bash

cd frontend
npm run build
cd ..

rm -rf backend/dist
mv frontend/dist backend

echo "Successfully built homeshare app"
