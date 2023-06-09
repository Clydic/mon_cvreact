#! /bin/bash

image="moncv:prod"
docker build -f Dockerfile -t $image . --network=host