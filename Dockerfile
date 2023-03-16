FROM node:16

WORKDIR /phlebitis-app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["yarn", "product"]
