# demo

## Launch pipeline
  1. # make Network
    docker network create -d bridge demo-net 
  2. # make Image
    docker build -t demo .
  3. # docker up
    docker-compose up