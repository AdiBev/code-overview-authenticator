FROM node:latest as base
RUN apt-get update && apt-get install -y curl
RUN curl --silent --location https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y \
  nodejs
WORKDIR /code-overview-authenticator
COPY package*.json .
RUN npm install
COPY . .

# product build
FROM base as production
ENV NODE_PATH=./build
RUN npm run build
