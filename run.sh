#! /bin/bash

docker run -itd --name moncv-contener \
-p 3000:3000 \
-p 8080:8080 \
moncv:prod