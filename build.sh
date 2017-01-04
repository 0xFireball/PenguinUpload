

#!/usr/bin/env bash

# Dotnet info

echo "dotnet CLI version:"

dotnet --version

echo "Restoring packages..."

# Restore packages
dotnet restore
# npm install --prefix ./PenguinUpload/src/PenguinUpload ./PenguinUpload/src/PenguinUpload

echo "Publishing project..."

# Publish
dotnet publish -c Release PenguinUpload/src/PenguinUpload