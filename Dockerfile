FROM mhart/alpine-node:10

WORKDIR /src

COPY package*.json index.js ./
RUN npm i

EXPOSE 3000

CMD ["npm", "start"]