# mmorpg-webclient
mmorpg-webclient


# 生产js protobuf协议类
node_modules/protobufjs/bin/pbjs -t proto2  c://workspace/mmorpg-webClient/mmorpg-webclient/proto/*.proto  > c://workspace/mmorpg-webClient/mmorpg-webclient/proto/dist/proto.proto 

protoc --js_out=import_style=commonjs,binary:./src ./proto/dist/proto.proto
