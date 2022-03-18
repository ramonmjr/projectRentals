FROM node


WORKDIR /usr/app

COPY package.json /usr/app/

RUN npm install

COPY . .

EXPOSE  33333

CMD ["npm","run","dev"]
