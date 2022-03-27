FROM node:14.19.1


WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE  33333

CMD ["npm","run","dev"]
