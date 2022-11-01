FROM node:14.2.0

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
COPY tsconfig.json /app/tsconfig.json
COPY src /app/src
COPY public /app/public
COPY express /app/express


RUN npm --maxsockets=25 ci
RUN npm run build

EXPOSE 8080

CMD node build/express/main.js


