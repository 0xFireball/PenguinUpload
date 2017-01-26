#!/usr/bin/env bash

#exit if any command fails
#set -e

artifactsFolder="./artifacts"

if [ -d $artifactsFolder ]; then  
  rm -R $artifactsFolder
fi

# Dotnet info

dotnet --version

echo "Restoring packages..."
# Restore packages
dotnet restore

echo "Building project..."

# Build
dotnet build -c Release PenguinUpload/src/PenguinUpload

echo "Running tests..."

echo "Publishing project..."

# Publish
dotnet publish -c Release PenguinUpload/src/PenguinUpload
