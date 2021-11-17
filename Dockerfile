FROM node:17-alpine3.12

# Creates a working directory inside the container for the application
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

# Copies over everything else to the working directory, except the paths specified in .dockerignore
COPY . .

RUN yarn build

CMD ["yarn", "start"]
