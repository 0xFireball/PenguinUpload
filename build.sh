

#!/usr/bin/env bash

# Dotnet info

echo "dotnet CLI version:"

dotnet --version

echo "Restoring packages..."

# Restore packages
dotnet restore

echo "Publishing project..."

# Publish
dotnet publish -c Release PenguinUpload/src/PenguinUpload -o ./build/