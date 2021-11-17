# Anton Ekström's personal website
Another day, another personal website. This one though, looks quite nice!

Below are instructions on how to build and run the website. It is very simple. Mostly, it is for my own sake, because I *will* forget the docker commands.

### Install dependencies
```
yarn install
```

### Run development server
```
yarn dev
```

### Build with docker
```
docker build -t <tag> .
```

### Run docker image
```
docker run --name <name> -p <port>:3000 -d <tag>
```
