
echo "PenguinUpload redeploy script"

echo "Killing existing PenguinUpload servers"
pkill -fe PenguinUpload.dll

echo "Building project..."
bash script/build.sh

pushd .
cd PenguinUpload/src/PenguinUpload/bin/Release/netcoreapp1.1/publish

echo "Starting server with nohup"
nohup dotnet PenguinUpload.dll &

echo "Returning"
popd