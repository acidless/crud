FROM node:latest

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

COPY . /usr/src/app/

EXPOSE ${PORT}

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]
